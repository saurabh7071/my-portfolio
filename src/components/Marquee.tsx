import { m as motion } from "framer-motion"

const BASE_TEXT = "FULL STACK ENGINEER  ·  NEW YORK, NY  ·  EST. 2017  ·  AVAILABLE FOR WORK  ·  ARCHITECTURE OF CODE  ·  REACT & TYPESCRIPT  ·  "
const BASE_TEXT_2 = "PRECISION  ·  SYSTEMS THINKING  ·  STRUCTURAL CLARITY  ·  CRAFTSMANSHIP  ·  CONTINUOUS REFINEMENT  ·  BUILT TO LAST  ·  "

interface MarqueeProps {
  variant?: "dark" | "copper"
  reverse?: boolean
  speed?: number
  text?: string
}

export function Marquee({ variant = "dark", reverse = false, speed = 35, text }: MarqueeProps) {
  const content = text ?? BASE_TEXT
  const repeated = content.repeat(6)

  const bg = variant === "copper" ? "var(--copper)" : "var(--charcoal)"
  const fg = variant === "copper" ? "var(--ivory)" : "oklch(0.975 0.010 75)"
  const borderColor = variant === "copper" ? "oklch(0.595 0.120 48 / 0.4)" : "oklch(0.975 0.010 75 / 0.07)"

  return (
    <div
      className="overflow-hidden py-4 relative border-y"
      style={{
        backgroundColor: bg,
        borderColor,
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ willChange: "transform" }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "0.5625rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: fg,
              opacity: 0.5,
              whiteSpace: "nowrap",
              flexShrink: 0,
              display: "inline-block",
              minWidth: "100vw",
            }}
          >
            {repeated}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function DoubleMarquee() {
  return (
    <div style={{ backgroundColor: "var(--charcoal)" }}>
      <Marquee variant="dark" reverse={false} speed={40} />
      <Marquee variant="dark" reverse={true} speed={50} text={BASE_TEXT_2} />
    </div>
  )
}
