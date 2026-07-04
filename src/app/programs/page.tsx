"use client";

import { useState, useMemo, useEffect } from "react";
import ProgramCard from "@/components/ProgramCard";
import "./page.css";

import { ALL_PROGRAMS } from "@/data/programs";

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
            <h1 className="text-5xl font-jakarta font-bold text-primary-dark mb-md">Program Kami</h1>
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
                  slug={program.slug}
                  title={program.title}
                  description={program.description}
                  date={program.date}
                  funding={program.funding}
                  imageUrl={program.imageUrl}
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
