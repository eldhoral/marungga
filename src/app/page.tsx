import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
// Force refresh
import { ALL_PROGRAMS } from "../data/programs";
import "./page.css";

export default function Home() {
  return (
    <div className="home-page animate-fade-in">

      {/* Cinematic Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/hero_placeholder.png"
            alt="Marungga Foundation Hero - Landscape"
            fill
            sizes="100vw"
            className="hero-image"
            priority
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="organic-panel hero-panel">
            <h1 className="hero-title">
              Membangun <span className="text-primary">Masyarakat Timur</span> yang Tangguh
            </h1>
            <p className="hero-tagline">
              Marungga Foundation hadir untuk isu-isu kemanusiaan di Indonesia, memprioritaskan perlindungan anak, kesetaraan gender, dan inklusi sosial.
            </p>
            <div className="hero-actions">
              <Button as={Link} href="/programs" variant="primary" className="btn-full-mobile">Jelajahi Program</Button>
              <Button as={Link} href="/about" variant="secondary" className="btn-full-mobile">Siapa Kami?</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="metrics-section">
        <div className="container">
          <div className="organic-panel metrics-panel">
            <div className="metric-item">
              <span className="metric-number">2019</span>
              <span className="metric-label">Tahun Berdiri</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">13+</span>
              <span className="metric-label">Anggota Aktif</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">NTT</span>
              <span className="metric-label">Wilayah Fokus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilar Misi */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Fokus Gerakan Kami</h2>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              Empat pilar utama yang menjadi pondasi setiap program dan aksi nyata Marungga Foundation di lapangan.
            </p>
          </div>

          <div className="pillar-grid">
            <div className="pillar-card organic-panel">
              <div className="pillar-icon">👶</div>
              <h3>Perlindungan Anak</h3>
              <p>Menciptakan lingkungan aman dan mendukung perlindungan sosial yang komprehensif bagi anak-anak di masyarakat.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">🤝</div>
              <h3>Inklusi & Kesetaraan Gender</h3>
              <p>Mengembangkan kapasitas sumber daya dengan prinsip kesetaraan gender dan inklusi sosial (GESI).</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">⛑️</div>
              <h3>Kesehatan & Bencana</h3>
              <p>Penanggulangan bencana dan peningkatan kesehatan secara partisipatif bagi masyarakat rentan.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">🌱</div>
              <h3>Pelestarian Lingkungan</h3>
              <p>Pendampingan ekonomi dan budaya berbasis potensi lokal yang berkelanjutan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Programs Snippet */}
      <section className="section bg-surface-alt relative">
        <div className="container relative z-10">
          <div className="flex justify-between items-end mb-md section-header">
            <div>
              <h2 className="section-title mb-xs">Aksi Nyata Terbaru</h2>
              <p className="text-muted text-lg">Program-program yang telah dan sedang kami jalankan.</p>
            </div>
            <Button as={Link} href="/programs" variant="outline" className="hidden-mobile">Semua Program</Button>
          </div>

          <div className="programs-scroller">
            <div className="programs-scroller-inner">
              {['proyek-bisa-nutrisi', 'proyek-lii-marapu', 'innovation-lab-2025'].map((slug, index) => {
                const program = ALL_PROGRAMS.find(p => p.slug === slug);
                if (!program) return null;
                return (
                  <ProgramCard
                    key={index}
                    slug={program.slug}
                    title={program.title}
                    description={program.description}
                    date={program.date}
                    funding={program.funding}
                    imageUrl={program.imageUrl}
                  />
                );
              })}
            </div>
          </div>

          <div className="text-center mt-xl show-mobile">
            <Button as={Link} href="/programs" variant="primary" className="btn-full-mobile">Lihat Semua Program</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section text-center relative overflow-hidden">
        <div className="cta-bg">
          <div className="cta-blob blob-1"></div>
          <div className="cta-blob blob-2"></div>
          <div className="cta-blob blob-3"></div>
        </div>

        <div className="container relative z-10">
          <div className="cta-content-wrapper organic-panel glass-panel-dark">
            <h2 className="text-3xl md:text-5xl text-white mb-md font-jakarta font-bold">Mari Berkolaborasi Bersama</h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl mb-xl text-white opacity-90 leading-relaxed">
              Dukung misi kemanusiaan kami atau jadilah bagian dari perubahan di Timur Indonesia.
              Bersama kita bisa membangun masyarakat yang lebih tangguh dan berdaya.
            </p>
            <div className="flex justify-center gap-sm flex-wrap">
              <Button as={Link} href="/contact" className="cta-btn btn-full-mobile btn-cta-primary">Hubungi Kami Sekarang</Button>
              <Button as={Link} href="/programs" className="cta-btn btn-full-mobile btn-cta-outline">Jelajahi Program</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
