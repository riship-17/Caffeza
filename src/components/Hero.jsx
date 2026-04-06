import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroImg from '../assets/6663.webp'

export default function Hero({ loaded }) {
  const eyebrowRef = useRef(null)
  const title1Ref = useRef(null)
  const title2Ref = useRef(null)
  const subRef = useRef(null)
  const badgesRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (loaded) {
      gsap.to(eyebrowRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 0.2
      })

      gsap.to([title1Ref.current, title2Ref.current], {
        y: 0,
        stagger: 0.12,
        duration: 1,
        delay: 0.35,
        ease: 'power4.out'
      })

      gsap.to(subRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 0.7
      })

      gsap.to(badgesRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 0.9
      })

      gsap.to(cardRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.1,
        ease: 'power3.out'
      })
    }
  }, [loaded])

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-noise"></div>
        <div className="hero-glow"></div>

        <div className="hero-content">
          <div className="hero-eyebrow" ref={eyebrowRef}>Gujarat's Only Bridge Café</div>

          <h1 className="hero-title">
            <span className="line">
              <span className="word" ref={title1Ref}>Be</span>
            </span>
            <span className="line">
              <span className="word" ref={title2Ref}>
                <span className="italic">Caffe</span>inated.
              </span>
            </span>
          </h1>

          <p className="hero-sub" ref={subRef}>
            A luxurious Italian dining and artisan coffee experience right on the iconic bridge of Kudasan, Gandhinagar. Open late for the night owls.
          </p>

          <div className="hero-badges" ref={badgesRef}>
            <span className="hero-badge">Est. 2024</span>
            <span className="hero-badge">Open Till 2 AM</span>
            <span className="hero-badge">100% Veg</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={heroImg}
          alt="Cafezza Interior"
          className={`hero-image ${loaded ? 'loaded' : ''}`}
        />
        <div className="hero-image-overlay"></div>

        <div className="hero-card" ref={cardRef}>
          <div className="hero-card-label">Currently Serving</div>
          <div className="hero-card-title">Artisan Roasts</div>
          <div className="hero-card-text">Our specialty coffee beans are ethically sourced and freshly roasted in-house every morning.</div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-hint-line"></div>
          <div className="scroll-hint-text">SCROLL</div>
        </div>
      </div>
    </section>
  )
}
