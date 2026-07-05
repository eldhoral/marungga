"use client";

import { useState, useMemo, useEffect } from "react";
import ProgramCard from "@/components/ProgramCard";

const ITEMS_PER_PAGE = 6;

// Helper to extract available years
const getAvailableYears = (programs: any[]) => {
  const years = new Set<string>();
  programs.forEach(prog => {
    if (prog.year) {
      const match = prog.year.match(/\b(2019|2020|2021|2022|2023|2024|2025|2026|2029)\b/g);
      if (match) {
        match.forEach((y: string) => years.add(y));
      } else if (prog.year.toLowerCase().includes('sekarang')) {
        years.add('Sekarang');
      }
    }
  });
  return Array.from(years).sort().reverse();
};

export function ProgramsList({ programs }: { programs: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  
  const availableYears = useMemo(() => getAvailableYears(programs), [programs]);

  // Filter logic
  const filteredPrograms = useMemo(() => {
    return programs.filter(prog => {
      const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            prog.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesYear = true;
      if (selectedYear !== "All") {
        if (selectedYear === "Sekarang") {
          matchesYear = prog.year?.toLowerCase().includes("sekarang") || false;
        } else {
          matchesYear = prog.year?.includes(selectedYear) || false;
        }
      }
      
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear, programs]);

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
    <>
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

      {currentPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {currentPrograms.map((program, index) => (
            <ProgramCard
              key={program.id || index}
              slug={program.id}
              title={program.title}
              description={program.description}
              date={program.year}
              funding={program.category}
              location={program.location}
              imageUrl={program.image_url || '/placeholder.jpg'}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className="text-center p-xl text-muted">
          Tidak ada program yang sesuai dengan pencarian Anda.
        </div>
      )}

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
    </>
  );
}
