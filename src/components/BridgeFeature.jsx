import { useScrollReveal } from '../hooks/useScrollReveal'
import bridgeImg from '../assets/unnamed (6).jpg'

export default function BridgeFeature() {
  const imgRef = useScrollReveal({ x: -60, duration: 1.2 })
  const textRef = useScrollReveal({ y: 40, duration: 1, delay: 0.3 })

  return (
    <section className="bridge">
      <div className="bridge-watermark">BRIDGE</div>
      
      <div className="bridge-grid">
        <div className="bridge-img-wrap" ref={imgRef}>
          <img 
            src={bridgeImg} 
            alt="Bridge View at Night" 
          />
          <div className="bridge-img-frame"></div>
        </div>
        
        <div className="bridge-text" ref={textRef}>
          <div className="section-label">Architecture</div>
          <h2 className="section-title">
            Dine Above <br/>
            The <span className="deco">City.</span>
          </h2>
          
          <div style={{ marginTop: '2rem' }}>
            <p className="bridge-body">
              Located on Kudasan's iconic bridge, we offer a vantage point unlike any other in Gandhinagar. Watch the city lights trace the passing traffic while you enjoy the intimacy of our warm, beige interior.
            </p>
            <p className="bridge-body">
              The contrast between the structural coldness of the bridge outside and our inviting, aesthetic embrace inside creates an unforgettable evening ambiance.
            </p>
          </div>
          
          <div className="bridge-pill">
            Late Night Views
          </div>
        </div>
      </div>
    </section>
  )
}
