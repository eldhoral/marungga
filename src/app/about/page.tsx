import Image from "next/image";
import "./page.css";

const MemberCard = ({ role, name, className = "", featured = false }: { role: string, name: string, className?: string, featured?: boolean }) => (
  <div className={`member-card organic-panel ${featured ? 'featured' : ''} ${className}`}>
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
      
      {/* Header */}
      <section className="about-header section text-center">
        <div className="container relative z-10">
          <div className="organic-panel inline-block p-xl rounded-xl">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold text-primary-dark mb-md">Kenali Kami Lebih Dekat</h1>
            <p className="max-w-2xl mx-auto text-muted text-lg md:text-xl">
              Mengenal lebih jauh tentang jejak langkah dan visi misi Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation).
            </p>
          </div>
        </div>
      </section>

      {/* Latar Belakang & Siapa Kami */}
      <section className="section bg-surface-alt relative z-10 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center mb-xxl about-story-grid">
            <div className="story-content">
              <h2 className="section-title">Siapa Kami?</h2>
              <div className="text-lg text-muted flex flex-col gap-sm">
                <p>
                  Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation) didirikan pada Februari 2019, merupakan Organisasi berbasis Masyarakat yang lahir atas kemauan dan kesadaran sekelompok orang masyarakat yang terorganisir dan peduli terhadap isu-isu kemanusiaan di Indonesia, khususnya Wilayah Timur Indonesia.
                </p>
                <p>
                  Yayasan ini berkedudukan di Kota Kupang, Nusa Tenggara Timur. Marungga Foundation memiliki 13 anggota yang mempunyai pengalaman kerja di bidang pengembangan masyarakat adat, pengembangan anak, kesetaraan gender, advokasi, perlindungan anak, kesehatan, pengurangan risiko bencana dan inklusi.
                </p>
              </div>
            </div>
            <div className="story-image-container organic-panel">
              <Image src="/about_placeholder.png" alt="Marungga Community" width={600} height={400} className="w-full h-auto object-cover rounded-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center about-story-grid-reverse">
            <div className="organic-panel story-image flex-center text-center p-xl md:p-xxl rounded-xl bg-primary text-white">
              <span className="text-6xl block mb-sm">📜</span>
              <p className="font-bold text-xl">Berbadan Hukum Resmi<br/>Sejak 2020</p>
            </div>
            <div className="story-content">
              <h2 className="section-title">Latar Belakang</h2>
              <div className="text-lg text-muted flex flex-col gap-sm">
                <p>
                  Berawal dari bekerja merespon Badai Siklon Tropis Seroja (4 April 2021) di Kupang Nusa Tenggara Timur secara mandiri, kemudian didaftarkan ke Kementerian Hukum dan HAM Republik Indonesia menjadi sebuah badan hukum perkumpulan pada tahun 2021 dan diperbaharui menjadi Yayasan pada Tanggal 16 Desember tahun 2023.
                </p>
                <p>
                  Marungga Foundation telah terdaftar sebagai sebuah Yayasan berbadan hukum melalui akta notaris no 8 tanggal 29 Juni 2020 oleh Yarek A. B Pakh, s.h, m.Kn (Notaris dan PPAT).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="section relative z-10">
        <div className="container">
          <div className="text-center mb-xxl">
            <h2 className="section-title mb-md">Visi Organisasi</h2>
            <div className="organic-panel p-lg md:p-xl rounded-xl max-w-4xl mx-auto">
              <p className="visi-text text-xl md:text-2xl font-outfit font-medium text-primary-dark leading-relaxed">
                "Mewujudkan Masyarakat Indonesia Timur yang Tangguh dan Sejahtera Melalui Kerja Pemberdayaan, Kemanusiaan yang memprioritaskan Perlindungan anak, Kesetaraan Gender dan Inklusi sosial berbasis penelitian."
              </p>
            </div>
          </div>

          <h2 className="section-title text-center mb-lg">Misi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-5xl mx-auto">
            <div className="misi-card organic-panel">
              <span className="misi-number text-primary">01</span>
              <p>Mengembangkan perlindungan anak dan perlindungan sosial di Masyarakat.</p>
            </div>
            <div className="misi-card organic-panel">
              <span className="misi-number text-primary">02</span>
              <p>Mengembangkan kapasitas sumber daya Manusia dengan prinsip kesetaraan gender dan inklusi sosial (GESI).</p>
            </div>
            <div className="misi-card organic-panel">
              <span className="misi-number text-primary">03</span>
              <p>Berperan aktif dalam penanggulangan bencana dan peningkatan kesehatan masyarakat secara partisipatif.</p>
            </div>
            <div className="misi-card organic-panel">
              <span className="misi-number text-primary">04</span>
              <p>Melaksanakan pendampingan pelestarian budaya, sosial dan ekonomi berdasarkan potensi lokal dengan tetap memperhatikan keberlanjutan kelestarian lingkungan dan Sumber Daya Alam (SDA).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="section bg-surface-alt relative z-10">
        <div className="container text-center">
          <h2 className="section-title">Struktur Organisasi</h2>
          <p className="text-muted mb-xl text-lg">Periode Desember 2023 - November 2028</p>
          
          <div className="org-container max-w-5xl mx-auto flex flex-col items-center gap-xl">
            
            {/* Dewan Kehormatan */}
            <div className="org-group w-full">
              <h3 className="org-group-title text-2xl font-bold text-primary-dark mb-md">Dewan Kehormatan</h3>
              <div className="flex flex-col md:flex-row justify-center gap-md md:gap-xl mt-md">
                <div className="flex flex-col gap-sm w-full md:w-auto">
                  <MemberCard role="Pembina" name="Rika Setiawati" />
                  <MemberCard role="Pembina" name="Yulni M. Nggabu" />
                </div>
                <div className="flex flex-col gap-sm w-full md:w-auto">
                  <MemberCard role="Pengawas" name="Dianika Wira Atmaja" />
                  <MemberCard role="Pengawas" name="Yublinance Dael" />
                </div>
              </div>
            </div>

            <div className="org-divider my-lg border-t-2 border-border w-full max-w-md mx-auto"></div>

            {/* Pengurus Inti */}
            <div className="org-group w-full flex flex-col items-center gap-lg">
              {/* Ketua */}
              <MemberCard role="Ketua Pengurus" name="Desinta W Futboe" featured={true} className="w-full md:w-auto" />
              
              {/* Sekretaris & Bendahara */}
              <div className="flex flex-col md:flex-row justify-center gap-md md:gap-xl w-full max-w-3xl mt-sm">
                <MemberCard role="Sekretaris Umum" name="Nicodemus Seran" className="w-full md:w-1/2" />
                <MemberCard role="Bendahara Umum" name="Juliana Lawa" className="w-full md:w-1/2" />
              </div>
            </div>

            <div className="org-divider my-lg border-t-2 border-border w-full max-w-md mx-auto"></div>

            {/* Bidang-bidang */}
            <div className="org-group w-full">
              <h3 className="org-group-title text-2xl font-bold text-primary-dark mb-md">Bidang-Bidang</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-md org-bidang-grid">
                <div className="flex flex-col items-center gap-sm">
                  <h4 className="tier-title text-sm mb-xs text-primary font-bold uppercase tracking-wider text-center">Riset dan Dokumentasi<br/>Seni & Budaya</h4>
                  <MemberCard role="Koordinator" name="Joseph Lamont" className="w-full" />
                </div>
                <div className="flex flex-col items-center gap-sm">
                  <h4 className="tier-title text-sm mb-xs text-primary font-bold uppercase tracking-wider text-center">Program dan<br/>Pengembangan</h4>
                  <MemberCard role="Koordinator" name="S. Fridwan K. Pelickita" className="w-full" />
                  <MemberCard role="Anggota" name="Meilinda Fanni Oktaviani" className="w-full" />
                </div>
                <div className="flex flex-col items-center gap-sm">
                  <h4 className="tier-title text-sm mb-xs text-primary font-bold uppercase tracking-wider text-center">Keuangan dan<br/>Administrasi</h4>
                  <MemberCard role="Koordinator" name="Ferdinan Duka" className="w-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
