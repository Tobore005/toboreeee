import Hero from './components/Hero'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <Articles />
      <Resume />
      <Contact />
    </main>
  )
}
