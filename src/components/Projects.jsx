import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeUp}
      className="corner-card card-pad-md"
      style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
        <h3 style={{
          fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
          color: 'var(--text)', margin: 0, lineHeight: 1.35, flex: 1,
        }}>
          {project.title}
        </h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            aria-label={`Link: ${project.title}`}
            style={{ color: 'var(--muted)', transition: 'color 0.2s', flexShrink: 0 }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {project.supervisor && (
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '0.58rem',
          color: 'var(--muted)', letterSpacing: '0.04em',
        }}>
          {project.supervisor}
        </div>
      )}

      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        fontSize: 'clamp(0.82rem, 1.8vw, 0.88rem)',
        color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0, flex: 1,
      }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
          {project.tags.slice(0, 4).map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
          {project.tags.length > 4 && <span className="tech-tag">+{project.tags.length - 4}</span>}
        </div>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '0.56rem',
          color: 'var(--muted)', letterSpacing: '0.06em', flexShrink: 0,
        }}>
          {project.year}
        </span>
      </div>
    </motion.div>
  )
}

export default function Projects({ data }) {
  return (
    <section id="projects" className="section">
      <hr className="divider" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
      >
        <motion.div variants={fadeUp} className="section-label">Things I've built</motion.div>
        <motion.h2 variants={fadeUp} style={{
          fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
          color: 'var(--text)', marginBottom: '1.75rem',
        }}>
          Projects
        </motion.h2>
        <div className="projects-grid">
          {data.map(project => <ProjectCard key={project.title} project={project} />)}
        </div>
      </motion.div>
    </section>
  )
}
