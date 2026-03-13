import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: groupIndex * 0.03 } } }}
    >
      <motion.div variants={fadeUp} style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 'clamp(0.58rem, 1.5vw, 0.62rem)',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--muted)', marginBottom: '0.65rem',
        display: 'flex', alignItems: 'center', gap: '0.45rem',
      }}>
        <span style={{ color: 'var(--accent)', fontSize: '0.68rem' }}>▸</span>
        {group.category}
      </motion.div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
        {group.items.map(skill => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.85, y: 6 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.28 } },
            }}
            whileHover={{ scale: 1.06, transition: { duration: 0.12 } }}
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 'clamp(0.65rem, 1.8vw, 0.72rem)',
              letterSpacing: '0.04em',
              color: 'var(--text-secondary)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              padding: 'clamp(4px, 1vw, 6px) clamp(9px, 2vw, 13px)',
              borderRadius: '4px', cursor: 'default',
              transition: 'border-color 0.2s, color 0.2s, box-shadow 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.boxShadow = '0 0 10px var(--glow)'
              e.currentTarget.style.background = 'var(--surface-2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.background = 'var(--surface)'
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills({ data }) {
  return (
    <section id="skills" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">Technical toolkit</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '2rem',
        }}>
          Skills
        </motion.h2>
        {data.map((group, i) => <SkillGroup key={group.category} group={group} groupIndex={i} />)}
      </motion.div>
    </section>
  )
}
