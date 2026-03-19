import React from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell, MapPin, Phone, Clock, Instagram, Facebook, Youtube, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-noise" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Dumbbell size={22} color="var(--accent)" />
              <span>
                <span style={{ color: 'var(--accent)' }}>GRACE</span>
                <span style={{ color: 'var(--white)' }}> FITNESS</span>
              </span>
            </div>
            <p className="footer-tagline">
              Transforming lives through strength, discipline, and community in Badlapur since day one.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="mailto:gracefitnessbadlapur@gmail.com" className="social-icon" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Programs' },
                { to: '/membership', label: 'Membership' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links">
              {['Weight Training', 'Cardio & Endurance', 'CrossFit', 'Yoga & Flexibility', 'Personal Training', 'Nutrition Coaching'].map(p => (
                <li key={p}><Link to="/programs" className="footer-link">{p}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact & Hours</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={15} color="var(--accent)" />
                <span>1st Floor, Surval Heights, Sant Dhyaneshwar Mauli Chawk, East Shirgaon, Badlapur, Mumbai 421503</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} color="var(--accent)" />
                <a href="tel:09604104325">096041 04325</a>
              </div>
              <div className="footer-contact-item">
                <Clock size={15} color="var(--accent)" />
                <div>
                  <p>Mon – Sat: 5:00 AM – 10:30 PM</p>
                  <p>Sunday: 6:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Grace Fitness Unisex Gym. All rights reserved.</p>
          <p>Designed with 💪 in Badlapur</p>
        </div>
      </div>
    </footer>
  )
}
