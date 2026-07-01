import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

type CursorState = "default" | "hover" | "link"

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null) // outer, positioning only
  const ringInnerRef = useRef<HTMLDivElement>(null) // inner, breathing animation only
  const stateRef = useRef<CursorState>("default")
  const visibleRef = useRef(false)

  // Raw cursor position — drives the dot instantly
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  // Spring-smoothed position — drives the ring
  const springX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.5 })

  useEffect(() => {
    const styleEl = document.createElement("style")
    styleEl.textContent = "*, *::before, *::after { cursor: none !important; }"
    document.head.appendChild(styleEl)

    const applyState = (state: CursorState) => {
      stateRef.current = state
      const dot = dotRef.current
      const ring = ringRef.current
      const ringInner = ringInnerRef.current
      if (!dot || !ring || !ringInner) return

      if (state === "hover") {
        dot.style.width = "10px"
        dot.style.height = "10px"
        ring.style.width = "52px"
        ring.style.height = "52px"
        ringInner.style.animationPlayState = "paused"
        ringInner.style.opacity = "0.6"
      } else if (state === "link") {
        dot.style.width = "10px"
        dot.style.height = "10px"
        ring.style.width = "62px"
        ring.style.height = "62px"
        ringInner.style.animationPlayState = "paused"
        ringInner.style.opacity = "0.65"
      } else {
        dot.style.width = "6px"
        dot.style.height = "6px"
        ring.style.width = "40px"
        ring.style.height = "40px"
        ringInner.style.animationPlayState = "running"
        ringInner.style.opacity = "0.4"
      }
    }

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)

      if (!visibleRef.current) {
        visibleRef.current = true
        if (dotRef.current) dotRef.current.style.opacity = "1"
        if (ringRef.current) ringRef.current.style.opacity = "1"       // outer becomes visible
        if (ringInnerRef.current) ringInnerRef.current.style.opacity = "0.4" // inner sets actual strength
      }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a")) {
        applyState("link")
      } else if (target.closest("button, [role='button'], input, textarea, select, label")) {
        applyState("hover")
      } else {
        applyState("default")
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onOver, { passive: true })

    return () => {
      document.head.removeChild(styleEl)
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
    }
  }, [rawX, rawY])

  return (
    <>
      {/* Dot — follows cursor instantly */}
      <motion.div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "var(--copper)",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "width 0.18s ease, height 0.18s ease",
        }}
      />

      {/* Ring outer — ONLY handles position via Framer Motion transform */}
      <motion.div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: "40px",
          height: "40px",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "width 0.28s cubic-bezier(0.16,1,0.3,1), height 0.28s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
        }}
      >
        {/* Ring inner — ONLY handles the CSS breathing animation, no position transform */}
        <div
          ref={ringInnerRef}
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid var(--copper)",
            borderRadius: "50%",
            animation: "cursor-breathe 3.5s ease-in-out infinite",
          }}
        />
      </motion.div>
    </>
  )
}