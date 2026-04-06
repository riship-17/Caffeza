import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import logoImg from '../assets/cafezza.jpg'

export default function Navbar({ loaded }) {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (loaded) {
      gsap.to(navRef.current, {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1
      })
    }
  }, [loaded])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <a href="#" className="nav-logo">
        <img src={logoImg} alt="Cafezza Logo" className="logo-img" />
      </a>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#menu" className="nav-link">Menu</a>
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#info" className="nav-link">Visit Us</a>
        <button className="nav-cta">Visit Us</button>
      </div>
    </nav>
  )
}
