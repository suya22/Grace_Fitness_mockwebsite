import React, { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const hours = [
  { day: 'Monday', time: '5:00 AM – 10:30 PM' },
  { day: 'Tuesday', time: '5:00 AM – 10:30 PM' },
  { day: 'Wednesday', time: '5:00 AM – 10:30 PM' },
  { day: 'Thursday', time: '5:00 AM – 10:30 PM' },
  { day: 'Friday', time: '5:00 AM – 10:30 PM' },
  { day: 'Saturday', time: '5:00 AM – 10:30 PM' },
  { day: 'Sunday', time: '6:00 AM – 9:00 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main className="contact page-enter">
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title">CONTACT<br />US</h1>
          <p className="section-subtitle">We'd love to hear from you. Drop us a message or just walk in!</p>
        </div>
      </section>

      {/* CONTACT MAIN */}
      <section className="section contact-section">
        <div className="container contact-grid">

          {/* INFO */}
          <div className="contact-info">
            <div className="section-label">Find Us</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 56px)', marginBottom: '36px' }}>WE'RE HERE<br />FOR YOU</h2>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon"><MapPin size={20} /></div>
                <div>
                  <div className="contact-card-label">Address</div>
                  <div className="contact-card-value">
                    1st Floor, Surval Heights, Sant Dhyaneshwar Mauli Chawk,<br />
                    East Shirgaon, Badlapur, Mumbai, Maharashtra 421503
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Phone size={20} /></div>
                <div>
                  <div className="contact-card-label">Phone</div>
                  <a href="tel:09604104325" className="contact-card-value contact-link">096041 04325</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact-card-label">Email</div>
                  <a href="mailto:gracefitness0456@gmail.com" className="contact-card-value contact-link">gracefitness0456@gmail.com</a>
                </div>
              </div>
            </div>

            {/* HOURS */}
            <div className="hours-box">
              <div className="hours-header">
                <Clock size={16} color="var(--accent)" />
                <span>Gym Hours</span>
              </div>
              {hours.map(h => (
                <div key={h.day} className={`hours-row ${h.day === 'Sunday' ? 'sunday' : ''}`}>
                  <span className="hours-day">{h.day}</span>
                  <span className="hours-time">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <div className="section-label">Send a Message</div>
              <h3 className="form-title">FREE FIRST VISIT<br />INQUIRY</h3>
            </div>

            {submitted ? (
              <div className="form-success">
                <CheckCircle size={52} color="var(--accent)" />
                <h4>Message Received!</h4>
                <p>Thanks {form.name}! Our team will reach out to you within 24 hours. See you at the gym! 💪</p>
                <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', goal: '', message: '' }) }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Fitness Goal</label>
                  <select
                    name="goal"
                    className="form-input form-select"
                    value={form.goal}
                    onChange={handleChange}
                  >
                    <option value="">Select your primary goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="strength">Strength Training</option>
                    <option value="endurance">Endurance / Cardio</option>
                    <option value="flexibility">Flexibility & Yoga</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us anything — questions, schedule, special requirements..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                  {loading ? (
                    <span className="loading-dots">Sending<span>.</span><span>.</span><span>.</span></span>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>

                <p className="form-note">
                  By submitting this form, you consent to being contacted by our team. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="map-header">
          <div className="container">
            <div className="section-label">Location</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>FIND US ON THE MAP</h2>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Grace Fitness Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5!2d73.2456!3d19.1642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzUxLjEiTiA3M8KwMTQnNDQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="480"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.google.com/?q=Grace+Fitness+Unisex+Gym+Badlapur+Maharashtra"
            target="_blank"
            rel="noreferrer"
            className="map-cta-btn"
          >
            <MapPin size={15} /> Open in Google Maps
          </a>
        </div>
      </section>
    </main>
  )
}
