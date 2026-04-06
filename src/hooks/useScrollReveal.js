import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const anim = gsap.fromTo(el,
      { opacity: 0, y: options.y ?? 40, x: options.x ?? 0, scale: options.scale ?? 1 },
      {
        opacity: 1, y: 0, x: 0, scale: 1,
        duration: options.duration ?? 0.9,
        delay: options.delay ?? 0,
        ease: options.ease ?? 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    )
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [])
  return ref
}
