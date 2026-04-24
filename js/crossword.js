// ── Seeded RNG (xorshift32) ──────────────────────────────────────────────────
function makeRng(seed) {
  let s = (seed ^ 0x12345678) >>> 0 || 1;
  return function () {
    s ^= s << 13; s ^= s >> 17; s ^= s << 5;
    return (s >>> 0) / 4294967296;
  };
}

// ── CrosswordGenerator ───────────────────────────────────────────────────────
class CrosswordGenerator {
  constructor(puzzle, seed) {
    this.puzzle = puzzle;
    this.rng    = makeRng(seed != null ? seed : Date.now());
    this.grid   = {};
    this.placements = [];
    this.minR = 0; this.maxR = 0;
    this.minC = 0; this.maxC = 0;

    // Max-row cap: prevents grid from overflowing a page
    const maxClues = Math.max(puzzle.across.length, puzzle.down.length);
    const frac     = maxClues > 15 ? 0.34 : maxClues > 12 ? 0.38 : 0.42;
    // Esnetilmiş sınır: En az 22 satıra izin ver (NÜFUSPROJEKSİYONU vb. için güvenli)
    this.maxRows   = Math.max(22, Math.floor((window.innerHeight * frac) / 20));
  }

  // Normalize answer: strip spaces (e.g. "SU BUHARI" → "SUBUHARI")
  _norm(answer) { return answer.replace(/\s/g, ''); }

  generate() {
    const allWords = [];
    this.puzzle.across.forEach(w => allWords.push({ ...w, answer: this._norm(w.answer), rawAnswer: w.answer, dir: 'across' }));
    this.puzzle.down  .forEach(w => allWords.push({ ...w, answer: this._norm(w.answer), rawAnswer: w.answer, dir: 'down'   }));
    allWords.sort((a, b) => b.answer.length - a.answer.length);

    let bestResult = null, bestPlaced = 0;

    for (let attempt = 0; attempt < 80; attempt++) {
      this.grid = {}; this.placements = [];
      this.minR = 0; this.maxR = 0;
      this.minC = 0; this.maxC = 0;

      const shuffled = this._shuffle([...allWords]);
      this._placeWord(shuffled[0], 0, 0);

      let unplaced = shuffled.slice(1), passes = 5;
      while (unplaced.length && passes > 0) {
        const still = [];
        for (const w of unplaced) if (!this._tryPlace(w)) still.push(w);
        if (still.length === unplaced.length) passes--;
        unplaced = still;
      }

      if (this.placements.length > bestPlaced) {
        bestPlaced = this.placements.length;
        bestResult = { grid: {...this.grid}, placements: [...this.placements],
          minR: this.minR, maxR: this.maxR, minC: this.minC, maxC: this.maxC };
      }
      if (bestPlaced === allWords.length) break;
    }

    if (!bestResult) return this;
    Object.assign(this, bestResult);
    this._assignNumbers();
    return this;
  }

  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  _key(r, c) { return `${r},${c}`; }

  _placeWord(word, r, c) {
    const letters = word.answer.split('');
    for (let i = 0; i < letters.length; i++) {
      const cr = word.dir === 'across' ? r     : r + i;
      const cc = word.dir === 'across' ? c + i : c;
      this.grid[this._key(cr, cc)] = letters[i];
      this.minR = Math.min(this.minR, cr); this.maxR = Math.max(this.maxR, cr);
      this.minC = Math.min(this.minC, cc); this.maxC = Math.max(this.maxC, cc);
    }
    this.placements.push({ word, r, c, len: letters.length });
  }

  _tryPlace(word) {
    const letters = word.answer.split('');
    let bestPos = null, bestScore = -1;

    for (let i = 0; i < letters.length; i++) {
      for (const p of this.placements) {
        if (p.word.dir === word.dir) continue;
        const pl = p.word.answer.split('');
        for (let j = 0; j < pl.length; j++) {
          if (pl[j] !== letters[i]) continue;
          let r, c;
          if (word.dir === 'across') {
            r = (p.word.dir === 'down' ? p.r + j : p.r);
            c = (p.word.dir === 'down' ? p.c     : p.c + j) - i;
          } else {
            r = (p.word.dir === 'across' ? p.r     : p.r + j) - i;
            c = (p.word.dir === 'across' ? p.c + j : p.c);
          }
          if (this._canPlace(word, r, c)) {
            const sc = this._score(word, r, c);
            if (sc > bestScore) { bestScore = sc; bestPos = { r, c }; }
          }
        }
      }
    }
    if (bestPos) { this._placeWord(word, bestPos.r, bestPos.c); return true; }
    return false;
  }

  _canPlace(word, r, c) {
    const letters = word.answer.split('');
    for (let i = 0; i < letters.length; i++) {
      const cr = word.dir === 'across' ? r     : r + i;
      const cc = word.dir === 'across' ? c + i : c;
      const k  = this._key(cr, cc);
      if (this.grid[k] !== undefined) {
        if (this.grid[k] !== letters[i]) return false;
      } else {
        if (word.dir === 'across') {
          if (this.grid[this._key(cr-1,cc)] !== undefined) return false;
          if (this.grid[this._key(cr+1,cc)] !== undefined) return false;
        } else {
          if (this.grid[this._key(cr,cc-1)] !== undefined) return false;
          if (this.grid[this._key(cr,cc+1)] !== undefined) return false;
        }
      }
    }
    const bR = word.dir === 'across' ? r     : r - 1;
    const bC = word.dir === 'across' ? c - 1 : c;
    const aR = word.dir === 'across' ? r     : r + letters.length;
    const aC = word.dir === 'across' ? c + letters.length : c;
    if (this.grid[this._key(bR, bC)] !== undefined) return false;
    if (this.grid[this._key(aR, aC)] !== undefined) return false;

    // Height cap
    const nMinR = Math.min(this.minR, r);
    const nMaxR = Math.max(this.maxR, word.dir === 'across' ? r : r + letters.length - 1);
    if (nMaxR - nMinR + 1 > this.maxRows) return false;

    return true;
  }

  _score(word, r, c) {
    let s = 0;
    word.answer.split('').forEach((l, i) => {
      const cr = word.dir === 'across' ? r     : r + i;
      const cc = word.dir === 'across' ? c + i : c;
      if (this.grid[this._key(cr, cc)] === l) s += 2;
    });
    return s;
  }

  _assignNumbers() {
    const starts = new Map();
    for (const p of this.placements) {
      const k = this._key(p.r, p.c);
      if (!starts.has(k)) starts.set(k, { r: p.r, c: p.c, across: null, down: null });
      starts.get(k)[p.word.dir] = p;
    }
    const sorted = [...starts.values()].sort((a, b) => a.r !== b.r ? a.r - b.r : a.c - b.c);

    this.numberedCells = {};
    this.acrossClues   = [];
    this.downClues     = [];
    let num = 1;
    for (const s of sorted) {
      const k = this._key(s.r, s.c);
      this.numberedCells[k] = num;
      if (s.across) this.acrossClues.push({ num, clue: s.across.word.clue, answer: s.across.word.answer, r: s.r, c: s.c, len: s.across.len });
      if (s.down)   this.downClues  .push({ num, clue: s.down  .word.clue, answer: s.down  .word.answer, r: s.r, c: s.c, len: s.down  .len });
      num++;
    }
  }
}
