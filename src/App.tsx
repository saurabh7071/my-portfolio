import { useEffect } from "react"
import Lenis from "lenis"
import { Cursor } from "@/components/Cursor"
import { Navigation } from "@/components/Navigation"
import { GamificationHUD } from "@/components/GamificationHUD"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Process } from "@/components/Process"
import { Experience } from "@/components/Experience"
import { Achievements } from "@/components/Achievements"
import { FAQ } from "@/components/FAQ"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { DoubleMarquee, Marquee } from "@/components/Marquee"

export function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <Cursor />
      <Navigation />
      <GamificationHUD />
      <main>
        <Hero />
        <DoubleMarquee />
        <About />
        <Skills />
        <Marquee variant="dark" speed={45} />
        <Projects />
        <Process />
        <Marquee variant="copper" speed={55} reverse />
        <Experience />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
