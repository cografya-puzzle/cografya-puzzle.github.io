const PUZZLES = [
  {
    title: "Türkiye Coğrafyası & Ekonomisi (1/2)",
    across: [
      { clue: "Ülkemizde çay üretim bölgesi", answer: "DOĞUKARADENİZ" },
      { clue: "Ülkemizdeki petrol rafinerisi (şehir)", answer: "BATMAN" },
      { clue: "Yazılıkaya anıtını bırakan uygarlık", answer: "FRİG" },
      { clue: "Türkiye'de görülmeyen afetlerden biri", answer: "TSUNAMİ" },
    ],
    down: [
      { clue: "Hamitabat'ta kullanılan kaynak", answer: "DOĞALGAZ" },
      { clue: "Keban, Karakaya barajlarının olduğu nehir", answer: "FIRAT" },
      { clue: "Ekonomiyi etkileyen faktörlerden biri", answer: "İKLİM" },
      { clue: "Peribacalarının bulunduğu şehir", answer: "NEVŞEHİR" },
      { clue: "Murgul'da çıkarılan maden", answer: "BAKIR" },
    ],
  },
  {
    title: "Türkiye Coğrafyası & Ekonomisi (2/2)",
    across: [
      { clue: "Sümela Manastırı'nın olduğu şehir", answer: "TRABZON" },
      { clue: "Balık avcılığının en çok yapıldığı deniz", answer: "KARADENİZ" },
      { clue: "Çeliğe sertlik veren maden", answer: "KROM" },
      { clue: "Türkiye'nin en büyük delta ovası", answer: "ÇUKUROVA" },
    ],
    down: [
      { clue: "Devlet Planlama Teşkilatı kısaltması", answer: "DPT" },
      { clue: "Milli gelire en çok katkı sağlayan sektör", answer: "HİZMET" },
      { clue: "Medeniyetler beşiği olan yarımada", answer: "ANADOLU" },
      { clue: "Aynaların sırlanmasında kullanılan maden", answer: "CIVA" },
      { clue: "Üretimde dünya birincisi olduğumuz maden", answer: "BOR" },
    ],
  },
  {
    title: "Dünya Coğrafyası (Hollanda, Hindistan, Japonya) (1/2)",
    across: [
      { clue: "Hollanda'nın bulunduğu kıta", answer: "AVRUPA" },
      { clue: "Hindistan'ın en önemli tarım ürünü", answer: "PİRİNÇ" },
      { clue: "Avrupa'nın en alçak ülkesi", answer: "HOLLANDA" },
      { clue: "Hindistan'ın kuzeybatısındaki çöl", answer: "TAR" },
    ],
    down: [
      { clue: "Büyükbaş hayvanda dünya birincisi", answer: "HİNDİSTAN" },
      { clue: "Denizden kazanılan topraklar (Hollanda)", answer: "POLDER" },
      { clue: "Japonya'nın doğal gaz aldığı ülke", answer: "AVUSTRALYA" },
      { clue: "AB'ye 2007'de üye olan devlet", answer: "ROMANYA" },
      { clue: "Hindistan'ın batı komşusu", answer: "PAKİSTAN" },
    ],
  },
  {
    title: "Dünya Coğrafyası (Hollanda, Hindistan, Japonya) (2/2)",
    across: [
      { clue: "İngiltere'nin ilk sanayi şehirlerinden biri", answer: "MANCHESTER" },
      { clue: "Hollanda'da görülen iklim tipi", answer: "OKYANUSAL" },
      { clue: "Sera sebzeleri üretiminde birinci olan ülke", answer: "HOLLANDA" },
      { clue: "Askeri örgütlerden biri", answer: "NATO" },
    ],
    down: [
      { clue: "Japonya'nın en kuzeydeki adası", answer: "HOKKAİDO" },
      { clue: "Sanayi devriminin başladığı ülke", answer: "İNGİLTERE" },
      { clue: "En yaygın üretim faaliyeti", answer: "TARIM" },
      { clue: "Japonya'nın başkenti", answer: "TOKYO" },
      { clue: "Japonya'da etkili olan iklim tipi", answer: "MUSON" },
    ],
  },
  {
    title: "Coğrafyanın Alt Dalları (1/2)",
    across: [
      { clue: "Canlıların dağılışını inceleyen bilim", answer: "BİYOCOĞRAFYA" },
      { clue: "Yer şekillerini inceleyen bilim", answer: "JEOMORFOLOJİ" },
      { clue: "Doğal ortamı inceleyen ana bilim dalı", answer: "FİZİKİ" },
      { clue: "Akarsu, göl ve denizlerin hepsi", answer: "HİDROGRAFYA" },
    ],
    down: [
      { clue: "Gazların karışımı (Hava küre)", answer: "ATMOSFER" },
      { clue: "Olayların meydana geldiği boyutlu mekan", answer: "COĞRAFİORTAM" },
      { clue: "İnsanın oluşturduğu unsurlar", answer: "BEŞERİ" },
      { clue: "İklimi inceleyen bilim", answer: "KLİMATOLOJİ" },
    ],
  },
  {
    title: "Coğrafyanın Alt Dalları (2/2)",
    across: [
      { clue: "İsveç, Norveç, Finlandiya'nın olduğu yer", answer: "İSKANDİNAVYA" },
      { clue: "Suları inceleyen coğrafya bilimi", answer: "HİDROLOJİ" },
      { clue: "Kanada ve İskandinavya'daki yerli halk", answer: "ESKİMO" },
      { clue: "Coğrafya terimini ilk defa kullanan kişi", answer: "ERATOSTHENES" },
    ],
    down: [
      { clue: "Katı yer kabuğu", answer: "LİTOSFER" },
      { clue: "Canlıların yaşadığı yer", answer: "BİYOSFER" },
    ],
  },
  {
    title: "Mevsimler & Güneş Hareketleri",
    across: [
      { clue: "Gündüz süresinin 12 saat olduğu tarihler", answer: "EKİNOKS" },
      { clue: "Dönenceler arasında kalan alan", answer: "TROPİKALKUŞAK" },
      { clue: "Ekinoks ve solstis tarihleri arası dönem", answer: "MEVSİM" },
      { clue: "21 Haziran'da gölgenin oluşmadığı enlem", answer: "YENGEÇ" },
      { clue: "Güney Yarım Küre'de kışın başladığı ay", answer: "HAZİRAN" },
      { clue: "Güneş'in Yengeç Dönencesi'ne dik geldiği gün", answer: "YİRMİBİRHAZİRAN" },
      { clue: "K.Y.K'de gündüzlerin uzamaya başladığı ay", answer: "ARALIK" },
    ],
    down: [
      { clue: "G.Y.K'de güneş ışınlarının dik geldiği sınır", answer: "OĞLAK" },
      { clue: "Aydınlanma çemberinin geçtiği enlemler", answer: "KUTUPDAİRESİ" },
      { clue: "Kış ve yaz mevsimi başlangıçları", answer: "GÜNDÖNÜMÜ" },
      { clue: "K.Y.K'de 21 Mart'ta başlayan mevsim", answer: "İLKBAHAR" },
      { clue: "Aydınlanma çemberinin yıl boyu böldüğü enlem", answer: "EKVATOR" },
    ],
  },
  {
    title: "Koordinatlar & Saat Dilimleri (1/2)",
    across: [
      { clue: "24 tane olan on beşerli meridyen kümesi", answer: "SAATDİLİMİ" },
      { clue: "Üzerinden en fazla saat dilimi geçen ülke", answer: "RUSYA" },
      { clue: "Aynı boylam üzerinde aynı olan tek değer", answer: "YERELSAATİ" },
      { clue: "Ekvator'un 23d 27' güneyindeki enlem", answer: "OĞLAK" },
    ],
    down: [
      { clue: "Başlangıç Meridyeni'ne uzaklığın açı değeri", answer: "BOYLAM" },
      { clue: "Doğusuyla batısı arasında bir gün fark olan çizgi", answer: "TARİHDEĞİŞTİRME" },
      { clue: "En büyük paralel dairesi", answer: "EKVATOR" },
      { clue: "Aynı anda birden fazla ortak saat kullanan ülke", answer: "ABD" },
    ],
  },
  {
    title: "Koordinatlar & Saat Dilimleri (2/2)",
    across: [
      { clue: "Ekvator ile dönenceler arasındaki paraleller", answer: "ALÇAKENLEM" },
      { clue: "Bir meridyeni 180 dereceye tamamlayan yay", answer: "ANTİMERİDYEN" },
      { clue: "Güneş'in en yüksek açıyla geldiği an", answer: "ÖĞLEVAKTI" },
    ],
    down: [
      { clue: "Londra yakınındaki kasaba", answer: "GREENWICH" },
      { clue: "Ekvator'a uzaklığın açı cinsinden değeri", answer: "ENLEM" },
      { clue: "Türkiye'nin kış saati için kullandığı şehir", answer: "IĞDIR" },
    ],
  },
  {
    title: "İzohips & Yer Şekilleri (1/2)",
    across: [
      { clue: "Derinliği 200 metreye kadar olan alanlar", answer: "ŞELF" },
      { clue: "Kapalı eğriler üzerindeki içe doğru ok işareti", answer: "ÇANAK" },
      { clue: "En içteki eğrinin gösterdiği yer şekli", answer: "DORUK" },
      { clue: "İki tepe arasındaki en alçak kesim", answer: "BOYUN" },
    ],
    down: [
      { clue: "Denizin akarsu ağzında içeri girmesi", answer: "HALİÇ" },
      { clue: "Yükseltinin arttığı yöne doğru açık V", answer: "SIRT" },
      { clue: "Denizle karanın birleştiği 0 metre eğrisi", answer: "KIYICİZGİSİ" },
      { clue: "Akarsuların sık geçirildiği yer şekli", answer: "VADİ" },
    ],
  },
  {
    title: "İzohips & Yer Şekilleri (2/2)",
    across: [
      { clue: "Aynı yükseltideki noktaları birleştiren eğriler", answer: "İZOHİPS" },
      { clue: "İzohipsler arasındaki sabit yükselti aralığı", answer: "EKUİDİSTANS" },
      { clue: "Birbirine yakın çizilen izohipsler", answer: "YAMAÇ" },
    ],
    down: [
      { clue: "Akarsu yataklarında içeri doğru V", answer: "VADİ" },
      { clue: "Karadan denize doğru üçgen çıkıntı", answer: "DELTA" },
      { clue: "İzohipslerin kıyı çizgisinde üst üste gelmesi", answer: "FALEZ" },
    ],
  },
  {
    title: "Harita Bilgisi (1/2)",
    across: [
      { clue: "Üç boyutlu ve gerçeğe en uygun harita", answer: "KABARTMA" },
      { clue: "Özel bir konu için hazırlanan harita", answer: "TEMATİK" },
      { clue: "Haritalardaki küçültme oranı", answer: "ÖLÇEK" },
      { clue: "Harita çizimi için kağıda aktarma yöntemi", answer: "PROJEKSİYON" },
      { clue: "Ölçeği 1/20.000'den büyük harita", answer: "PLAN" },
    ],
    down: [
      { clue: "Belirli ölçekle küçültülerek düzleme aktarma", answer: "HARİTA" },
      { clue: "Deniz seviyesine göre aynı derinlikteki noktalar", answer: "İZOBAT" },
      { clue: "Yeryüzü şekillerinin dağılışını gösteren harita", answer: "FİZİKİ" },
      { clue: "Ölçeksiz kabataslak çizim", answer: "KROKİ" },
    ],
  },
  {
    title: "Harita Bilgisi (2/2)",
    across: [
      { clue: "1/20.000 - 1/200.000 arası ölçekli harita", answer: "TOPOGRAFYA" },
      { clue: "Ekvator çevresi için kullanılan projeksiyon", answer: "SİLİNDİRİK" },
      { clue: "Renklendirme yöntemiyle hazırlanan harita", answer: "FİZİKİ" },
      { clue: "Arazinin tam tepeden görünüşü", answer: "KUŞBAKIŞI" },
    ],
    down: [
      { clue: "Aynı yükseltideki noktaları birleştiren eğri", answer: "İZOHİPS" },
      { clue: "Kutup çevreleri haritaları için projeksiyon", answer: "DÜZLEM" },
      { clue: "Orta enlemler için kullanılan projeksiyon", answer: "KONİK" },
    ],
  },
  {
    title: "Çevre Kirliliği (1/2)",
    across: [
      { clue: "1993'te çöp patlamasının yaşandığı şehir", answer: "İSTANBUL" },
      { clue: "Hava kirliliğinin neden olduğu hastalık", answer: "ASTIM" },
      { clue: "Çöplerin yol açtığı çevresel etkiler", answer: "KİRLİLİK" },
      { clue: "Bataklık gazının diğer adı", answer: "METAN" },
      { clue: "CO ile formüle edilen gaz", answer: "KARBONMONOKSİT" },
    ],
    down: [
      { clue: "Tarihi yapıları yıpratan yağış", answer: "ASİTYAĞMURU" },
      { clue: "Kulak zarı patlamasına neden olan kirlilik", answer: "SES" },
      { clue: "Orman yangınlarının arttığı mevsim", answer: "YAZ" },
      { clue: "Elektromanyetik kirlilik kaynakları", answer: "TELEFON" },
    ],
  },
  {
    title: "Çevre Kirliliği (2/2)",
    across: [
      { clue: "Isınmaya neden olan gazların etkisi", answer: "SERAETKİSİ" },
      { clue: "Zararlı ışınları süzen gaz", answer: "OZON" },
      { clue: "Antropojenik karbon kaynakları", answer: "FOSİLYAKIT" },
      { clue: "Geri dönüşümün en düzenli uygulandığı ülke", answer: "ALMANYA" },
      { clue: "Kültürel çevre kirliliği", answer: "GÜRÜLTÜ" },
    ],
    down: [
      { clue: "Atıklardan tekrar yararlanma", answer: "GERİDÖNÜŞÜM" },
      { clue: "Kükürtdioksitin suyla birleşmesi", answer: "LONDRA" },
      { clue: "Su kirlenmesiyle yayılan hastalık", answer: "KOLERA" },
      { clue: "O ile formüle edilen gaz", answer: "OKSİJEN" },
    ],
  },
  {
    title: "Doğal Kaynaklar & Enerji (1/2)",
    across: [
      { clue: "Bakır ve kalayın alaşımıyla bulunan maden", answer: "TUNÇ" },
      { clue: "Evsel kızartma yağlarından üretilen yakıt türü", answer: "BİYODİZEL" },
      { clue: "Hızla çölleşmiş göl adı", answer: "ARAL" },
      { clue: "Toprak kullanımının ortaya çıkardığı meslek", answer: "ÇİFTÇİLİK" },
      { clue: "Beyaz kömür denilen doğal kaynak", answer: "SU" },
    ],
    down: [
      { clue: "Orta Doğu ülkelerinin en önemli doğal kaynağı", answer: "PETROL" },
      { clue: "Uranyumdan sağlanan enerji", answer: "NÜKLEER" },
      { clue: "Rüzgâr enerjisinde öncü ülkelerden biri", answer: "ALMANYA" },
      { clue: "İnsanların doğal ürünlerden elde ettiği enerji", answer: "BİYOKÜTLE" },
    ],
  },
  {
    title: "Doğal Kaynaklar & Enerji (2/2)",
    across: [
      { clue: "21. yüzyılın yakıtı olarak görülen element", answer: "BOR" },
      { clue: "Hayvanların evcilleştirilmesiyle önemi artan kaynak", answer: "MERA" },
      { clue: "Dünyada ilk petrol kuyusunun açıldığı ülke", answer: "ABD" },
      { clue: "Aswan Barajı'nın kurulduğu nehir", answer: "NİL" },
      { clue: "Gemi yapımında kullanılan doğal kaynaklar", answer: "ORMAN" },
    ],
    down: [
      { clue: "Kabataş çağının icatlarından biri", answer: "BALTA" },
      { clue: "Kesintisiz, temiz ve alternatif enerji kaynağı", answer: "GÜNEŞ" },
      { clue: "Üç Boğaz Barajı'nın bulunduğu ülke", answer: "ÇİN" },
      { clue: "Bitkilerin kültüre alınmasıyla önemi artan kaynak", answer: "TOPRAK" },
    ],
  },
  {
    title: "Dünya'nın Hareketleri (1/2)",
    across: [
      { clue: "Yörünge düzlemini dik kestiği kabul edilen hayali çizgi", answer: "YÖRÜNGEEKSENİ" },
      { clue: "Güneş doğarken yaşanan alacakaranlık", answer: "TAN" },
      { clue: "Dünyanın Güneş etrafında hareketi sırasında izlediği yol", answer: "YÖRÜNGE" },
      { clue: "Dairesel hareket yapan cismin birim zamanda taradığı açı", answer: "AÇISALHIZ" },
    ],
    down: [
      { clue: "Dünyanın kendi ekseni etrafında tam bir devri", answer: "GÜNLÜKHAREKET" },
      { clue: "Dünyanın Güneş'e en uzak olduğu tarih", answer: "GÜNÖTE" },
      { clue: "Kutuplardan ve yerin merkezinden geçtiği varsayılan çizgi", answer: "YEREKSENİ" },
      { clue: "Dünyayı iki eşit parçaya bölen hayali çizgi", answer: "EKVATOR" },
    ],
  },
  {
    title: "Dünya'nın Hareketleri (2/2)",
    across: [
      { clue: "Dünyanın Güneş etrafında yaptığı hareket", answer: "YILLIKHAREKET" },
      { clue: "Dönenceler ve kutup dairelerinin oluşum nedeni", answer: "EKSENEĞİKLİĞİ" },
      { clue: "Dünyanın kendine has şekli", answer: "GEOİT" },
      { clue: "Cisimlerin birim zamanda aldığı yol", answer: "ÇİZGİSELHIZ" },
    ],
    down: [
      { clue: "Gece ve gündüzün oluşum nedeni", answer: "GÜNLÜKHAREKET" },
      { clue: "Dönme ile oluşan merkezkaç kuvveti", answer: "KORİYOLİS" },
      { clue: "Güneş batarken yaşanan alacakaranlık", answer: "GÜRUP" },
    ],
  },
  {
    title: "Rüzgarlar & Basınç (1/2)",
    across: [
      { clue: "Fransa üzerinden gelen soğuk yerel rüzgâr", answer: "MİSTRAL" },
      { clue: "Mısır'dan Akdeniz kıyılarına esen sıcak rüzgâr", answer: "HAMSİN" },
      { clue: "Büyük Sahra'dan Akdeniz'e doğru esen sıcak rüzgâr", answer: "SİROKKO" },
      { clue: "Orta kuşak karalarının batı kıyılarına yağış bırakan sürekli rüzgâr", answer: "BATIRÜZGARLARI" },
    ],
    down: [
      { clue: "Dünyanın günlük hareketine bağlı olarak oluşan basınç türü", answer: "DİNAMİK" },
      { clue: "Eş basınç eğrisi", answer: "İZOBAR" },
      { clue: "Gazların yere uygulamış olduğu ağırlık", answer: "BASINÇ" },
      { clue: "Ticaret rüzgârı olarak da bilinen sürekli rüzgâr", answer: "ALİZE" },
    ],
  },
  {
    title: "Rüzgarlar & Basınç (2/2)",
    across: [
      { clue: "Yatay yöndeki hareketi çevreden merkeze olan basınç", answer: "ALÇAKBASINÇ" },
      { clue: "Havanın ısınıp soğuması sonucu oluşan basınç türü", answer: "TERMİK" },
      { clue: "Hava kütlelerinin Güney Yarım Küre'de sapma yönü", answer: "SOL" },
    ],
    down: [
      { clue: "Basıncı ölçen alet", answer: "BAROMETRE" },
      { clue: "1013 mb'dan yüksek olan basınç", answer: "NORMAL" },
      { clue: "Güneydoğu Asya'da etkili olan rüzgâr", answer: "MUSON" },
      { clue: "Soğuk ve kuru karakterdeki sürekli rüzgâr", answer: "KUTUPYELLERİ" },
    ],
  },
  {
    title: "Nem & Yoğunlaşma (1/2)",
    across: [
      { clue: "Mutlak nemin en az olduğu yer", answer: "KUTUPLAR" },
      { clue: "Yağışın yıl içindeki dağılışı", answer: "REJİM" },
      { clue: "0 derecenin üstünde yerde oluşan yoğunlaşma ürünü", answer: "ÇİĞ" },
      { clue: "Yağış getirmeyen tüy saçak şeklindeki bulutlar", answer: "SİRRUS" },
      { clue: "Genelde yağış getiren koyu renkli tabaka şeklindeki bulutlar", answer: "NİMBUS" },
    ],
    down: [
      { clue: "Kümeler biçimindeki bulutlar", answer: "KÜMÜLÜS" },
      { clue: "Yağış miktarını ölçen alet", answer: "PLÜVİYOMETRE" },
      { clue: "Bulutluluk oranını ölçen alet", answer: "NEFOSKOP" },
    ],
  },
  {
    title: "Nem & Yoğunlaşma (2/2)",
    across: [
      { clue: "Ani sıcaklık değişimleri sonucu oluşan yoğunlaşma ürünü", answer: "KIRAĞI" },
      { clue: "Atmosferde gaz hâlinde bulunan su buharı", answer: "NEM" },
      { clue: "Sıcak ve soğuk havanın karşılaşma alanı", answer: "CEPHE" },
      { clue: "Atmosferde sıcaklık ve nem bakımından benzerlik gösteren büyük parçalar", answer: "HAVAKÜTLESİ" },
    ],
    down: [
      { clue: "Havadaki su buharının katı ya da sıvı hâle dönüşmesi", answer: "YOĞUNLAŞMA" },
      { clue: "Havadaki nem miktarını ölçen alet", answer: "HİGROMETRE" },
      { clue: "Görüş mesafesini düşüren yoğunlaşma ürünü", answer: "SİS" },
    ],
  },
  {
    title: "İklim Tipleri & Bitki Örtüsü (1/2)",
    across: [
      { clue: "Yüzlerce km²'lik sahaları etkileyen büyük iklim grubuna verilen ad", answer: "MAKROİKLİM" },
      { clue: "Ekvatoral bölgede görülen yağış tipi", answer: "KONVEKTİF" },
      { clue: "Dönenceler civarında görülen ve yağışın çok düşük olduğu iklim tipi", answer: "ÇÖL" },
      { clue: "Düzenli yağış rejimi özelliği taşıyan Orta Kuşak iklim tipi", answer: "OKYANUSAL" },
    ],
    down: [
      { clue: "Büyük iklim kuşakları arasında yer alan özel iklim alanları", answer: "GEÇİŞİKLİMİ" },
      { clue: "Yazın buzların eridiği alanlarda ortaya çıkan bitki örtüsü", answer: "TUNDRA" },
      { clue: "Ekvatoral iklim ile çöl iklimi arasındaki geçiş", answer: "SAVAN" },
      { clue: "Bitki örtüsünün bulunmadığı ve yıl boyunca sıfırın altında olan iklim tipi", answer: "KUTUP" },
    ],
  },
  {
    title: "İklim Tipleri & Bitki Örtüsü (2/2)",
    across: [
      { clue: "Ilıman okyanusal iklimde yağışların en fazla görüldüğü mevsim", answer: "KIŞ" },
      { clue: "Çöl ikliminde görülen kuraklığa dayanıklı bitki türü", answer: "KAKTÜS" },
      { clue: "Akdeniz ikliminde kızılçamların tahribi sonucu ortaya çıkan bitki örtüsü", answer: "MAKİ" },
    ],
    down: [
      { clue: "İklimlerin sınıflandırılmasında kullanılan en önemli unsur", answer: "SICAKLIK" },
      { clue: "İğne yapraklı ağaçlar ile yağışın azaldığı iklim tipi", answer: "KARASAL" },
      { clue: "Muson ikliminde yaygın olarak görülen yağış tipi", answer: "OROGRAFİK" },
    ],
  },
  {
    title: "İç Kuvvetler & Yer Kabuğu (1/2)",
    across: [
      { clue: "Basınç, yoğunluk ve sıcaklığın en fazla olduğu yer katmanı", answer: "ÇEKİRDEK" },
      { clue: "Alp kıvrımlarını oluşturan tortulların biriktiği dönem", answer: "MEZOZOYİK" },
      { clue: "Kıtalar ve okyanusların altında yer alan yer kabuğu parçaları", answer: "LEVHA" },
      { clue: "Yerkürenin en ince tabakası", answer: "YERKABUĞU" },
    ],
    down: [
      { clue: "Levhaların birbirine göre ters yönde hareket ettiği sınır", answer: "UZAKLAŞAN" },
      { clue: "İç kuvvetlerin enerjilerini aldığı katman", answer: "ASTENOSFER" },
      { clue: "Kıtaların kayma fikrini ortaya atan bilim adamı", answer: "WEGENER" },
    ],
  },
  {
    title: "İç Kuvvetler & Yer Kabuğu (2/2)",
    across: [
      { clue: "Bileşiminde silisyum ve alüminyumun bulunduğu yer kabuğu katmanı", answer: "SİAL" },
      { clue: "Kıtaların bir araya gelmesi ile oluşan süper kıta", answer: "PANGEA" },
      { clue: "Birinci jeolojik zamanda oluşmuş enerji kaynağı", answer: "TAŞKÖMÜRÜ" },
    ],
    down: [
      { clue: "Mezozoyik dönemini karakterize eden canlı", answer: "DİNOZOR" },
      { clue: "İnsanın ortaya çıktığı jeolojik dönem", answer: "KUVATERNER" },
      { clue: "Sıvı hâldeki manto malzemesi", answer: "MAGMA" },
    ],
  },
  {
    title: "Depremler & Volkanizm (1/2)",
    across: [
      { clue: "Yer kabuğunda doğal nedenlerle oluşan salınım ve titreşim hareketleri", answer: "DEPREM" },
      { clue: "Denizin karalar üzerinden çekilmesi", answer: "REGRESYON" },
      { clue: "Denizin karalar üzerinde ilerlemesi", answer: "TRANSGRESYON" },
      { clue: "Volkan konisi üzerinde oluşan çukurluk", answer: "KRATER" },
    ],
    down: [
      { clue: "Faylar boyunca çöken kısımlar", answer: "GRABEN" },
      { clue: "Tortul tabakaların kırılma hareketleriyle yükselmesi olayı", answer: "OROJENEZ" },
      { clue: "İzostatik dengeye bağlı yer kabuğunda toptan alçalma ya da yükselme", answer: "EPİROJENEZ" },
    ],
  },
  {
    title: "Depremler & Volkanizm (2/2)",
    across: [
      { clue: "Magmanın yer kabuğunun zayıf sahalarından patlaması olayı", answer: "VOLKANİZMA" },
      { clue: "Tabakalar arasına duvar gibi sokulan iç püskürükler", answer: "DAYK" },
      { clue: "Depremlerin neden olduğu dev dalgalar", answer: "TSUNAMİ" },
      { clue: "Yer kabuğunda bulunan kırık hatları", answer: "FAY" },
    ],
    down: [
      { clue: "Kıvrım hareketleri sırasında çöken bölümler", answer: "SENKLİNAL" },
      { clue: "Gerilme kuvvetine bağlı olarak oluşan fay", answer: "NORMAL" },
      { clue: "Kıvrım hareketleri sırasında yükselen bölümler", answer: "ANTİKLİNAL" },
    ],
  },
  {
    title: "Dış Kuvvetler - Akarsular (1/2)",
    across: [
      { clue: "Akarsu aşındırmasının son döneminde ortaya çıkan geniş düzlükler", answer: "PENEPLEN" },
      { clue: "Dış kuvvetlerin etkisiyle kayaların ufalanıp dağılması", answer: "UFALANMA" },
      { clue: "Akarsuyun birim zamanda geçen suyun m³/sn cinsinden miktarı", answer: "DEBİ" },
    ],
    down: [
      { clue: "Akarsu çığırlarında görülen V şekilli tabansız vadiler", answer: "KANYON" },
      { clue: "Akarsu yataklarında dikliklerden düşmeleriyle oluşan şekil", answer: "ŞELALE" },
      { clue: "Toprağın ve taşların aşağılara doğru kayması", answer: "HEYELAN" },
      { clue: "Bir akarsu havzasını komşu havzadan ayıran sınır", answer: "SUBÖLÜMÇİZGİSİ" },
    ],
  },
  {
    title: "Dış Kuvvetler - Akarsular (2/2)",
    across: [
      { clue: "Akarsuyun yatağında oluşturduğu S harfi şeklindeki büklümler", answer: "MENDERES" },
      { clue: "Bitki örtüsünden yoksun yamaçların sel sularıyla parçalanması", answer: "BADLANDS" },
      { clue: "Sularını denize ulaştırabilen akarsuların havzası", answer: "AÇIK" },
    ],
    down: [
      { clue: "Taşların kimyasal yapıları değişmeden meydana gelen çözülme", answer: "FİZİKSEL" },
      { clue: "Akarsu vadileriyle derince parçalanmış yüksek düzlük", answer: "PLATO" },
      { clue: "Akarsuların düştükleri yerde açtıkları çukurluklar", answer: "DEVKAZANI" },
      { clue: "Akarsu alüvyonlarıyla kıyı kesiminde oluşan ovalar", answer: "DELTA" },
    ],
  },
  {
    title: "Dış Kuvvetler - Buzul, Rüzgar & Kıyı (1/2)",
    across: [
      { clue: "Dik kıyıların altının oyulmasıyla kıyıda meydana gelen diklik", answer: "FALEZ" },
      { clue: "Karstik arazilerde yer altında oluşan büyük boşluklar", answer: "MAĞARA" },
      { clue: "Kıyı setlerinin bir burundan ileriye uzanmasıyla oluşan şekil", answer: "TOMBOLO" },
      { clue: "Mağara tavanından damlayan suların birikmesiyle oluşan şekil", answer: "SARKIT" },
    ],
    down: [
      { clue: "Buzul vadilerinin sular altında kalmasıyla oluşan kıyılar", answer: "FİYORD" },
      { clue: "Yıl boyunca düşük sıcaklıktan dolayı erimeden kalan buz", answer: "BUZUL" },
      { clue: "Rüzgârların taşıdığı kumların biriktirilmesiyle oluşan kum örtüleri", answer: "ERG" },
      { clue: "Kıyı açığındaki adanın kıyı oku ile karaya bağlanmasıyla oluşan şekil", answer: "TOMBOLO" },
    ],
  },
  {
    title: "Dış Kuvvetler - Buzul, Rüzgar & Kıyı (2/2)",
    across: [
      { clue: "Mağara tavanlarının çökmesiyle oluşan kuyu şeklindeki çukurluklar", answer: "OBRUK" },
      { clue: "Rüzgârların farklı dirençteki kayaları farklı aşındırmasıyla oluşan şekil", answer: "MANTARKAYA" },
      { clue: "Genişleyen birkaç dolinin birleşmesiyle oluşan büyük çukurluklar", answer: "UVALA" },
      { clue: "Orta Asya çöllerinde oluşan hilal biçimli kumullar", answer: "BARKAN" },
    ],
    down: [
      { clue: "Kıyı okunun koy ya da körfezin önünü kapatmasıyla oluşan göller", answer: "LAGÜN" },
      { clue: "Kıyıya paralel uzanan dağlar arasındaki vadilerin su altında kalması", answer: "DALMAÇYA" },
      { clue: "Dağların yüksek kesimlerinde buzulun başladığı aşınım çukurluğu", answer: "SİRK" },
    ],
  },
  {
    title: "Yerleşme Tipleri (1/2)",
    across: [
      { clue: "Dünyanın en soğuk kenti", answer: "YAKUTSK" },
      { clue: "Akarsu boylarında veya bir yol boyunca kurulan yerleşmeler", answer: "YOLYERLEŞMESİ" },
      { clue: "Yağış miktarının fazla, su kaynaklarının bol olduğu dağınık yerleşme", answer: "DAĞINIKYERLEŞME" },
      { clue: "İlkel yerleşim alanı", answer: "MAĞARA" },
    ],
    down: [
      { clue: "Nüfus artışı, dağılışı, göç hareketleri gibi nüfus özelliklerini inceleyen dal", answer: "NÜFUSCOĞRAFYASI" },
      { clue: "Dünyanın en yüksekte kurulan başkenti", answer: "LAPAZ" },
      { clue: "Dünyanın en kuzeyde kurulan kenti", answer: "HAMMERFEST" },
      { clue: "Kurak bölgelerde yapılan ev şekli", answer: "TOPRAK" },
    ],
  },
  {
    title: "Yerleşme Tipleri (2/2)",
    across: [
      { clue: "Dicle ve Fırat nehirlerinin arasındaki alan", answer: "MEZOPOTAMYA" },
      { clue: "İnsanların geçimini tarım ve hayvancılıktan sağladığı nüfusu az yerleşmeler", answer: "KÖY" },
      { clue: "İlk köylerin ortaya çıktığı dönem", answer: "NEOLİTİK" },
    ],
    down: [
      { clue: "Nüfusu 10.000'den fazla olan yerleşmeler", answer: "ŞEHİR" },
      { clue: "Birkaç ev ile eklentilerinden oluşan küçük yerleşme şekilleri", answer: "MEZRA" },
      { clue: "Köy ile kent arasında geçiş özelliği gösteren yerleşmeler", answer: "KASABA" },
    ],
  },
  {
    title: "Bölgeler",
    across: [
      { clue: "Asya'nın yoğun olarak petrol çıkartılan batı kesimi", answer: "ORTADOĞU" },
      { clue: "Kuzey Amerika Ekonomik İş Birliği Örgütü", answer: "NAFTA" },
      { clue: "Aynı kültür potası içerisinde bulunan ülkelerin oluşturduğu bölge", answer: "KÜLTÜRBÖLGE" },
      { clue: "Doğal bölgelere göre sınırları zamanla daha kolay değişebilen bölge türü", answer: "BEŞERİ" },
      { clue: "Avrupa'nın yoğun göç alan kesimi", answer: "BATIAVRUPA" },
    ],
    down: [
      { clue: "Yer şekilleri iklim ya da toprak özelliklerine göre ayrılan bölgeler", answer: "DOĞALBÖLGE" },
      { clue: "1934 yılında Türkiye, Yunanistan, Yugoslavya ve Romanya arasında kurulan bölge", answer: "BALKANPAKTI" },
      { clue: "Yer şekilleri, iklim ve bitki örtüsü gibi özelliklerle bütünlük gösteren alanlar", answer: "COĞRAFİBÖLGE" },
      { clue: "Sanayi bölgesi içinde yer alan bir Asya ülkesi", answer: "JAPONYA" },
      { clue: "Kuzey Atlantik Antlaşması Örgütü", answer: "NATO" },
    ],
  },
  {
    title: "Çevre Kirliliği & Koruma (1/2)",
    across: [
      { clue: "Nükleer enerji santralleri ve nükleer silah üreten fabrikaların artıkları", answer: "RADYOAKTİF" },
      { clue: "Enerji ihtiyacı için kullanılan sıvı hâlde bulunan fosil yakıt", answer: "PETROL" },
      { clue: "Canlı yaşamını olumsuz etkileyen her türlü insan, hayvan ya da makine kaynaklı ses", answer: "GÜRÜLTÜ" },
    ],
    down: [
      { clue: "Hava kirliliğine neden olan karbon bileşikli yakıtlar", answer: "FOSİL" },
      { clue: "Hava, toprak ve suya karışan yabancı maddelerin olumsuz etkisi", answer: "KİRLİLİK" },
      { clue: "Üç oksijen atomundan oluşan ve Güneş'ten gelen ultraviyole ışınları süzen gaz", answer: "OZON" },
    ],
  },
  {
    title: "Çevre Kirliliği & Koruma (2/2)",
    across: [
      { clue: "Yaşanılan alanlarda elektrikle çalışan cihazların neden olduğu kirlilik", answer: "ELEKTROMANYETİK" },
      { clue: "İstenmeyen zararlı maddelerin suya karışması", answer: "SUKİRLİLİĞİ" },
      { clue: "Yangınlar, hayvan otlatma, tarla açma ve odun ihtiyacının karşılanması sonucu orman zararı", answer: "ORMANTAHRİP" },
    ],
    down: [
      { clue: "1986 yılında Ukrayna'da patlayan nükleer santral", answer: "ÇERNOBİL" },
      { clue: "Eskimoların sıkıştırılmış kar ve buzdan yaptıkları meskenler", answer: "İGLO" },
      { clue: "Evlerden ya da sanayi tesislerinden kaynaklanan metal, plastik, kâğıt gibi maddeler", answer: "ATIK" },
    ],
  },
  {
    title: "Doğal Afetler & Ekstrem Olaylar (1/2)",
    across: [
      { clue: "Akdeniz'i Atlas Okyanusu'na bağlayan boğaz", answer: "CEBELİTARIK" },
      { clue: "Klimatolojik kuraklık tehlikesinin en az olacağı ülkelerden biri", answer: "NORVEÇ" },
      { clue: "Kış turizminin en geliştiği ülkelerden biri", answer: "İSVİÇRE" },
      { clue: "İngiltere ve Fransa'yı deniz altından birbirine bağlayan tünel", answer: "MANŞTÜNELİ" },
      { clue: "Hızı 120 km/saatten daha fazla olan tropikal rüzgârlar", answer: "KASIRGA" },
    ],
    down: [
      { clue: "Türkiye'de deprem riskinin düşük olduğu şehirlerden biri", answer: "KARAMAN" },
      { clue: "26 Aralık 2004'te Endonezya çevresinde yaşanan 21. yüzyılın en şiddetli ekstrem olayı", answer: "TSUNAMİ" },
      { clue: "Dünyanın en büyük su taşıma projesine sahip ülke", answer: "ÇİN" },
      { clue: "Heyelan sonucu oluşmuş göllerimizden biri", answer: "TORTUM" },
    ],
  },
  {
    title: "Doğal Afetler & Ekstrem Olaylar (2/2)",
    across: [
      { clue: "Suya doygun ve kaygan kil tabakasının neden olduğu olay", answer: "HEYELAN" },
      { clue: "Endonezya'da süper volkan yönünden en riskli bölgelerden biri", answer: "SUMATRA" },
      { clue: "Jura Dağları'nın bulunduğu ülke", answer: "FRANSA" },
      { clue: "Dünyada kaydedilen en düşük sıcaklığın yaşandığı ülke", answer: "RUSYA" },
      { clue: "Rotterdam Limanı hangi ülkededir?", answer: "HOLLANDA" },
    ],
    down: [
      { clue: "Klimatolojik karakterli ekstrem olaylardan biri", answer: "KURAKLIK" },
      { clue: "1201 yılında bilinen en şiddetli depremin yaşandığı ülke", answer: "MISIR" },
      { clue: "İsviçre yüzölçümünün yarısından fazlasını kaplayan dağlar", answer: "ALPLER" },
      { clue: "Depremden en çok etkilenen kıta", answer: "ASYA" },
    ],
  },
  {
    title: "İlk Çağ Uygarlıkları (1/3)",
    across: [
      { clue: "Mezopotamya'da kurulan en eski uygarlıklardan biri", answer: "SÜMER" },
      { clue: "Meksika'da hüküm sürmüş olan medeniyet", answer: "AZTEK" },
      { clue: "Çin uygarlığına ait teknik icatlardan biri", answer: "BARUT" },
      { clue: "Tarihte sıfır kavramını bulan uygarlık", answer: "HİNT" },
    ],
    down: [
      { clue: "Yunanca'da 'iki nehir arası' anlamına gelen kelime", answer: "MEZOPOTAMYA" },
      { clue: "Fenikelilerin kültür alanında yaptıkları önemli bir katkı", answer: "ALFABE" },
      { clue: "Tanrılar adına olimpiyat oyunlarını ilk kez başlatan uygarlık", answer: "YUNAN" },
    ],
  },
  {
    title: "İlk Çağ Uygarlıkları (2/3)",
    across: [
      { clue: "Hint uygarlığının yayıldığı günümüz ülkelerinden biri", answer: "PAKİSTAN" },
      { clue: "Orta Amerika'da kurulmuş olan medeniyetlerden biri", answer: "MAYA" },
      { clue: "Afrika kıtasının kuzeydoğusunda kurulmuş uygarlık", answer: "MISIR" },
      { clue: "Kral Yolu olarak bilinen ticaret yolunu yapmış uygarlık", answer: "PERS" },
    ],
    down: [
      { clue: "İlk medeniyetlerin daha çok orta enlemlerde yer almasında etkili faktör", answer: "İKLİM" },
      { clue: "Hint uygarlığının ortaya çıkmasında etkili olan bir akarsu", answer: "İNDUS" },
      { clue: "Dünyanın yuvarlak olduğunu ilk kez ileri süren İyonyalı düşünür", answer: "TALES" },
    ],
  },
  {
    title: "İlk Çağ Uygarlıkları (3/3)",
    across: [
      { clue: "Çin uygarlığının oluşumunda etkili olan bir akarsu", answer: "HUANGHO" },
      { clue: "Güneş takvimini Julyen takvimi olarak düzenleyen uygarlık", answer: "ROMA" },
      { clue: "Mezopotamya medeniyetine katkısı olan ırmaklardan biri", answer: "DİCLE" },
    ],
    down: [
      { clue: "Güney Amerika'da kurulmuş bir medeniyet", answer: "İNKA" },
      { clue: "Lidyalıların ticaret alanına yaptıkları en önemli katkı", answer: "PARA" },
      { clue: "Hint uygarlığında halkı sosyal katmanlara bölmüş olan sistem", answer: "KAST" },
    ],
  },
  {
    title: "Kentleşme & Sanayi (1/2)",
    across: [
      { clue: "Günümüz ekonomisindeki makinelerin yerini alması beklenen teknoloji", answer: "ROBOTİK" },
      { clue: "Günümüz uluslarının üstünlük mücadelesi verdiği en önemli alan", answer: "TEKNOLOJİ" },
      { clue: "Göç dalgası yaratacak hızlı şehirleşmeyi teşvik eden gelişme", answer: "SANAYİLEŞME" },
      { clue: "Ruhr Havzası'nın en önemli enerji kaynağı", answer: "KÖMÜR" },
    ],
    down: [
      { clue: "Şehirlerin çevresinde mekânsal, kültürel veya etnik olarak soyutlanmış semtler", answer: "GETTO" },
      { clue: "Bangladeş'in en kalabalık şehirlerinden biri", answer: "DAKKA" },
      { clue: "İlk şehir yerleşmelerinin ortaya çıktığı medeniyet", answer: "SÜMER" },
    ],
  },
  {
    title: "Kentleşme & Sanayi (2/2)",
    across: [
      { clue: "Günümüzde şehirleşme oranı çok düşük olan kıtalardan biri", answer: "AFRİKA" },
      { clue: "Günümüzdeki Ruhr Havzası'nda faaliyet yürüten bir sektör", answer: "HİZMET" },
      { clue: "Almanya'nın en önemli sanayi bölgesi", answer: "RUHR" },
      { clue: "Ruhr bölgesindeki önemli şehirlerden biri", answer: "ESSEN" },
    ],
    down: [
      { clue: "Günümüzde şehirleşme oranı yüzde yüze ulaşan ülke", answer: "SİNGAPUR" },
      { clue: "Kentleşme sürecinin büyüyüp birleşmesiyle ortaya çıkan geniş şehirsel alan", answer: "MEGALOPOLİS" },
      { clue: "Günümüzde şehirleşme hızının en yavaş olduğu kıtalardan biri", answer: "AVRUPA" },
    ],
  },
  {
    title: "Türkiye Bölgeleri (1/2)",
    across: [
      { clue: "Akdeniz kıyısındaki delta ovalarından biri", answer: "ÇUKUROVA" },
      { clue: "Ekonomik planlama bölgelerini belirleyen coğrafi özelliklerin ortak adı", answer: "COĞRAFİBÖLGE" },
      { clue: "Batı Karadeniz'de yer alan maden sanayi bölgesine örnek merkez", answer: "ZONGULDAK" },
      { clue: "Bölge sınırlarını belirleyen unsurlardan sabit, değişmeyen unsurların ortak adı", answer: "DOĞAL" },
    ],
    down: [
      { clue: "Kuzeydoğu Anadolu'daki kış turizmi bölgelerinden biri", answer: "SARIKAMIŞ" },
      { clue: "Türkiye'deki bitki örtüsüne göre bölgelerin en genişi", answer: "ORMAN" },
      { clue: "İklim özelliklerine göre belirlenen bölgelerimizden en dar olanı", answer: "KARADENİZ" },
    ],
  },
  {
    title: "Türkiye Bölgeleri (2/2)",
    across: [
      { clue: "Gaziantep ile Mardin arasında uzanan tarım bölgesi", answer: "HARRAN" },
      { clue: "Orta Karadeniz kıyılarındaki serbest ticaret bölgesi", answer: "SAMSUN" },
      { clue: "İstanbul ile Sakarya arasında yer alan sanayi bölgesi", answer: "MARMARA" },
      { clue: "Güney Marmara'da yer alan ticaret, turizm, tarım ve sanayi merkezi", answer: "BURSA" },
      { clue: "Türkiye'de bölge çeşitliliği en fazla olan mekân", answer: "EGE" },
      { clue: "Şırnak'ın doğusunda yer alan seyrek nüfuslu bölge", answer: "HAKKARİ" },
      { clue: "Temel geçim kaynağı tarım ve hayvancılık olan yerleşim bölgesi", answer: "KIRSAL" },
    ],
    down: [
      { clue: "Sıcak su bölgesinin ortaya çıktığı yer yapısındaki kırıklar", answer: "FAY" },
      { clue: "Birden fazla gelir kaynağına sahip, ekonomik faaliyet çeşitliliği gösteren bölge türü", answer: "ÇOKFONKSİYONLU" },
      { clue: "Coğrafi birlik esasına dayanan, kendi içinde benzerlikler gösteren mekân", answer: "BÖLGE" },
      { clue: "Akdeniz kıyılarındaki en geniş delta ovası bölgesi", answer: "ANTALYA" },
    ],
  },
  {
    title: "Ticaret & Ulaşım (1/2)",
    across: [
      { clue: "Kara sınırımız bulunan komşularımız içerisinde en fazla ithalat yaptığımız ülke", answer: "RUSYA" },
      { clue: "Türkiye'de ilk hâlin açıldığı il", answer: "İSTANBUL" },
      { clue: "Ticareti etkileyen unsurlardan biri", answer: "ULAŞIM" },
      { clue: "Türkiye'de gemi yapım sanayisinin geliştiği bir merkez", answer: "TUZLA" },
    ],
    down: [
      { clue: "Bir ülkenin dışarıdan mal alması", answer: "İTHALAT" },
      { clue: "Modern ulaşım sistemlerini geliştiren temel itici güç", answer: "TEKNOLOJİ" },
      { clue: "Ticaretin önemli unsurlarından biri olan arzın diğer adı", answer: "SUNU" },
      { clue: "Hinterlandı geniş limana sahip olan önemli ticaret merkezlerimizden biri", answer: "İZMİR" },
    ],
  },
  {
    title: "Ticaret & Ulaşım (2/2)",
    across: [
      { clue: "Ulaşım üzerinde etkili olan bir doğal faktör", answer: "YERŞEKİLLERİ" },
      { clue: "Yaygın olan ticaret mekânlarından biri", answer: "PAZAR" },
      { clue: "Türkiye'nin dış ticaretinde ilk sırada yer alan uluslararası topluluk", answer: "AB" },
      { clue: "Selçuklular ve Osmanlılar döneminde ticareti canlandırmak için yapılan yapılar", answer: "KERVANSARAY" },
      { clue: "Trakya'da ticareti canlandıran tarım ürünlerinden biri", answer: "AYÇİÇEĞİ" },
      { clue: "Türkiye'de kara ve demir yollarının genel uzanış yönü", answer: "DOĞUBATI" },
      { clue: "Anadolu'dan geçen tarihi ticaret yollarından biri", answer: "İPEKYOLU" },
    ],
    down: [
      { clue: "Doğu Karadeniz kıyılarının en işlek limanı", answer: "TRABZON" },
      { clue: "Türkiye ile bağlantılı olan uluslararası karayolu projelerinden biri", answer: "TEM" },
      { clue: "Karayollarının en önemli kavşak noktası", answer: "ANKARA" },
      { clue: "Ulaşım üzerinde etkili olan bir ekonomik faktör", answer: "SERMAYE" },
      { clue: "Türkiye'nin en gelişmiş ulaşım sistemi", answer: "KARAYOLU" },
      { clue: "Bir ülkenin kara sularında yolcu ve yük taşıma hakkı", answer: "KABOTAJ" },
    ],
  },
  {
    title: "Türkiye Turizmi (1/2)",
    across: [
      { clue: "Bacasız sanayi de denilen sektör", answer: "TURİZM" },
      { clue: "Türkiye'nin en çok turist aldığı ülke", answer: "ALMANYA" },
      { clue: "Kültepe'nin bulunduğu ilimiz", answer: "KAYSERİ" },
      { clue: "Marmara'da termal turizm potansiyeli fazla olan bir ilimiz", answer: "BALIKESİR" },
    ],
    down: [
      { clue: "Bir ülkenin turist çekebilme potansiyelini belirleyen erişim olanaklarından biri", answer: "ULAŞIM" },
      { clue: "Tarihi ev mimarisiyle ünlü bir yöremiz", answer: "SAFRANBOLU" },
      { clue: "Çanakkale'deki ünlü arkeolojik kent", answer: "TRUVA" },
      { clue: "Nevşehir'deki bir milli park", answer: "GÖREME" },
    ],
  },
  {
    title: "Türkiye Turizmi (2/2)",
    across: [
      { clue: "Antalya'da kış turizmine elverişli olan bir dağ", answer: "SAKLIKENT" },
      { clue: "Türkiye'de deniz turizmi sezonunun en kısa olduğu kıyılarımız", answer: "KARADENİZ" },
      { clue: "Raftinge uygun olan bir akarsuyumuz", answer: "ÇORUH" },
      { clue: "Genç volkan konileriyle turist çeken bir yöremiz", answer: "KAPADOKYA" },
    ],
    down: [
      { clue: "Tokat'taki ünlü mağara", answer: "BALLICA" },
      { clue: "Türkiye'ye turistlerin en çok geldiği ay", answer: "TEMMUZ" },
      { clue: "Fay hatlarının yakınında yaygın olan bir alternatif turizm kaynağı", answer: "TERMAL" },
    ],
  },
  {
    title: "Nüfus Politikaları (1/2)",
    across: [
      { clue: "Geçmiş yılların verilerinden yararlanarak gelecekteki nüfus tahmin işlemi", answer: "NÜFUSPROJEKSİYONU" },
      { clue: "Nüfus projeksiyon yöntemlerinden biri", answer: "MATEMATİKSEL" },
      { clue: "Türkiye'de nüfus artış hızını azaltıcı politikaların başladığı dönem", answer: "ALTMIŞLAR" },
      { clue: "Nüfus politikasının amaçlarından biri kalkınmayı sağlamaktır", answer: "DENGELİ" },
    ],
    down: [
      { clue: "Ülkenin sosyal, ekonomik, siyasi ve kültürel yapısına göre nüfus konusunda izlediği yol", answer: "NÜFUSPOLİTİKASI" },
      { clue: "II. Beş Yıllık Kalkınma Planı'nda nüfus politikasına gelen kavram", answer: "AİLE" },
      { clue: "II. Dünya Savaşı'nda erkeklerin silah altına alınmasına neden olan uygulama", answer: "SEFERBERLİK" },
    ],
  },
  {
    title: "Nüfus Politikaları (2/2)",
    across: [
      { clue: "Türkiye'de en çok nüfus barındıran bölge", answer: "MARMARA" },
      { clue: "Nüfus artış hızını düşürücü politika izleyen ülkelerden biri", answer: "ÇİN" },
      { clue: "Nüfus projeksiyonlarına veri toplamak amacıyla araştırma yapılan bir alan", answer: "SAHA" },
      { clue: "Sınırları belli bir alan içerisinde yaşayan insan sayısı", answer: "NÜFUS" },
    ],
    down: [
      { clue: "Anne, baba ve genellikle 1-2 çocuktan oluşan aile", answer: "ÇEKİRDEK" },
      { clue: "Türkiye'de 1985'ten sonra nüfus artış hızının genel değişme yönü", answer: "AZALMA" },
      { clue: "Nüfusun yapısal özelliklerinden biri", answer: "YAŞ" },
    ],
  },
  {
    title: "Bölgesel Kalkınma Projeleri (1/2)",
    across: [
      { clue: "YHGP kapsamındaki illerden delta ovasına sahip şehir", answer: "SAMSUN" },
      { clue: "Dağınık yerleşmenin en yaygın olduğu şehirleri kapsayan bölgesel kalkınma projesi", answer: "DOKAP" },
      { clue: "Türkiye'de bölgesel kalkınma projeleri hazırlayan kurumun kısa adı", answer: "DPT" },
      { clue: "Atatürk Barajı'nın geniş alan kapladığı illerden biri", answer: "ADIYAMAN" },
      { clue: "ZBK projesindeki illerden deniz kıyısı bulunmayanı", answer: "ELAZIĞ" },
    ],
    down: [
      { clue: "GAP kapsamındaki illerden ekonomisi en gelişmiş olanı", answer: "GAZİANTEP" },
      { clue: "GAP'ta serbest bölge kurulan illerden biri", answer: "MARDİN" },
      { clue: "ZBK projesi kapsamındaki akarsulardan taşımacılığa uygun olanı", answer: "FIRAT" },
      { clue: "ZBK projesinin mevcut sanayi faaliyetlerinden en önemlisi", answer: "MADEN" },
      { clue: "YHGP projesine adını veren akarsu", answer: "YEŞİLIRMAK" },
    ],
  },
  {
    title: "Bölgesel Kalkınma Projeleri (2/2)",
    across: [
      { clue: "Fizibilite çalışmaları biten bölgesel kalkınma projelerimizden il sayısı en fazla olanı", answer: "DAP" },
      { clue: "DAP kapsamındaki illerden en güneyde yer alanı", answer: "HAKKARİ" },
      { clue: "Türkiye'de sadece DOKAP kapsamındaki illerden birkaçında yetişen tarım ürünü", answer: "ÇAY" },
      { clue: "DAP kapsamındaki illerden en batıda olanı", answer: "SİVAS" },
      { clue: "GAP kapsamındaki hidroelektrik santrallerden elektrik üretimi en fazla olanı", answer: "ATATÜRK" },
    ],
    down: [
      { clue: "ZBK projesindeki illerin en önemli yer altı kaynağı", answer: "KROM" },
      { clue: "GAP'ın faaliyete geçmesiyle ekim alanı daralan tarım ürünü", answer: "PAMUK" },
      { clue: "DAP kapsamında olup da Karadeniz bölgesine ait illerden biri", answer: "ARTVİN" },
      { clue: "YHGP kapsamındaki illerden yüzölçümü en küçük olanı", answer: "AMASYA" },
    ],
  },
  {
    title: "Türkiye'nin Jeopolitiği (1/2)",
    across: [
      { clue: "Uğradığı haksızlıklarla dünya gündeminde olan bir Orta Doğu ülkesi", answer: "FİLİSTİN" },
      { clue: "Türkiye'yi dolaylı olarak ilgilendiren bölgesel sorunlardan biri", answer: "SURİYE" },
      { clue: "Anadolu toprakları üzerinde ilk çağlarda kurulmuş bir imparatorluk", answer: "ROMA" },
      { clue: "Dünyanın petrol bakımından en zengin bölgesi", answer: "ORTADOĞU" },
      { clue: "Herhangi bir ülkenin coğrafi konumunun politikaya olan etkisini ifade eden kelime", answer: "JEOPOLİTİK" },
    ],
    down: [
      { clue: "Coğrafi keşiflerden sonra önemi azalan bir ticaret yolu", answer: "İPEKYOLU" },
      { clue: "Fırat ve Dicle'nin sularıyla ilgili Türkiye ile sorun yaşama riski fazla olan ülke", answer: "IRAK" },
      { clue: "Ekonomik İş Birliği ve Kalkınma Teşkilatı'nın kısa adı", answer: "OECD" },
      { clue: "Kıbrıs Cumhuriyeti'nin kurulmasında etkili olan antlaşmalardan biri", answer: "ZÜRİH" },
    ],
  },
  {
    title: "Türkiye'nin Jeopolitiği (2/2)",
    across: [
      { clue: "Türkiye'nin Rusya, Balkanlar ve Kafkasya için önemi fazla olan göreli konum özelliği", answer: "BOĞAZLAR" },
      { clue: "Soğuk Savaş döneminde NATO'nun karşısında yer alan askeri örgüt", answer: "VARŞOVAPAKTI" },
      { clue: "Kızıldeniz'i Akdeniz'e bağlayan su yolu", answer: "SÜVEYŞ" },
      { clue: "Bir Balkan ülkesi", answer: "ARNAVUTLUK" },
    ],
    down: [
      { clue: "Türkiye'nin kuzeydoğu komşusu", answer: "GÜRCİSTAN" },
      { clue: "Bosna-Hersek sorununun ilgili ülkelerinden biri", answer: "SIRBİSTAN" },
      { clue: "Jeopolitikte etkili olan bir unsur", answer: "KONUM" },
    ],
  },
  {
    title: "Uluslararası Örgütler & Çatışma Bölgeleri (1/2)",
    across: [
      { clue: "Tarihte 6 Gün Savaşı olarak anılan savaşta İsrail ile savaşan ülke", answer: "MISIR" },
      { clue: "Uluslararası barışı ve güvenliği sağlamak amacıyla I. Dünya Savaşından sonra kurulan örgüt", answer: "MİLLETLERCEMİYETİ" },
      { clue: "ABD'nin Irak'ı işgal etmesinde önemi en fazla olan doğal kaynak", answer: "PETROL" },
      { clue: "Günümüzün en etkin uluslararası çevre örgütü", answer: "GREENPEACE" },
    ],
    down: [
      { clue: "KEİ'ye sonradan katılan bir ülke", answer: "SIRBİSTAN" },
      { clue: "Güneydoğu Asya'daki bir çatışma ve gerilim bölgesi", answer: "KORE" },
      { clue: "OPEC'e yeni ülkelerin üyeliği durumunda veto hakkı bulunan ülkelerden biri", answer: "İRAN" },
    ],
  },
  {
    title: "Uluslararası Örgütler & Çatışma Bölgeleri (2/2)",
    across: [
      { clue: "Afrika'da paylaşımı ülkeler arasında sorun oluşturan en önemli akarsu", answer: "NİL" },
      { clue: "Bir evrensel örgüt", answer: "BM" },
      { clue: "Kafkasya'nın gerilimli bölgelerinden biri", answer: "ÇEÇENİSTAN" },
      { clue: "IMF'den en fazla oy hakkına sahip olan ülke", answer: "ABD" },
      { clue: "BM Güvenlik Konseyinde veto hakkına sahip olan ülkelerden biri", answer: "FRANSA" },
      { clue: "Karadeniz Ekonomik İş Birliği Teşkilatına gözlemci olarak katılan bir Afrika ülkesi", answer: "MISIR" },
      { clue: "AB'ye 2007 yılında üye olan ülkelerden biri", answer: "BULGARİSTAN" },
    ],
    down: [
      { clue: "Güney Amerika'daki çatışma ve gerilim bölgesi", answer: "KOLOMBİYA" },
      { clue: "Ortak parasal birliğe geçişi kabul etmeyen bir Avrupa Birliği ülkesi", answer: "İNGİLTERE" },
      { clue: "Ekonomik Kalkınma ve İş Birliği Örgütü'nün kısaltması", answer: "OECD" },
      { clue: "NAFTA üyesi ülkelerin en güneyde yer alanı", answer: "MEKSİKA" },
      { clue: "Nükleer enerji santrallerde yakıt olarak kullanılan doğal kaynak", answer: "URANYUM" },
    ],
  },
  {
    title: "Çevre Sorunları & Doğal Kaynaklar (1/2)",
    across: [
      { clue: "Türkiye'de erozyonu önlemek amacıyla 1988 yılında başlatılan ağaçlandırma projesi", answer: "TEMA" },
      { clue: "Kullanıldıkça rezerv miktarı azalan yenilenemeyen doğal kaynaklar", answer: "TÜKENEN" },
      { clue: "Dünyada ilk ÇED uygulamasını başlatan ülke", answer: "ABD" },
      { clue: "Ozon tabakasının incelmesine en çok etki eden gaz", answer: "CFC" },
      { clue: "1996 yılında Habitat 2 Konferansı'nın yapıldığı şehir", answer: "İSTANBUL" },
    ],
    down: [
      { clue: "Denizel ortamda karbon döngüsünün yaşandığı alan", answer: "OKYANUS" },
      { clue: "Kuraklık riski fazla olan bir Asya ülkesi", answer: "HİNDİSTAN" },
      { clue: "Kyoto Protokolü'nün imzalandığı ülke", answer: "JAPONYA" },
      { clue: "Gelişme hızı çok fazla olan bir doğal afet", answer: "DEPREM" },
    ],
  },
  {
    title: "Çevre Sorunları & Doğal Kaynaklar (2/2)",
    across: [
      { clue: "Depremlerin en etkili olduğu kıta", answer: "ASYA" },
      { clue: "Ekosisteme zarar vermeyen enerji kaynaklarından biri", answer: "RÜZGAR" },
      { clue: "Ekinler biçildikten sonra tarlada kalan kök ve sap kısmına verilen ad", answer: "ANIZ" },
      { clue: "Yaşamın temel unsurlarından olan doğal kaynaklardan biri", answer: "SU" },
    ],
    down: [
      { clue: "Adıyaman ilindeki milli park", answer: "NEMRUT" },
      { clue: "Güney Marmara'da bulunan Avrupa ve Orta Doğu'nun en önemli sulak alanlarından biri", answer: "MANYAS" },
      { clue: "Dünyanın doğal miraslarından biri olan Demavend Dağı'nın bulunduğu ülke", answer: "İRAN" },
    ],
  },
  {
    title: "Nüfus (1/2)",
    across: [
      { clue: "Nüfusun yapısal özelliklerinden biri", answer: "YAŞ" },
      { clue: "İlk modern periyodik nüfus sayımı yapan ülkelerin bulunduğu bölgenin adı", answer: "AVRUPA" },
      { clue: "Nüfusu en çok olan ülke", answer: "HİNDİSTAN" },
      { clue: "Nüfus bilimi", answer: "DEMOGRAFİ" },
    ],
    down: [
      { clue: "Nüfus artışı üzerinde en büyük sıçramaya neden olan olay", answer: "DEVRİM" },
      { clue: "Nüfus artış oranı yüksek olan körfez ülkelerinden biri", answer: "KATAR" },
      { clue: "Belli bir sınır içinde belirli anda belirlenen insan sayısı", answer: "NÜFUS" },
      { clue: "Dünyada nüfusun seyrek olduğu alanlardan biri olup dünyanın en büyük çölüdür", answer: "SAHRA" },
    ],
  },
  {
    title: "Nüfus (2/2)",
    across: [
      { clue: "Nüfus dağılışı üzerinde etkili olan faktörlerden biri", answer: "İKLİM" },
      { clue: "Nüfus dağılışı üzerinde son yüzyıl içinde belirleyici özellik kazanmış ekonomik faaliyet", answer: "SANAYİ" },
      { clue: "Nüfus patlamasına neden olan Neolitik Çağda başlayan ekonomik faaliyet", answer: "TARIM" },
    ],
    down: [
      { clue: "Nüfus ve nüfusun niteliklerini belirlemek için yapılan çalışma", answer: "SAYIM" },
      { clue: "Genellikle 15 yaş altı ile 65 yaş üstü nüfus için kullanılan terim", answer: "BAĞIMLI" },
      { clue: "Osmanlı Döneminde ilk nüfus sayımını yaptıran padişah", answer: "MAHMUT" },
      { clue: "Nüfus yoğunluğu az olan Okyanusya'nın en büyük adası", answer: "AVUSTRALYA" },
    ],
  },
  {
    title: "Su Kaynakları (1/2)",
    across: [
      { clue: "Yeryüzündeki suların büyük kısmını bulunduran çok büyük su kütleleri", answer: "OKYANUSLAR" },
      { clue: "Suların açık denizlere gönderemediği kapalı havza alanları", answer: "KAPALI" },
      { clue: "Kimi özellikleriyle deniz olarak adlandırılan dünyanın en büyük gölü", answer: "HAZAR" },
      { clue: "Sahra Çölü'nün güneyinde yıl içinde düzey değişiklikleri gösteren göl", answer: "ÇAD" },
      { clue: "Yer altı suyunu tutan ve ileten gözenekli toprak katmanı", answer: "AKİFER" },
    ],
    down: [
      { clue: "Yer altı suyunun sondaj yoluyla yeryüzüne çıkarılması", answer: "ARTEZYEN" },
      { clue: "Yeryüzündeki suların bir yatak içinde eğim boyunca akması", answer: "AKARSU" },
      { clue: "İki denizi birbirine bağlayan doğal su yolu", answer: "BOĞAZ" },
      { clue: "Akarsuyun yıl boyunca gösterdiği akış değişimi", answer: "REJİM" },
    ],
  },
  {
    title: "Su Kaynakları (2/2)",
    across: [
      { clue: "Buzul aşındırması sonucu oluşan çukurlarda biriken su ile oluşan göl türü", answer: "SİRK" },
      { clue: "Dünyanın en yüksek şelalesi", answer: "ANGEL" },
      { clue: "Denizlerin karaların içine girdiği bölüm", answer: "KÖRFEZ" },
      { clue: "Afrika kıtasının en büyük akarsuyu", answer: "NİL" },
    ],
    down: [
      { clue: "Kutuplarda ve yüksek dağlık alanlarda katı hâlde bulunan su kütleleri", answer: "BUZUL" },
      { clue: "Koy ya da körfez önünün kıyı kordonuyla kapanması sonucu oluşan göl", answer: "LAGÜN" },
      { clue: "Dünyanın en derin ve en yaşlı göllerinden biri", answer: "BAYKAL" },
      { clue: "Akarsularla su toplama alanlarının adı", answer: "HAVZA" },
    ],
  },
  {
    title: "Toprak Türleri",
    across: [
      { clue: "Akdeniz iklim bölgesinde kalkerli arazide oluşan toprak", answer: "TERRAROSSA" },
      { clue: "Ekvatoral bölge toprağı", answer: "LATERİT" },
      { clue: "Ilıman karasal iklim bölgesi toprağı", answer: "ESMER" },
      { clue: "Akarsuların taşıyıp biriktirdiği topraklar", answer: "ALÜVYAL" },
    ],
    down: [
      { clue: "Soğuk ve nemli bölge toprağıdır. Kanada ve Sibirya'da geniş yer kaplar", answer: "PODZOL" },
      { clue: "Taban suyu seviyesinin yüzeye yakın olduğu yerlerde görülen intrazonal topraklar", answer: "HİDROMORFİK" },
      { clue: "Rüzgârın taşıyıp biriktirdiği topraklardır", answer: "LÖS" },
      { clue: "Karasal iklim bölgesinde çayır bitki örtüsü altında oluşan zonal toprakların en verimlisi", answer: "ÇERNOZYOM" },
      { clue: "Dönen topraklar olarak da bilinen intrazonal toprak", answer: "VERTİZOL" },
    ],
  },
  {
    title: "Harita Bilgisi (1/2)",
    across: [
      { clue: "Akarsu yatağı", answer: "VADİ" },
      { clue: "Haritalardaki küçültme oranı", answer: "ÖLÇEK" },
      { clue: "Orta kuşağı göstermede en uygun projeksiyon yöntemi", answer: "KONİK" },
      { clue: "Yeryüzünün bir kısmının kuş bakışı olarak ölçekle düzleme aktarılması", answer: "HARİTA" },
    ],
    down: [
      { clue: "Akarsuyun denize döküldüğü yerde oluşturduğu ova", answer: "DELTA" },
      { clue: "Fiziki haritalarda alçak yerleri gösteren renk", answer: "YEŞİL" },
      { clue: "Yeryüzü şekillerini göstermede en çok tercih edilen yöntem", answer: "İZOHİPS" },
    ],
  },
  {
    title: "Harita Bilgisi (2/2)",
    across: [
      { clue: "Daha çok tercih edilen ölçek türü", answer: "KESİR" },
      { clue: "Yüksek düzlük", answer: "PLATO" },
      { clue: "İzohips haritalarında nokta veya üçgenle gösterilen yer", answer: "ZİRVE" },
      { clue: "Haritaya aktarılan alan", answer: "ARAZİ" },
      { clue: "Coğrafi verilerin toplanması, depolanması ve analiz edilmesi", answer: "CBS" },
      { clue: "Yüksek kıyılarda dalga aşındırmasıyla oluşan şekil", answer: "FALEZ" },
      { clue: "Haritalarda sembolleri gösteren bölüm", answer: "LEJAND" },
    ],
    down: [
      { clue: "En büyük ölçekli harita türü", answer: "KADASTRO" },
      { clue: "Ünlü Türk denizcisi", answer: "PİRİ" },
      { clue: "Doğal ve beşeri unsurların bir arada gösterildiği harita", answer: "GENEL" },
      { clue: "Dar alanların gösterildiğinde kullanılan projeksiyon türü", answer: "KONİK" },
      { clue: "Gerçeğe en yakın çizim yöntemi", answer: "KÜRE" },
    ],
  },
  {
    title: "İç Kuvvetler (1/2)",
    across: [
      { clue: "Dağ oluşumuna verilen ad", answer: "OROJENEZ" },
      { clue: "Dağ oluşumu sırasında kırılan tabakaların dikey yönde yer değiştirmesiyle oluşan yükseltiler", answer: "HORST" },
      { clue: "Kara kütlesinin hafifleyip yükselmesiyle deniz seviyesinin geri çekilmesi", answer: "İZOSTAZİ" },
      { clue: "Kıvrılan tabakaların yükselen kubbe şeklindeki kısımları", answer: "ANTİKLİNAL" },
    ],
    down: [
      { clue: "Deprem tehlikesi fazla olan Asya ülkelerinden biri", answer: "JAPONYA" },
      { clue: "Magmanın damar aracılığıyla tabakalar arasına sokulmasıyla oluşan mantar biçimli şekil", answer: "LAKOLİT" },
      { clue: "Dünyadaki volkanların yaklaşık dörtte üçünün görüldüğü bölge", answer: "ATEŞÇEMBERİ" },
      { clue: "Magmanın yeryüzüne çıkması ya da yeryüzüne kadar sokulması", answer: "VOLKANİZMA" },
    ],
  },
  {
    title: "İç Kuvvetler (2/2)",
    across: [
      { clue: "Magmadan yeryüzüne gelen gazların patlaması sonucu oluşan çukur", answer: "MAAR" },
      { clue: "Kara kütlelerinin bir bütün olarak yükselmesi ya da alçalması", answer: "EPİROJENEZ" },
      { clue: "Yeni bir patlama ya da çökme sonucu kraterin genişlemesiyle oluşan çanaklar", answer: "KALDERA" },
      { clue: "Magmanın tabakaları keserek damar şeklinde katılaşmasıyla oluşan şekil", answer: "DAYK" },
    ],
    down: [
      { clue: "Akdeniz-Himalaya Deprem Kuşağında yer alan ülkelerden biri", answer: "TÜRKİYE" },
      { clue: "Levha hareketleriyle meydana gelen yer değiştirme ve kırılma sonucu oluşan deprem türü", answer: "TEKTONİK" },
      { clue: "Volkan konilerinin üst kesiminde patlama sonucu oluşan çukurlar", answer: "KRATER" },
      { clue: "Yer kabuğu hareketleri sırasında meydana gelen kırıklar", answer: "FAY" },
    ],
  },
  {
    title: "İklim Bilgisi (1/3)",
    across: [
      { clue: "Kısa süreli hava olayları", answer: "HAVA" },
      { clue: "Ege kıyılarında deniz melteminin halk arasındaki ismi", answer: "İMBAT" },
      { clue: "Anadolu'da yükselim yağışlarına verilen isim", answer: "KIRKİKİNDİ" },
      { clue: "Rüzgârın hızını ve yönünü ölçen alet", answer: "ANEMOMETRE" },
    ],
    down: [
      { clue: "Bitki örtüsünün olmadığı iklim", answer: "KUTUP" },
      { clue: "Orta kuşak karalarının batı kıyılarına yağış getiren sürekli rüzgâr", answer: "BATI RÜZGARLARI" },
      { clue: "Canlı yaşamının olduğu atmosfer katmanı", answer: "TROPOSFER" },
      { clue: "Ülkemize kışın kutup şartlarını getiren termik yüksek basıncı", answer: "SİBİRYA" },
      { clue: "Sıcaklıkölçer", answer: "TERMOMETRE" },
    ],
  },
  {
    title: "İklim Bilgisi (2/3)",
    across: [
      { clue: "Basınç deneyini yapan İtalyan bilim insanı", answer: "TORİÇELLİ" },
      { clue: "Basınçölçer", answer: "BAROMETRE" },
      { clue: "Atmosfer basıncının birimi", answer: "MİLİBAR" },
      { clue: "Kışın ılık ve yağışlı, yazın sıcak ve kurak olan iklim", answer: "AKDENİZ" },
    ],
    down: [
      { clue: "Ticaret rüzgârları", answer: "ALİZE" },
      { clue: "Güneydoğu Asya'da etkili olan mevsimlik rüzgâr", answer: "MUSON" },
      { clue: "Eş sıcaklık eğrisi", answer: "İZOTERM" },
      { clue: "Bir merkezde rüzgârın en çok estiği yön", answer: "HAKİM" },
      { clue: "Hava olaylarının uzun süreli ortalaması", answer: "İKLİM" },
    ],
  },
  {
    title: "İklim Bilgisi (3/3)",
    across: [
      { clue: "Ülkemize güneybatıdan esen sıcak rüzgâr", answer: "LODOS" },
      { clue: "İklim olaylarına neden olan gaz", answer: "SU BUHARI" },
      { clue: "Küresel ısınmaya neden olan gazlardan biri", answer: "METAN" },
      { clue: "Sıcak kuru rüzgârlardan biri", answer: "SAMYELİ" },
      { clue: "Meridyenlerin en sıcak noktalarını birleştiren çizgi", answer: "TERMİK EKVATOR" },
    ],
    down: [
      { clue: "Don olayının en fazla görüldüğü illerimizden biri", answer: "KARS" },
      { clue: "Dünya'yı saran gaz kütlesi", answer: "ATMOSFER" },
      { clue: "Her mevsim yağışlı ve sıcak iklim", answer: "EKVATOR" },
      { clue: "Farklı özellikteki hava kütlelerinin karşılaşma alanı", answer: "CEPHE" },
      { clue: "Güneş'ten gelen zararlı ışınları süzen atmosfer katmanı", answer: "OZON" },
      { clue: "Mutlak nemin maksimum neme oranı", answer: "BAĞIL" },
      { clue: "Yağışın en çok düştüğü ilimiz", answer: "RİZE" },
      { clue: "Atmosferde oranı en fazla olan gaz", answer: "AZOT" },
    ],
  },
  {
    title: "Kayaçlar (1/2)",
    across: [
      { clue: "Magmanın yüzeye çıkıp soğumasıyla oluşan kayaç türü", answer: "VOLKANİK" },
      { clue: "Tortul kütleler arasında kalan hayvan ve bitki kalıntılarının taşlaşmış hali", answer: "FOSİL" },
      { clue: "İnce paralel yaprak şeklinde kolayca ayrılabilen plakaları olan kristalli kayaç", answer: "ŞİST" },
      { clue: "Yer kabuğunun derinliklerinde yer alan yüksek ısıdaki aktif madde", answer: "MAGMA" },
    ],
    down: [
      { clue: "Yeryüzündeki en sert madde; karbonun yüksek basın ve sıcaklık altında kristalleşmesiyle oluşan taş", answer: "ELMAS" },
      { clue: "Volkanlardan çıkan ince boyutlu malzemelerin oluşturduğu kayaç", answer: "TÜF" },
      { clue: "Dış kuvvetlerin aşındırdığı malzemelerin çukur alanlarda birikmesi", answer: "TORTUL" },
      { clue: "Kalkerle dolomitin yüksek sıcaklık ve basınç altında kristalleşmesiyle oluşan yapı malzemesi", answer: "MERMER" },
    ],
  },
  {
    title: "Kayaçlar (2/2)",
    across: [
      { clue: "Kanyonların oluşumunda etkili sert kristal yapılı magmatik kütle", answer: "GRANİT" },
      { clue: "Granitin yüksek sıcaklık ve basınç altında değişime uğraması sonucu oluşan taş", answer: "GNAYS" },
      { clue: "Kayaçların oluşumu sırasında kimyasal ve fiziksel koşulların değişmesiyle mineralojik dönüşüm süreci", answer: "METAMORFİZMA" },
      { clue: "Kalkerli arazilerdeki mağaraların tavanından aşağı doğru uzanan şekil", answer: "SARKIT" },
    ],
    down: [
      { clue: "Yer kabuğunun yapı malzemesi olan ve minerallerden oluşan madde", answer: "KAYAÇ" },
      { clue: "Genellikle siyah renkte olan volkan camı", answer: "OBSİDYEN" },
      { clue: "Granitlerin fiziksel ve kimyasal ayrışmasıyla oluşan blok yapılar", answer: "TOR" },
    ],
  },
  {
    title: "Türkiye'nin Yer Şekilleri (1/2)",
    across: [
      { clue: "Ülkemizde yer alan ovaların en genişi", answer: "KONYA" },
      { clue: "En büyük delta ovamız", answer: "ÇUKUROVA" },
      { clue: "Kalkerin geniş alanlarda erimesiyle oluşan ova", answer: "POLYE" },
      { clue: "Yağış yetersizliğine bağlı çölleşme belirtilerinin görüldüğü alanlarımız", answer: "KARAPINAR" },
      { clue: "Antalya ile Mersin arasında yer alan platomuz", answer: "TAŞELİ" },
    ],
    down: [
      { clue: "Akarsular tarafından derince yarılmış yüksek düzlük", answer: "YAYLA" },
      { clue: "Genç volkanik arazilerde aşındırma sonucu oluşan ve Nevşehir çevresinde yaygın şekil", answer: "PERİBACASI" },
      { clue: "Orta Karadeniz kıyılarında yer alan az yüksek dağ sırası", answer: "CANİK" },
      { clue: "Eğimli arazilerde oluşan akarsuların meydana getirdiği vadi tipi", answer: "BOĞAZ" },
    ],
  },
  {
    title: "Türkiye'nin Yer Şekilleri (2/2)",
    across: [
      { clue: "Yüksek kıyılarımızda dalga aşındırmasıyla oluşan yeryüzü şekli", answer: "FALEZ" },
      { clue: "Doğu Karadeniz kıyılarında yer alan yüksek dağlardan biri", answer: "KAÇKAR" },
      { clue: "En geniş buzul kütlelerine sahip dağların olduğu ilimiz", answer: "AĞRI" },
      { clue: "Ülkemiz sınırları içindeki en uzun akarsu", answer: "KIZILIRMAK" },
    ],
    down: [
      { clue: "Dağları dikine kesen akarsularla oluşturulan vadi tipi", answer: "YARMA VADİ" },
      { clue: "Ülkemizde tombolo oluşumuna örnek gösterilen yarımadalardan biri", answer: "KAPIDAĞ" },
      { clue: "Travertenleriyle ünlü kentimiz", answer: "PAMUKKALE" },
    ],
  },
  {
    title: "Bulmaca Şehirlerimiz (1/2)",
    across: [
      { clue: "Ülkemizin başkenti", answer: "ANKARA" },
      { clue: "Ülkemizin en büyük yüzölçümüne sahip kenti", answer: "KONYA" },
      { clue: "Ülkemizin en kalabalık şehri", answer: "İSTANBUL" },
      { clue: "Horozu ve Pamukkale travertenleri ile bilinen ilimiz", answer: "DENİZLİ" },
      { clue: "Ülkemizin en kuzey ucunda yer alan şehrimiz", answer: "SİNOP" },
    ],
    down: [
      { clue: "Tarihi İpek Yolu üzerindeki doğu Anadolu şehri", answer: "ERZURUM" },
      { clue: "Güneydoğu Anadolu'da Dicle kıyısında kurulan kadim şehir", answer: "DİYARBAKIR" },
    ],
  },
  {
    title: "Bulmaca Şehirlerimiz (2/2)",
    across: [
      { clue: "Ülkemiz sınırları içindeki en uzun akarsu", answer: "KIZILIRMAK" },
      { clue: "Yaz tatili için turistlerin en çok gittiği ilimiz", answer: "ANTALYA" },
      { clue: "Gül yetiştiriciliği ve gül yağıyla ünlü ilimiz", answer: "ISPARTA" },
      { clue: "Ege'nin incisi", answer: "İZMİR" },
      { clue: "B, A, N, A, T, M harfleri karışık yazılmış ilimiz", answer: "BATMAN" },
      { clue: "Harf sayısı en fazla olan ilimiz", answer: "AFYONKARAHİSAR" },
      { clue: "Şanlı sıfatıyla anılan güneydoğu ilimiz", answer: "ŞANLIURFA" },
      { clue: "Herkes gider...e biz gideriz tersine atasözüyle bilinen il", answer: "MERSİN" },
    ],
    down: [
      { clue: "Türkiye'nin kuzeybatısındaki tarihi şehir; buğday tarlalarıyla ünlü", answer: "EDİRNE" },
      { clue: "Kapadokya'nın bulunduğu il", answer: "NEVŞEHİR" },
      { clue: "'Burası... dere yolu yokuştur' türküsüyle anılan şehir", answer: "BURSA" },
      { clue: "Keban Barajı'nın yapıldığı ilin adı", answer: "ELAZIĞ" },
    ],
  },
];