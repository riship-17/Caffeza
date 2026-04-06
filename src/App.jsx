import { useState, useEffect } from 'react'
import gsap from 'gsap'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import BridgeFeature from './components/BridgeFeature'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import InfoSection from './components/InfoSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  // Cursor tracking
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  // Progress bar
  useEffect(() => {
    const progressBar = document.getElementById('progress-bar')
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      if (progressBar) {
        progressBar.style.width = scrolled + "%"
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      
      <div id="cursor" />
      <div id="cursor-ring" />
      <div id="progress-bar" />

      <main className={loaded ? 'content-loaded' : 'content-hidden'}>
        <Navbar loaded={loaded} />
        <Hero loaded={loaded} />
        <Marquee />
        <About />
        <BridgeFeature />
        <Menu />
        <Gallery />
        <InfoSection />
        <MapSection />
        <Footer />
      </main>
    </>
  )
}

export default App
