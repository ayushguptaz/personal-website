import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function WinItem({ win, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className="win-item"
      style={{ paddingBottom: isLast ? 0 : '1.75rem', position: 'relative' }}
    >
      {/* Animated timeline stem */}
      {!isLast && (
        <motion.div
          className="win-stem"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
        />
      )}

      {/* Year — hidden on mobile via CSS */}
      <div className="win-year" style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 'clamp(0.55rem, 1.3vw, 0.6rem)',
        color: 'var(--accent)', letterSpacing: '0.06em', lineHeight: 1.8,
      }}>
        {win.year}
      </div>

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 200 }}
        style={{
          flexShrink: 0, width: '10px', height: '10px',
          borderRadius: '50%', backgroundColor: 'var(--accent)',
          marginTop: '0.5rem', position: 'relative', zIndex: 1,
          boxShadow: '0 0 10px var(--glow)',
        }}
      />

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: '0.25rem' }}>
        <h3 style={{
          fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
          color: 'var(--text)', margin: '0 0 0.35rem', lineHeight: 1.4,
        }}>
          {win.title}
        </h3>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(0.82rem, 1.8vw, 0.88rem)',
          color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0,
        }}>
          {win.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Wins({ data }) {
  return (
    <section id="wins" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">Things I'm proud of</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '2.25rem',
        }}>
          Wins & Milestones
        </motion.h2>
        <div>
          {data.map((win, i) => (
            <WinItem key={win.year + win.title} win={win} isLast={i === data.length - 1} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
