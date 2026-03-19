import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X, ArrowRight, Zap } from 'lucide-react'
import './Membership.css'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    tag: null,
    monthly: 799,
    quarterly: 2199,
    yearly: 7499,
    color: 'var(--grey)',
    features: [
      { text: 'Full gym access', yes: true },
      { text: 'Locker room access', yes: true },
      { text: 'Cardio & weight area', yes: true },
      { text: 'Group classes (2/week)', yes: true },
      { text: 'Personal trainer sessions', yes: false },
      { text: 'Nutrition consultation', yes: false },
      { text: 'Guest passes', yes: false },
      { text: 'Priority class booking', yes: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tag: 'Most Popular',
    monthly: 1299,
    quarterly: 3499,
    yearly: 11999,
    color: 'var(--accent)',
    features: [
      { text: 'Full gym access', yes: true },
      { text: 'Locker room access', yes: true },
      { text: 'Cardio & weight area', yes: true },
      { text: 'Unlimited group classes', yes: true },
      { text: '4 PT sessions/month', yes: true },
      { text: 'Nutrition consultation (1x)', yes: true },
      { text: 'Guest passes (2/month)', yes: false },
      { text: 'Priority class booking', yes: false },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    tag: 'Best Value',
    monthly: 1999,
    quarterly: 5499,
    yearly: 17999,
    color: '#fff',
    features: [
      { text: 'Full gym access', yes: true },
      { text: 'Locker room access', yes: true },
      { text: 'Cardio & weight area', yes: true },
      { text: 'Unlimited group classes', yes: true },
      { text: '8 PT sessions/month', yes: true },
      { text: 'Nutrition consultation (4x)', yes: true },
      { text: 'Guest passes (4/month)', yes: true },
      { text: 'Priority class booking', yes: true },
    ],
  },
]

const faqs = [
  { q: 'Can I try before I buy?', a: 'Yes! We offer a free first visit. Just walk in and speak to our team — no commitment needed.' },
  { q: 'Is there a joining fee?', a: 'There is a one-time registration fee of ₹299. This includes your access card and induction session with a trainer.' },
  { q: 'Can I freeze my membership?', a: 'Absolutely. You can freeze your membership for up to 30 days per year at no extra charge.' },
  { q: 'Do you offer student discounts?', a: 'Yes! Students with a valid ID get 15% off on all membership plans.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, UPI (GPay, PhonePe, Paytm), all debit/credit cards, and net banking.' },
  { q: 'Are personal training sessions included?', a: 'PT sessions are included in Pro and Elite plans. Basic members can purchase add-on PT packages.' },
]

export default function Membership() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  const price = (plan) => ({
    monthly: plan.monthly,
    quarterly: plan.quarterly,
    yearly: plan.yearly,
  }[billing])

  const priceLabel = billing === 'monthly' ? '/month' : billing === 'quarterly' ? '/3 months' : '/year'

  return (
    <main className="membership page-enter">
      <section className="page-hero membership-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label">Flexible Plans</div>
          <h1 className="section-title">JOIN GRACE<br />FITNESS</h1>
          <p className="section-subtitle">Simple, transparent pricing. No hidden charges. Cancel any time.</p>
        </div>
      </section>

      {/* BILLING TOGGLE */}
      <section className="billing-bar">
        <div className="container">
          <div className="billing-toggle">
            {['monthly', 'quarterly', 'yearly'].map(b => (
              <button
                key={b}
                className={`billing-btn ${billing === b ? 'active' : ''}`}
                onClick={() => setBilling(b)}
              >
                {b.charAt(0).toUpperCase() + b.slice(1)}
                {b === 'yearly' && <span className="save-badge">Save 25%</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="section plans-section">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan.id} className={`plan-card ${plan.id === 'pro' ? 'featured' : ''}`}>
                {plan.tag && (
                  <div className="plan-tag">
                    <Zap size={12} /> {plan.tag}
                  </div>
                )}
                <div className="plan-header">
                  <div className="plan-name" style={{ color: plan.color }}>{plan.name}</div>
                  <div className="plan-price">
                    <span className="price-currency">₹</span>
                    <span className="price-value">{price(plan).toLocaleString('en-IN')}</span>
                    <span className="price-label">{priceLabel}</span>
                  </div>
                </div>
                <div className="plan-features">
                  {plan.features.map((f, i) => (
                    <div key={i} className={`plan-feature ${f.yes ? 'yes' : 'no'}`}>
                      {f.yes
                        ? <Check size={15} color="var(--accent)" />
                        : <X size={15} color="rgba(255,255,255,0.2)" />
                      }
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={plan.id === 'pro' ? 'btn-primary' : 'btn-outline'}
                  style={{ marginTop: '32px', display: 'flex', width: '100%', justifyContent: 'center' }}
                >
                  Get Started <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="section addons-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label">À La Carte</div>
            <h2 className="section-title">ADD-ON SERVICES</h2>
          </div>
          <div className="addons-grid">
            {[
              { title: 'Personal Training', price: '₹500', unit: '/session', desc: 'One-on-one with a certified trainer' },
              { title: 'Nutrition Plan', price: '₹999', unit: '/month', desc: 'Custom meal plan + weekly review' },
              { title: 'Body Composition', price: '₹199', unit: '/session', desc: 'Professional body fat & muscle analysis' },
              { title: 'Guest Day Pass', price: '₹149', unit: '/day', desc: 'Bring a friend for a full day session' },
            ].map((a) => (
              <div key={a.title} className="addon-card">
                <div className="addon-title">{a.title}</div>
                <div className="addon-price">{a.price}<span>{a.unit}</span></div>
                <div className="addon-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container faq-inner">
          <div className="faq-left">
            <div className="section-label">Got Questions?</div>
            <h2 className="section-title">FREQUENTLY<br />ASKED</h2>
            <p className="section-subtitle" style={{ marginTop: '16px' }}>
              Can't find your answer? Call us or visit the gym.
            </p>
            <a href="tel:09604104325" className="btn-outline" style={{ marginTop: '32px', display: 'inline-flex' }}>
              Call Us
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
