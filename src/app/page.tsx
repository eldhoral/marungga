import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";
import { ResearchCarousel } from "@/components/ResearchCarousel";
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
    { data: recentPrograms },
    { data: researchProducts },
    { data: partnersData },
    { data: videos }
  ] = await Promise.all([
    supabase
      .from('marungga_content_blocks')
      .select('section_key, content_text')
      .eq('page', 'home'),
    supabase
      .from('marungga_programs')
      .select('*')
      .order('order_index', { ascending: true })
      .limit(3),
    supabase
      .from('marungga_research_products')
      .select('*')
      .order('order_index', { ascending: true }),
    supabase
      .from('marungga_partners')
      .select('*')
      .order('order_index', { ascending: true }),
    supabase
      .from('marungga_videos')
      .select('*')
      .order('order_index', { ascending: true })
  ]);

  const content: Record<string, string> = {};
  contentData?.forEach(item => {
    content[item.section_key] = item.content_text;
  });

  // Default content fallbacks
  const heroTitle = content['hero_title'] || 'Menuju Masyarakat <span className="text-primary">Tangguh dan Sejahtera</span>';
  const heroTagline = content['hero_tagline'] || 'Marungga Foundation hadir untuk isu-isu kemanusiaan di kawasan timur Indonesia, memprioritaskan pendidikan, kesehatan, ekonomi, penanggulangan bencana dan perubahan iklim, berbasis bukti dan riset.';
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
              <span className="metric-number">15+</span>
              <span className="metric-label">Program Terlaksana</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">Indonesia Wilayah Timur</span>
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
              <h3>Pendidikan</h3>
              <p>Mengembangkan pendidikan berkeadilan bagi anak (0-18 tahun) yang berkualitas, inklusif, adaptif, dan kontekstual.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">
                <HeartPulse size={32} className="text-primary" />
              </div>
              <h3>Kesehatan</h3>
              <p>Meningkatkan kapasitas penyedia layanan kesehatan bagi ibu dan anak (0-18 tahun) bekerja sama dengan pemangku kepentingan.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">
                <Handshake size={32} className="text-primary" />
              </div>
              <h3>Ekonomi</h3>
              <p>Mengembangkan model usaha berkelanjutan berbasis kemitraan bersama masyarakat dengan menyertakan nilai dan praktik kearifan lokal.</p>
            </div>

            <div className="pillar-card organic-panel">
              <div className="pillar-icon">
                <Sprout size={32} className="text-primary" />
              </div>
              <h3>Penanggulangan Bencana dan Perubahan Iklim</h3>
              <p>Berpartisipasi dalam penanggulangan bencana dan perubahan iklim, berkolaborasi dengan mitra pembangunan lain dan pemangku kepentingan terkait.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra Marungga */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div className="text-center mb-lg">
            <h2 className="section-title">Mitra Marungga</h2>
            <p className="text-muted">Organisasi mitra dan donor yang berkolaborasi bersama kami.</p>
          </div>

          <div className="partner-marquee-container">
            {partnersData && partnersData.length > 0 ? (
              (() => {
                // Split partners into 3 rows
                const third = Math.ceil(partnersData.length / 3);
                const rows = [
                  partnersData.slice(0, third),
                  partnersData.slice(third, third * 2),
                  partnersData.slice(third * 2)
                ];
                
                return rows.map((row, rowIndex) => (
                  <div key={rowIndex} className={`partner-marquee-track ${rowIndex % 2 === 1 ? 'scroll-right' : 'scroll-left'}`}>
                    {/* Render the row twice for infinite seamless loop */}
                    {[1, 2].map((groupIndex) => (
                      <div key={groupIndex} className="partner-marquee-group" aria-hidden={groupIndex === 2 ? "true" : "false"}>
                        {row.map((partner) => (
                          <div key={partner.id} className="partner-card bg-background border border-border flex items-center justify-center p-sm rounded text-center relative overflow-hidden">
                            {partner.logo_url ? (
                              <Image 
                                src={partner.logo_url} 
                                alt={partner.name} 
                                fill 
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 150px, 200px" 
                              />
                            ) : (
                              <span className="text-xs font-semibold text-muted-foreground z-10">{partner.name}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ));
              })()
            ) : (
              <p className="text-muted text-center col-span-full">Belum ada mitra terdaftar.</p>
            )}
          </div>
        </div>
      </section>

      {/* Latest Programs Snippet */}
      <section className="section bg-background relative">
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

      {/* Produk Riset & Dokumentasi */}
      <section className="section bg-surface-alt">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Produk Riset dan Dokumentasi</h2>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              Publikasi dan panduan berbasis bukti yang kami hasilkan untuk mendukung pendidikan dan pelestarian kebudayaan lokal.
            </p>
          </div>

          <div className="mt-xl">
            <ResearchCarousel products={researchProducts || []} />
          </div>
        </div>
      </section>

      {/* Galeri Dokumentasi Video */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-xl">
            <h2 className="section-title">Galeri Dokumentasi Video</h2>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              Saksikan langsung kegiatan dan cerita inspiratif dari lapangan.
            </p>
          </div>

          <div className="video-grid">
            {videos && videos.length > 0 ? (
              videos.map((video) => (
                <div key={video.id} className="video-card organic-panel">
                  <div className="video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtube_id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <h4 className="text-md font-bold text-text mt-4 text-center">{video.title}</h4>
                </div>
              ))
            ) : (
              <p className="text-muted text-center col-span-full">Belum ada video dokumentasi.</p>
            )}
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
