import { useState, useEffect, useRef } from "react"
import { m as motion, AnimatePresence } from "framer-motion"

const SECTION_XP: Record<string, number> = {
  about: 150,
  skills: 220,
  projects: 500,
  process: 175,
  experience: 310,
  achievements: 265,
  contact: 120,
}

const ACHIEVEMENT_LABELS: Record<string, string> = {
  about: "IDENTITY_REVEALED",
  skills: "STACK_MAPPED",
  projects: "EXHIBITION_ENTERED",
  process: "METHODOLOGY_UNLOCKED",
  experience: "RECORD_ACCESSED",
  achievements: "RECOGNITION_LOGGED",
  contact: "CONNECTION_INITIATED",
}

const TOTAL_XP = Object.values(SECTION_XP).reduce((a, b) => a + b, 0)

export function GamificationHUD() {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [sectionsVisited, setSectionsVisited] = useState(0)
  const [achievementText, setAchievementText] = useState<string | null>(null)
  const discoveredRef = useRef(new Set<string>())

  useEffect(() => {
    setLevel(Math.min(7, Math.floor(xp / 250) + 1))
  }, [xp])

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    const observers = Object.keys(SECTION_XP).map((sectionId) => {
      const el = document.getElementById(sectionId)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          if (discoveredRef.current.has(sectionId)) return
          discoveredRef.current.add(sectionId)

          const xpGain = SECTION_XP[sectionId]
          timers.push(
            setTimeout(() => {
              setXp((p) => p + xpGain)
              setSectionsVisited((p) => p + 1)
              setAchievementText(ACHIEVEMENT_LABELS[sectionId])
              timers.push(setTimeout(() => setAchievementText(null), 3000))
            }, 100)
          )
        },
        { threshold: 0.25 }
      )
      observer.observe(el)
      return observer
    })

    return () => {
      timers.forEach(clearTimeout)
      observers.forEach((o) => o?.disconnect())
    }
  }, [])

  const progressPct = Math.min(100, (xp / TOTAL_XP) * 100)

  return (
    <>
      {/* HUD panel — bottom right, desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
        className="fixed bottom-8 right-6 lg:right-10 z-40 hidden lg:block select-none"
      >
        <div
          className="px-4 py-3 border"
          style={{
            backgroundColor: "oklch(0.175 0.005 55 / 0.9)",
            borderColor: "oklch(0.595 0.120 48 / 0.25)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Active indicator */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--copper)" }} />
            <span style={{ fontFamily: "ui-monospace", fontSize: "0.5rem", color: "var(--copper)", letterSpacing: "0.2em" }}>
              SYSTEM_ACTIVE
            </span>
          </div>

          {/* Stats */}
          <div style={{ fontFamily: "ui-monospace", fontSize: "0.5625rem", letterSpacing: "0.1em", lineHeight: 2 }}>
            <div style={{ color: "oklch(0.975 0.010 75)", opacity: 0.5 }}>
              DEV_LEVEL{" "}
              <motion.span
                key={level}
                initial={{ color: "oklch(0.975 0.010 75)" }}
                animate={{ color: "var(--copper)" }}
                transition={{ duration: 0.3 }}
                style={{ color: "var(--copper)" }}
              >
                0{level}
              </motion.span>
            </div>
            <div style={{ color: "oklch(0.975 0.010 75)", opacity: 0.5 }}>
              XP_TOTAL{" "}
              <motion.span
                key={xp}
                initial={{ color: "oklch(0.975 0.010 75)" }}
                animate={{ color: "var(--copper)" }}
                transition={{ duration: 0.3 }}
                style={{ color: "var(--copper)" }}
              >
                {String(xp).padStart(4, "0")}
              </motion.span>
            </div>
            <div style={{ color: "oklch(0.975 0.010 75)", opacity: 0.5 }}>
              EXPLORED{" "}
              <span style={{ color: "var(--copper)" }}>
                {sectionsVisited}
                <span style={{ opacity: 0.4 }}>/7</span>
              </span>
            </div>
          </div>

          {/* XP progress bar */}
          <div className="mt-3 h-px w-full" style={{ backgroundColor: "oklch(0.975 0.010 75 / 0.08)" }}>
            <motion.div
              className="h-full"
              style={{ backgroundColor: "var(--copper)" }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Achievement toast */}
      <AnimatePresence>
        {achievementText && (
          <motion.div
            key={achievementText}
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-50 hidden lg:flex flex-col gap-1 px-4 py-3 border"
            style={{
              bottom: "9rem",
              right: "2.5rem",
              borderColor: "var(--copper)",
              backgroundColor: "var(--charcoal)",
            }}
          >
            <span style={{ fontFamily: "ui-monospace", fontSize: "0.45rem", color: "var(--copper)", letterSpacing: "0.25em", opacity: 0.7 }}>
              ACHIEVEMENT_UNLOCKED
            </span>
            <span style={{ fontFamily: "ui-monospace", fontSize: "0.5625rem", color: "oklch(0.975 0.010 75)", letterSpacing: "0.12em" }}>
              {achievementText}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
