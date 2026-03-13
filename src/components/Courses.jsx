import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Courses({ data }) {
  const allTopics = ['All', ...Array.from(new Set(data.map(c => c.topic)))]
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? data : data.filter(c => c.topic === active)

  return (
    <section id="courses" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">Self-directed learning</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '1.25rem',
        }}>
          Courses & Reading
        </motion.h2>

        {/* Filter chips */}
        <motion.div variants={fadeUp} style={{
          display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.75rem',
        }}>
          {allTopics.map(topic => (
            <button
              key={topic}
              onClick={() => setActive(topic)}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 'clamp(0.58rem, 1.5vw, 0.62rem)',
                letterSpacing: '0.07em', textTransform: 'uppercase',
                padding: 'clamp(4px, 1vw, 6px) clamp(10px, 2.5vw, 14px)',
                border: '1px solid',
                borderColor: active === topic ? 'var(--accent)' : 'var(--border)',
                borderRadius: '4px',
                background: active === topic ? 'var(--accent)' : 'var(--surface)',
                color: active === topic ? 'var(--bg)' : 'var(--muted)',
                cursor: 'pointer', transition: 'all 0.2s',
                minHeight: '32px',
              }}
            >
              {topic}
            </button>
          ))}
        </motion.div>

        {/* Course pills */}
        <motion.div layout style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map(course => (
              <motion.div
                key={course.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '5px', padding: '0.6rem 0.9rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-bright)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 'clamp(0.82rem, 2vw, 0.9rem)',
                  fontWeight: 500, color: 'var(--text)', marginBottom: '0.15rem',
                }}>
                  {course.name}
                </div>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 'clamp(0.55rem, 1.3vw, 0.58rem)',
                  color: 'var(--muted)', letterSpacing: '0.05em',
                }}>
                  {course.platform} · {course.year}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
