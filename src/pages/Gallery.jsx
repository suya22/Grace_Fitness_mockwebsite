import React, { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import './Gallery.css'

// Using high quality Unsplash gym photos
const categories = ['All', 'Equipment', 'Training', 'Facilities', 'Community']

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', alt: 'Main gym floor', cat: 'Facilities', span: 'wide' },
  { id: 2, src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80', alt: 'Weight training area', cat: 'Equipment' },
  { id: 3, src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80', alt: 'Cardio machines', cat: 'Equipment' },
  { id: 4, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Personal training session', cat: 'Training', span: 'tall' },
  { id: 5, src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80', alt: 'Dumbbell rack', cat: 'Equipment' },
  { id: 6, src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80', alt: 'CrossFit area', cat: 'Training' },
  { id: 7, src: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80', alt: 'Yoga class', cat: 'Community', span: 'wide' },
  { id: 8, src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80', alt: 'Bench press', cat: 'Equipment' },
  { id: 9, src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80', alt: 'Group training', cat: 'Community' },
  { id: 10, src: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=80', alt: 'Locker room', cat: 'Facilities' },
  { id: 11, src: 'https://images.unsplash.com/photo-1637666218229-eff9e6e4df23?w=600&q=80', alt: 'Barbell area', cat: 'Equipment' },
  { id: 12, src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80', alt: 'Women training', cat: 'Training', span: 'tall' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? images : images.filter(i => i.cat === active)

  return (
    <main className="gallery page-enter">
      <section className="page-hero gallery-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label">Inside Grace Fitness</div>
          <h1 className="section-title">OUR GYM<br />GALLERY</h1>
          <p className="section-subtitle">Take a visual tour of our facilities, equipment, and community.</p>
        </div>
      </section>

      {/* FILTER */}
      <section className="gallery-filter-bar">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-tab ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-masonry">
            {filtered.map(img => (
              <div
                key={img.id}
                className={`gallery-item ${img.span || ''}`}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <ZoomIn size={28} color="var(--accent)" />
                    <span>{img.alt}</span>
                    <span className="gallery-cat-label">{img.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src.replace('w=600', 'w=1200').replace('w=800', 'w=1400')} alt={lightbox.alt} />
            <div className="lightbox-caption">
              <span className="lightbox-cat">{lightbox.cat}</span>
              <span>{lightbox.alt}</span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Experience It Live</div>
          <h2 className="section-title">SEE IT IN PERSON</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Photos don't do justice. Come in for a free visit and feel the energy yourself.
          </p>
          <a href="https://maps.google.com/?q=Grace+Fitness+Unisex+Gym+Badlapur" target="_blank" rel="noreferrer" className="btn-primary">
            Get Directions
          </a>
        </div>
      </section>
    </main>
  )
}
