import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null)
  const logoRef = useRef(null)
  const taglineRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => onComplete()
        })
      }
    })

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
    .to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power3.out'
    }, '-=0.2')
    .to(barRef.current, {
      width: '100%',
      duration: 1.4,
      ease: 'power2.inOut'
    }, '-=0.1')
  }, [])

  return (
    <div className="loader-screen" ref={loaderRef}>
      <div
        className="loader-logo"
        ref={logoRef}
        style={{ transform: 'translateY(20px)' }}
      >
        Cafez<span>za</span>
      </div>
      <div
        className="loader-tagline"
        ref={taglineRef}
        style={{ transform: 'translateY(10px)' }}
      >
        Be Caffeinated
      </div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" ref={barRef} />
      </div>
    </div>
  )
}
