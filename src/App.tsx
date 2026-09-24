import { About } from './components/About'
import { Contact } from './components/Contact'
import { ERPNextExpertise } from './components/ERPNextExpertise'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'
import { Skills } from './components/Skills'
import { usePrintLightMode } from './hooks/usePrintLightMode'

function App() {
  usePrintLightMode()

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ERPNextExpertise />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
