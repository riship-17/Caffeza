import { useScrollReveal } from '../hooks/useScrollReveal'
import { Instagram, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const footerRef = useScrollReveal({ y: 30, duration: 1 })

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-logo">
            Cafez<span>za</span>
          </div>
          <p className="footer-brand-tagline">
            Gujarat's only bridge café. An Italian culinary escape on the iconic bridge of Kudasan.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="#" className="footer-insta"><Instagram size={18} /></a>
            <a href="#" className="footer-insta"><MapPin size={18} /></a>
            <a href="#" className="footer-insta"><Mail size={18} /></a>
            <a href="#" className="footer-insta"><Phone size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><a href="#about" className="footer-link">Our Story</a></li>
            <li><a href="#menu" className="footer-link">The Menu</a></li>
            <li><a href="#gallery" className="footer-link">Gallery</a></li>
            <li><a href="#location" className="footer-link">Find Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Cuisine</div>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Authentic Italian</a></li>
            <li><a href="#" className="footer-link">Artisan Coffee</a></li>
            <li><a href="#" className="footer-link">Late Night Desserts</a></li>
            <li><a href="#" className="footer-link">Chef's Specials</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li><a href="https://instagram.com/cafezza" className="footer-link">Instagram</a></li>
            <li><a href="#" className="footer-link">Facebook</a></li>
            <li><a href="#" className="footer-link">Twitter / X</a></li>
            <li><a href="#" className="footer-link">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          © 2024 Cafezza Gandhinagar. Crafted for Aesthetic Diners.
        </div>
        <a href="https://instagram.com/cafezza" target="_blank" rel="noopener noreferrer" className="footer-insta">
          @CAFEZZA_OFFICIAL
        </a>
      </div>
    </footer>
  )
}
