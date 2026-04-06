import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImg1 from '../assets/unnamed (1).webp'
import aboutImg2 from '../assets/unnamed (8).jpg'

export default function About() {
  const leftRef = useScrollReveal({ y: 60, duration: 1 })
  const img1Ref = useScrollReveal({ x: 60, duration: 1.2, delay: 0.2 })
  const img2Ref = useScrollReveal({ x: -40, y: 40, duration: 1.2, delay: 0.4 })

  return (
    <section className="about" id="about">
      <div className="about-content" ref={leftRef}>
        <div className="section-label">Aesthetic & Vibe</div>
        <h2 className="section-title">Elevate Your Evenings</h2>
        
        <p className="about-body">
          Cafezza isn't just a place to grab a coffee; it's a sensory experience designed around the warm embrace of beige aesthetics and the stunning architecture of Kudasan's only bridge café.
        </p>
        <p className="about-body">
          Whether you're stopping by for a perfectly pulled espresso in the afternoon, or craving authentic Italian pasta at midnight, our space transitions seamlessly to fit your mood. 
        </p>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">#1</div>
            <div className="stat-label">Bridge View Café</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2<span style={{ fontSize: '2rem' }}>AM</span></div>
            <div className="stat-label">Open Every Night</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Curated Dishes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.8</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>
      
      <div className="about-images">
        <img 
          ref={img1Ref}
          src={aboutImg1} 
          alt="Cafezza Ambient Interior" 
          className="about-img-1" 
        />
        <img 
          ref={img2Ref}
          src={aboutImg2} 
          alt="Artisan Latte Art" 
          className="about-img-2" 
        />
        <div className="about-deco-tag">BE Caffeinated</div>
      </div>
    </section>
  )
}
