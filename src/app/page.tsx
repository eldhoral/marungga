import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
import { Baby, Handshake, HeartPulse, Sprout } from "lucide-react";
// Force refresh
import { createClient } from '@/utils/supabase/server';
import "./page.css";

export const revalidate = 60; // revalidate cache every 60 seconds

export default async function Home() {
  const supabase = await createClient();
  
  // Fetch data in parallel to optimize rendering time
  const [
    { data: contentData },
    { data: recentPrograms }
  ] = await Promise.all([
    supabase
      .from('marungga_content_blocks')
      .select('section_key, content_text')
      .eq('page', 'home'),
    supabase
      .from('marungga_programs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3)
  ]);

  const content: Record<string, string> = {};
  contentData?.forEach(item => {
    content[item.section_key] = item.content_text;
  });

  // Default content fallbacks
  const heroTitle = content['hero_title'] || 'Membangun <span className="text-primary">Masyarakat Timur</span> yang Tangguh';
  const heroTagline = content['hero_tagline'] || 'Marungga Foundation hadir untuk isu-isu kemanusiaan di Indonesia, memprioritaskan perlindungan anak, kesetaraan gender, dan inklusi sosial.';
  const ctaTitle = content['cta_title'] || 'Mari Berkolaborasi Bersama';
  const ctaTagline = content['cta_tagline'] || 'Dukung misi kemanusiaan kami atau jadilah bagian dari perubahan di Timur Indonesia. Bersama kita bisa membangun masyarakat yang lebih tangguh dan berdaya.';

  return (
    <div className="home-page animate-fade-in">

      {/* Cinematic Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <Image
            src="/IMG-20250526-WA0049.jpg"
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
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: heroTitle }}>
            </h1>
            <p className="hero-tagline" dangerouslySetInnerHTML={{ __html: heroTagline }}>
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
              <div className="pillar-icon">
                <Baby size={32} className="text-primary" />
              </div>
              <h3>Perlindungan Anak</h3>
              <p>Menciptakan lingkungan aman dan mendukung perlindungan sosial yang komprehensif bagi anak-anak di masyarakat.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">
                <Handshake size={32} className="text-primary" />
              </div>
              <h3>Inklusi & Kesetaraan Gender</h3>
              <p>Mengembangkan kapasitas sumber daya dengan prinsip kesetaraan gender dan inklusi sosial (GESI).</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">
                <HeartPulse size={32} className="text-primary" />
              </div>
              <h3>Kesehatan & Bencana</h3>
              <p>Penanggulangan bencana dan peningkatan kesehatan secara partisipatif bagi masyarakat rentan.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">
                <Sprout size={32} className="text-primary" />
              </div>
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
              {recentPrograms?.map((program, index) => (
                  <ProgramCard
                    key={program.id || index}
                    slug={program.id} // use id as slug for routing
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
            <h2 className="text-3xl md:text-5xl text-white mb-md font-jakarta font-bold" dangerouslySetInnerHTML={{ __html: ctaTitle }}></h2>
            <div className="max-w-2xl mx-auto text-lg md:text-xl mb-xl text-white opacity-90 leading-relaxed" dangerouslySetInnerHTML={{ __html: ctaTagline }}>
            </div>
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
