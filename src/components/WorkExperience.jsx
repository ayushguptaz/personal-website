import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function ExperienceCard({ exp }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className="corner-card card-pad-lg"
      style={{ padding: '1.5rem' }}
    >
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '0.75rem',
        flexWrap: 'wrap', marginBottom: '1rem',
      }}>
        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
          {exp.logo && (
            <div style={{
              width: '44px', height: '44px', flexShrink: 0,
              borderRadius: '8px', border: '1px solid var(--border)',
              background: 'var(--surface-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', padding: '5px',
            }}>
              <img src={exp.logo} alt={exp.company}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
              color: 'var(--text)', margin: '0 0 0.2rem',
              lineHeight: 1.3,
            }}>
              {exp.role}
            </h3>
            <div style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: '0.88rem',
              color: 'var(--accent)', fontWeight: 500, marginBottom: '0.1rem',
            }}>
              {exp.company}
            </div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
              color: 'var(--muted)', letterSpacing: '0.06em',
            }}>
              {exp.location}
            </div>
          </div>
        </div>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
          color: 'var(--text-secondary)', letterSpacing: '0.05em',
          flexShrink: 0, border: '1px solid var(--border)',
          padding: '4px 9px', borderRadius: '4px', whiteSpace: 'nowrap',
        }}>
          {exp.period}
        </span>
      </div>

      {/* Bullets */}
      <ul style={{
        listStyle: 'none', padding: 0, margin: '0 0 1.1rem',
        display: 'flex', flexDirection: 'column', gap: '0.5rem',
      }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '0.72rem', marginTop: '0.28rem' }}>▸</span>
            <span style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(0.82rem, 2vw, 0.9rem)',
              color: 'var(--text-secondary)', lineHeight: 1.65,
            }}>
              {b}
            </span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {exp.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
      </div>
    </motion.div>
  )
}

export default function WorkExperience({ data }) {
  return (
    <section id="experience" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">Where I've worked</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '2rem',
        }}>
          Work Experience
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {data.map(exp => <ExperienceCard key={exp.company + exp.role} exp={exp} />)}
        </div>
      </motion.div>
    </section>
  )
}
