import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand-col">
            <h3 className="footer-brand">
              <Image src="/marungga_logo.png" alt="Marungga Logo" width={32} height={32} className="footer-logo" />
              Marungga Foundation
            </h3>
            <p className="footer-text mt-sm">
              Yayasan Masyarakat Tangguh Sejahtera. <br/>
              Membangun Masyarakat Indonesia Timur yang Tangguh dan Sejahtera.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h4 className="footer-heading">Tautan Cepat</h4>
            <ul className="footer-links">
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/about">Tentang Kami</Link></li>
              <li><Link href="/programs">Program Kerja</Link></li>
              <li><Link href="/contact">Hubungi Kami</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact-col">
            <h4 className="footer-heading">Hubungi Kami</h4>
            <ul className="footer-contact">
              <li><span className="footer-contact-icon">📍</span> Kota Kupang, Nusa Tenggara Timur</li>
              <li><span className="footer-contact-icon">👤</span> Desintawati Futboe</li>
              <li><span className="footer-contact-icon">📞</span> 0812 3693 3550</li>
              <li><span className="footer-contact-icon">✉️</span> marunggafoundation@gmail.com</li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yayasan Masyarakat Tangguh Sejahtera (Marungga Foundation). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
