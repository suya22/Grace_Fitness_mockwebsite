import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Star, Users, Award, Clock } from 'lucide-react'
import './Home.css'

const stats = [
  { icon: <Users size={28} />, value: '500+', label: 'Active Members' },
  { icon: <Award size={28} />, value: '4.6', label: 'Google Rating' },
  { icon: <Clock size={28} />, value: '17+', label: 'Hours Open Daily' },
  { icon: <Star size={28} />, value: '107+', label: 'Happy Reviews' },
]

const features = [
  {
    number: '01',
    title: 'State-of-the-Art Equipment',
    desc: 'From Olympic barbells and plate-loaded machines to the latest cardio tech — everything you need to go harder.',
  },
  {
    number: '02',
    title: 'Unisex & Inclusive',
    desc: 'A safe, welcoming environment for men and women of all fitness levels. You belong here, period.',
  },
  {
    number: '03',
    title: 'Expert Trainers',
    desc: 'Certified coaches who design personalised programs and track your progress every step of the way.',
  },
  {
    number: '04',
    title: 'Flexible Timings',
    desc: 'Open from 5 AM to 10:30 PM. Whether you\'re a sunrise warrior or a night owl, we\'re here for you.',
  },
]

const testimonials = [
  {
    name: 'Rahul S.',
    text: 'Best gym in Badlapur hands down. The trainers really push you and the equipment is always well-maintained.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    text: 'As a woman I feel completely safe and comfortable here. The staff is super supportive. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Vikram D.',
    text: 'Been training here for 2 years. Incredible transformation, great community, and very affordable memberships.',
    rating: 5,
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      el.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-overlay" />
        <div className="hero-grid-lines" />
        <div className="container hero-content">
          <div className="hero-eyebrow animate-fade-up">
            <span className="eyebrow-dot" />
            Badlapur's #1 Unisex Gym
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line">FORGE YOUR</span>
            <span className="hero-title-line accent">BEST SELF</span>
          </h1>
          <p className="hero-desc">
            Elite equipment. Expert trainers. An unbeatable community.<br />
            Your transformation starts at Grace Fitness.
          </p>
          <div className="hero-actions">
            <Link to="/membership" className="btn-primary">
              Start Today <ArrowRight size={16} />
            </Link>
            <Link to="/programs" className="btn-outline">
              Explore Programs
            </Link>
          </div>
          <div className="hero-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />
              ))}
            </div>
            <span><strong>4.6 / 5</strong> from 107+ Google reviews</span>
          </div>
        </div>
        <a href="#stats" className="hero-scroll-hint">
          <ChevronDown size={20} />
          <span>Scroll</span>
        </a>
      </section>

      {/* ── STATS ── */}
      <section id="stats" className="stats-bar">
        <div className="container stats-inner">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section className="section about-strip">
        <div className="container about-strip-inner">
          <div className="about-strip-text">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">MORE THAN A GYM. A MOVEMENT.</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Grace Fitness Unisex Gym in Badlapur is built for real people with real goals. Whether you're losing your first kilo or hitting your 100kg squat, our coaches and community have your back every rep of the way.
            </p>
            <Link to="/about" className="btn-outline" style={{ marginTop: '32px' }}>
              Our Story <ArrowRight size={15} />
            </Link>
          </div>
          <div className="about-strip-visual">
            <div className="visual-card-big">
              <div className="visual-number">500<span>+</span></div>
              <div className="visual-label">Members strong</div>
            </div>
            <div className="visual-card-sm">
              <div className="visual-number">3<span>+</span></div>
              <div className="visual-label">Years of excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section features-section">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Why Grace Fitness</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '64px' }}>BUILT DIFFERENT</h2>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.number}>
                <div className="feature-number">{f.number}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ── */}
      <section className="section programs-preview">
        <div className="container">
          <div className="programs-preview-header">
            <div>
              <div className="section-label">Our Programs</div>
              <h2 className="section-title">TRAIN WITH PURPOSE</h2>
            </div>
            <Link to="/programs" className="btn-outline">
              All Programs <ArrowRight size={15} />
            </Link>
          </div>
          <div className="program-cards">
            {[
              { title: 'Weight Training', tag: 'Strength', emoji: '🏋️' },
              { title: 'Cardio & Endurance', tag: 'Fitness', emoji: '🏃' },
              { title: 'CrossFit', tag: 'High Intensity', emoji: '⚡' },
              { title: 'Yoga & Flexibility', tag: 'Recovery', emoji: '🧘' },
              { title: 'Personal Training', tag: '1-on-1', emoji: '🎯' },
              { title: 'Nutrition Coaching', tag: 'Diet', emoji: '🥗' },
            ].map((p) => (
              <Link to="/programs" className="program-card" key={p.title}>
                <div className="program-card-emoji">{p.emoji}</div>
                <div className="program-card-tag">{p.tag}</div>
                <div className="program-card-title">{p.title}</div>
                <ArrowRight size={16} className="program-card-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-label" style={{ textAlign: 'center' }}>Real Results</div>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>WHAT MEMBERS SAY</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-name">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-bg-text">LIFT</div>
        <div className="container cta-inner">
          <div className="section-label">Limited Spots Available</div>
          <h2 className="section-title">READY TO START?</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Join hundreds of members already training at Grace Fitness. Your first step is the hardest — we'll handle the rest.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/membership" className="btn-primary">
              View Memberships <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get a Free Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
