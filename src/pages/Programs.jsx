import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Zap } from 'lucide-react'
import './Programs.css'

const programs = [
  {
    id: 'weight',
    emoji: '🏋️',
    title: 'Weight Training',
    tag: 'Strength',
    duration: '60 min',
    level: 'All levels',
    intensity: 'Medium–High',
    desc: 'Build raw strength and muscle mass with progressive overload principles. Our weight training program covers compound lifts, accessory work, and personalised periodisation to get you to your peak physique.',
    benefits: ['Increased muscle mass', 'Better bone density', 'Boosted metabolism', 'Improved posture'],
    schedule: 'Mon, Tue, Thu, Fri, Sat',
  },
  {
    id: 'cardio',
    emoji: '🏃',
    title: 'Cardio & Endurance',
    tag: 'Fitness',
    duration: '45 min',
    level: 'Beginner–Intermediate',
    intensity: 'Low–Medium',
    desc: 'Torch calories, improve heart health, and build stamina. From treadmill intervals to cycling sprints, our cardio sessions are designed to push your aerobic limits.',
    benefits: ['Improved cardiovascular health', 'Fat loss', 'Increased endurance', 'Better mood'],
    schedule: 'Daily',
  },
  {
    id: 'crossfit',
    emoji: '⚡',
    title: 'CrossFit',
    tag: 'High Intensity',
    duration: '50 min',
    level: 'Intermediate–Advanced',
    intensity: 'Very High',
    desc: 'Functional movements performed at high intensity. CrossFit at Grace Fitness combines Olympic lifting, gymnastics, and metabolic conditioning for total-body transformation.',
    benefits: ['Full-body conditioning', 'Explosive power', 'Mental toughness', 'Community motivation'],
    schedule: 'Mon, Wed, Fri, Sat',
  },
  {
    id: 'yoga',
    emoji: '🧘',
    title: 'Yoga & Flexibility',
    tag: 'Recovery',
    duration: '55 min',
    level: 'All levels',
    intensity: 'Low',
    desc: 'Restore. Recover. Realign. Our yoga sessions focus on mobility, flexibility, and mental clarity — the perfect complement to any intense training regimen.',
    benefits: ['Improved flexibility', 'Stress relief', 'Injury prevention', 'Better sleep'],
    schedule: 'Tue, Thu, Sun',
  },
  {
    id: 'pt',
    emoji: '🎯',
    title: 'Personal Training',
    tag: '1-on-1',
    duration: '45–60 min',
    level: 'All levels',
    intensity: 'Customised',
    desc: 'A fully personalised training experience with your dedicated coach. Programs are built around your specific goals, schedule, and body type — nothing generic.',
    benefits: ['Custom programming', 'Faster results', 'Injury-safe guidance', 'Accountability'],
    schedule: 'Flexible – by appointment',
  },
  {
    id: 'nutrition',
    emoji: '🥗',
    title: 'Nutrition Coaching',
    tag: 'Diet',
    duration: 'Ongoing',
    level: 'All levels',
    intensity: 'N/A',
    desc: 'Train hard, eat smarter. Our nutrition coaching service pairs perfectly with any training program. Get a custom meal plan, macros guide, and weekly check-ins with our certified nutrition coach.',
    benefits: ['Custom meal plans', 'Macro tracking', 'Supplement guidance', 'Weekly reviews'],
    schedule: 'Flexible – weekly sessions',
  },
]

export default function Programs() {
  const [active, setActive] = useState(null)

  return (
    <main className="programs page-enter">
      <section className="page-hero programs-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label">What We Offer</div>
          <h1 className="section-title">OUR TRAINING<br />PROGRAMS</h1>
          <p className="section-subtitle">
            Six expert-led programs designed to get you results — whatever your goal.
          </p>
        </div>
      </section>

      <section className="section programs-list">
        <div className="container">
          <div className="programs-grid">
            {programs.map((p) => (
              <div
                key={p.id}
                className={`prog-card ${active === p.id ? 'expanded' : ''}`}
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                <div className="prog-card-header">
                  <div className="prog-emoji">{p.emoji}</div>
                  <div className="prog-info">
                    <div className="prog-tag">{p.tag}</div>
                    <h3 className="prog-title">{p.title}</h3>
                    <div className="prog-meta">
                      <span><Clock size={12} /> {p.duration}</span>
                      <span><Users size={12} /> {p.level}</span>
                      <span><Zap size={12} /> {p.intensity}</span>
                    </div>
                  </div>
                  <div className="prog-toggle">{active === p.id ? '−' : '+'}</div>
                </div>
                {active === p.id && (
                  <div className="prog-card-body">
                    <p className="prog-desc">{p.desc}</p>
                    <div className="prog-benefits-grid">
                      {p.benefits.map(b => (
                        <div key={b} className="prog-benefit">✓ {b}</div>
                      ))}
                    </div>
                    <div className="prog-schedule">
                      <strong>Schedule:</strong> {p.schedule}
                    </div>
                    <Link to="/membership" className="btn-primary" style={{ marginTop: '24px', fontSize: '12px', padding: '14px 28px' }}>
                      Enroll Now <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule table */}
      <section className="section schedule-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label">Weekly Timetable</div>
            <h2 className="section-title">CLASS SCHEDULE</h2>
          </div>
          <div className="schedule-table-wrapper">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['5:00–6:00 AM', 'Weight Training', 'Cardio', 'CrossFit', 'Weight Training', 'Cardio', 'CrossFit', '—'],
                  ['7:00–8:00 AM', 'Yoga', 'Weight Training', 'Cardio', 'Yoga', 'Weight Training', 'Cardio', 'Yoga'],
                  ['10:00–11:00 AM', 'Cardio', 'Yoga', 'Weight Training', 'Cardio', 'CrossFit', 'Weight Training', 'Cardio'],
                  ['5:00–6:00 PM', 'CrossFit', 'Weight Training', 'Yoga', 'CrossFit', 'Weight Training', 'Personal Tr.', '—'],
                  ['7:00–8:00 PM', 'Weight Training', 'CrossFit', 'Weight Training', 'Yoga', 'CrossFit', 'Yoga', 'Weight Training'],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={j === 0 ? 'time-cell' : cell === '—' ? 'empty-cell' : 'class-cell'}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-2)', borderTop: '1px solid rgba(212,255,0,0.15)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Get Started</div>
          <h2 className="section-title">PICK YOUR PLAN</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Ready to pick a program? Choose a membership plan that fits your lifestyle.
          </p>
          <Link to="/membership" className="btn-primary">
            View Membership Plans <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
