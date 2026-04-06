import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { menuItems } from '../data/menuItems'

export default function Menu() {
  const cardsRef = useRef([])

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.menu-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    }
    return () => gsap.killTweensOf(cardsRef.current)
  }, [])

  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <div>
          <div className="section-label">Culinary Art</div>
          <h2 className="section-title">The Menu</h2>
        </div>
        <div style={{ fontFamily: '"Rasa", serif', fontStyle: 'italic', color: 'var(--text-mid)' }}>
          100% Vegetarian / Jain Available
        </div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div 
            className="menu-card" 
            key={item.id}
            ref={el => cardsRef.current[index] = el}
          >
            <img src={item.image} alt={item.name} className="menu-card-image" />
            
            <div className="menu-card-body">
              <div className="menu-card-category">{item.category}</div>
              <h3 className="menu-card-name">{item.name}</h3>
              <p className="menu-card-desc">{item.description}</p>
              
              <div className="menu-card-footer">
                <div className="menu-card-price">{item.price}</div>
                {item.tag && <div className="menu-card-tag">{item.tag}</div>}
              </div>
            </div>
            
            <div className="menu-card-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
