import { useRef, useEffect, useState } from "react"
import { m as motion, useMotionValue, useTransform, AnimatePresence, MotionValue } from "framer-motion"
import { ArrowDownRight } from "lucide-react"

const EASE_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number]

const WORDS = [
  { text: "Designing", depth: 12 },
  { text: "Digital", depth: -8 },
  { text: "Systems", depth: 10 },
  { text: "With", depth: -5 },
  { text: "Architectural", depth: 14 },
  { text: "Precision.", depth: -9 },
]

const TERMINAL_LINES = [
  "> PORTFOLIO.EXE — INITIALIZING...",
  "> LOADING IDENTITY: M.E.WEBB",
  "> STATUS: OPERATIONAL",
]

function ParallaxWord({
  text,
  mouseX,
  mouseY,
  depth,
  index,
}: {
  text: string
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  depth: number
  index: number
}) {
  const x = useTransform(mouseX, [-0.5, 0.5], [-depth, depth])
  const y = useTransform(mouseY, [-0.5, 0.5], [-Math.abs(depth) * 0.45, Math.abs(depth) * 0.45])

  return (
    <motion.span
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE_EXPO, delay: 1.4 + index * 0.09 }}
      className="inline-block mr-[0.2em]"
      style={{ fontSize: "var(--text-hero)", color: "var(--charcoal)", overflow: "hidden" }}
    >
      <motion.span className="inline-block" style={{ x, y }}>
        {text}
      </motion.span>
    </motion.span>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [bootDone, setBootDone] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    TERMINAL_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines((prev) => [...prev, i]), 200 + i * 260))
    })
    timers.push(setTimeout(() => setBootDone(true), 200 + TERMINAL_LINES.length * 260 + 350))
    return () => timers.forEach(clearTimeout)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width)
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--ivory)" }}
      aria-label="Hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="blueprint-grid" aria-hidden="true" />

      {/* Terminal boot overlay */}
      <AnimatePresence>
        {!bootDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex flex-col justify-center px-6 lg:px-10 pointer-events-none"
            style={{ backgroundColor: "var(--ivory)" }}
          >
            <div className="max-w-7xl mx-auto w-full ml-4 lg:ml-8 space-y-2 pl-4 lg:pl-8">
              {TERMINAL_LINES.map((line, i) => (
                visibleLines.includes(i) && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontFamily: "ui-monospace",
                      fontSize: "0.6875rem",
                      color: i === TERMINAL_LINES.length - 1 ? "var(--copper)" : "var(--graphite)",
                      letterSpacing: "0.08em",
                      opacity: 0.85,
                    }}
                  >
                    {line}
                    {i === visibleLines.length - 1 && visibleLines.length < TERMINAL_LINES.length && (
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }}>_</motion.span>
                    )}
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner annotations */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-20 left-6 lg:left-10 annotation"
        aria-hidden="true"
      >
        40.7128°N — 74.0060°W
      </motion.div> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute top-20 right-6 lg:right-10 annotation text-right"
        aria-hidden="true"
      >
        Est. 2017 — Present
      </motion.div> */}

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: EASE_EXPO, delay: 1.2 }}
        className="absolute left-6 lg:left-10 top-32 bottom-32 w-px origin-top"
        style={{ backgroundColor: "var(--hairline)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-10 pt-32 pb-24 lg:pt-36 lg:pb-20">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_EXPO, delay: 1.2 }}
          className="flex items-center gap-4 mb-10 ml-4 lg:ml-8"
        >
          <div className="w-8 h-px" style={{ backgroundColor: "var(--copper)" }} />
          <span className="section-label">Full Stack Engineer</span>
        </motion.div>

        {/* Two-column layout: text left, portrait right */}
        <div className="ml-4 lg:ml-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — headline + bio + CTAs */}
          <div className="lg:col-span-8 flex flex-col">
            <h2 className="display" aria-label="Designing Digital Systems With Architectural Precision.">
              {WORDS.map(({ text, depth }, i) => (
                <ParallaxWord
                  key={text}
                  text={text}
                  mouseX={mouseX}
                  mouseY={mouseY}
                  depth={depth}
                  index={i}
                />
              ))}
            </h2>

            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE_EXPO, delay: 2.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="annotation">I'm Saurabh Vaidya</span>
                  <div className="w-4 h-px" style={{ backgroundColor: "var(--hairline)" }} />
                  
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "1.0625rem",
                    color: "var(--graphite)",
                    lineHeight: 1.75,
                  }}
                >
                  I engineer software the way architects design buildings — with precision,
                  structural clarity, and an obsession for the relationship between form and function.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE_EXPO, delay: 2.4 }}
                className="flex flex-col gap-3"
              >
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center justify-between px-6 py-4 border transition-all duration-300"
                  style={{ borderColor: "var(--charcoal)", backgroundColor: "var(--charcoal)", color: "var(--ivory)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--copper)"
                    e.currentTarget.style.borderColor = "var(--copper)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--charcoal)"
                    e.currentTarget.style.borderColor = "var(--charcoal)"
                  }}
                >
                  <span className="text-sm font-medium tracking-widest uppercase" style={{ letterSpacing: "0.15em" }}>
                    View Exhibition
                  </span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center justify-between px-6 py-4 border transition-all duration-300"
                  style={{ borderColor: "var(--hairline)", color: "var(--charcoal)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--copper)"
                    e.currentTarget.style.color = "var(--copper)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--hairline)"
                    e.currentTarget.style.color = "var(--charcoal)"
                  }}
                >
                  <span className="text-sm font-medium tracking-widest uppercase" style={{ letterSpacing: "0.15em" }}>
                    Get in Touch
                  </span>
                  <span className="text-sm opacity-40 transition-opacity group-hover:opacity-100">→</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right — architectural portrait frame */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 2 }}
            className="lg:col-span-4 hidden lg:flex flex-col self-start"
            style={{ marginTop: "0.5rem" }}
          >
            {/* Frame — fixed proportions, compact */}
            <div className="relative" style={{ aspectRatio: "3 / 4", maxHeight: "440px", width: "100%" }}>

              {/* Copper corner brackets */}
              <div className="absolute top-0 left-0 w-7 h-7 pointer-events-none z-10" style={{ borderTop: "1.5px solid var(--copper)", borderLeft: "1.5px solid var(--copper)" }} />
              <div className="absolute top-0 right-0 w-7 h-7 pointer-events-none z-10" style={{ borderTop: "1.5px solid var(--copper)", borderRight: "1.5px solid var(--copper)" }} />
              <div className="absolute bottom-0 left-0 w-7 h-7 pointer-events-none z-10" style={{ borderBottom: "1.5px solid var(--copper)", borderLeft: "1.5px solid var(--copper)" }} />
              <div className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none z-10" style={{ borderBottom: "1.5px solid var(--copper)", borderRight: "1.5px solid var(--copper)" }} />

              {/* Image fills the bracketed area with inset */}
              <div
                className="absolute overflow-hidden"
                style={{
                  inset: "12px",
                  backgroundColor: "var(--concrete)",
                }}
              >
                {/* Photo — warm sepia filter to match ivory/copper palette */}
                <img
                  src="/images/Gemini_Generated_Image_p2hdiup2hdiup2hd.png"
                  alt="Saurabh Vaidya"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    filter: "sepia(18%) saturate(88%) brightness(96%) contrast(1.03)",
                  }}
                />

                {/* Subtle copper tint overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: "40%",
                    background: "linear-gradient(to top, oklch(0.175 0.005 55 / 0.55), transparent)",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />

                {/* Name label — pinned bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 pb-4 pt-8"
                >
                  <div>
                    <div className="annotation mb-0.5" style={{ color: "var(--copper)", opacity: 0.8 }}>PROFILE</div>
                    <div style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.125rem", color: "oklch(0.975 0.010 75)", lineHeight: 1.2 }}>
                      Saurabh Vaidya
                    </div>
                  </div>
                  <span className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.35 }}>FSE</span>
                </div>
              </div>
            </div>

            {/* FIG annotation */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1 h-px" style={{ backgroundColor: "var(--hairline)" }} />
              <span className="annotation" style={{ opacity: 0.3 }}>FIG.01</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={scrollToAbout}
        role="button"
        aria-label="Scroll down"
      >
        <span className="annotation" style={{ opacity: 0.5 }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ backgroundColor: "var(--copper)" }}
        />
      </motion.div>

      <div
        className="watermark-number absolute bottom-0 right-0 pointer-events-none"
        style={{ fontSize: "clamp(8rem, 20vw, 22rem)" }}
        aria-hidden="true"
      >
        01
      </div>
    </section>
  )
}
