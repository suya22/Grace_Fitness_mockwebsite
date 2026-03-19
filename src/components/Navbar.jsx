import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Dumbbell } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <Dumbbell size={24} color="var(--accent)" strokeWidth={2.5} />
          <span>
            <span className="logo-grace">GRACE</span>
            <span className="logo-fitness"> FITNESS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/membership" className="navbar-cta btn-primary">
          Join Now
        </Link>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/membership" className="btn-primary" style={{ marginTop: '16px', width: 'fit-content' }} onClick={() => setOpen(false)}>
          Join Now
        </Link>
      </div>
    </header>
  )
}
