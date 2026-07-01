// Architectural animation vocabulary

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const

export const fadeInUp = (delay = 0, distance = 30) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: EASE_EXPO, delay },
})

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE_OUT, delay },
})

export const stagger = {
  container: {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.08 } },
    viewport: { once: true, margin: "-80px" },
  },
  item: {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE_EXPO },
  },
}

export const revealLine = (delay = 0) => ({
  initial: { scaleX: 0, originX: 0 },
  whileInView: { scaleX: 1 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: EASE_EXPO, delay },
})

export const slideInLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, ease: EASE_EXPO, delay },
})
