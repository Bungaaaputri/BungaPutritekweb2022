Vue.createApp({
    data() {
        return {
            // Artikel
            dataArtikel: [],
            bacain: null,

            // Awalan
            nama: "Bunga Putri",
            nama_l: "Bunga Putri Tatwo Kelas B",
            nama_l_desc: "If the plan doesn't work, change the plan but never the goal.",
            desc1: "Tugas tekweb",
            desc_side: "Project Tekweb 2022",


            // about me
            jd: "About Me",
            navbar: [
                {
                    href: "#top",
                    gmb: "fa fa-globe",
                    nama: "Hi"
                },
                {
                    href: "#about",
                    gmb: "fa fa-pencil",
                    nama: "About"
                },
                {
                    href: "#tabel",
                    gmb: "fa fa-paperclip",
                    nama: "Tabel Keterampilan"
                },
                {
                    href: "#projects",
                    gmb: "fa fa-newspaper-o",
                    nama: "My Articles"
                },
            ],
            social: [
                {
                    link: "https://www.instagram.com/ptbungaa/?igshid=YmMyMTA2M2Y=",
                    gmb: "fa fa-instagram"
                },
                {
                    link: "https://twitter.com/",
                    gmb: "fa fa-twitter"
                },
                {
                    link: "https://github.com/Bungaaaputri",
                    gmb: "fa fa-github"
                },
            ],
            deskripsi_aku: "Lahir 2 Desember 2001, tinggal di Yogyakarta bersama ibu saja. Bercita-cita sebagai wirausaha. Sekarang menempuh pendidikan di Universitas Ahmad Dahlan mengambil jurusan Sistem Informasi.",


            // Tabel Keterampilan
            tabel_keterampilan: {
                judul: "Tabel Keterampilan",
                desc: "berisi tentang seluruh kteterampilan yang aku miliki selama berkuliah di UAD dan juga selama masa pendidikan sebelumnya",
                thead: ["NO.", "KETERAMPILAN", "LEVEL"],
                width: "width: 3em",
                tabel: [
                    {
                        "k": "Microsoft Word",
                        "l": "Advance"
                    },
                    {
                        "k": "Microsoft Excell",
                        "l": "Advance"
                    },
                    {
                        "k": "Microsoft Power Point",
                        "l": "Advance"
                    },
                    {
                        "k": "Javascript",
                        "l": "Intermediatte"
                    },
                    {
                        "k": "Java",
                        "l": "Advance"
                    },
                    {
                        "k": "Python",
                        "l": "intermediatte"
                    },
                    {
                        "k": "HTML",
                        "l": "Advance"
                    },
                    {
                        "k": "CSS",
                        "l": "Intermediatte"
                    },
                ]
            }


        };
    },
    methods: { //tempat menambahkan fungsi-fungsi
        ambilDataMarkdown() {
            axios
                .get(
                    "https://raw.githubusercontent.com/Bungaaaputri/tekweb2022/master/artikel/data.json"
                )
                .then((res) => {
                    console.log(res.data);
                    this.dataArtikel = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        tampilkanMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const bacain = urlParams.get('bacain');
            var converter = new showdown.Converter();
            axios
                .get(
                    "https://raw.githubusercontent.com/Bungaaaputri/tekweb2022/master/artikel/"+bacain
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.bacain = html;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    beforeMount() { //fungsi yang dipanggil oleh vue sebelum mount terjadi
        this.ambilDataMarkdown(),
        this.tampilkanMarkdown()

    },
}).mount("#app");


(function ($) {
    "use strict";
    $('.navigation').singlePageNav({
        currentClass: 'active'
    });
    $('.toggle-menu').click(function () {
        $('.responsive-menu').stop(true, true).slideToggle();
        return false;
    });
})(jQuery);






