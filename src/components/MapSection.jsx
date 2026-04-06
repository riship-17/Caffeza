import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Phone, Instagram, Clock } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Custom marker icon
const customIcon = L.divIcon({
  className: 'custom-marker-wrapper',
  html: '<div class="custom-marker">✦ Cafezza</div>',
  iconSize: [100, 30],
  iconAnchor: [50, 35]
})

export default function MapSection() {
  const mapRef = useScrollReveal({ y: 50, duration: 1 })
  const infoRef = useScrollReveal({ y: 50, duration: 1, delay: 0.2 })

  const position = [23.2156, 72.6369]

  return (
    <section className="map-section" id="location">
      <div className="map-container" ref={mapRef}>
        <MapContainer 
          center={position} 
          zoom={15} 
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              Cafezza — Be Caffeinated
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="map-info" ref={infoRef}>
        <div className="section-label">Find Us</div>
        <h2 className="section-title">Visit The Bridge</h2>
        
        <div className="map-details">
          <div className="map-detail-row">
            <MapPin className="map-detail-icon" size={20} />
            <div>
              <div className="map-detail-label">Address</div>
              <div className="map-detail-value">
                1st Floor, Iconic Bridge, Kudasan-Gandhinagar Road,<br/>
                Kudasan, Gandhinagar, Gujarat 382421
              </div>
            </div>
          </div>
          
          <div className="map-detail-row">
            <Phone className="map-detail-icon" size={20} />
            <div>
              <div className="map-detail-label">Contact</div>
              <div className="map-detail-value">+91 98765 43210</div>
            </div>
          </div>
          
          <div className="map-detail-row">
            <Instagram className="map-detail-icon" size={20} />
            <div>
              <div className="map-detail-label">Follow</div>
              <div className="map-detail-value">@cafezza_official</div>
            </div>
          </div>
          
          <div className="map-detail-row">
            <Clock className="map-detail-icon" size={20} />
            <div>
              <div className="map-detail-label">Today</div>
              <div className="map-detail-value">Open until 2:00 AM</div>
            </div>
          </div>
        </div>
        
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=23.2156,72.6369" 
          target="_blank" 
          rel="noopener noreferrer"
          className="map-btn"
        >
          Get Directions
        </a>
      </div>
    </section>
  )
}
