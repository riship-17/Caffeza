import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { galleryItems } from '../data/galleryItems'

export default function Gallery() {
  const stripRef = useRef(null)

  useEffect(() => {
    if (stripRef.current && stripRef.current.children.length > 0) {
      gsap.fromTo(stripRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    }
    return () => gsap.killTweensOf('.gallery-item')
  }, [])

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <div className="section-label">Aesthetic</div>
        <h2 className="section-title">The Vibe</h2>
      </div>

      <div className="gallery-strip" ref={stripRef}>
        {galleryItems.map((item) => (
          <div className="gallery-item" key={item.id}>
            <img src={item.image} alt={item.label} />
            <div className="gallery-item-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
