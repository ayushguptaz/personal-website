import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Beyond({ data }) {
  return (
    <section id="beyond" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">The rest of me</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '1rem',
        }}>
          Beyond Work
        </motion.h2>

        <motion.p variants={fadeUp} style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          color: 'var(--text-secondary)', lineHeight: 1.7,
          maxWidth: '560px', marginBottom: '1.75rem',
        }}>
          {data.intro}
        </motion.p>

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="hobby-grid"
        >
          {data.hobbies.map(hobby => (
            <motion.div
              key={hobby.title}
              variants={fadeUp}
              className="corner-card card-pad-md"
              style={{ padding: '1.1rem' }}
            >
              <div style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{hobby.icon}</div>
              <h3 style={{
                fontSize: 'clamp(0.88rem, 2.2vw, 0.95rem)',
                color: 'var(--text)', margin: '0 0 0.4rem', lineHeight: 1.3,
              }}>
                {hobby.title}
              </h3>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.85rem)',
                color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0,
              }}>
                {hobby.description}
              </p>
              {hobby.link && (
                <a href={hobby.link} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block', marginTop: '0.6rem',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: '0.58rem',
                  color: 'var(--accent)', letterSpacing: '0.06em', textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  → Watch on YouTube
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
