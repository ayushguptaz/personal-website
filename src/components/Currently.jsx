import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Currently({ data }) {
  return (
    <section id="now" className="section">
      <hr className="divider" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">
          What I'm doing right now
        </motion.div>

        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '1.75rem',
        }}>
          Currently
        </motion.h2>

        <motion.div variants={fadeUp} className="terminal-window" style={{ maxWidth: '640px' }}>
          <div className="terminal-titlebar">
            <div className="terminal-dot" style={{ background: '#ff5f57' }} />
            <div className="terminal-dot" style={{ background: '#febc2e' }} />
            <div className="terminal-dot" style={{ background: '#28c840' }} />
            <span style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6rem',
              color: 'var(--muted)', marginLeft: '0.5rem', letterSpacing: '0.06em',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              ayush@cadence ~ zsh
            </span>
          </div>

          <div className="terminal-body">
            <div style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--accent-2)' }}>ayush</span>
              <span style={{ color: 'var(--muted)' }}>@cadence</span>
              <span style={{ color: 'var(--text-secondary)' }}> % </span>
              <span style={{ color: 'var(--text)' }}>whoami --verbose</span>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '0.3rem' }}>❯ {data.role}</div>
              <div style={{ color: 'var(--muted)', paddingLeft: '1rem' }}>@ {data.company}</div>
            </div>

            <div style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              <span style={{ color: 'var(--accent-2)' }}>ayush</span>
              <span style={{ color: 'var(--muted)' }}>@cadence</span>
              <span style={{ color: 'var(--text-secondary)' }}> % </span>
              <span style={{ color: 'var(--text)' }}>cat now.log</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {data.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>
                  <span style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: 'clamp(0.78rem, 2vw, 0.85rem)',
                    color: 'var(--text-secondary)', lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '1rem', color: 'var(--muted)' }}>
              <span style={{ color: 'var(--accent-2)' }}>ayush</span>
              <span>@cadence</span>
              <span style={{ color: 'var(--text-secondary)' }}> % </span>
              <span className="cursor-blink" />
            </div>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '0.62rem',
          color: 'var(--muted)', letterSpacing: '0.08em', marginTop: '1rem',
        }}>
          // last updated {data.updatedAt}
        </motion.p>
      </motion.div>
    </section>
  )
}
