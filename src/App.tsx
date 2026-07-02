import { useEffect, lazy, Suspense } from "react"
import Lenis from "lenis"
import { Cursor } from "@/components/Cursor"
import { Navigation } from "@/components/Navigation"
import { GamificationHUD } from "@/components/GamificationHUD"
import { Hero } from "@/components/Hero"
import { Footer } from "@/components/Footer"
import { DoubleMarquee, Marquee } from "@/components/Marquee"
import { LazyMotion, domAnimation } from "framer-motion"

const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })))
const Skills = lazy(() => import("@/components/Skills").then(m => ({ default: m.Skills })))
const Projects = lazy(() => import("@/components/Projects").then(m => ({ default: m.Projects })))
// const Process = lazy(() => import("@/components/Process").then(m => ({ default: m.Process })))
const Experience = lazy(() => import("@/components/Experience").then(m => ({ default: m.Experience })))
const Achievements = lazy(() => import("@/components/Achievements").then(m => ({ default: m.Achievements })))
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })))
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })))

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
    <LazyMotion features={domAnimation} strict>
      <div style={{ fontFamily: "var(--font-inter)" }}>
        <Cursor />
        <Navigation />
        {/* <GamificationHUD /> */}
        <main>
          <Hero />
          <DoubleMarquee />
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Marquee variant="dark" speed={45} />
            <Projects />
            {/* <Process /> */}
            <Marquee variant="copper" speed={55} reverse />
            <Experience />
            <Achievements />
            <FAQ />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
