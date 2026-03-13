import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function EducationCard({ edu }) {
  return (
    <motion.div
      variants={fadeUp}
      className="corner-card card-pad-md"
      style={{ padding: '1.25rem' }}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '0.75rem',
        flexWrap: 'wrap', marginBottom: '0.75rem',
      }}>
        <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', flex: 1, minWidth: 0 }}>
          {edu.logo && (
            <div style={{
              width: '44px', height: '44px', flexShrink: 0,
              borderRadius: '50%', border: '1px solid var(--border)',
              background: 'var(--surface-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', padding: '3px',
            }}>
              <img src={edu.logo} alt={edu.institution}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <h3 style={{
              fontSize: 'clamp(0.92rem, 2.2vw, 1.05rem)',
              color: 'var(--text)', margin: '0 0 0.2rem', lineHeight: 1.35,
            }}>
              {edu.institution}
            </h3>
            <div style={{
              fontFamily: '"DM Sans", sans-serif', fontSize: '0.86rem',
              color: 'var(--accent)', fontWeight: 500,
            }}>
              {edu.degree}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
            color: 'var(--text-secondary)', letterSpacing: '0.05em', marginBottom: '0.2rem',
            whiteSpace: 'nowrap',
          }}>
            {edu.year}
          </div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
            color: 'var(--accent-2)', letterSpacing: '0.05em', whiteSpace: 'nowrap',
          }}>
            {edu.grade}
          </div>
        </div>
      </div>
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: 'clamp(0.82rem, 1.8vw, 0.88rem)',
        color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0,
      }}>
        {edu.note}
      </p>
    </motion.div>
  )
}

export default function Education({ data }) {
  return (
    <section id="education" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">Formal education</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '1.75rem',
        }}>
          Education
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {data.map(edu => <EducationCard key={edu.institution} edu={edu} />)}
        </div>
      </motion.div>
    </section>
  )
}
