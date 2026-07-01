import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Lenis from "lenis"
import { Logo } from "@/components/ui/logo.tsx"
import { getLenisInstance } from "@/lib/lenis"

const SECTIONS = [
  { id: "about", label: "Identity", number: "01", tagline: "Who I am" },
  { id: "skills", label: "Architecture", number: "02", tagline: "The technical stack" },
  { id: "projects", label: "Exhibition", number: "03", tagline: "Selected work" },
  { id: "process", label: "Process", number: "04", tagline: "How I build" },
  { id: "experience", label: "Record", number: "05", tagline: "Career timeline" },
  { id: "faq", label: "FAQ", number: "06", tagline: "Common questions" },
  { id: "contact", label: "Connect", number: "07", tagline: "Let's collaborate" },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const menuWrapperRef = useRef<HTMLDivElement>(null)
  const menuContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0)

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el && scrollY >= el.offsetTop - 300) {
          setActiveSection(SECTIONS[i].id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }, [])

  // Lock body scroll + swap Lenis control between main page and menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    const mainLenis = getLenisInstance()
    let menuLenis: Lenis | null = null
    let rafId: number

    if (menuOpen) {
      mainLenis?.stop()

      if (menuWrapperRef.current && menuContentRef.current) {
        menuLenis = new Lenis({
          wrapper: menuWrapperRef.current,
          content: menuContentRef.current,
          duration: 1.8,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2.5,
        })
        const raf = (time: number) => {
          menuLenis?.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      }
    } else {
      mainLenis?.start()
    }

    return () => {
      document.body.style.overflow = ""
      cancelAnimationFrame(rafId)
      menuLenis?.destroy()
      mainLenis?.start()
    }
  }, [menuOpen])

  return (
    <>
      {/* Logo — top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-6 left-6 lg:top-8 lg:left-10 z-[60]"
      >
        <Logo />
      </motion.div>

      {/* Section dots — right edge, desktop only */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5"
        aria-label="Section progress"
      >
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-3 justify-end"
              aria-label={`Go to ${section.label}`}
            >
              <span
                className="annotation whitespace-nowrap opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                style={{ color: isActive ? "var(--copper)" : "var(--graphite)" }}
              >
                {section.label}
              </span>
              <div
                className="w-1.5 h-1.5 rounded-full transition-all duration-300 flex-shrink-0"
                style={{
                  backgroundColor: isActive ? "var(--copper)" : "transparent",
                  border: `1px solid ${isActive ? "var(--copper)" : "var(--graphite)"}`,
                  opacity: isActive ? 1 : 0.4,
                  transform: isActive ? "scale(1.3)" : "scale(1)",
                }}
              />
            </button>
          )
        })}
      </motion.nav>

      {/* Scroll progress bar — bottom left, desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-8 left-6 lg:left-10 z-50 hidden lg:flex items-center gap-3"
      >
        <div className="w-px h-14 relative overflow-hidden" style={{ backgroundColor: "var(--hairline)" }}>
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ backgroundColor: "var(--copper)" }}
            animate={{ height: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className="annotation" style={{ opacity: 0.3, writingMode: "vertical-rl", letterSpacing: "0.15em" }}>
          {Math.round(scrollProgress * 100)}%
        </span>
      </motion.div>

      {/* Menu toggle button — top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-6 right-6 lg:top-8 lg:right-10 z-[60]"
      >
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="w-10 h-10 border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 group"
          style={{
            borderColor: menuOpen ? "oklch(0.975 0.010 75 / 0.25)" : "var(--copper)",
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div key="x" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-4 h-4" style={{ color: "var(--ivory)" }} />
              </motion.div>
            ) : (
              <motion.div key="bars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-1.5 items-center">
                <div className="w-4 h-px transition-all duration-300" style={{ backgroundColor: "var(--copper)" }} />
                <div className="w-2.5 h-px transition-all duration-300 group-hover:w-4" style={{ backgroundColor: "var(--copper)" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col"
            style={{ backgroundColor: "var(--charcoal)" }}
          >
            {/* Blueprint grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(oklch(0.975 0.010 75) 0.5px, transparent 0.5px), linear-gradient(90deg, oklch(0.975 0.010 75) 0.5px, transparent 0.5px)",
                backgroundSize: "80px 80px",
                opacity: 0.025,
              }}
              aria-hidden="true"
            />

            {/* Horizontal copper line accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="absolute top-20 left-0 right-0 h-px origin-left"
              style={{ backgroundColor: "oklch(0.975 0.010 75 / 0.08)" }}
            />

            {/* Scoped Lenis wrapper — must stay separate from its content div */}
            <div
              ref={menuWrapperRef}
              className="flex-1 min-h-0 overflow-y-auto no-scrollbar"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0px, transparent 88px, black 130px)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, transparent 88px, black 130px)",
              }}
            >
              <div
                ref={menuContentRef}
                className="flex flex-col justify-start max-w-7xl mx-auto w-full px-6 lg:px-10 py-24"
              >
                {/* <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mb-10 flex items-center gap-4"
                >
                  <div className="w-4 h-px" style={{ backgroundColor: "var(--copper)" }} />
                  <span className="section-label">Navigation</span>
                </motion.div> */}

                <nav>
                  {SECTIONS.map((section, i) => {
                    const isActive = activeSection === section.id
                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.06 }}
                      >
                        <button
                          onClick={() => scrollTo(section.id)}
                          className="w-full text-left border-t group flex items-baseline justify-between py-5 lg:py-6"
                          style={{ borderColor: "oklch(0.975 0.010 75 / 0.07)" }}
                        >
                          <div className="flex items-baseline gap-5 lg:gap-8">
                            <span
                              className="w-8 text-right flex-shrink-0"
                              style={{
                                fontFamily: "ui-monospace",
                                fontSize: "0.625rem",
                                color: "oklch(0.975 0.010 75)",
                                opacity: 0.2,
                                letterSpacing: "0.1em",
                              }}
                            >
                              {section.number}
                            </span>
                            <span
                              className={`display transition-colors duration-200 ${isActive ? "" : "group-hover:text-copper"}`}
                              style={{
                                fontSize: "clamp(1.75rem, 4.5vw, 4rem)",
                                lineHeight: 1,
                                color: isActive ? "var(--copper)" : undefined,
                              }}
                            >
                              {section.label}
                            </span>
                          </div>
                          <div className="hidden md:flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-4 group-hover:translate-x-0">
                            <span
                              style={{
                                fontFamily: "var(--font-cormorant)",
                                fontStyle: "italic",
                                fontSize: "1rem",
                                color: "oklch(0.975 0.010 75)",
                                opacity: 0.5,
                              }}
                            >
                              {section.tagline}
                            </span>
                            <span style={{ color: "var(--copper)", fontSize: "0.875rem" }}>→</span>
                          </div>
                        </button>
                      </motion.div>
                    )
                  })}
                  <div className="border-t" style={{ borderColor: "oklch(0.975 0.010 75 / 0.07)" }} />
                </nav>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="max-w-7xl mx-auto w-full px-6 lg:px-10 pb-8 flex items-center justify-between border-t"
              style={{ borderColor: "oklch(0.975 0.010 75 / 0.07)" }}
            >
              <span className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.3 }}>
                BUILT BY S. VAIDYA — REV. 01
              </span>
              <span className="annotation flex items-center gap-2" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.5 }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "var(--copper)" }} />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--copper)" }} />
                </span>
                Open to Collaboration
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}