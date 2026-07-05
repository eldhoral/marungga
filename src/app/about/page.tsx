"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import "./page.css";

/* Lazy-load wrapper: fades in when section scrolls into view */
function LazySection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lazy-section ${className}`}>
      {children}
    </div>
  );
}

const MemberCard = ({ role, name, featured = false }: { role: string, name: string, featured?: boolean }) => (
  <div className={`member-card ${featured ? 'member-card--featured' : ''}`} tabIndex={0} aria-label={`${name}, ${role}`}>
    <div className="member-avatar">
      <span className="member-initials">{name.charAt(0)}</span>
    </div>
    <div className="member-info">
      <span className="member-role">{role}</span>
      <span className="member-name">{name}</span>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="about-page animate-fade-in relative">
      
      <div className="blob blob-accent" style={{ top: '5%', right: '10%', width: '400px', height: '400px', opacity: 0.3 }}></div>

      {/* Hero — no lazy load, always visible first */}
      <section className="about-header text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-5xl font-jakarta font-bold text-primary-dark mb-md">Tentang Kami</h1>
            <p className="max-w-2xl mx-auto text-muted text-xl">
              Kenali Kami Lebih Dekat. Jejak langkah dan visi misi Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) di kawasan Timur Indonesia.
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
                <p className="about-section__lead">
                  Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) didirikan pada Februari 2019.
                </p>
                <p className="about-section__body">
                  Merupakan organisasi berbasis masyarakat yang lahir atas kemauan dan kesadaran sekelompok orang yang terorganisir dan peduli terhadap isu-isu kemanusiaan di Indonesia, khususnya Wilayah Timur Indonesia.
                </p>
                <p className="about-section__body">
                  Berpusat di Kota Kupang, NTT, Marungga Foundation memiliki 14 anggota profesional dengan rekam jejak di bidang pengembangan masyarakat adat, perlindungan anak, kesetaraan gender, advokasi, PRB, dan inklusi sosial.
                </p>
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
                <p className="about-section__body">
                  Langkah awal kami bermula dari panggilan kemanusiaan untuk merespons Badai Siklon Tropis Seroja yang menerjang Kupang pada 4 April 2021. Bekerja secara mandiri di lapangan menguatkan tekad kami untuk melembagakan upaya bantuan ini.
                </p>
                <p className="about-section__body">
                  Organisasi kami resmi terdaftar di Kementerian Hukum dan HAM RI sebagai badan hukum perkumpulan pada tahun 2021, lalu statusnya diperbarui menjadi <strong>Yayasan</strong> pada 16 Desember 2023.
                </p>
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
              <p>
                Mewujudkan Masyarakat Indonesia Timur yang Tangguh dan Sejahtera Melalui Kerja Pemberdayaan, Kemanusiaan yang memprioritaskan Perlindungan Anak, Kesetaraan Gender dan Inklusi Sosial berbasis Penelitian.
              </p>
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
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", text: "Mengembangkan perlindungan anak dan perlindungan sosial di masyarakat." },
                { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75", text: "Mengembangkan kapasitas SDM dengan prinsip kesetaraan gender dan inklusi sosial (GESI)." },
                { icon: "M22 12h-4l-3 9L9 3l-3 9H2", text: "Berperan aktif dalam penanggulangan bencana dan peningkatan kesehatan masyarakat secara partisipatif." },
                { icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", text: "Melaksanakan pendampingan pelestarian budaya, sosial dan ekonomi berdasarkan potensi lokal dengan memperhatikan keberlanjutan SDA." }
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
              <div className="org-tier">
                <h3 className="org-tier__title">Dewan Kehormatan</h3>
                <div className="org-tier__grid org-tier__grid--2col">
                  <div className="org-subgroup">
                    <h4 className="org-subgroup__label">Pembina</h4>
                    <MemberCard role="Pembina" name="Rika Setiawati" />
                    <MemberCard role="Pembina" name="Yufni Mole Nggebu" />
                  </div>
                  <div className="org-subgroup">
                    <h4 className="org-subgroup__label">Pengawas</h4>
                    <MemberCard role="Pengawas" name="Dianika Wira Atmaja" />
                    <MemberCard role="Pengawas" name="Yublinance Dael" />
                  </div>
                </div>
              </div>

              <div className="org-connector" aria-hidden="true"></div>

              {/* Pengurus Inti */}
              <div className="org-tier org-tier--highlight">
                <h3 className="org-tier__title">Pengurus Inti</h3>
                <div className="org-tier__featured">
                  <MemberCard role="Ketua Pengurus" name="Desinta W Futboe" featured={true} />
                </div>
                <div className="org-tier__grid org-tier__grid--2col">
                  <MemberCard role="Sekretaris Umum" name="Nicodemus Seran" />
                  <MemberCard role="Bendahara Umum" name="Juliana Lawa" />
                </div>
              </div>

              <div className="org-connector" aria-hidden="true"></div>

              {/* Bidang */}
              <div className="org-tier">
                <h3 className="org-tier__title">Bidang-Bidang</h3>
                <div className="org-tier__grid org-tier__grid--3col">
                  <div className="org-subgroup">
                    <h4 className="org-subgroup__label">Riset &amp; Dokumentasi</h4>
                    <MemberCard role="Koordinator" name="Joseph Lamont" />
                    <MemberCard role="Anggota" name="Wustari L. Mangundjaya" />
                    <MemberCard role="Anggota" name="Reftalina Rachman" />
                    <MemberCard role="Anggota" name="Faisal Magrie" />
                  </div>
                  <div className="org-subgroup">
                    <h4 className="org-subgroup__label">Program &amp; Pengembangan</h4>
                    <MemberCard role="Koordinator" name="S. Fridwan Pellokila" />
                    <MemberCard role="Anggota" name="Meilinda Fanni Oktaviani" />
                  </div>
                  <div className="org-subgroup">
                    <h4 className="org-subgroup__label">Keuangan &amp; Administrasi</h4>
                    <MemberCard role="Koordinator" name="Ferdinan Duka" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>
    </div>
  );
}
