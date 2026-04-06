export default function Marquee() {
  const items = [
    'Bridge Café', 'Italian Cuisine', 'Artisan Coffee', 
    'Open Till 2 AM', 'Beige Aesthetic', 'Jain Options', 
    'Kudasan', 'Tiramisu Brownie', 'Biscoff Cheesecake'
  ]
  const doubleItems = [...items, ...items]

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {doubleItems.map((item, index) => (
          <div key={index} className="marquee-item">
            {item} <span className="marquee-bullet">✦</span>
          </div>
        ))}
      </div>
    </section>
  )
}
