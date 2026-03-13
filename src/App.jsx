import { useState, useEffect } from 'react'
import { data } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Currently from './components/Currently'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Wins from './components/Wins'
import Education from './components/Education'
import Beyond from './components/Beyond'
import Footer from './components/Footer'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero data={data} />
        <Education data={data.education} />
        <Currently data={data.currently} />
        <WorkExperience data={data.experience} />
        <Projects data={data.projects} />
        <Skills data={data.skills} />
        <Wins data={data.wins} />
        <Beyond data={data.beyond} />
      </main>
      <Footer data={data} />
    </div>
  )
}
