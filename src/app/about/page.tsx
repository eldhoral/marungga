import Image from "next/image";
import { LazySection } from "@/components/LazySection";
import { createClient } from "@/utils/supabase/server";
import "./page.css";

const MemberCard = ({ role, name, featured = false, imageUrl = null }: { role: string, name: string, featured?: boolean, imageUrl?: string | null }) => (
  <div className={`member-card ${featured ? 'member-card--featured' : ''}`} tabIndex={0} aria-label={`${name}, ${role}`}>
    <div className="member-avatar">
      {imageUrl ? (
        <Image src={imageUrl} alt={name} fill style={{ objectFit: 'cover', borderRadius: '50%' }} />
      ) : (
        <span className="member-initials">{name.charAt(0)}</span>
      )}
    </div>
    <div className="member-info">
      <span className="member-role">{role}</span>
      <span className="member-name">{name}</span>
    </div>
  </div>
);

export const revalidate = 60;

export default async function About() {
  const supabase = await createClient();
  
  // Fetch about page content
  const { data: contentData } = await supabase
    .from('marungga_content_blocks')
    .select('section_key, content_text')
    .eq('page', 'about');

  const content: Record<string, string> = {};
  contentData?.forEach(item => {
    content[item.section_key] = item.content_text;
  });

  // Default content fallbacks
  const heroTitle = content['hero_title'] || 'Tentang Kami';
  const heroDescription = content['hero_description'] || 'Kenali Kami Lebih Dekat. Jejak langkah dan visi misi Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) di kawasan Timur Indonesia.';
  const aboutWho = content['about_who'] || '<p>Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) didirikan pada Februari 2019...</p>';
  const aboutBackground = content['about_background'] || '<p>Langkah awal kami bermula dari panggilan kemanusiaan untuk merespons Badai Siklon Tropis Seroja...</p>';
  const aboutVision = content['about_vision'] || 'Mewujudkan Masyarakat Indonesia Timur yang Tangguh dan Sejahtera Melalui Kerja Pemberdayaan, Kemanusiaan yang memprioritaskan Perlindungan Anak, Kesetaraan Gender dan Inklusi Sosial berbasis Penelitian.';
  const aboutMission1 = content['about_mission_1'] || 'Mengembangkan perlindungan anak dan perlindungan sosial di masyarakat.';
  const aboutMission2 = content['about_mission_2'] || 'Mengembangkan kapasitas SDM dengan prinsip kesetaraan gender dan inklusi sosial (GESI).';
  const aboutMission3 = content['about_mission_3'] || 'Berperan aktif dalam penanggulangan bencana dan peningkatan kesehatan masyarakat secara partisipatif.';
  const aboutMission4 = content['about_mission_4'] || 'Melaksanakan pendampingan pelestarian budaya, sosial dan ekonomi berdasarkan potensi lokal dengan memperhatikan keberlanjutan SDA.';

  // Fetch team members
  const { data: teamData } = await supabase
    .from('marungga_team_members')
    .select('*')
    .order('order_index', { ascending: true });

  // Group team members
  const teamByDept: Record<string, any[]> = {};
  const coreTeam: any[] = [];
  const honorary: any[] = [];
  
  teamData?.forEach(member => {
    if (member.role === 'Pembina' || member.role === 'Pengawas') {
      honorary.push(member);
    } else if (!member.department) {
      coreTeam.push(member);
    } else {
      if (!teamByDept[member.department]) teamByDept[member.department] = [];
      teamByDept[member.department].push(member);
    }
  });

  const featuredMember = coreTeam.find(m => m.role.toLowerCase().includes('ketua')) || coreTeam[0];
  const otherCore = coreTeam.filter(m => m.id !== featuredMember?.id);

  return (
    <div className="about-page animate-fade-in relative">
      
      <div className="blob blob-accent" style={{ top: '5%', right: '10%', width: '400px', height: '400px', opacity: 0.3 }}></div>

      {/* Hero — no lazy load, always visible first */}
      <section className="about-header text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-5xl font-jakarta font-bold text-primary-dark mb-md" dangerouslySetInnerHTML={{ __html: heroTitle }}></h1>
            <p className="max-w-2xl mx-auto text-muted text-xl" dangerouslySetInnerHTML={{ __html: heroDescription }}>
            </p>
          </div>
        </div>
      </section>

      {/* Siapa Kami */}
      <LazySection>
        <section className="about-section">
          <div className="container">
            <div className="about-two-col">
              <div className="about-two-col__text">
                <h2 className="about-section__title">Siapa Kami?</h2>
                <div className="prose prose-lg text-gray-700" dangerouslySetInnerHTML={{ __html: aboutWho }}></div>
              </div>
              <div className="about-two-col__image">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '3/2' }}>
                  <Image 
                    src="/Dok Kerjasama dengan NI/Workshop Vitamin A tahap I/IMG20231114085848.jpg" 
                    alt="Tim Marungga Foundation dalam kegiatan workshop" 
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    loading="lazy"
                    className="about-img"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Latar Belakang */}
      <LazySection>
        <section className="about-section about-section--alt">
          <div className="container">
            <div className="about-two-col about-two-col--reverse">
              <div className="about-two-col__text">
                <h2 className="about-section__title">Latar Belakang</h2>
                <div className="prose prose-lg text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: aboutBackground }}></div>

                <div className="about-legal-note">
                  <svg className="about-legal-note__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span>Akta Notaris No. 8, 29 Juni 2020 — Yarek A. B Pakh, S.H., M.Kn.</span>
                </div>
              </div>
              <div className="about-two-col__visual">
                <div className="about-stat-group">
                  <div className="about-stat">
                    <span className="about-stat__number">2019</span>
                    <span className="about-stat__label">Tahun Berdiri</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat__number">14</span>
                    <span className="about-stat__label">Anggota Profesional</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat__number">18+</span>
                    <span className="about-stat__label">Program Terlaksana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Visi */}
      <LazySection>
        <section className="about-visi">
          <div className="container">
            <h2 className="about-visi__label">Visi Organisasi</h2>
            <blockquote className="about-visi__quote">
              <div dangerouslySetInnerHTML={{ __html: aboutVision }}></div>
            </blockquote>
          </div>
        </section>
      </LazySection>

      {/* Misi */}
      <LazySection>
        <section className="about-section">
          <div className="container">
            <div className="about-section__header">
              <h2 className="about-section__title">Misi Kami</h2>
            </div>
            <div className="about-misi-grid">
              {[
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", text: aboutMission1 },
                { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", text: aboutMission2 },
                { icon: "M22 12h-4l-3 9L9 3l-3 9H2", text: aboutMission3 },
                { icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", text: aboutMission4 }
              ].map((item, idx) => (
                <div key={idx} className="about-misi-card" tabIndex={0}>
                  <div className="about-misi-card__header">
                    <span className="about-misi-card__number">0{idx + 1}</span>
                    <svg className="about-misi-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28" aria-hidden="true">
                      <path d={item.icon}></path>
                    </svg>
                  </div>
                  <p className="about-misi-card__text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Struktur Organisasi */}
      <LazySection>
        <section className="about-section about-section--alt">
          <div className="container">
            <div className="about-section__header">
              <h2 className="about-section__title">Struktur Organisasi</h2>
              <p className="about-section__subtitle">Periode Desember 2023 — November 2028</p>
            </div>
            
            <div className="org-layout">
              
              {/* Dewan Kehormatan */}
              {honorary.length > 0 && (
                <div className="org-tier">
                  <h3 className="org-tier__title">Dewan Kehormatan</h3>
                  <div className="org-tier__grid org-tier__grid--2col">
                    <div className="org-subgroup">
                      <h4 className="org-subgroup__label">Pembina</h4>
                      {honorary.filter(m => m.role === 'Pembina').map(m => (
                        <MemberCard key={m.id} role={m.role} name={m.name} imageUrl={m.image_url} />
                      ))}
                    </div>
                    <div className="org-subgroup">
                      <h4 className="org-subgroup__label">Pengawas</h4>
                      {honorary.filter(m => m.role === 'Pengawas').map(m => (
                        <MemberCard key={m.id} role={m.role} name={m.name} imageUrl={m.image_url} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {honorary.length > 0 && <div className="org-connector" aria-hidden="true"></div>}

              {/* Pengurus Inti */}
              {coreTeam.length > 0 && (
                <div className="org-tier org-tier--highlight">
                  <h3 className="org-tier__title">Pengurus Inti</h3>
                  {featuredMember && (
                    <div className="org-tier__featured">
                      <MemberCard role={featuredMember.role} name={featuredMember.name} featured={true} imageUrl={featuredMember.image_url} />
                    </div>
                  )}
                  <div className="org-tier__grid org-tier__grid--2col">
                    {otherCore.map(m => (
                      <MemberCard key={m.id} role={m.role} name={m.name} imageUrl={m.image_url} />
                    ))}
                  </div>
                </div>
              )}

              {coreTeam.length > 0 && <div className="org-connector" aria-hidden="true"></div>}

              {/* Bidang */}
              {Object.keys(teamByDept).length > 0 && (
                <div className="org-tier">
                  <h3 className="org-tier__title">Bidang-Bidang</h3>
                  <div className="org-tier__grid org-tier__grid--3col">
                    {Object.entries(teamByDept).map(([dept, members]) => (
                      <div className="org-subgroup" key={dept}>
                        <h4 className="org-subgroup__label">{dept}</h4>
                        {members.map(m => (
                          <MemberCard key={m.id} role={m.role} name={m.name} imageUrl={m.image_url} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
