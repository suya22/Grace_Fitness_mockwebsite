import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import './About.css'

const team = [
  { name: 'Coach Rahul Sharma', role: 'Head Trainer & Founder', exp: '8 years experience', spec: 'Strength & Conditioning' },
  { name: 'Coach Priya Nair', role: 'Women\'s Fitness Specialist', exp: '5 years experience', spec: 'Yoga & Functional Fitness' },
  { name: 'Coach Amit Patil', role: 'Personal Training Lead', exp: '6 years experience', spec: 'Bodybuilding & Nutrition' },
]

const values = [
  { title: 'Inclusivity', desc: 'Everyone is welcome at Grace Fitness, regardless of fitness level, age, or background.' },
  { title: 'Excellence', desc: 'We constantly upgrade our equipment, training methods, and facilities to serve you better.' },
  { title: 'Community', desc: 'We are more than a gym. We are a family that celebrates every milestone together.' },
  { title: 'Results', desc: 'We are committed to helping you see real, measurable, lasting transformation.' },
]

export default function About() {
  return (
    <main className="about page-enter">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label">Our Story</div>
          <h1 className="section-title">ABOUT GRACE<br />FITNESS GYM</h1>
          <p className="section-subtitle">
            Born in Badlapur. Built for results. Standing for something more than just reps.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section story-section">
        <div className="container story-inner">
          <div className="story-text">
            <div className="section-label">How It Started</div>
            <h2 className="section-title">OUR JOURNEY</h2>
            <div className="divider" />
            <p style={{ color: 'var(--grey)', lineHeight: 1.8, marginBottom: '20px' }}>
              Grace Fitness Unisex Gym was founded with a single mission: to make world-class fitness accessible to every person in Badlapur. We saw a gap — a community that was passionate about health but lacked a truly welcoming, well-equipped, and coach-driven fitness centre.
            </p>
            <p style={{ color: 'var(--grey)', lineHeight: 1.8, marginBottom: '32px' }}>
              Today, with 500+ active members, a team of certified coaches, and state-of-the-art equipment, Grace Fitness has become Badlapur's most trusted fitness destination — for men and women alike.
            </p>
            <div className="story-checks">
              {['Certified & experienced trainers', 'Well-maintained premium equipment', 'Clean & hygienic environment', 'Personalised fitness programs', 'Flexible membership plans', 'Strong community culture'].map(c => (
                <div key={c} className="story-check">
                  <CheckCircle2 size={18} color="var(--accent)" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="story-visual">
            <div className="story-img-stack">
              <div className="story-img-a" />
              <div className="story-img-b">
                <div className="story-badge">
                  <div className="story-badge-num">4.6★</div>
                  <div className="story-badge-label">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">What We Stand For</div>
            <h2 className="section-title">OUR VALUES</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-line" />
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section team-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">The Coaches</div>
            <h2 className="section-title">MEET YOUR TEAM</h2>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">
                  <div className="team-avatar-inner">{t.name.charAt(0)}</div>
                </div>
                <h3 className="team-name">{t.name}</h3>
                <div className="team-role">{t.role}</div>
                <div className="team-meta">
                  <span>{t.exp}</span>
                  <span className="team-dot">·</span>
                  <span>{t.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Come Visit Us</div>
          <h2 className="section-title">BECOME PART OF<br />OUR FAMILY</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            Stop by for a free visit and see why hundreds of members call Grace Fitness their second home.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
