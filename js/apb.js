var app = new Vue({
    el: '#app',
    data: {
        versiKalkulator: "v21.05.14",
        // status karakter....................................................
        str: 1,
        int: 1,
        vit: 1,
        dex: 292,
        agi: 1,
        tec: 255,
        luk: 0,

        // status masakan....................................................
        foodSTR: 0,
        foodDEX: 0,
        foodINT: 0,

        // status perlengkapan....................................................
        // status senjata
        weapSTRflat: 0,
        weapSTRperc: 0,
        weapDEXflat: 0,
        weapDEXperc: 0,
        weapINTflat: 0,
        weapINTperc: 0,
        // sub-senjata
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
        // perlengkapan tambahan
        additional: 0,
        // selain perlengkapan rekomendasi diatas bisa disetting lebih lanjut dibawahnya. kasih spoiler ajah kalau ini.
        additionalSTRflat: 0,
        additionalSTRperc: 0,
        additionalDEXflat: 0,
        additionalDEXperc: 0,
        additionalINTflat: 0,
        additionalINTperc: 0,
        // perlengkapan spesial
        special: 0,
        // selain perlengkapan rekomendasi diatas bisa disetting lebih lanjut dibawahnya. kasih spoiler ajah kalau ini.
        specialSTRflat: 0,
        specialSTRperc: 0,
        specialDEXflat: 0,
        specialDEXperc: 0,
        specialINTflat: 0,
        specialINTperc: 0,
        // xtall tambahan
        xtall1: 0,
        xtall2: 0,
        jxtall1: 1,
        jxtall2: 1,
        // Beri Deskripsi: Anda harus menjumlahkan sendiri Status Xtall anda.
        xtallSTRflat: 0,
        xtallSTRperc: 0,
        xtallDEXflat: 0,
        xtallDEXperc: 0,
        xtallINTflat: 0,
        xtallINTperc: 0,

        // status avatar/kostum....................................................
        // Avatar Aksesoris
        avaAksSTRflat: 0,
        avaAksSTRperc: 0,
        avaAksDEXflat: 0,
        avaAksDEXperc: 0,
        avaAksINTflat: 0,
        avaAksINTperc: 0,
        // Avatar (Atas)
        avaAtasSTRflat: 0,
        avaAtasSTRperc: 0,
        avaAtasDEXflat: 0,
        avaAtasDEXperc: 0,
        avaAtasINTflat: 0,
        avaAtasINTperc: 0,
        // Avatar (Bawah)
        avaBawahSTRflat: 0,
        avaBawahSTRperc: 0,
        avaBawahDEXflat: 0,
        avaBawahDEXperc: 0,
        avaBawahINTflat: 0,
        avaBawahINTperc: 0,

        // perlengkapan yang dibuat
        namaPerlengkapan: '[Tongkat (Staff)] Tongkat Dirgahayu ke-5 VII (5th Anniv Staff VII)',
        tautanPerlengkapan: 'https://toram-id.info/item/2982',
        lvPerlengkapan: 185,
        kesulitanPerlengkapan: 210,
        potential: 48,

        // ramuan yang dibuat
        namaRamuan: "[Item Praktis] Nektar (x10)",
        tautanRamuan: 'https://toram-id.info/item/2484',
        lvRamuan: 150,
        kesulitanRamuan: 125,


        // level kemahiran tempa....................................................
        lvKemahiranTempa: 187,
        lvKemahiranPadu: 150,

        // skill pandai besi & alkimia....................................................
        lvProsesMaterial: 0,
        // skill pandai besi....................................................
        // skill anvil
        lvAnvilPemula: 0,
        lvAnvilPerajin: 0,
        lvAnvilPandaiBesi: 0,
        lvAnvilPro: 0,
        // skill tempa perlengkapan
        lvTempaPerlengkapan: 0,
        lvTempaanSedang: 0,
        lvTempaanKelasTinggi: 0,
        lvTempaanAhli: 0,
        // skill buat perlengkapan
        lvBuatPerlengkapan: 0,
        lvKreasiCermat: 0,
        lvKreasiAhli: 0,
        // skill perkuat perlengkapan
        lvPerkuatPerlengkapan: 0,
        lvPenguatanAkurat: 0,
        lvPenguatanAhli: 0,
         // kemahiran & keterampilan tempa
         dasarKemahiranTempa: 50,
         dasarKeterampilanTempa: 50,

        // skill alkimia....................................................
        // skill bejana
        lvBejanaPemula: 5,
        lvBejanaPerajin: 5,
        lvBejanaPakarPadu: 10,
        lvBejanaPro: 10,
        // skill padu item
        lvPaduItem: 10,
        lvSintesisSedang: 10,
        lvSintesisKlasTinggi: 10,
        lvSintesisAhli: 10,
        // skill padu perlengkapan
        lvPaduPerlengkapan: 5,
        lvTeknikSintesisI: 5,
        lvTeknikSintesisII: 6,
        // kemahiran & keterampilan padu
        dasarKemahiranPadu: 50,
        dasarKeterampilanPadu: 50,
        
        // Pinalty
        pty1: 0.5,
        pty2: 2,
        pty3: 4.5,
        pty4: 8,
        pty5: 12.5,

    },
    computed: {
        // perhitungan status lengkap............................................
        // total status
        totalStatusKarakter: function() {
            return hasil = Number(this.str)+Number(this.int)+Number(this.vit)+Number(this.agi)+Number(this.dex)+Number(this.tec)+Number(this.luk)
        },

        // STR perlengkapan flat
        totalPerlengkapanSTRflat1: function() {
            return hasil = Number(this.weapSTRflat)+Number(this.subWeapSTRflat)+Number(this.armSTRflat)+Number(this.additionalSTRflat)+Number(this.specialSTRflat)
        },
        totalPerlengkapanSTRflat2: function() {
            return hasil = Number(this.totalPerlengkapanSTRflat1)+Number(this.xtallSTRflat)
        },
        // STR perlengkapan perc
        totalPerlengkapanSTRperc1: function() {
            return hasil = Number(this.weapSTRperc)+Number(this.subWeapSTRperc)+Number(this.armSTRperc)+Number(this.additionalSTRperc)+Number(this.specialSTRperc)
        },
        totalPerlengkapanSTRperc2: function() {
            return hasil = Number(this.totalPerlengkapanSTRperc1)+Number(this.xtallSTRperc)
        },


        // STR avatar flat & perc
        totalAvaSTRflat: function() {
            return hasil = Number(this.avaAksSTRflat)+Number(this.avaAtasSTRflat)+Number(this.avaBawahSTRflat)
        },
        totalAvaSTRperc: function() {
            return hasil = Number(this.avaAksSTRperc)+Number(this.avaAtasSTRperc)+Number(this.avaBawahSTRperc)
        },

        // total STR flat & perc
        totalSTRflat: function() {
            return hasil = Number(this.foodSTR)+Number(this.totalPerlengkapanSTRflat2)+Number(this.totalAvaSTRflat)
        },
        totalSTRperc: function() {
            return hasil = Number(this.totalPerlengkapanSTRperc2)+Number(this.totalAvaSTRperc)
        },
        totalSTRptf: function() {
            return hasil = (Number(this.totalSTRperc)/100)*Number(this.str)
        },
        totalSTRkes: function() {
            return hasil = Number(this.totalSTRflat)+Number(this.totalSTRptf)
        },
        totalSTR: function() {
            return hasil = Number(this.totalSTRkes)+Number(this.str)
        },

        // DEX perlengkapan flat
        totalPerlengkapanDEXflat1: function() {
            return hasil = Number(this.weapDEXflat)+Number(this.subWeapDEXflat)+Number(this.armDEXflat)+Number(this.additionalDEXflat)+Number(this.specialDEXflat)+Number(this.additional)+Number(this.special)
        },
        totalPerlengkapanDEXflat2: function() {
            return hasil = Number(this.totalPerlengkapanDEXflat1)+Number(this.totalXtallDEXflat)
        },
        // DEX perlengkapan perc
        totalPerlengkapanDEXperc1: function() {
            return hasil = Number(this.weapDEXperc)+Number(this.subWeapDEXperc)+Number(this.armDEXperc)+Number(this.additionalDEXperc)+Number(this.specialDEXperc)
        },
        totalPerlengkapanDEXperc2: function() {
            return hasil = Number(this.totalPerlengkapanDEXperc1)+Number(this.xtallDEXperc)
        },


        // DEX avatar flat & perc
        totalAvaDEXflat: function() {
            return hasil = Number(this.avaAksDEXflat)+Number(this.avaAtasDEXflat)+Number(this.avaBawahDEXflat)
        },
        totalAvaDEXperc: function() {
            return hasil = Number(this.avaAksDEXperc)+Number(this.avaAtasDEXperc)+Number(this.avaBawahDEXperc)
        },
        
        // total DEX flat & perc
        totalDEXflat: function() {
            return hasil = Number(this.foodDEX)+Number(this.totalPerlengkapanDEXflat2)+Number(this.totalAvaDEXflat)
        },
        totalDEXperc: function() {
            return hasil = Number(this.totalPerlengkapanDEXperc2)+Number(this.totalAvaDEXperc)
        },
        totalDEXptf: function() {
            return hasil = (Number(this.totalDEXperc)/100)*Number(this.dex)
        },
        totalDEXkes: function() {
            return hasil = Number(this.totalDEXflat)+Number(this.totalDEXptf)
        },
        totalDEX: function() {
            return hasil = Number(this.totalDEXkes)+Number(this.dex)
        },

        // INT perlengkapan flat
        totalPerlengkapanINTflat1: function() {
            return hasil = Number(this.weapINTflat)+Number(this.subWeapINTflat)+Number(this.armINTflat)+Number(this.additionalINTflat)+Number(this.specialINTflat)
        },
        totalPerlengkapanINTflat2: function() {
            return hasil = Number(this.totalPerlengkapanINTflat1)+Number(this.xtallINTflat)
        },
        // INT perlengkapan perc
        totalPerlengkapanINTperc1: function() {
            return hasil = Number(this.weapINTperc)+Number(this.subWeapINTperc)+Number(this.armINTperc)+Number(this.additionalINTperc)+Number(this.specialINTperc)
        },
        totalPerlengkapanINTperc2: function() {
            return hasil = Number(this.totalPerlengkapanINTperc1)+Number(this.xtallINTperc)
        },


        // INT avatar flat & perc
        totalAvaINTflat: function() {
            return hasil = Number(this.avaAksINTflat)+Number(this.avaAtasINTflat)+Number(this.avaBawahINTflat)
        },
        totalAvaINTperc: function() {
            return hasil = Number(this.avaAksINTperc)+Number(this.avaAtasINTperc)+Number(this.avaBawahINTperc)
        },

        // total INT flat & perc
        totalINTflat: function() {
            return hasil = Number(this.foodINT)+Number(this.totalPerlengkapanINTflat2)+Number(this.totalAvaINTflat)
        },
        totalINTperc: function() {
            return hasil = Number(this.totalPerlengkapanINTperc2)+Number(this.totalAvaINTperc)
        },
        totalINTptf: function() {
            return hasil = (Number(this.totalINTperc)/100)*Number(this.int)
        },
        totalINTkes: function() {
            return hasil = Number(this.totalINTflat)+Number(this.totalINTptf)
        },
        totalINT: function() {
            return hasil = Number(this.totalINTkes)+Number(this.int)
        },

        // xtall
        totalXtall1: function() {
            return hasil = Number(this.xtall1)*Number(this.jxtall1)
        },
        totalXtall2: function() {
            return hasil = Number(this.xtall2)*Number(this.jxtall2)
        },
        totalXtallDEXflat: function() {
            return hasil = Number(this.totalXtall1)+Number(this.totalXtall2)
        },


        // kesulitan pemain (difficulty player)
        kesPemainTEC: function() {
            return hasil = Number(Math.floor(this.tec/2))
        },
        kesPemainDEX: function() {
            return hasil = Number(Math.floor(this.dex/6))
        },
        kesPemainTD: function() {
            return hasil = Number(this.kesPemainTEC)+Number(this.kesPemainDEX)
        },
        totalKesPemainPandaiBesi: function() {
            return hasil = Number(this.lvKemahiranTempa)+Number(this.kesPemainTD)
        },
        totalKesPemainAlkimia: function() {
            return hasil = Number(this.lvKemahiranPadu)+Number(this.kesPemainTD)
        },

        // perhitungan pandai besi...............................................

        // hitung potensial perlengkapan
        pedang: function() {
            return this.getPot(this.add(this.str, this.dex))
        },
        pedangraya: function() {
            return this.getPot(this.str, true)
        },
        bow: function() {
            return this.getPot(this.add(this.str, this.dex))
        },
        bowgun: function() {
            return this.getPot(this.dex, true)
        },
        tongkat: function() {
            return this.getPot(this.int, true)
        },
        md: function() {
            return this.getPot(this.add(this.agi, this.int))
        },
        tinju: function() {
            return this.getPot(this.agi, true)
        },
        tombak: function() {
            return this.getPot(this.add(this.str, this.agi))
        },
        katana: function() {
            return this.getPot(this.add(this.dex, this.agi))
        },
        zirah: function() {
            return this.getPot(this.vit, true)
        },

        // skill pandai besi & alkimia
        prosesBahan: function() {
            return hasil = 80 + Number(this.lvProsesMaterial) + "% s.d 100%"
        },

        // skill pandai besi........................................................
        // skill anvil
        batasKemTempa1: function() {
            return hasil = Number(this.lvAnvilPemula*5)
        },
        batasKemTempa2: function() {
            return hasil = Number(this.lvAnvilPerajin*5)
        },
        batasKemTempa3: function() {
            return hasil = Number(this.lvAnvilPandaiBesi*5)
        },
        batasKemTempa4: function() {
            return hasil = Number(this.lvAnvilPro*5)
        },
        batasLvKemahiranTempa: function() {
            return hasil = Number(this.dasarKemahiranTempa)+Number(this.batasKemTempa1)+Number(this.batasKemTempa2)+Number(this.batasKemTempa3)+Number(this.batasKemTempa4)
        },
        // maksimal kemahiran padu
        maxKemahiranTempa: function() {
            return hasil = Number(this.lvPerlengkapan)+11
        },

        // total poin skill pandai besi
        totalPoinSkillAnvil: function() {
            return hasil = Number(this.lvAnvilPemula)+Number(this.lvAnvilPerajin)+Number(this.lvAnvilPandaiBesi)+Number(this.lvAnvilPro)
        },
        totalPoinSkillTempaPerlengkapan: function() {
            return hasil = Number(this.lvTempaPerlengkapan)+Number(this.lvTempaanSedang)+Number(this.lvTempaanKelasTinggi)+Number(this.lvTempaanAhli)
        },
        totalPoinSkillBuatPerlengkapan: function() {
            return hasil = Number(this.lvBuatPerlengkapan)+Number(this.lvKreasiCermat)+Number(this.lvKreasiAhli)
        },
        totalPoinSkillPerkuatPerlengkapan: function() {
            return hasil = Number(this.lvPerkuatPerlengkapan)+Number(this.lvPenguatanAkurat)+Number(this.lvPenguatanAhli)
        },
        totalPoinSkillPandaiBesi: function() {
            return hasil = Number(this.totalPoinSkillAnvil)+Number(this.totalPoinSkillTempaPerlengkapan)+Number(this.totalPoinSkillBuatPerlengkapan)+Number(this.totalPoinSkillPerkuatPerlengkapan)
        },



        // skill alkimia..............................................
        // skill bejana
        batasKemPadu1: function() {
            return hasil = Number(this.lvBejanaPemula*5)
        },
        batasKemPadu2: function() {
            return hasil = Number(this.lvBejanaPerajin*5)
        },
        batasKemPadu3: function() {
            return hasil = Number(this.lvBejanaPakarPadu*5)
        },
        batasKemPadu4: function() {
            return hasil = Number(this.lvBejanaPro*5)
        },
        batasLvKemahiranPadu: function() {
            return hasil = Number(this.dasarKemahiranPadu)+Number(this.batasKemPadu1)+Number(this.batasKemPadu2)+Number(this.batasKemPadu3)+Number(this.batasKemPadu4)
        },
        // maksimal kemahiran padu
        maxKemahiranPadu: function() {
            return hasil = Number(this.lvRamuan)+11
        },

        // total poin skill alkimia
        totalPoinSkillBejana: function() {
            return hasil = Number(this.lvBejanaPemula)+Number(this.lvBejanaPerajin)+Number(this.lvBejanaPakarPadu)+Number(this.lvBejanaPro)
        },
        totalPoinSkillPaduItem: function() {
            return hasil = Number(this.lvPaduItem)+Number(this.lvSintesisSedang)+Number(this.lvSintesisKlasTinggi)+Number(this.lvSintesisAhli)
        },
        totalPoinSkillPaduPerlengkapan: function() {
            return hasil = Number(this.lvPaduPerlengkapan)+Number(this.lvTeknikSintesisI)+Number(this.lvTeknikSintesisII)
        },
        totalPoinSkillAlkimia: function() {
            return hasil = Number(this.totalPoinSkillBejana)+Number(this.totalPoinSkillPaduItem)+Number(this.totalPoinSkillPaduPerlengkapan)
        },

        // pengurangan poin bahan
        penguPoinBahan1: function() {
            return hasil = Number(this.lvSintesisSedang)
        },
        penguPoinBahan2: function() {
            return hasil = Number(this.lvSintesisKlasTinggi)
        },
        penguPoinBahan3: function() {
            return hasil = Number(this.lvSintesisAhli)
        },
        totalPenguranganPoinBahan: function() {
            return hasil = Number(this.penguPoinBahan1)+Number(this.penguPoinBahan2)+Number(this.penguPoinBahan3)
        },

        // sukses rate padu ramuan
        srPaduRamuan1: function() {
            return hasil = Number(this.lvPaduItem)
        },
        srPaduRamuan2: function() {
            return hasil = Number(this.lvSintesisSedang)
        },
        srPaduRamuan3: function() {
            return hasil = Number(this.lvSintesisKlasTinggi)
        },
        srPaduRamuan4: function() {
            return hasil = Number(this.lvSintesisAhli)
        },
        totalSrPaduRamuan1: function() {
            return hasil = Number(this.lvPaduItem)
        },

        srPaduRamuanINT: function() {
            return hasil = Number(this.int)/10
        },
        totalSrPaduRamuan2: function() {
            return hasil = Number(this.totalSrPaduRamuan1)+Number(this.srPaduRamuanINT)
        },
        totalSrPaduRamuan3: function() {
            let hasil = Number(this.totalSrPaduRamuan2)+Number(this.totalKesPemainAlkimia)-Number(this.kesulitanRamuan)
            return hasil.toFixed(2)
        },
        totalSrPaduRamuan4: function() {
            return hasil = Number(Math.floor(this.totalSrPaduRamuan3))
        },


        // keterampilan padu
        ketPadu1: function() {
            return hasil = Number(this.lvPaduPerlengkapan)*10
        },
        ketPadu2: function() {
            return hasil = Number(this.lvTeknikSintesisI)*15
        },
        ketPadu3: function() {
            return hasil = Number(this.lvTeknikSintesisII)*20
        },
        ketPadu4: function() {
            return hasil = Number(this.tec)*2
        },
        totalKeterampilanPadu: function() {
            return hasil = Number(this.dasarKeterampilanPadu)+Number(this.ketPadu1)+Number(this.ketPadu2)+Number(this.ketPadu3)+Number(this.ketPadu4)
        },

        // lock / padu perlengkapan
        lock: function() {
            let a = Number(Math.floor(this.lvKemahiranPadu))/50 + 1
            return hasil = Number(Math.min(a, 5))
        },
        lock1: function() {
            let a = Number(this.totalKeterampilanPadu)/Number(this.pty1)
            let hasil = Number(Math.min(a, 100))
            return hasil.toFixed(2)
        },
        lock2: function() {
            let a = Number(this.totalKeterampilanPadu)/Number(this.pty2)
            let hasil = Number(Math.min(a, 100))
            return hasil.toFixed(2)
        },
        lock3: function() {
            let a = Number(this.totalKeterampilanPadu)/Number(this.pty3)
            let hasil = Number(Math.min(a, 100))
            return hasil.toFixed(2)
        },
        lock4: function() {
            let a = Number(this.totalKeterampilanPadu)/Number(this.pty4)
            let hasil = Number(Math.min(a, 100))
            return hasil.toFixed(2)
        },
        lock5: function() {
            let a = Number(this.totalKeterampilanPadu)/Number(this.pty5)
            let hasil = Number(Math.min(a, 100))
            return hasil.toFixed(2)
        },
        srLock1: function() {
            let a = this.lock;
            if (a == 5) {
                return hasil = this.lock5
            } 
            else if (a == 4) {
                return hasil = this.lock4
            }
            else if (a == 3) {
                return hasil = this.lock3
            }
            else if (a == 2) {
                return hasil = this.lock2
            }
            else if (a == 1) {
                return hasil = this.lock1
            }
        }

    },
    methods: {
        getPot(stat, bonus=false) {
            stat = Number(stat)
            if (bonus) {
                return Number(Math.floor((stat / 20) * 2))
            }
            return Number(Math.floor(stat / 20))
        },
        add(a, b) {
            a = Number(a)
            b = Number(b)
            var c = a + b
            return Number(c)
        }
    }
});
