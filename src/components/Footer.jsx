import { Github, Linkedin, Mail, Youtube, Instagram, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { key: 'github',    Icon: Github,    label: 'GitHub' },
  { key: 'linkedin',  Icon: Linkedin,  label: 'LinkedIn' },
  { key: 'youtube',   Icon: Youtube,   label: 'YouTube' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'email',     Icon: Mail,      label: 'Email' },
]

export default function Footer({ data }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: '1rem' }}>
      <div style={{
        maxWidth: '960px', margin: '0 auto',
        padding: 'clamp(1.5rem, 4vw, 2.5rem) 1.5rem',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '1.25rem', textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {socialLinks.map(({ key, Icon, label }) => {
            const href = data.social[key]
            if (!href) return null
            return (
              <a
                key={key} href={href}
                target={key === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer" aria-label={label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  color: 'var(--muted)', textDecoration: 'none',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 'clamp(0.58rem, 1.5vw, 0.62rem)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'color 0.2s', padding: '6px 0', minHeight: '36px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                <Icon size={16} />{label}
              </a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 'clamp(0.58rem, 1.5vw, 0.62rem)',
            color: 'var(--muted)', letterSpacing: '0.08em',
          }}>
            <span style={{ color: 'var(--accent)' }}>const</span>{' '}
            builtBy = <span style={{ color: 'var(--accent-2)' }}>"{data.name}"</span>;{' '}
            <span style={{ color: 'var(--muted)' }}>// {new Date().getFullYear()}</span>
          </span>
        </motion.div>

        <a href="#" style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 'clamp(0.56rem, 1.3vw, 0.6rem)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--muted)', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '0.35rem',
          transition: 'color 0.2s', minHeight: '36px',
        }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          <ArrowUp size={11} />back_to_top()
        </a>
      </div>
    </footer>
  )
}
