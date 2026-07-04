"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Program', path: '/programs' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <>
      <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <div className="navbar-container">
            <Link href="/" className="navbar-brand">
              <Image src="/marungga_logo.png" alt="Marungga Foundation" width={40} height={40} className="brand-logo" />
              <span className="brand-text">Marungga</span>
            </Link>
            
            <ul className="navbar-nav desktop-nav">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={pathname === item.path ? 'active' : ''}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button 
              className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={pathname === item.path ? 'active' : ''}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
