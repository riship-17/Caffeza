import { useScrollReveal } from '../hooks/useScrollReveal'
import { Utensils, Star, CreditCard } from 'lucide-react'

export default function InfoSection() {
  const leftRef = useScrollReveal({ y: 50, duration: 1 })
  const rightRef = useScrollReveal({ y: 50, duration: 1, delay: 0.2 })

  const today = new Date().getDay()

  const hours = [
    { day: 'Monday', time: '11:00 AM - 1:00 AM' },
    { day: 'Tuesday', time: '11:00 AM - 1:00 AM' },
    { day: 'Wednesday', time: '11:00 AM - 1:00 AM' },
    { day: 'Thursday', time: '11:00 AM - 1:00 AM' },
    { day: 'Friday', time: '11:00 AM - 2:00 AM', highlight: true },
    { day: 'Saturday', time: '11:00 AM - 2:00 AM', highlight: true },
    { day: 'Sunday', time: '11:00 AM - 2:00 AM', highlight: true },
  ]

  return (
    <section className="info-section" id="info">
      <div className="info-left" ref={leftRef}>
        <div className="section-label">When to Visit</div>
        <h2 className="section-title">Operating Hours</h2>
        
        <div className="hours-list">
          {hours.map((item, index) => {
            // Get day index to match JS Date.getDay() format (0 = Sunday, 1 = Monday)
            let dayIndex = index + 1
            if (dayIndex === 7) dayIndex = 0
            
            const isToday = today === dayIndex

            return (
              <div 
                key={index} 
                className={`hours-row ${isToday ? 'today' : ''} ${item.highlight ? 'highlight' : ''}`}
              >
                <div className="day">{item.day}</div>
                <div className="time">{item.time}</div>
              </div>
            )
          })}
        </div>
        
        <div className="diet-pills">
          <span className="diet-pill">Jain Options</span>
          <span className="diet-pill">Swaminarayan</span>
          <span className="diet-pill">Specialty Coffee</span>
        </div>
      </div>

      <div className="info-right" ref={rightRef}>
        <div className="section-label">Exclusives</div>
        <h2 className="section-title">Current Offers</h2>
        
        <div className="offers-grid">
          <div className="offer-card">
            <div className="offer-icon">
              <Utensils size={20} />
            </div>
            <div>
              <h3 className="offer-title">EazyDiner Exclusive</h3>
              <p className="offer-desc">Get flat 15% off on the entire menu when you book your table through EazyDiner.</p>
            </div>
          </div>
          
          <div className="offer-card">
            <div className="offer-icon">
              <Star size={20} />
            </div>
            <div>
              <h3 className="offer-title">Zomato Gold</h3>
              <p className="offer-desc">Enjoy complimentary artisan coffee with any large dessert for Gold members.</p>
            </div>
          </div>
          
          <div className="offer-card">
            <div className="offer-icon">
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className="offer-title">PayEazy</h3>
              <p className="offer-desc">Pay through PayEazy to get up to ₹500 cashback on your total bill.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
