/**
* kalkulator pandai besi & alkimia
* version v2.1
*/

var app = new Vue({
  el: '#coba',
  data: {
    // status karakter
    str: 1,
    int: 1,
    vit: 1,
    dex: 1,
    agi: 1,
    tech: 0,
    luk: 0,

    // masakan
    foodSTR: 0,
    foodDEX: 0,
    foodINT: 0,

    // status weapon
    weapSTRflat: 0,
    weapSTRperc: 0,
    weapDEXflat: 0,
    weapDEXperc: 0,
    weapINTflat: 0,
    weapINTperc: 0,

    // subWeap
    subWeap: 0,
    // selain perlengkapan rekomendasi diatas bisa disetting lebih lanjut dibawahnya. kasih spoiler ajah kalau ini.
    subWeapSTRflat: 0,
    subWeapSTRperc: 0,
    subWeapDEXflat: 0,
    subWeapDEXperc: 0,
    subWeapINTflat: 0,
    subWeapINTperc: 0,

    // status zirah
    armSTRflat: 0,
    armSTRperc: 0,
    armDEXflat: 0,
    armDEXperc: 0,
    armINTflat: 0,
    armINTperc: 0,

    // additional
    additional: 0,
    // selain perlengkapan rekomendasi diatas bisa disetting lebih lanjut dibawahnya. kasih spoiler ajah kalau ini.
    additionalSTRflat: 0,
    additionalSTRperc: 0,
    additionalDEXflat: 0,
    additionalDEXperc: 0,
    additionalINTflat: 0,
    additionalINTperc: 0,

    // special
    special: 0,
    // selain perlengkapan rekomendasi diatas bisa disetting lebih lanjut dibawahnya. kasih spoiler ajah kalau ini.
    specialSTRflat: 0,
    specialSTRperc: 0,
    specialDEXflat: 0,
    specialDEXperc: 0,
    specialINTflat: 0,
    specialINTperc: 0,

    // xtall tambahan
    // Beri Deskripsi: Anda harus menjumlahkan sendiri Status Xtall anda.
    xtallSTRflat: 0,
    xtallSTRperc: 0,
    xtallDEXflat: 0,
    xtallDEXperc: 0,
    xtallINTflat: 0,
    xtallINTperc: 0,

    // status pandai besi
    lvKemahiranTempa: 0,

    // status alkimia
    lvKemahiranPadu: 0,

    // status avatar/kostum
    // Avatar Aksesoris
    avaaksSTRflat: 0,
    avaaksSTRperc: 0,
    avaaksDEXflat: 0,
    avaaksDEXperc: 0,
    avaaksINTflat: 0,
    avaaksINTperc: 0,
    // Avatar (Atas)
    avaatasSTRflat: 0,
    avaatasSTRperc: 0,
    avaatasDEXflat: 0,
    avaatasDEXperc: 0,
    avaatasINTflat: 0,
    avaatasINTperc: 0,
    // Avatar (Bawah)
    avabawahSTRflat: 0,
    avabawahSTRperc: 0,
    avabawahDEXflat: 0,
    avabawahDEXperc: 0,
    avabawahINTflat: 0,
    avabawahINTperc: 0,

    // skill pandai besi
    anvilpemula: 0,
    anvilperajin: 0,
    anvilpandaibesi: 0,
    anvilpro: 0,
    tempaperlengkapan: 0,
    tempaansedang: 0,
    tempaankelastinggi: 0,
    tempaanahli: 0,
    buatperlengkapan: 5,
    kreasicermat: 0,
    kreasiahli: 0,
    perkuatperlengkapan: 0,
    penguatakurat: 0,
    penguatanahli: 0,
    // skill pandai besi & alkimia
    prosesmaterial: 0,
    // skill alkimia
    bejanapemula: 0,
    bejanaperajin: 0,
    bejanapakarpadu: 0,
    bejanapro: 0,
    paduitem: 0,
    sintesissedang: 0,
    sintetisklastinggi: 0,
    sintesisahli: 0,
    paduperlengkapan: 0,
    tekniksintesisi: 0,
    tekniksintesisii: 0,

    // input lainnya
    // kesulitan perlengkapan / item padu.
    difitem: 0,
    // level perlengkapan / item padu.
    lvitem: 0,
    // Dasar/Base potensial perlengkapan
    potitem: 0,
    // Lock yang di inginkan.
    lock: 0

  },
  computed: {
    pedang: function() {
      return this.getPot(this.add(this.str, this.dex))+this.hitungpot
    },
    pedangraya: function() {
      return this.getPot(this.str, true)+this.hitungpot
    },
    bow: function() {
      return this.getPot(this.add(this.str, this.dex))+this.hitungpot
    },
    bowgun: function() {
      return this.getPot(this.dex, true)+this.hitungpot
    },
    tongkat: function() {
      return this.getPot(this.int, true)+this.hitungpot
    },
    md: function() {
      return this.getPot(this.add(this.agi, this.int))+this.hitungpot
    },
    tinju: function() {
      return this.getPot(this.agi, true)+this.hitungpot
    },
    tombak: function() {
      return this.getPot(this.add(this.str, this.agi))+this.hitungpot
    },
    katana: function() {
      return this.getPot(this.add(this.dex, this.agi))+this.hitungpot
    },
    zirah: function() {
      return this.getPot(this.vit, true)+this.hitungpot
    },

    // total DEX Perlengkapan/Equipment
    totalDEXperlengkapanF: function() {
      return Number(this.weapDEXflat)+Number(this.subWeap)+Number(this.subWeapDEXflat)+Number(this.armDEXflat)+Number(this.additional)+Number(this.additionalDEXflat)+Number(this.special)+Number(this.specialDEXflat)
    },
    totalDEXperlengkapanP: function(){
      return Number(this.weapDEXperc)+Number(this.subWeapDEXperc)+Number(this.armDEXperc)+Number(this.additionalDEXperc)+Number(this.specialDEXperc)
    },
    // total DEX Avatar/Kostum
    totalDEXavaF: function() {
      return Number(this.avaaksDEXflat)+Number(this.avaatasDEXflat)+Number(this.avabawahDEXflat)
    },
    totalDEXavaP: function() {
      return Number(this.avaaksDEXperc)+Number(this.avaatasDEXperc)+Number(this.avabawahDEXperc)
    },

    // total DEX
    totalDEXflat: function() {
      return Number(this.foodDEX)+Number(this.totalDEXperlengkapanF)+Number(this.xtallDEXflat)+Number(this.totalDEXavaF)
    },
    totalDEXperc: function() {
      return Number(this.totalDEXperlengkapanP)+Number(this.xtallDEXperc)+(this.totalDEXavaP)
    },
    totalDEX: function() {
      let hitungINTperc = Number(this.int*(Number(this.totalDEXperc/100)))
      let hasil = Number(this.dex)+Number(this.totalDEXflat)+Number(hitungDEXperc)
      return hasil.toFixed(0)
    },

    // total STR Perlengkapan/Equipment
    totalSTRperlengkapanF: function() {
      return Number(this.weapSTRflat)+Number(this.subWeapSTRflat)+Number(this.armSTRflat)+Number(this.additionalSTRflat)+Number(this.specialSTRflat)
    },
    totalSTRperlengkapanP: function(){
      return Number(this.weapSTRperc)+Number(this.subWeapSTRperc)+Number(this.armSTRperc)+Number(this.additionalSTRperc)+Number(this.specialSTRperc)
    },
    // total STR Avatar/Kostum
    totalSTRavaF: function() {
      return Number(this.avaaksSTRflat)+Number(this.avaatasSTRflat)+Number(this.avabawahSTRflat)
    },
    totalSTRavaP: function() {
      return Number(this.avaaksSTRperc)+Number(this.avaatasSTRperc)+Number(this.avabawahSTRperc)
    },

    // total STR
    totalSTRflat: function() {
      return Number(this.foodSTR)+Number(this.totalSTRperlengkapanF)+Number(this.xtallSTRflat)+Number(this.totalSTRavaF)
    },
    totalSTRperc: function() {
      return Number(this.totalSTRperlengkapanP)+Number(this.xtallSTRperc)+(this.totalSTRavaP)
    },
    totalSTR: function() {
      let hitungSTRperc = Number(this.str*(Number(this.totalSTRperc/100)))
      let hasil = Number(this.str)+Number(this.totalSTRflat)+Number(hitungSTRperc)
      return hasil.toFixed(0)
    },

    // total INT Perlengkapan/Equipment
    totalINTperlengkapanF: function() {
      return Number(this.weapINTflat)+Number(this.subWeapINTflat)+Number(this.armINTflat)+Number(this.additionalINTflat)+Number(this.specialINTflat)
    },
    totalINTperlengkapanP: function(){
      return Number(this.weapINTperc)+Number(this.subWeapINTperc)+Number(this.armINTperc)+Number(this.additionalINTperc)+Number(this.specialINTperc)
    },
    // total INT Avatar/Kostum
    totalINTavaF: function() {
      return Number(this.avaaksINTflat)+Number(this.avaatasINTflat)+Number(this.avabawahINTflat)
    },
    totalINTavaP: function() {
      return Number(this.avaaksINTperc)+Number(this.avaatasINTperc)+Number(this.avabawahINTperc)
    },

    // total INT
    totalINTflat: function() {
      return Number(this.foodINT)+Number(this.totalINTperlengkapanF)+Number(this.xtallINTflat)+Number(this.totalINTavaF)
    },
    totalINTperc: function() {
      return Number(this.totalINTperlengkapanP)+Number(this.xtallINTperc)+(this.totalINTavaP)
    },
    totalINT: function() {
      let hitungINTperc = Number(this.int*(Number(this.totalINTperc/100)))
      let hasil = Number(this.int)+Number(this.totalINTflat)+Number(hitungINTperc)
      return hasil.toFixed(0)
    },

    // skill pandai besi
    bataslvKemahiranTempa: function() {
      let hasil = 50+Number(this.anvilpemula*5)+Number(this.anvilperajin*5)+Number(this.anvilpandaibesi*5)+Number(this.anvilpro*5)
      return hasil.toFixed(0)
    },
    bonusreducebahanP: function() {
      let hasil = Number(Math.floor(this.lvKemahiranTempa/10))+Number(Math.floor(this.lvKemahiranTempa/50))
      return hasil.toFixed(0)
    },
    bpotskillfs: function() {
      let hasil = 5+Number(Math.floor(this.tech/10))
      return hasil.toFixed(0)
    },
    potskill: function() {
      let pot = Number(Math.floor(Number(this.potitem)*((Number(this.kreasicermat)+Number(this.kreasiahli))/100)))
      return pot.toFixed(0)
    },
    hitungpot: function() {
      let pot = Number(this.potitem)+Number(this.potskill)
    },

    // skill pandai besi & alkimia
    bonusproc: function() {
      let proc = 80+Number(this.prosesmaterial)
      return proc.toFixed(0)
    },

    // skill alkimia
    bataslvKemahiranPadu: function() {
      let hasil = 50+Number(this.bejanapemula*5)+Number(this.bejanaperajin*5)+Number(this.bejanapakarpadu*5)+(this.bejanapro)
      return hasil.toFixed(0)
    },
    bonussskillA: function() {
      return Number(this.sintesissedang)+Number(this.sintetisklastinggi)+Number(sintesisahli)
    },
    bonusreducebahanA: function(){
      return Number(this.sintesissedang)+Number(this.sintetisklastinggi)+Number(sintesisahli)
    },
    maxlock: function() {
      let hasil = 1+Number(Math.floor(this.lvKemahiranPadu/50))
      return hasil.toFixed(0)
    },
    keterampilanpadu: function() {
      let hasil = 50+Number(this.paduperlengkapan*10)+Number(this.tekniksintesisi*15)+Number(this.tekniksintesisii*20)+Number(this.tech*2)
      return hasil.toFixed(0)
    },
    pinaltylock: function() {
      let pinalty = Number(this.lock*this.lock)/2
      return pinalty.toFixed(1)
    },
    suksesratelock: function() {
      let srlock = Number(this.keterampilanpadu)/Number(this.pinaltylock)
      return srlock.toFixed(0)
    },

    // status pandai besi pemain
    // P = Pandai Besi
    kesulitanPemainP: function() {
      let hasil = Number(this.tech/2)+Number(this.totalDEX/6)+Number(this.lvKemahiranTempa)
      return hasil.toFixed(0)
    },
    suksesrateP: function() {
      let hasil = 10+Number(this.kesulitanPemainP)-Number(this.difitem)+Number(this.totalSTR/10)
      return hasil.toFixed(0)
    },
    // status alkimia pemain
    // A = Alkimia
    kesulitanPemainA: function() {
      let hasil = Number(this.tech/2)+Number(this.totalDEX/6)+Number(this.lvKemahiranPadu)
      return hasil.toFixed(0)
    },
    suksesrateP: function() {
      let hasil = 10+Number(this.kesulitanPemainA)-Number(this.difitem)+Number(this.totalINT/10)+Number(this.bonussskillA)
      return hasil.toFixed(0)
    },
    // status pandai besi & alkimia
    maxkemahiran: function () {
      let hasil = 11+Number(this.lvitem)
      return hasil.toFixed(0)
    }
  },
  methods: {
    getPot(stat, bonus = false) {
      stat = Number(stat)

      if(bonus) {
        return Number(Math.floor((stat/20)*2))
      }

      return Number(Math.floor(stat/20))
    },
    add(a, b) {
      a = Number(a)
      b = Number(b)
      var c = a+b
      return Number(c)
    }
  }
});