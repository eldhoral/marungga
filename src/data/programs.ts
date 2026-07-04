export interface Program {
  slug: string;
  title: string;
  description: string;
  content?: string;
  date?: string;
  funding?: string;
  imageUrl?: string;
  galleryUrls?: string[];
}

export const ALL_PROGRAMS: Program[] = [
  {
    slug: "asesmen-sekolah-wash",
    title: "Asesmen Sekolah & WASH",
    description: "Melakukan asesmen di sekolah di Kecamatan Sulamu Kabupaten Kupang terkait layanan Pendidikan dasar dan WASH.",
    date: "2019",
    content: "Melakukan asesmen komprehensif di berbagai sekolah di Kecamatan Sulamu, Kabupaten Kupang. Asesmen ini difokuskan pada evaluasi layanan pendidikan dasar serta infrastruktur Water, Sanitation, and Hygiene (WASH). Hasil asesmen ini menjadi landasan untuk program intervensi selanjutnya guna meningkatkan kualitas kesehatan dan pendidikan anak-anak di wilayah tersebut. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06937 (2).jpg",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114085848.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114094555.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9109.JPG"]
  },
  {
    slug: "pendampingan-tawa-semesta",
    title: "Pendampingan TAWA Semesta",
    description: "Memfasilitasi LSM TAWA Semesta di Makasar untuk mengembangkan rencana strategi program penggalangan dana dan ekonomi berkelanjutan.",
    date: "2019-2020",
    content: "Program pendampingan berkelanjutan untuk LSM TAWA Semesta di Makasar. Kami memfasilitasi pengembangan rencana strategis yang berfokus pada program penggalangan dana yang efektif serta inisiatif ekonomi berkelanjutan. Tujuannya adalah untuk memperkuat kapasitas kelembagaan mereka agar dapat memberikan dampak yang lebih luas.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9110.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9113.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9307.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9308.JPG"]
  },
  {
    slug: "distribusi-perlengkapan-sekolah",
    title: "Distribusi Perlengkapan Sekolah",
    description: "Bekerja sama dengan CHARIS National Academy dan Sumba Integrated Development (SID) mendistribusikan perlengkapan sekolah untuk 20 anak di Desa Wanggabewa Kecamatan Sumba Timur.",
    date: "2019",
    content: "Bekerja sama dengan mitra strategis kami, CHARIS National Academy dan Sumba Integrated Development (SID), program ini berhasil mendistribusikan perlengkapan sekolah yang sangat dibutuhkan oleh 20 anak di Desa Wanggabewa, Kecamatan Sumba Timur. Langkah ini diambil untuk memastikan anak-anak memiliki akses ke fasilitas belajar yang memadai.\n\nSed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7304.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7309.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06937 (2).jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114085848.jpg"]
  },
  {
    slug: "pengembangan-anak-muda",
    title: "Pengembangan Anak Muda",
    description: "Memfasilitasi Kegiatan Pengembangan Diri bagi 20 orang Anak Muda di Kota Kupang yang didanai secara mandiri.",
    date: "Juli - Oktober 2020",
    content: "Fasilitasi kegiatan pengembangan kapasitas diri yang menargetkan 20 pemuda di Kota Kupang. Program yang didanai secara mandiri ini bertujuan untuk membekali generasi muda dengan keterampilan abad ke-21, kepemimpinan, serta kewirausahaan.\n\nFusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114094555.jpg",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9109.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9110.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9113.JPG"]
  },
  {
    slug: "suplementasi-wifa",
    title: "Suplementasi WIFA",
    description: "Melaksanakan Lokakarya Orientasi dan Peningkatan Kapasitas Program Suplementasi WIFA di Kabupaten TTU dan Kupang.",
    date: "Okt 2020 - Mar 2021",
    funding: "Nutrition International",
    content: "Rangkaian lokakarya orientasi dan peningkatan kapasitas untuk Program Suplementasi Weekly Iron and Folic Acid (WIFA) bagi remaja putri dan wanita usia subur di Kabupaten TTU dan Kupang. Program ini didukung oleh Nutrition International untuk menanggulangi masalah anemia di wilayah tersebut.\n\nCurabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06937 (2).jpg",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114085848.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114094555.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9109.JPG"]
  },
  {
    slug: "kapasitas-eks-pekerja-migran",
    title: "Kapasitas Eks Pekerja Migran",
    description: "Bersama SID memfasilitasi peningkatan kapasitas kehidupan bagi Eks Pekerja migran di Kabupaten Sumba Barat dan Sumba Barat Daya.",
    date: "Feb - Apr 2021",
    funding: "International Of Migration (IOM)",
    content: "Berkolaborasi dengan Sumba Integrated Development (SID) dan didukung oleh International Organization for Migration (IOM), kami mengadakan program peningkatan kapasitas ekonomi dan psikososial bagi para eks pekerja migran di Kabupaten Sumba Barat dan Sumba Barat Daya. Program ini membantu reintegrasi mereka kembali ke masyarakat secara produktif.\n\nIn hac habitasse platea dictumst. Phasellus pellentesque. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9307.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9308.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7304.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7309.JPG"]
  },
  {
    slug: "respon-bencana-seroja",
    title: "Respon Bencana Seroja",
    description: "Melakukan respon Bencana kasus Seroja di Kabupaten dan Kota Kupang secara mandiri bersama TAWA Semesta, IBU Foundation, dll.",
    date: "Maret - April 2021",
    content: "Tindakan cepat tanggap darurat dalam merespon badai siklon tropis Seroja yang melanda Kabupaten dan Kota Kupang. Kami bergerak secara independen serta berkoordinasi dengan mitra seperti TAWA Semesta dan IBU Foundation untuk mendistribusikan bantuan logistik, perlengkapan higienis, dan dukungan psikososial kepada korban terdampak.\n\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06937 (2).jpg",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114085848.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114094555.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9109.JPG"]
  },
  {
    slug: "pelatihan-menulis-kreatif",
    title: "Pelatihan Menulis Kreatif",
    description: "Menyelenggarakan Pelatihan Online Teknik Menulis Kreatif bagi masyarakat NTT untuk berkontribusi pada literasi.",
    date: "Agustus 2021",
    content: "Program pelatihan daring yang terbuka untuk masyarakat luas di Nusa Tenggara Timur, berfokus pada pengembangan teknik menulis kreatif. Tujuan utama program ini adalah meningkatkan minat literasi masyarakat sekaligus mendokumentasikan kearifan lokal melalui tulisan.\n\nMorbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9110.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9113.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9307.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9308.JPG"]
  },
  {
    slug: "proyek-bisa-nutrisi",
    title: "Proyek BISA (Nutrisi)",
    description: "Rapat Perencanaan Mikro & Peningkatan Kapasitas mekanisme rantai pasok komoditas nutrisi di Kabupaten TTU dan Kupang.",
    date: "Juni - November 2021",
    content: "Proyek BISA (Better Investment for Stunting Alleviation) berfokus pada rapat perencanaan mikro serta penguatan mekanisme rantai pasok komoditas nutrisi esensial di tingkat kabupaten (TTU dan Kupang). Hal ini bertujuan memastikan ketersediaan suplemen gizi bagi ibu hamil dan balita.\n\nPraesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06912.jpg",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06916.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06925.jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06932.jpg"]
  },
  {
    slug: "proyek-lii-marapu",
    title: "Proyek Lii Marapu",
    description: "Mendukung komunitas Adat di Sumba Timur dengan total dana Rp 2.989.419.500.",
    date: "Agt 2021 - Agt 2023",
    funding: "VOICE",
    content: "Sebuah program komprehensif yang didanai oleh VOICE untuk mendukung pemberdayaan dan perlindungan hak-hak Komunitas Adat Marapu di Sumba Timur. Proyek ini mengintervensi dari sisi pelestarian budaya, advokasi hak sipil, hingga penguatan ekonomi adat secara berkelanjutan.\n\nNam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh.",
    imageUrl: "/Foto Jingitiu /Ketua DPRD Kab. Saburaijua.jpeg",
    galleryUrls: ["/Foto Jingitiu /Penyerahan buku ke Kadis Pariwisata dan Kabid Kebudayaan.jpeg", "/Foto Jingitiu /SDN Keliha.jpeg", "/Foto Jingitiu /SMAN 1 Sabu Timur.jpeg"]
  },
  {
    slug: "dukungan-lii-marapu",
    title: "Dukungan Lii Marapu",
    description: "Kegiatan dukungan lanjutan untuk proyek Lii Marapu bersama Direktorat Kebudayaan & Masyarakat Adat.",
    date: "2022 - 2023",
    funding: "Kemendikbudristek RI",
    content: "Program advokasi dan dukungan teknis lanjutan yang terselenggara atas sinergi dengan Direktorat Kepercayaan terhadap Tuhan YME dan Masyarakat Adat (Kemendikbudristek RI). Langkah ini guna mengukuhkan eksistensi kebudayaan Lii Marapu di kancah nasional.\n\nQuisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.",
    imageUrl: "/Foto Jingitiu /SMAN 2 Sabu Barat.jpeg",
    galleryUrls: ["/Foto Jingitiu /SMP Satap Kujiratu.jpeg", "/Foto Jingitiu /Sekretaris PPO dan Bidang Kurikulum.jpeg"]
  },
  {
    slug: "supportive-supervision-bisa",
    title: "Supportive Supervision BISA",
    description: "Maternal Nutrition and Child Health and Weekly Iron Folic Acid Supplementation program to Puskesmas and Schools.",
    date: "Sept - Des 2023",
    funding: "Nutrition International",
    content: "Pelaksanaan supervisi fasilitatif di berbagai Puskesmas dan sekolah-sekolah untuk memastikan berjalannya program gizi ibu dan anak, serta suplementasi Weekly Iron Folic Acid (WIFA) secara efektif dan efisien. Program ini merupakan kemitraan strategis dengan Nutrition International.\n\nPellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/DSC07271.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/DSC07277.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/DSC07279.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9305.JPG"]
  },
  {
    slug: "training-vas-supply-chain",
    title: "Training VAS Supply Chain",
    description: "Training on Vitamin A Supplementation (VAS) Integrated Management and Vitamin A Capsule (VAC) Supply Chain Management.",
    date: "Okt - Des 2023",
    funding: "Nutrition International (Rp 665.677.000)",
    content: "Penyelenggaraan pelatihan intensif terkait Manajemen Terpadu Suplementasi Vitamin A (VAS) dan Manajemen Rantai Pasok Kapsul Vitamin A (VAC). Pelatihan ini ditujukan kepada tenaga gizi Puskesmas untuk meminimalisasi risiko stock-out dan memastikan cakupan distribusi optimal kepada balita.\n\nSed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9307.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/IMG_9308.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7304.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7309.JPG"]
  },
  {
    slug: "dokumentasi-maestro-jingitiu",
    title: "Dokumentasi Karya Para Maestro Kepercayaan dan Kebudayaan Jingitiu di Kabupaten Sabu Raijua.",
    description: "Dokumentasi Karya Para Maestro Kepercayaan dan Kebudayaan Jingitiu di Kabupaten Sabu Raijua.",
    date: "Nov 2023 - Sept 2024",
    funding: "Kemendikbudristek & LPDP (Rp 492.908.163)",
    content: "Proyek pendokumentasian secara mendalam karya-karya lisan, ritual, dan pengetahuan ekologis para Maestro aliran kepercayaan dan kebudayaan Jingitiu di Kabupaten Sabu Raijua. Proyek strategis ini merupakan mandat dari Kemendikbudristek dan LPDP dalam upaya preservasi warisan budaya tak benda.\n\nSed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.",
    imageUrl: "/Foto Jingitiu /Camat Sabu Timur.jpeg",
    galleryUrls: ["/Foto Jingitiu /Kadis Perpustakaan Sabu Raijua.jpeg", "/Foto Jingitiu /Kampung adat Kujiratu dan Kampung adat Doka Loke.jpeg", "/Foto Jingitiu /Kejaksaan Negeri Sabu Raijua.jpeg"]
  },
  {
    slug: "kurikulum-operasional-paud",
    title: "Kurikulum Operasional PAUD",
    description: "Program Pengembangan Kurikulum Operasional Satuan PAUD Berkualitas dan Kontekstual di Kabupaten Kupang.",
    date: "Sept 2024 - Okt 2025",
    funding: "Rp 994.569.600",
    content: "Pengembangan Kurikulum Operasional Satuan PAUD (KOSP) yang berkualitas, inklusif, serta disesuaikan dengan konteks sosial budaya lokal di Kabupaten Kupang. Program ini menargetkan penguatan kapasitas kepala sekolah dan tenaga pendidik PAUD guna merancang pembelajaran yang berpusat pada anak.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.",
    imageUrl: "/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/IMG_1797.JPG",
    galleryUrls: ["/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/Ok. Kirim 6.JPG", "/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/Ok.Kirim3.JPG", "/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/Oke Kirim 2.JPG"]
  },
  {
    slug: "pelita-paud",
    title: "PELITA PAUD",
    description: "Program Pembelajaran Berkualitas dan Kemitraan Dengan Orang Tua di Satuan PAUD.",
    date: "April 2026 - Maret 2029",
    funding: "Rp 5.232.118.290",
    content: "Program komprehensif jangka panjang yang menitikberatkan pada peningkatan kualitas pembelajaran di satuan PAUD, sekaligus membangun sistem kemitraan yang kuat antara pihak pendidik dan orang tua. Hal ini untuk menjamin keselarasan stimulasi perkembangan anak di sekolah dan di rumah.\n\nPraesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.",
    imageUrl: "/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/IMG_1797.JPG",
    galleryUrls: ["/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/Ok. Kirim 6.JPG", "/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/Ok.Kirim3.JPG", "/Dokumentasi Disemininasi Panduan Pengembangan KOSP PAUD Berkualitas dan Kontekstual Kab. Kupang/Oke Kirim 2.JPG"]
  },
  {
    slug: "innovation-lab-2025",
    title: "Innovation Lab 2025",
    description: "Berpartisipasi dalam Program Innovation Lab 2025 untuk peningkatan strategi dan inovasi lembaga.",
    date: "2025",
    content: "Keterlibatan proaktif tim Marungga Foundation dalam wadah Innovation Lab 2025. Inisiatif ini dirancang untuk mendongkrak kapasitas kelembagaan, merumuskan strategi inovasi, dan mengeksplorasi model-model intervensi sosial terbaru guna menjawab tantangan kemanusiaan masa depan.\n\nDonec ornare mattis suscipit. Praesent accumsan condimentum justo, a accumsan massa ullamcorper et. Fusce eget lacus est.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7304.JPG",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap II/_DSC7309.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/DSC06937 (2).jpg", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114085848.jpg"]
  },
  {
    slug: "ketahanan-pangan-ternak",
    title: "Ketahanan Pangan & Ternak",
    description: "Program penanaman pepaya dan pemeliharaan ternak sapi bekerja dengan masyarakat untuk keberlanjutan organisasi.",
    date: "Okt 2022 - Sekarang",
    funding: "Mandiri Kas Lembaga",
    content: "Model bisnis sosial yang mendayagunakan aset organisasi melalui program penanaman pepaya skala menengah dan pemeliharaan ternak sapi potong. Program yang diinisiasi dari kas mandiri lembaga ini berjalan atas kemitraan dengan kelompok masyarakat lokal, dan keuntungannya dikembalikan sebagai dana silang untuk program-program sosial yayasan.\n\nCurabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.",
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114094555.jpg",
    galleryUrls: ["/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9109.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9110.JPG", "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9113.JPG"]
  },
];
