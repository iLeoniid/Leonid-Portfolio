import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Testimonials from "./components/sections/Testimonials"
import Contact from "./components/sections/Contact"
import Blog from "./components/sections/Blog"

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
