"use client";

import { useState, useMemo, useEffect } from "react";
import ProgramCard from "@/components/ProgramCard";
import "./page.css";

const ALL_PROGRAMS = [
  { title: "Asesmen Sekolah & WASH", description: "Melakukan asesmen di sekolah di Kecamatan Sulamu Kabupaten Kupang terkait layanan Pendidikan dasar dan WASH.", date: "2019" },
  { title: "Pendampingan TAWA Semesta", description: "Memfasilitasi LSM TAWA Semesta di Makasar untuk mengembangkan rencana strategi program penggalangan dana dan ekonomi berkelanjutan.", date: "2019-2020" },
  { title: "Distribusi Perlengkapan Sekolah", description: "Bekerja sama dengan CHARIS National Academy dan Sumba Integrated Development (SID) mendistribusikan perlengkapan sekolah untuk 20 anak di Desa Wanggabewa Kecamatan Sumba Timur.", date: "2019" },
  { title: "Pengembangan Anak Muda", description: "Memfasilitasi Kegiatan Pengembangan Diri bagi 20 orang Anak Muda di Kota Kupang yang didanai secara mandiri.", date: "Juli - Oktober 2020" },
  { title: "Suplementasi WIFA", description: "Melaksanakan Lokakarya Orientasi dan Peningkatan Kapasitas Program Suplementasi WIFA di Kabupaten TTU dan Kupang.", date: "Okt 2020 - Mar 2021", funding: "Nutrition International" },
  { title: "Kapasitas Eks Pekerja Migran", description: "Bersama SID memfasilitasi peningkatan kapasitas kehidupan bagi Eks Pekerja migran di Kabupaten Sumba Barat dan Sumba Barat Daya.", date: "Feb - Apr 2021", funding: "International Of Migration (IOM)" },
  { title: "Respon Bencana Seroja", description: "Melakukan respon Bencana kasus Seroja di Kabupaten dan Kota Kupang secara mandiri bersama TAWA Semesta, IBU Foundation, dll.", date: "Maret - April 2021" },
  { title: "Pelatihan Menulis Kreatif", description: "Menyelenggarakan Pelatihan Online Teknik Menulis Kreatif bagi masyarakat NTT untuk berkontribusi pada literasi.", date: "Agustus 2021" },
  { title: "Proyek BISA (Nutrisi)", description: "Rapat Perencanaan Mikro & Peningkatan Kapasitas mekanisme rantai pasok komoditas nutrisi di Kabupaten TTU dan Kupang.", date: "Juni - November 2021" },
  { title: "Proyek Lii Marapu", description: "Mendukung komunitas Adat di Sumba Timur dengan total dana Rp 2.989.419.500.", date: "Agt 2021 - Agt 2023", funding: "VOICE" },
  { title: "Dukungan Lii Marapu", description: "Kegiatan dukungan lanjutan untuk proyek Lii Marapu bersama Direktorat Kebudayaan & Masyarakat Adat.", date: "2022 - 2023", funding: "Kemendikbudristek RI" },
  { title: "Supportive Supervision BISA", description: "Maternal Nutrition and Child Health and Weekly Iron Folic Acid Supplementation program to Puskesmas and Schools.", date: "Sept - Des 2023", funding: "Nutrition International" },
  { title: "Training VAS Supply Chain", description: "Training on Vitamin A Supplementation (VAS) Integrated Management and Vitamin A Capsule (VAC) Supply Chain Management.", date: "Okt - Des 2023", funding: "Nutrition International (Rp 665.677.000)" },
  { title: "Dokumentasi Maestro Jingitiu", description: "Dokumentasi Karya Para Maestro Kepercayaan dan Kebudayaan Jingitiu di Kabupaten Sabu Raijua.", date: "Nov 2023 - Sept 2024", funding: "Kemendikbudristek & LPDP (Rp 492.908.163)" },
  { title: "Kurikulum Operasional PAUD", description: "Program Pengembangan Kurikulum Operasional Satuan PAUD Berkualitas dan Kontekstual di Kabupaten Kupang.", date: "Sept 2024 - Okt 2025", funding: "Rp 994.569.600" },
  { title: "PELITA PAUD", description: "Program Pembelajaran Berkualitas dan Kemitraan Dengan Orang Tua di Satuan PAUD.", date: "April 2026 - Maret 2029", funding: "Rp 5.232.118.290" },
  { title: "Innovation Lab 2025", description: "Berpartisipasi dalam Program Innovation Lab 2025 untuk peningkatan strategi dan inovasi lembaga.", date: "2025" },
  { title: "Ketahanan Pangan & Ternak", description: "Program penanaman pepaya dan pemeliharaan ternak sapi bekerja dengan masyarakat untuk keberlanjutan organisasi.", date: "Okt 2022 - Sekarang", funding: "Mandiri Kas Lembaga" }
];

const ITEMS_PER_PAGE = 6;

// Helper to extract available years
const getAvailableYears = () => {
  const years = new Set<string>();
  ALL_PROGRAMS.forEach(prog => {
    if (prog.date) {
      const match = prog.date.match(/\b(2019|2020|2021|2022|2023|2024|2025|2026|2029)\b/g);
      if (match) {
        match.forEach(y => years.add(y));
      } else if (prog.date.toLowerCase().includes('sekarang')) {
        years.add('Sekarang');
      }
    }
  });
  return Array.from(years).sort().reverse();
};

export default function Programs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const availableYears = useMemo(() => getAvailableYears(), []);

  // Filter logic
  const filteredPrograms = useMemo(() => {
    return ALL_PROGRAMS.filter(prog => {
      const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prog.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesYear = true;
      if (selectedYear !== "All") {
        if (selectedYear === "Sekarang") {
          matchesYear = prog.date?.toLowerCase().includes("sekarang") || false;
        } else {
          matchesYear = prog.date?.includes(selectedYear) || false;
        }
      }
      
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedYear]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPrograms.length / ITEMS_PER_PAGE);
  const currentPrograms = filteredPrograms.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="programs-page animate-fade-in relative">
      <div className="blob blob-accent" style={{ top: '10%', right: '10%', width: '400px', height: '400px', opacity: 0.3 }}></div>

      <section className="programs-header text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-5xl font-outfit font-bold text-primary-dark mb-md">Program Kami</h1>
            <p className="max-w-2xl mx-auto text-muted text-xl">
              Jejak langkah dan karya Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) dalam mewujudkan masyarakat Indonesia Timur yang tangguh.
            </p>
          </div>
        </div>
      </section>

      <section className="section relative z-10">
        <div className="container">
          
          {/* Filters */}
          <div className="filters-container organic-panel sticky-filter">
            <input 
              type="text" 
              placeholder="Cari nama program..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select 
              className="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">Semua Tahun</option>
              {availableYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Grid */}
          {currentPrograms.length > 0 ? (
            <div className="grid grid-cols-3 gap-md">
              {currentPrograms.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  description={program.description}
                  date={program.date}
                  funding={program.funding}
                />
              ))}
            </div>
          ) : (
            <div className="text-center p-xl text-muted">
              Tidak ada program yang sesuai dengan pencarian Anda.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              >
                &laquo; Prev
              </button>
              
              <div className="page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button 
                    key={page}
                    className={`page-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button 
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              >
                Next &raquo;
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
