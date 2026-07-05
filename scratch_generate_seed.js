const fs = require('fs');

// The input data
const ALL_PROGRAMS = [
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
    imageUrl: "/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG_9110.JPG"
  }
];

// Instead of copying all 17, I'll just write an SQL generation logic and use it for the current ones or read the actual file using ts-node.
