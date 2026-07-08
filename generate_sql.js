const fs = require('fs');

const programs = [
  {
    title: 'Pengembangan Diri bagi 20 orang Anak Muda di Kota Kupang',
    year: 'Juli 2020',
    description: 'Merupakan program internal Marungga untuk membantu anak muda mengenali dan mengelola potensi diri melalui identifikasi bakat serta kemampuan yang dimiliki oleh setiap peserta. Peserta juga didampingi untuk menyusun rencana pengembangan diri yang sesuai dengan potensi, minat, dan tujuan yang ingin dicapai.',
    category: 'Rp 1.000.000',
    image_url: '/programs/image8.png'
  },
  {
    title: 'Pengembangan ternak sapi',
    year: '2022-2026',
    description: 'merupakan program internal Marungga yang bertujuan mendukung keberlanjutan organisasi sekaligus memberdayakan anak muda di Kabupaten Kupang. Melalui program ini, Marungga menyediakan bibit sapi yang kemudian dipelihara dan dikembangkan. Setelah ternak dijual, hasil penjualan akan dibagikan berdasarkan kesepakatan yang telah dibangun bersama.',
    category: 'Rp 21.000.000 setiap kali pengadaan 3 ekor sapi',
    image_url: '/programs/image10.png'
  },
  {
    title: 'Pelatihan Menulis secara online',
    year: '7 Agustus 2021',
    description: 'Pelatihan menulis dilakukan sebagai upaya untuk memperkuat kemampuan peserta dalam menulis dimulai dari teknik menulis kreatif, seperti menemukan ide tulisan dan mengembangkan alur cerita hingga menjadi tulisan yang menarik',
    category: 'Kegiatan ini tidak mengeluarkan biaya karena dilakukan secara online',
    image_url: '/programs/image9.png'
  },
  {
    title: 'Respon Bencana kasus Seroja di Kabupaten dan Kota Kupang',
    year: 'Maret - April 2021',
    description: 'Kegiatan ini berupa penggalangan dana kemanusiaan yang kemudian digunakan untuk memenuhi kebutuhan dasar masyarakat terdampak Seroja. Bantuan yang disalurkan meliputi paket sembako, obat-obatan, serta berbagai kebutuhan mendesak lainnya guna mendukung keberlangsungan hidup warga pada masa tanggap darurat. Selain bantuan material, tim juga memberikan dukungan psikososial awal bagi anak-anak yang terdampak bencana.',
    category: '',
    image_url: '/programs/image12.png'
  },
  {
    title: 'Peningkatan Kapasitas Kehidupan bagi Eks Pekerja migran',
    year: 'Februari - April 2021',
    description: 'Bekerja sama dengan Sumba Integrated Development ( SID) dalam menyusun proposal dan memfasilitasi peningkatan kapasitas Kehidupan bagi Eks Pekerja migran di Kabupaten Sumba Barat dan Sumba Barat Daya Provinsi Nusa Tenggara Timur yang didanai oleh International Of Migration (IOM).',
    category: '',
    image_url: '/placeholder.jpg'
  },
  {
    title: 'Asesmen Sekolah & WASH',
    year: '2019',
    description: 'Untuk memastikan program yang dikembangkan sesuai dengan kebutuhan di lapangan, Marungga melakukan asesmen guna mengidentifikasi kondisi, tantangan, dan kebutuhan masyarakat terkait layanan pendidikan serta WASH (air, sanitasi, dan higiene) sebagai dasar perencanaan dan pengembangan program yang tepat sasaran.',
    category: '',
    image_url: '/programs/image11.png'
  },
  {
    title: 'Pengembangan rencana strategi program penggalangan dana dan ekonomi berkelanjutan (TAWA Semesta)',
    year: '2019-2020',
    description: 'Memfasilitasi dan membantu TAWA Semesta, sebuah LSM Yang berbasis di Makasar Provinsi Sulawesi Selatan untuk mengembangkan rencana strategi program penggalangan dana dan ekonomi berkelanjutan. Proses ini bertujuan memperkuat kapasitas organisasi dalam merancang strategi mobilisasi sumber daya, mengembangkan sumber-sumber pendanaan yang berkelanjutan, serta membangun model ekonomi yang dapat mendukung keberlanjutan program dan kelembagaan organisasi dalam jangka panjang.',
    category: '',
    image_url: '/placeholder.jpg'
  },
  {
    title: 'Distribusi perlengkapan sekolah',
    year: '2019',
    description: 'Bekerja sama dengan CHARIS National Academy dan Sumba Integrated Development ( SID) mendististribusikan perlengkapan sekolah untuk 20 anak di Desa Wanggabewa Kecamatan Sumba Timur.',
    category: '',
    image_url: '/placeholder.jpg'
  },
  {
    title: 'Lokakarya Orientasi dan Peningkatan Kapasitas Program Suplementasi WIFA',
    year: 'Oktober 2020 - Maret 2021',
    description: 'Program ini bertujuan meningkatkan pemahaman dan kapasitas tenaga kesehatan, pengelola program, serta pemangku kepentingan terkait dalam pelaksanaan program WIFA bagi remaja putri. Melalui lokakarya, peserta memperoleh penguatan pengetahuan mengenai tata kelola program, strategi implementasi, pemantauan, dan pelaporan, sehingga dapat mendukung peningkatan cakupan dan kualitas pelaksanaan program suplementasi tablet tambah darah sebagai upaya pencegahan anemia dan perbaikan status gizi remaja.',
    category: 'Didanai oleh Nutrition International',
    image_url: '/placeholder.jpg'
  },
  {
    title: 'Penyusunan Proposal Hibah VOICE',
    year: 'Januari - Februari 2021',
    description: 'Bersama Sumba Integrated Development ( SID) Menyusun Proposal Hibah VOICE Januari-Februari 2021.',
    category: '',
    image_url: '/placeholder.jpg'
  },
  {
    title: 'Proyek BISA (Nutrisi)',
    year: 'Juni - November 2021',
    description: 'Rapat Perencanaan Mikro & Kegiatan Peningkatan Kapasitas mekanisme rantai pasok dan pengelolaan komoditas nutrisi (suplemen IFA & WIFA, kapsul Vitamin A, Zinc dan ORS) dalam Proyek BISA di Kabupaten TTU dan Kupang, Provinsi Nusa Tenggara Timur (NT), Indonesia. Program ini bertujuan untuk mendukung peningkatan akses, ketersediaan, dan pemanfaatan intervensi gizi esensial bagi ibu, remaja putri, bayi, dan anak. Kegiatan difokuskan pada penguatan pelaksanaan suplementasi zat besi dan asam folat (IFA dan WIFA), distribusi Kapsul Vitamin A, pemberian Zinc dan Oralit (ORS), serta peningkatan kapasitas pelaksana program guna mendukung upaya pencegahan stunting dan perbaikan status gizi masyarakat.',
    category: '',
    image_url: '/programs/image2.png'
  },
  {
    title: 'Proyek Lii Marapu',
    year: 'Agustus 2021 - Agustus 2023',
    description: 'Program ini berfokus pada penguatan pengakuan, akses layanan, dan pemenuhan hak-hak Penghayat Kepercayaan Marapu melalui empat pilar utama. Pertama, penguatan kapasitas Badan Pengurus Marapu (BPM) di tingkat kabupaten sebagai wadah untuk memobilisasi sumber daya dan melakukan advokasi. Kedua, pemberdayaan lembaga adat di tingkat desa untuk memperkuat peran dalam mobilisasi sumber daya dan advokasi komunitas. Ketiga, pengembangan model layanan pendidikan kepercayaan di sekolah menengah atas (SMA) percontohan yang mendukung implementasi pendidikan Kepercayaan terhadap Tuhan Yang Maha Esa (Marapu). Keempat, penguatan dukungan kebijakan pemerintah daerah di tingkat kabupaten dan desa guna memperluas akses terhadap layanan sosial dan pendidikan bagi Penghayat Marapu serta memperkuat pengakuan mereka di tingkat daerah, provinsi, dan nasional.',
    category: 'Rp 2.989.419.500',
    image_url: '/programs/image1.png'
  },
  {
    title: 'Dukungan Proyek Lii Marapu (Kemendikbudristek RI)',
    year: '2022 - 2023',
    description: 'Melaksanakan kegiatan untuk mendukung proyek Lii Marapu yang didanai oleh Direktorat Kebudayaan & Masyarakat Adat, Kemendikbudristek RI pada tahun 2022-2023.',
    category: '',
    image_url: '/programs/image4.png'
  },
  {
    title: 'Supportive Supervision on Maternal Nutrition and Child Health and WIFA',
    year: 'September - Desember 2023',
    description: 'Supportive Supervision on Maternal Nutrition and Child Health and Weekly Iron Folic Acid Supplementation program to Puskesmas and Schools in BISA Project, in East Nusa Tenggara province, Indonesia. Program ini bertujuan untuk memperkuat kualitas pelaksanaan program gizi ibu dan kesehatan anak serta program suplementasi tablet tambah darah mingguan bagi remaja putri melalui pendampingan, pemantauan, dan pembinaan kepada Puskesmas dan sekolah sasaran. Melalui supervisi suportif, diharapkan kapasitas petugas kesehatan dan pihak sekolah dalam mengelola program dapat meningkat sehingga cakupan dan kualitas layanan gizi bagi ibu, anak, dan remaja semakin optimal.',
    category: 'Didanai Nutrition International',
    image_url: '/placeholder.jpg'
  },
  {
    title: 'Training on Vitamin A Supplementation (VAS) Integrated Management',
    year: 'Oktober - Desember 2023',
    description: 'Training on Vitamin A Supplementation (VAS) Integrated Management and Vitamin A Capsule (VAC) Supply Chain Management for Nutrition and Pharmacy Program Officers in East Nusa Tenggara Province. Program ini bertujuan untuk meningkatkan kapasitas petugas program gizi dan farmasi dalam pengelolaan program suplementasi Vitamin A secara terpadu, serta memperkuat sistem manajemen rantai pasok Kapsul Vitamin A guna menjamin ketersediaan dan distribusi yang efektif hingga tingkat layanan kesehatan.',
    category: 'Rp 665,677,000',
    image_url: '/programs/image3.png'
  },
  {
    title: 'Dokumentasi Karya Para Maestro Kepercayaan dan Kebudayaan Jingitiu',
    year: 'November 2023 - September 2024',
    description: 'Dokumentasi Karya Para Maestro Kepercayaan dan Kebudayaan Jingitiu di Kabupaten Sabu Raijua, Provinsi Nusa Tenggara Timur. Program ini mencakup proses identifikasi dan penyusunan rencana dokumentasi, produksi 10 karya audio visual, serta penyusunan satu buku dokumentasi yang merekam pengetahuan, nilai, dan karya para maestro Kepercayaan dan Kebudayaan Jingitiu. Selain itu, dilakukan peluncuran hasil karya dokumentasi beserta website dokumentasi karya agung para maestro Kepercayaan dan Kebudayaan Jingitiu sebagai media pelestarian dan diseminasi pengetahuan budaya. Hasil dokumentasi juga disosialisasikan kepada Dinas Pendidikan serta kepala satuan pendidikan tingkat SD, SMP, dan SMA/SMK di Kabupaten Sabu Raijua untuk mendorong pemanfaatannya sebagai sumber pembelajaran dan penguatan pendidikan berbasis budaya lokal.',
    category: 'Rp 492.908.163',
    image_url: '/programs/image7.png'
  },
  {
    title: 'Program Pengembangan Kurikulum Operasional Satuan PAUD',
    year: 'September 2024 - Oktober 2025',
    description: 'Program KAPSUL PAUD mendukung mentor dan pendidik dari 24 PAUD percontohan di Kabupaten Kupang dalam menyusun Kurikulum Operasional Satuan Pendidikan (KOSP) PAUD yang berkualitas, kontekstual, dan sesuai dengan kebutuhan serta karakteristik lokal. Program ini juga mendorong penerapan KOSP secara efektif dalam proses pembelajaran di satuan PAUD, sehingga dapat meningkatkan kualitas layanan pendidikan anak usia dini yang lebih relevan, bermakna, dan berpusat pada kebutuhan anak.',
    category: 'Rp 994.569.600',
    image_url: '/programs/image5.png'
  },
  {
    title: 'PELITA PAUD',
    year: 'April 2026 - Maret 2029',
    description: 'Program PELITA PAUD berfokus pada penguatan ekosistem pendidikan anak usia dini di Kabupaten Kupang melalui peningkatan dukungan teknis, kebijakan, dan pendanaan dari pemerintah daerah serta pemerintah desa. Program ini memperkuat fungsi Pusat Kegiatan Gugus (PKG) PAUD sebagai komunitas belajar bagi pendidik dalam meningkatkan kualitas pembelajaran, kemitraan dengan orang tua, dan kapasitas advokasi yang didampingi oleh OPD terkait. Melalui program ini, kapasitas mentor PAUD dan fasilitator PKG diperkuat agar mampu melaksanakan pelatihan, pendampingan, dan pemantauan secara berkelanjutan. Program juga mendorong penerapan kurikulum PAUD yang berkualitas dan kontekstual dengan mengintegrasikan Pembelajaran Mendalam dan 7 KAIH, serta memperkuat keterlibatan orang tua dalam proses pembelajaran. Selain itu, PELITA PAUD mendorong hadirnya dukungan kebijakan dan alokasi anggaran desa untuk memastikan partisipasi aktif satuan PAUD dalam kegiatan PKG dan keberlanjutan peningkatan mutu layanan PAUD.',
    category: 'Rp 5.232.118.290',
    image_url: '/programs/image6.png'
  }
];

let sql = `DELETE FROM public.marungga_programs;\n\n`;

programs.forEach((p, i) => {
  sql += `INSERT INTO public.marungga_programs (title, year, description, category, image_url, order_index) VALUES (`;
  sql += `'${p.title.replace(/'/g, "''")}', `;
  sql += `'${p.year.replace(/'/g, "''")}', `;
  sql += `'${p.description.replace(/'/g, "''")}', `;
  sql += `'${p.category.replace(/'/g, "''")}', `;
  sql += `'${p.image_url}', `;
  sql += `${i});\n`;
});

fs.writeFileSync('db/seeders/0006_update_programs_from_doc.sql', sql);
console.log('Generated SQL file');
