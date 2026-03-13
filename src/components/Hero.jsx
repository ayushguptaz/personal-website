import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, Youtube, Instagram, ChevronDown } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

function useTypewriter(text, speed = 45, startDelay = 400) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    let i = 0
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++ }
        else { clearInterval(timer); setDone(true) }
      }, speed)
      return () => clearInterval(timer)
    }, startDelay)
    return () => clearTimeout(start)
  }, [text, speed, startDelay])
  return { displayed, done }
}

function AnimatedCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
  const isFloat = value.includes('.')

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(isFloat ? (eased * numericValue).toFixed(2) : Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, numericValue, isFloat])

  return (
    <div ref={ref} className="stat-pad" style={{ padding: '1rem 1.4rem', textAlign: 'center' }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
        fontWeight: 700,
        color: 'var(--accent)',
        lineHeight: 1,
        marginBottom: '0.3rem',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 'clamp(0.5rem, 1.2vw, 0.56rem)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}>
        {label}
      </div>
    </div>
  )
}

function ProfilePhoto({ src }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="hero-photo-wrap"
      style={{ position: 'relative' }}
    >
      <div style={{
        position: 'absolute', inset: '-6px', borderRadius: '50%',
        background: 'conic-gradient(var(--accent), var(--accent-2), var(--accent))',
        opacity: 0.3, filter: 'blur(10px)', zIndex: 0,
      }} />
      <div style={{
        width: 'clamp(140px, 18vw, 210px)',
        height: 'clamp(140px, 18vw, 210px)',
        borderRadius: '50%',
        border: '2px solid var(--border-bright)',
        overflow: 'hidden',
        position: 'relative', zIndex: 1,
        background: 'var(--surface-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {src && !error ? (
          <img
            src={src} alt="Ayush Gupta"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top center',
              opacity: loaded ? 1 : 0, transition: 'opacity 0.4s',
            }}
          />
        ) : (
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 700, color: 'var(--accent)', userSelect: 'none',
          }}>AG</span>
        )}
      </div>
    </motion.div>
  )
}

const socialLinks = [
  { key: 'github',    Icon: Github,    label: 'GitHub' },
  { key: 'linkedin',  Icon: Linkedin,  label: 'LinkedIn' },
  { key: 'youtube',   Icon: Youtube,   label: 'YouTube' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'email',     Icon: Mail,      label: 'Email' },
]

export default function Hero({ data }) {
  const { displayed, done } = useTypewriter(data.name, 55, 300)
  const containerV = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      className="section hero-section"
      style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem' }}
    >
      <div className="hero-layout">

        {/* ── Left: Text ── */}
        <motion.div
          className="hero-text"
          variants={containerV}
          initial="hidden"
          animate="visible"
        >
          {/* Prompt line */}
          <motion.div
            variants={fadeUp}
            className="hero-prompt"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 'clamp(0.6rem, 1.5vw, 0.72rem)',
              color: 'var(--muted)',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ color: 'var(--accent-2)' }}>▶</span>
            <span>hello_world.sh</span>
            <span style={{ color: 'var(--border-bright)' }}>|</span>
            <span>IIT Delhi · EE · 2025</span>
          </motion.div>

          {/* Typewriter name */}
          <motion.div variants={fadeUp}>
            <h1 style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: 'clamp(2.2rem, 8vw, 5rem)',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.0,
              marginBottom: '0.9rem',
              letterSpacing: '-0.03em',
            }}>
              {displayed}
              {!done && <span className="cursor-blink" />}
            </h1>
          </motion.div>

          {/* Badges */}
          <motion.div
            variants={fadeUp}
            className="hero-badges"
            style={{ marginBottom: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}
          >
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 'clamp(0.68rem, 1.6vw, 0.78rem)',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              padding: '5px 14px', borderRadius: '4px',
              letterSpacing: '0.07em', background: 'var(--glow)',
              whiteSpace: 'nowrap',
            }}>
              SWE @ Cadence Design Systems · R&D
            </span>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 'clamp(0.68rem, 1.6vw, 0.78rem)',
              color: 'var(--accent-2)',
              border: '1px solid var(--accent-2)',
              padding: '5px 14px', borderRadius: '4px',
              letterSpacing: '0.07em',
              whiteSpace: 'nowrap',
            }}>
              IIT Delhi · EE
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="hero-social"
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}
          >
            {socialLinks.map(({ key, Icon, label }) => {
              const href = data.social[key]
              if (!href) return null
              return (
                <a
                  key={key}
                  href={href}
                  target={key === 'email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 'clamp(0.58rem, 1.3vw, 0.62rem)',
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                    border: '1px solid var(--border)',
                    padding: '6px 12px', borderRadius: '5px',
                    background: 'var(--surface)',
                    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.boxShadow = '0 0 14px var(--glow)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Icon size={12} />{label}
                </a>
              )
            })}
          </motion.div>

          {/* Tech highlights */}
          <motion.div variants={fadeUp} style={{
            display: 'flex', gap: '0.4rem', flexWrap: 'wrap',
          }}>
            {['C++', 'Python', 'FPGA', 'EDA', 'Linux', 'React', 'Embedded'].map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </motion.div>

        </motion.div>

        {/* ── Right: Photo ── */}
        <ProfilePhoto src={data.photo} />

      </div>

      {/* Scroll down button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          display: 'flex', justifyContent: 'center',
          marginTop: '1.75rem',
        }}
      >
        <motion.button
          onClick={() => {
            const next = document.querySelector('.hero-section')?.nextElementSibling
            if (next) next.scrollIntoView({ behavior: 'smooth' })
          }}
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            background: 'none', border: '1px solid var(--border)',
            borderRadius: '50%', width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--muted)',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--muted)'
          }}
        >
          <ChevronDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  )
}
