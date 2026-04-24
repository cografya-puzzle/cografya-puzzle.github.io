// ── Turkish-aware uppercase ───────────────────────────────────────────────────
function toUpperTR(str) {
  return str.replace(/i/g, 'İ').replace(/ı/g, 'I').toUpperCase();
}

// Karşılaştırma için normalize: tüm Türkçe özel harfleri ASCII eşdeğerine indirir
function normCmp(str) {
  return toUpperTR(str)
    .replace(/İ/g, 'I')
    .replace(/[Şş]/g, 'S')
    .replace(/[Ğğ]/g, 'G')
    .replace(/[Çç]/g, 'C')
    .replace(/[Öö]/g, 'O')
    .replace(/[Üü]/g, 'U')
    .replace(/[Ââ]/g, 'A')
    .replace(/[Îî]/g, 'I')
    .replace(/[Ûû]/g, 'U');
}

// ── Scoring constants ────────────────────────────────────────────────────────
const PTS_CORRECT = 10;
const PTS_HINTED  = 5;
const PTS_REVEAL  = 0;
const HINT_TOKENS_PER_PUZZLE = 3;
const STORAGE_KEY = 'cogbulmaca_v1';

// ── State ────────────────────────────────────────────────────────────────────
const generatedPuzzles = [];
let currentIdx   = 0;
let activeCell   = null;
let activeDir    = 'across';
let feedbackOn              = false;
let hintTokens              = HINT_TOKENS_PER_PUZZLE;
let vazgecDone              = false;
let levelCompleteTriggered  = false;

const userLetters       = {};
const hintedCells       = new Set();
const autoRevealedCells = new Set();

const CELL_SIZE = 40;

// ── LocalStorage helpers ─────────────────────────────────────────────────────
function loadStorage() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress(idx, stars, score) {
  const data = loadStorage();
  if (!data.progress) data.progress = {};
  const prev = data.progress[idx];
  // Only overwrite if new result is better (more stars, or same stars but higher score)
  if (!prev || stars > prev.stars || (stars === prev.stars && score > prev.score)) {
    data.progress[idx] = { stars, score };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true; // new record
  }
  return false;
}

function getProgress(idx) {
  const data = loadStorage();
  return (data.progress || {})[idx] || null;
}

function markFirstVisitDone() {
  const data = loadStorage();
  data.firstVisitDone = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function isFirstVisit() {
  return !loadStorage().firstVisitDone;
}

// ── Bootstrap ────────────────────────────────────────────────────────────────
function getOrGenerate(idx) {
  if (!generatedPuzzles[idx]) {
    generatedPuzzles[idx] = new CrosswordGenerator(PUZZLES[idx], idx + 1).generate();
  }
  return generatedPuzzles[idx];
}

document.addEventListener('DOMContentLoaded', () => {

  // Buttons
  // Skor alanına tap = manuel tamamlama kontrolü (yedek)
  document.querySelector('.header-score').addEventListener('click', () => {
    checkAutoComplete(generatedPuzzles[currentIdx]);
  });

  document.getElementById('mapBtn')      .addEventListener('click', openMap);
  document.getElementById('mapCloseBtn') .addEventListener('click', closeMap);
  document.getElementById('infoBtn')     .addEventListener('click', openInfo);
  document.getElementById('infoCloseBtn').addEventListener('click', closeInfo);
  document.getElementById('hintBtn')     .addEventListener('click', hintActiveCell);
  document.getElementById('clearBtn')    .addEventListener('click', clearPuzzle);
  document.getElementById('vazgecBtn')   .addEventListener('click', onVazgecClick);
  document.getElementById('vazgecConfirmBtn').addEventListener('click', confirmVazgec);
  document.getElementById('vazgecCancelBtn') .addEventListener('click', () => closeModal('vazgecModal'));
  document.getElementById('nextLevelBtn').addEventListener('click', () => {
    closeModal('levelModal');
    showPuzzle(Math.min(PUZZLES.length - 1, currentIdx + 1));
  });
  document.getElementById('replayBtn').addEventListener('click', () => {
    closeModal('levelModal');
    showPuzzle(currentIdx);
  });

  // Mobile tabs
  document.querySelectorAll('.clue-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.dir));
  });

  // Hidden input
  const hi = document.getElementById('hiddenInput');
  hi.addEventListener('keydown', onKeyDown);
  hi.addEventListener('input',   onInput);

  // Scroll yönetimi: sadece scroll edilebilir alanlara izin ver
  document.addEventListener('touchmove', e => {
    const scrollable = e.target.closest('.clue-col, .map-grid, .modal-card-info, .modal-card');
    if (!scrollable) e.preventDefault();
  }, { passive: false });

  // Android: klavye açılınca browser input'a scroll yapıyor, sıfırla
  const lockScroll = () => {
    if (window.scrollY !== 0) window.scrollTo(0, 0);
    if (document.documentElement.scrollTop !== 0) document.documentElement.scrollTop = 0;
    if (document.body.scrollTop !== 0) document.body.scrollTop = 0;
  };
  window.addEventListener('scroll', lockScroll, { passive: true });
  document.addEventListener('scroll', lockScroll, { passive: true });

  // Re-render on resize
  // Visual viewport height CSS değişkeni — Android klavye için
  function updateAppHeight() {
    const vp  = window.visualViewport;
    const vvh = vp?.height ?? window.innerHeight;
    const offsetTop = vp?.offsetTop ?? 0;
    document.documentElement.style.setProperty('--app-height', vvh + 'px');

    const keyboardOpen = window.innerWidth <= 767 && (window.innerHeight - vvh) > 120;
    document.querySelector('.bottom-sheet')?.classList.toggle('keyboard-hidden', keyboardOpen);
    document.getElementById('clueBar')?.classList.toggle('keyboard-hidden', keyboardOpen);

    // Overlay'i göster/gizle ve konumlandır
    const overlay = document.getElementById('clueOverlay');
    if (keyboardOpen && activeCell) {
      overlay.classList.remove('hidden');
      // Görünen alanı tamamen kapla
      overlay.style.top    = offsetTop + 'px';
      overlay.style.height = vvh + 'px';
      syncOverlay();
    } else {
      overlay.classList.add('hidden');
    }
  }

  let resizeTimer;
  const rerender = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateAppHeight();
      const cw = getOrGenerate(currentIdx);
      if (!cw) return;
      renderGrid(cw);
      for (const k of Object.keys(userLetters)) {
        const [r, c] = k.split(',').map(Number);
        updateCellDisplay(r, c);
      }
      if (activeCell) highlightWord(cw, activeCell.r, activeCell.c, activeDir);
    }, 80);
  };
  window.addEventListener('resize', rerender);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', rerender);
  updateAppHeight();

  showPuzzle(0);

  // Show info on first visit
  if (isFirstVisit()) openInfo();
});

// ── Puzzle render ────────────────────────────────────────────────────────────
function showPuzzle(idx) {
  clearTimeout(_completionBackupTimer);
  currentIdx = idx;
  feedbackOn             = false;
  activeCell             = null;
  hintTokens             = HINT_TOKENS_PER_PUZZLE;
  vazgecDone             = false;
  levelCompleteTriggered = false;

  Object.keys(userLetters).forEach(k => delete userLetters[k]);
  hintedCells.clear();
  autoRevealedCells.clear();

  const cw  = getOrGenerate(idx);
  const puz = PUZZLES[idx];

  document.getElementById('puzzleTitle')  .textContent = puz.title;
  document.getElementById('puzzleCounter').textContent = `${idx + 1} / ${PUZZLES.length}`;
  document.getElementById('resultMsg').className       = 'result-msg';
  document.getElementById('resultMsg').textContent     = '';
  document.getElementById('liveScore').textContent     = '0';
  document.getElementById('clueBarDir')  .textContent = '→';
  document.getElementById('clueBarNum')  .textContent = '';
  document.getElementById('clueBarText') .textContent = 'Bir hücreye dokunun';
  document.getElementById('clueBarSlots').innerHTML   = '';

  updateHintUI();
  // Vazgeç butonunu sıfırla
  document.getElementById('vazgecBtn').textContent = '✕ Pes Et';
  renderGrid(cw);
  renderClues(cw);
}

function updateHintUI() {
  document.getElementById('hintTokenCount').textContent = hintTokens;
  document.getElementById('hintBtnCount')  .textContent = hintTokens;
  document.getElementById('hintTokenDisplay').style.opacity = hintTokens > 0 ? '1' : '0.4';
  document.getElementById('hintBtn').disabled = hintTokens <= 0;
}

function calcCellPx(cols, rows) {
  const GAP = 2, BORDER = 6;

  if (window.innerWidth <= 767) {
    const hdr    = document.querySelector('header')?.offsetHeight || 52;
    const cbH    = document.getElementById('clueBar')?.offsetHeight || 56;
    const vvh    = window.visualViewport?.height ?? window.innerHeight;
    const keyboardOpen = (window.innerHeight - vvh) > 120;
    // Klavye açıkken bottom sheet gizli — o alanı grid'e ver
    const sheetH = keyboardOpen ? 0 : Math.min(360, Math.max(220, Math.round(vvh * 0.42)));
    const pad    = keyboardOpen ? 8 : 14;
    const availH = vvh - hdr - cbH - sheetH - pad;
    const availW = window.innerWidth - 16;
    const byW = Math.floor((availW - BORDER - (cols - 1) * GAP) / cols);
    const byH = Math.floor((availH - BORDER - (rows - 1) * GAP) / rows);
    return Math.max(14, Math.min(CELL_SIZE, byW, byH));
  }

  const hdr       = document.querySelector('header')?.offsetHeight || 52;
  const cbH       = document.getElementById('clueBar')?.offsetHeight || 52;
  const gaEl      = document.getElementById('gridArea');
  const gridAreaW = gaEl?.offsetWidth || Math.min(window.innerWidth * 0.54, 620);
  const availH    = window.innerHeight - hdr - cbH - 48;
  const maxW      = gridAreaW - 56;

  const byW = Math.floor((maxW   - BORDER - (cols - 1) * GAP) / cols);
  const byH = Math.floor((availH - BORDER - (rows - 1) * GAP) / rows);
  return Math.max(24, Math.min(CELL_SIZE, byW, byH));
}

function renderGrid(cw) {
  const cols   = cw.maxC - cw.minC + 1;
  const rows   = cw.maxR - cw.minR + 1;
  const cellPx = calcCellPx(cols, rows);

  const grid = document.getElementById('crosswordGrid');
  grid.innerHTML = '';
  const gw = 6 + cols * cellPx + (cols - 1) * 2;
  const gh = 6 + rows * cellPx + (rows - 1) * 2;
  grid.style.width  = gw + 'px';
  grid.style.height = gh + 'px';
  grid.style.gridTemplateColumns = `repeat(${cols}, ${cellPx}px)`;
  grid.style.gridTemplateRows    = `repeat(${rows}, ${cellPx}px)`;
  grid.style.setProperty('--cell-size', cellPx + 'px');

  for (let r = cw.minR; r <= cw.maxR; r++) {
    for (let c = cw.minC; c <= cw.maxC; c++) {
      const k    = `${r},${c}`;
      const cell = document.createElement('div');
      cell.className  = 'cell';
      cell.dataset.r  = r;
      cell.dataset.c  = c;

      if (cw.grid[k] !== undefined) {
        cell.classList.add('white', 'is-empty');
        if (cw.numberedCells[k]) {
          const num = document.createElement('span');
          num.className   = 'cell-num';
          num.textContent = cw.numberedCells[k];
          cell.appendChild(num);
        }
        const letterEl = document.createElement('span'); letterEl.className = 'cell-letter';
        const cursorEl = document.createElement('span'); cursorEl.className = 'cell-cursor';
        cell.appendChild(letterEl);
        cell.appendChild(cursorEl);
        cell.addEventListener('click', onCellClick);
      }
      grid.appendChild(cell);
    }
  }
}

function renderClues(cw) {
  renderClueList('acrossClues', cw.acrossClues, 'across');
  renderClueList('downClues',   cw.downClues,   'down');
}

function renderClueList(containerId, clues, dir) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  clues.forEach(cl => {
    const item = document.createElement('div');
    item.className   = 'clue-item';
    item.dataset.num = cl.num;
    item.dataset.dir = dir;
    const numSpan = document.createElement('span');
    numSpan.className   = 'clue-num';
    numSpan.textContent = cl.num;
    const textSpan = document.createElement('span');
    textSpan.textContent = cl.clue;
    item.appendChild(numSpan);
    item.appendChild(textSpan);
    item.addEventListener('click', () => focusCell(cl.r, cl.c, dir));
    container.appendChild(item);
  });
}

// ── Input ────────────────────────────────────────────────────────────────────
function onCellClick(e) {
  const cell = e.currentTarget;
  const r = +cell.dataset.r, c = +cell.dataset.c;
  const cw = generatedPuzzles[currentIdx];

  const hasAcross = cellBelongsToDir(cw, r, c, 'across');
  const hasDown   = cellBelongsToDir(cw, r, c, 'down');

  if (hasAcross && hasDown) {
    // Aynı hücreye tekrar basılıyorsa picker zaten açıktır, kapat ve diğer yöne geç
    if (activeCell?.r === r && activeCell?.c === c && !document.getElementById('dirPicker').classList.contains('hidden')) {
      hideDirPicker();
      const nd = activeDir === 'across' ? 'down' : 'across';
      focusCell(r, c, nd);
    } else {
      // Kesişim hücresi — önce picker göster
      activeCell = { r, c };
      highlightWord(cw, r, c, activeDir);
      showDirPicker(r, c, cw);
    }
  } else {
    hideDirPicker();
    focusCell(r, c, hasAcross ? 'across' : 'down');
  }
}

function showDirPicker(r, c, cw) {
  const acrossStart = getWordStart(cw, r, c, 'across');
  const downStart   = getWordStart(cw, r, c, 'down');
  const acrossNum   = cw.numberedCells[`${acrossStart.r},${acrossStart.c}`];
  const downNum     = cw.numberedCells[`${downStart.r},${downStart.c}`];
  const acrossCl    = cw.acrossClues.find(x => x.num === acrossNum);
  const downCl      = cw.downClues.find(x => x.num === downNum);

  const btnA = document.getElementById('dirPickerAcross');
  const btnD = document.getElementById('dirPickerDown');
  btnA.querySelector('.dir-pick-num') .textContent = acrossNum;
  btnA.querySelector('.dir-pick-text').textContent = acrossCl?.clue || '';
  btnD.querySelector('.dir-pick-num') .textContent = downNum;
  btnD.querySelector('.dir-pick-text').textContent = downCl?.clue || '';

  // Mevcut yön vurgula
  btnA.style.opacity = activeDir === 'across' ? '1' : '0.55';
  btnD.style.opacity = activeDir === 'down'   ? '1' : '0.55';

  btnA.onclick = () => { hideDirPicker(); focusCell(r, c, 'across'); };
  btnD.onclick = () => { hideDirPicker(); focusCell(r, c, 'down'); };

  // Picker göster, normal modu gizle
  document.getElementById('clueBarNormal').style.display = 'none';
  document.getElementById('clueBarSlots') .style.display = 'none';
  document.getElementById('dirPicker')    .classList.remove('hidden');
}

function hideDirPicker() {
  document.getElementById('dirPicker')    .classList.add('hidden');
  document.getElementById('clueBarNormal').style.display = '';
  document.getElementById('clueBarSlots') .style.display = '';
}

function handleBackspace() {
  if (!activeCell) return;
  clearFeedback();
  const cw = generatedPuzzles[currentIdx];
  const { r, c } = activeCell;
  const k = `${r},${c}`;
  if (userLetters[k]) {
    delete userLetters[k];
    hintedCells.delete(k);
    updateCellDisplay(r, c);
    updateClueBar(cw, r, c, activeDir);
  } else {
    const dr = activeDir === 'across' ? 0 : -1;
    const dc = activeDir === 'across' ? -1 : 0;
    moveActive(cw, r, c, dr, dc);
    if (activeCell) {
      const pk = `${activeCell.r},${activeCell.c}`;
      delete userLetters[pk];
      hintedCells.delete(pk);
      updateCellDisplay(activeCell.r, activeCell.c);
      updateClueBar(cw, activeCell.r, activeCell.c, activeDir);
    }
  }
  updateLiveScore();
}

function onKeyDown(e) {
  if (!activeCell) return;
  const { r, c } = activeCell;
  const cw = generatedPuzzles[currentIdx];

  if (e.key === 'ArrowRight') { e.preventDefault(); activeDir = 'across'; moveActive(cw, r, c,  0, +1); return; }
  if (e.key === 'ArrowLeft')  { e.preventDefault(); activeDir = 'across'; moveActive(cw, r, c,  0, -1); return; }
  if (e.key === 'ArrowDown')  { e.preventDefault(); activeDir = 'down';   moveActive(cw, r, c, +1,  0); return; }
  if (e.key === 'ArrowUp')    { e.preventDefault(); activeDir = 'down';   moveActive(cw, r, c, -1,  0); return; }
  if (e.key === 'Tab')        { e.preventDefault(); jumpToNextWord(cw, e.shiftKey); return; }

  // Boşluk tuşu: Bir sonraki hücreye geç
  if (e.key === ' ' || e.code === 'Space') {
    e.preventDefault();
    const dr = activeDir === 'down'   ? +1 : 0;
    const dc = activeDir === 'across' ? +1 : 0;
    moveActive(cw, r, c, dr, dc);
    return;
  }

  if (e.key === 'Backspace') {
    e.preventDefault();
    handleBackspace();
    return;
  }
}


function onInput(e) {
  if (!activeCell) return;
  clearFeedback();
  const hi = document.getElementById('hiddenInput');

  // Mobilde backspace keydown yerine input event ile gelir
  if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
    hi.value = '';
    handleBackspace();
    return;
  }

  const raw = toUpperTR(hi.value).replace(/[^A-ZÇĞİÖŞÜ]/g, '');
  hi.value  = '';
  if (!raw) return;

  const letter = raw[raw.length - 1];
  const k      = `${activeCell.r},${activeCell.c}`;
  userLetters[k] = letter;
  hintedCells.delete(k);
  updateCellDisplay(activeCell.r, activeCell.c);
  updateLiveScore();

  const cw = generatedPuzzles[currentIdx];
  updateClueBar(cw, activeCell.r, activeCell.c, activeDir);

  // Auto-check active word if it's now complete
  checkWordIfComplete(cw, activeCell.r, activeCell.c, activeDir);

  const dr = activeDir === 'down'   ? +1 : 0;
  const dc = activeDir === 'across' ? +1 : 0;
  moveActive(cw, activeCell.r, activeCell.c, dr, dc);

  checkAutoComplete(cw);
  // Yedek: animasyon + klavye kapanma gecikmesinden sonra tekrar kontrol
  scheduleCompletionCheck(cw);
}

// ── Auto word-check ──────────────────────────────────────────────────────────
function checkWordIfComplete(cw, r, c, dir) {
  const start = getWordStart(cw, r, c, dir);
  if (!start) return;
  const len = getWordLen(cw, start.r, start.c, dir);

  const cells = [];
  for (let i = 0; i < len; i++) {
    const cr = dir === 'across' ? start.r     : start.r + i;
    const cc = dir === 'across' ? start.c + i : start.c;
    const k  = `${cr},${cc}`;
    const entered = toUpperTR(userLetters[k] || '');
    if (!entered) return;
    cells.push({ cr, cc, correct: normCmp(entered) === normCmp(cw.grid[k]) });
  }

  const allCorrect = cells.every(c => c.correct);
  const overlaySlots = document.getElementById('overlaySlots')?.querySelectorAll('.clue-slot');
  const overlayVisible = !document.getElementById('clueOverlay').classList.contains('hidden');

  cells.forEach(({ cr, cc, correct }, i) => {
    setTimeout(() => {
      // Grid hücresi animasyonu
      const el = getCell(cr, cc);
      if (el) {
        if (allCorrect) {
          el.classList.add('flash-correct');
          setTimeout(() => el.classList.remove('flash-correct'), 700);
        } else if (!correct) {
          el.classList.add('shake');
          setTimeout(() => el.classList.remove('shake'), 400);
        }
      }
      // Overlay slot animasyonu
      if (overlayVisible && overlaySlots?.[i]) {
        if (allCorrect) {
          overlaySlots[i].classList.add('slot-flash-correct');
          setTimeout(() => overlaySlots[i].classList.remove('slot-flash-correct'), 700);
        } else if (!correct) {
          overlaySlots[i].classList.add('slot-shake');
          setTimeout(() => overlaySlots[i].classList.remove('slot-shake'), 400);
        }
      }
    }, i * 80);
  });

  // Doğruysa animasyon bitince akışa göre davran
  if (allCorrect) {
    const closingDelay = cells.length * 80 + 700;
    setTimeout(() => {
      // Tüm bulmaca bitmiş mi kontrol et
      const allKeys = Object.keys(cw.grid);
      const puzzleFinished = allKeys.every(k => normCmp(userLetters[k] || '') === normCmp(cw.grid[k]));
      
      if (puzzleFinished) {
        document.getElementById('hiddenInput').blur();
        setTimeout(() => checkAutoComplete(generatedPuzzles[currentIdx]), 300);
      } else {
        // Bitmediyse bir sonraki kelimeye atla (klavye açık kalsın)
        jumpToNextWord(cw, false);
      }
    }, closingDelay);
  }
}

// ── Cell display ─────────────────────────────────────────────────────────────
function updateCellDisplay(r, c) {
  const cell = getCell(r, c);
  if (!cell) return;
  const k   = `${r},${c}`;
  const val = userLetters[k] || '';
  cell.querySelector('.cell-letter').textContent = val;
  cell.classList.toggle('is-empty', !val);
  cell.classList.toggle('hinted',   !!val && hintedCells.has(k));
}

function updateLiveScore() {
  const cw    = generatedPuzzles[currentIdx];
  const score = calcScore(cw);
  document.getElementById('liveScore').textContent = score;
}

function calcScore(cw) {
  let score = 0;
  for (const [k, expected] of Object.entries(cw.grid)) {
    const entered = toUpperTR(userLetters[k] || '');
    if (normCmp(entered) !== normCmp(expected)) continue;
    if (autoRevealedCells.has(k)) score += PTS_REVEAL;
    else if (hintedCells.has(k))  score += PTS_HINTED;
    else                           score += PTS_CORRECT;
  }
  return score;
}

function checkAutoComplete(cw) {
  if (levelCompleteTriggered) return;
  const allKeys = Object.keys(cw.grid);

  // Tüm hücreler doğru mu?
  const allCorrect = allKeys.every(k => normCmp(userLetters[k] || '') === normCmp(cw.grid[k]));
  if (allCorrect) {
    levelCompleteTriggered = true;
    setTimeout(() => showLevelComplete(cw), 400);
    return;
  }

  // Tüm hücreler dolu ama bazıları yanlış — feedback göster
  const allFilled = allKeys.every(k => !!userLetters[k]);
  if (allFilled) {
    feedbackOn = true;
    document.querySelectorAll('.cell.white').forEach(cell => {
      const r = +cell.dataset.r, c = +cell.dataset.c, k = `${r},${c}`;
      const correct = normCmp(userLetters[k] || '') === normCmp(cw.grid[k]);
      cell.classList.toggle('correct', correct);
      cell.classList.toggle('wrong',   !correct);
    });
    const msg = document.getElementById('resultMsg');
    const wrongCount = allKeys.filter(k => normCmp(userLetters[k] || '') !== normCmp(cw.grid[k])).length;
    msg.textContent = `${wrongCount} hücre yanlış — kırmızıları düzelt!`;
    msg.className   = 'result-msg show partial';
    setTimeout(() => { if (feedbackOn) msg.className = 'result-msg'; }, 3000);
  }
}

// Klavye kapandıktan / animasyonlar bittikten sonra gecikmeli kontrol
let _completionBackupTimer = null;
function scheduleCompletionCheck(cw) {
  if (levelCompleteTriggered) return;
  clearTimeout(_completionBackupTimer);
  _completionBackupTimer = setTimeout(() => checkAutoComplete(cw), 900);
}

// ── Navigation ───────────────────────────────────────────────────────────────
function moveActive(cw, r, c, dr, dc) {
  let nr = r + dr, nc = c + dc;
  while (nr >= cw.minR && nr <= cw.maxR && nc >= cw.minC && nc <= cw.maxC) {
    if (cw.grid[`${nr},${nc}`] !== undefined) { focusCell(nr, nc, activeDir); return; }
    nr += dr; nc += dc;
  }
}

function focusCell(r, c, dir) {
  const cw = generatedPuzzles[currentIdx];
  if (!cellBelongsToDir(cw, r, c, dir)) dir = dir === 'across' ? 'down' : 'across';
  activeCell = { r, c }; activeDir = dir;
  hideDirPicker();
  highlightWord(cw, r, c, dir);
  const hi = document.getElementById('hiddenInput');
  hi.value = ''; hi.focus();
  updateClueBar(cw, r, c, dir);
  highlightClue(cw, r, c, dir);
}

function highlightWord(cw, r, c, dir) {
  document.querySelectorAll('.cell.hl-word, .cell.hl-active').forEach(el =>
    el.classList.remove('hl-word', 'hl-active')
  );
  const start = getWordStart(cw, r, c, dir);
  if (!start) return;
  const len = getWordLen(cw, start.r, start.c, dir);
  for (let i = 0; i < len; i++) {
    const cr = dir === 'across' ? start.r     : start.r + i;
    const cc = dir === 'across' ? start.c + i : start.c;
    getCell(cr, cc)?.classList.add('hl-word');
  }
  const active = getCell(r, c);
  if (active) { active.classList.remove('hl-word'); active.classList.add('hl-active'); }
}

function syncOverlay() {
  document.getElementById('overlayDir') .textContent = document.getElementById('clueBarDir') .textContent;
  document.getElementById('overlayNum') .textContent = document.getElementById('clueBarNum') .textContent;
  document.getElementById('overlayText').textContent = document.getElementById('clueBarText').textContent;
  document.getElementById('overlaySlots').innerHTML  = document.getElementById('clueBarSlots').innerHTML;
  // Overlay slotlarına da click listener ekle
  const cw  = generatedPuzzles[currentIdx];
  const dir = document.getElementById('overlayDir').textContent === '→' ? 'across' : 'down';
  document.getElementById('overlaySlots').querySelectorAll('.clue-slot').forEach((slot, i) => {
    const num   = document.getElementById('overlayNum').textContent;
    const clues = dir === 'across' ? cw.acrossClues : cw.downClues;
    const cl    = clues.find(x => String(x.num) === String(num));
    if (!cl) return;
    const cr = dir === 'across' ? cl.r     : cl.r + i;
    const cc = dir === 'across' ? cl.c + i : cl.c;
    slot.addEventListener('click', () => focusCell(cr, cc, dir));
  });
}

function updateClueBar(cw, r, c, dir) {
  const start = getWordStart(cw, r, c, dir); if (!start) return;
  const num   = cw.numberedCells[`${start.r},${start.c}`]; if (!num) return;
  const cl    = (dir === 'across' ? cw.acrossClues : cw.downClues).find(x => x.num === num);
  if (!cl) return;

  document.getElementById('clueBarDir') .textContent = dir === 'across' ? '→' : '↓';
  document.getElementById('clueBarNum') .textContent = num;
  document.getElementById('clueBarText').textContent = cl.clue;

  const len     = getWordLen(cw, start.r, start.c, dir);
  const slotsEl = document.getElementById('clueBarSlots');
  slotsEl.innerHTML = '';

  for (let i = 0; i < len; i++) {
    const cr     = dir === 'across' ? start.r     : start.r + i;
    const cc     = dir === 'across' ? start.c + i : start.c;
    const k      = `${cr},${cc}`;
    const letter = userLetters[k] || '';
    const isActive  = activeCell && activeCell.r === cr && activeCell.c === cc;
    const isHinted  = hintedCells.has(k);

    const slot = document.createElement('div');
    slot.className = 'clue-slot';
    if (!letter)   slot.classList.add('slot-empty');
    if (isActive)  slot.classList.add('slot-active');
    if (isHinted && !isActive) slot.classList.add('slot-hinted');
    slot.textContent = letter;
    slot.addEventListener('click', () => focusCell(cr, cc, dir));
    slotsEl.appendChild(slot);
  }

  // Klavye açıksa overlay'i de güncelle
  const overlay = document.getElementById('clueOverlay');
  if (!overlay.classList.contains('hidden')) syncOverlay();
}

function highlightClue(cw, r, c, dir) {
  document.querySelectorAll('.clue-item.active').forEach(el => el.classList.remove('active'));
  const start = getWordStart(cw, r, c, dir); if (!start) return;
  const num   = cw.numberedCells[`${start.r},${start.c}`]; if (!num) return;
  document.querySelectorAll(`.clue-item[data-num="${num}"][data-dir="${dir}"]`).forEach(el => {
    el.classList.add('active');
    el.scrollIntoView({ block: 'nearest' });
  });
  switchTab(dir);
}

function switchTab(dir) {
  document.querySelectorAll('.clue-tab').forEach(t => t.classList.toggle('active', t.dataset.dir === dir));
  document.getElementById('acrossCol').classList.toggle('tab-active', dir === 'across');
  document.getElementById('downCol')  .classList.toggle('tab-active', dir === 'down');
}

// ── Hint ─────────────────────────────────────────────────────────────────────
function hintActiveCell() {
  if (!activeCell || hintTokens <= 0) return;
  const cw = generatedPuzzles[currentIdx];
  const { r, c } = activeCell;
  const start = getWordStart(cw, r, c, activeDir);
  if (!start) return;
  const len = getWordLen(cw, start.r, start.c, activeDir);

  for (let i = 0; i < len; i++) {
    const cr = activeDir === 'across' ? start.r     : start.r + i;
    const cc = activeDir === 'across' ? start.c + i : start.c;
    const k  = `${cr},${cc}`;
    if (!userLetters[k]) {
      userLetters[k] = cw.grid[k];
      hintedCells.add(k);
      autoRevealedCells.delete(k);
      updateCellDisplay(cr, cc);
      hintTokens--;
      updateHintUI();
      updateLiveScore();
      focusCell(cr, cc, activeDir);
      const dr = activeDir === 'down' ? +1 : 0;
      const dc = activeDir === 'across' ? +1 : 0;
      moveActive(cw, cr, cc, dr, dc);
      checkAutoComplete(cw);
      return;
    }
  }

  const msg = document.getElementById('resultMsg');
  msg.textContent = 'Bu kelime zaten tamamlandı!';
  msg.className   = 'result-msg show partial';
  setTimeout(() => { msg.className = 'result-msg'; }, 1800);
}

// ── Clear ────────────────────────────────────────────────────────────────────
function clearPuzzle() {
  feedbackOn = false;
  Object.keys(userLetters).forEach(k => delete userLetters[k]);
  hintedCells.clear();
  autoRevealedCells.clear();
  document.querySelectorAll('.cell.white').forEach(cell => {
    cell.querySelector('.cell-letter').textContent = '';
    cell.classList.add('is-empty');
    cell.classList.remove('correct', 'wrong', 'hinted', 'flash-correct', 'shake');
  });
  document.getElementById('resultMsg').className = 'result-msg';
  document.getElementById('liveScore').textContent = '0';
}

function clearFeedback() {
  if (!feedbackOn) return;
  feedbackOn = false;
  document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('correct', 'wrong'));
  document.getElementById('resultMsg').className = 'result-msg';
}

// ── Vazgeç ───────────────────────────────────────────────────────────────────
function onVazgecClick() {
  if (vazgecDone) {
    showLevelComplete(generatedPuzzles[currentIdx]);
  } else {
    askVazgec();
  }
}

function askVazgec() {
  document.getElementById('vazgecModal').classList.remove('hidden');
}

function confirmVazgec() {
  closeModal('vazgecModal');
  const cw = generatedPuzzles[currentIdx];
  feedbackOn = false;

  document.querySelectorAll('.cell.white').forEach(cell => {
    const r = +cell.dataset.r, c = +cell.dataset.c, k = `${r},${c}`;
    const wasCorrect = (normCmp(userLetters[k] || '') === normCmp(cw.grid[k]))
                       && !autoRevealedCells.has(k);
    if (!userLetters[k]) {
      const answer = cw.grid[k] || '';
      if (answer) {
        userLetters[k] = answer;
        autoRevealedCells.add(k);
        updateCellDisplay(r, c);
      }
    }
    cell.classList.remove('wrong');
    // Doğru bilinen hücreler yeşil kalsın
    if (wasCorrect) cell.classList.add('correct');
    else            cell.classList.remove('correct');
  });

  updateLiveScore();
  document.getElementById('resultMsg').className = 'result-msg';

  // Butonu "Puanımı Gör" yap
  vazgecDone = true;
  document.getElementById('vazgecBtn').textContent = 'Puanımı Gör →';
}

// ── Level Complete ────────────────────────────────────────────────────────────
function showLevelComplete(cw) {
  const allCells  = Object.keys(cw.grid).length;
  const score     = calcScore(cw);
  const maxScore  = allCells * PTS_CORRECT;
  const pct       = maxScore > 0 ? score / maxScore : 0;
  const stars     = pct >= 0.85 ? 3 : pct >= 0.55 ? 2 : 1;

  // Stars animation
  ['star1','star2','star3'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('active');
    if (i < stars) setTimeout(() => el.classList.add('active'), 200 + i * 150);
  });

  let emoji, title, message;
  if (pct >= 0.85)      { emoji = '🏆'; title = 'Muhteşem!';          message = 'Coğrafya dehası! Harika bir performans!'; }
  else if (pct >= 0.55) { emoji = '🎯'; title = 'Aferin!';             message = 'İyi gidiyorsun! Biraz daha pratikle mükemmel.'; }
  else                  { emoji = '💪'; title = 'Bölüm Tamamlandı!';   message = 'Cevapları gördün, bir dahaki sefere daha iyisini yaparsın!'; }

  document.getElementById('modalEmoji')     .textContent = emoji;
  document.getElementById('modalTitle')     .textContent = title;
  document.getElementById('modalPuzzleName').textContent = PUZZLES[currentIdx].title;
  document.getElementById('modalMessage')   .textContent = message;
  document.getElementById('modalScore')     .textContent = score;
  document.getElementById('modalMaxScore')  .textContent = maxScore;

  const correctCount = Object.keys(cw.grid).filter(k =>
    (normCmp(userLetters[k] || '') === normCmp(cw.grid[k]))
  ).length;
  const statsArr = [`${correctCount}/${allCells} harf doğru`];
  if (hintedCells.size > 0)       statsArr.push(`${hintedCells.size} ipucu kullandın`);
  if (autoRevealedCells.size > 0) statsArr.push(`${autoRevealedCells.size} cevap gösterildi`);
  document.getElementById('modalStats').textContent = statsArr.join('  •  ');

  // Best record
  const prevBest   = getProgress(currentIdx);
  const isNewRecord = saveProgress(currentIdx, stars, score);
  const bestEl = document.getElementById('modalBest');
  if (isNewRecord && prevBest) {
    bestEl.textContent = '🎉 Yeni rekor!';
  } else if (!isNewRecord && prevBest) {
    const clampedStars = Math.min(3, Math.max(0, prevBest.stars || 0));
    bestEl.textContent = `En iyi: ${'★'.repeat(clampedStars)} — ${prevBest.score} puan`;
  } else {
    bestEl.textContent = '';
  }

  document.getElementById('nextLevelBtn').style.display =
    currentIdx >= PUZZLES.length - 1 ? 'none' : '';

  document.getElementById('levelModal').classList.remove('hidden');
}

// ── Level Map ────────────────────────────────────────────────────────────────
function openMap() {
  renderMap();
  document.getElementById('levelMap').classList.remove('hidden');
}

function closeMap() {
  document.getElementById('levelMap').classList.add('hidden');
}

function renderMap() {
  const grid = document.getElementById('mapGrid');
  grid.innerHTML = '';
  const data = loadStorage();
  const progress = data.progress || {};

  PUZZLES.forEach((puz, i) => {
    const card = document.createElement('div');
    const prog = progress[i];
    card.className = 'map-card';
    if (i === currentIdx) card.classList.add('map-current');
    if (prog)             card.classList.add('map-completed');

    const stars = prog ? prog.stars : 0;
    const starsHtml = [0,1,2].map(j =>
      `<span class="map-star ${j < stars ? 'earned' : ''}">★</span>`
    ).join('');

    // Short title: first part before parenthesis
    const shortTitle = puz.title.replace(/\s*\(.*\)/, '').trim();

    card.innerHTML = `
      <div class="map-num">${i + 1}</div>
      <div class="map-card-title">${shortTitle}</div>
      <div class="map-stars">${starsHtml}</div>
    `;
    card.addEventListener('click', () => {
      closeMap();
      showPuzzle(i);
    });
    grid.appendChild(card);
  });

  // Scroll to current
  setTimeout(() => {
    const current = grid.querySelector('.map-current');
    if (current) current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, 100);
}

// ── Info Modal ────────────────────────────────────────────────────────────────
function openInfo() {
  document.getElementById('infoModal').classList.remove('hidden');
}

function closeInfo() {
  markFirstVisitDone();
  closeModal('infoModal');
}

// ── Generic modal close ───────────────────────────────────────────────────────
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function getCell(r, c) {
  return document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`);
}

function cellBelongsToDir(cw, r, c, dir) {
  return !!getWordStart(cw, r, c, dir);
}

function getWordStart(cw, r, c, dir) {
  let cr = r, cc = c;
  while (cw.grid[`${cr},${cc}`] !== undefined) {
    const pr = dir === 'across' ? cr : cr - 1;
    const pc = dir === 'across' ? cc - 1 : cc;
    if (cw.grid[`${pr},${pc}`] === undefined) break;
    cr = pr; cc = pc;
  }
  if (cw.grid[`${cr},${cc}`] === undefined) return null;
  const nr = dir === 'across' ? cr     : cr + 1;
  const nc = dir === 'across' ? cc + 1 : cc;
  if (cw.grid[`${nr},${nc}`] === undefined) return null;
  return { r: cr, c: cc };
}

function getWordLen(cw, r, c, dir) {
  let len = 0, cr = r, cc = c;
  while (cw.grid[`${cr},${cc}`] !== undefined) {
    len++;
    cr = dir === 'across' ? cr     : cr + 1;
    cc = dir === 'across' ? cc + 1 : cc;
  }
  return len;
}

function jumpToNextWord(cw, backward) {
  const all = [
    ...cw.acrossClues.map(cl => ({ ...cl, dir: 'across' })),
    ...cw.downClues  .map(cl => ({ ...cl, dir: 'down'   }))
  ];
  const start = activeCell ? getWordStart(cw, activeCell.r, activeCell.c, activeDir) : null;
  let cur = start ? all.findIndex(cl => cl.r === start.r && cl.c === start.c && cl.dir === activeDir) : -1;
  const next = (cur + (backward ? -1 : 1) + all.length) % all.length;
  focusCell(all[next].r, all[next].c, all[next].dir);
}
