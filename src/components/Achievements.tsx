import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"
import { GitFork, Trophy, Star, Code2, Zap, Award } from "lucide-react"

const ACHIEVEMENTS = [
  {
    icon: Star,
    category: "Open Source",
    title: "Codex Design System",
    metric: "2,400+",
    unit: "GitHub Stars",
    description: "Open-sourced component library adopted by engineering teams at 30+ companies.",
  },
  {
    icon: Trophy,
    category: "Hackathon",
    title: "MITHacks 2023",
    metric: "1st",
    unit: "Place Overall",
    description: "Winner of MIT's annual 48-hour hackathon, building an AI-assisted code review tool.",
  },
  {
    icon: Award,
    category: "Recognition",
    title: "CSS Design Awards",
    metric: "Site of the Month",
    unit: "February 2023",
    description: "Awarded for the Meridian Analytics dashboard's interaction design and accessibility.",
  },
  {
    icon: GitFork,
    category: "Contributions",
    title: "Open Source",
    metric: "480+",
    unit: "Commits in 2024",
    description: "Active contributor to React, TanStack Query, and Radix UI ecosystems.",
  },
  {
    icon: Code2,
    category: "Community",
    title: "Technical Articles",
    metric: "28",
    unit: "Published Posts",
    description: "Writing on software architecture and frontend engineering, read by 40,000+ developers.",
  },
  {
    icon: Zap,
    category: "Performance",
    title: "Core Web Vitals",
    metric: "98/100",
    unit: "Lighthouse Score",
    description: "Consistent achievement of near-perfect performance across all delivered products.",
  },
]

const TESTIMONIALS = [
  {
    quote:
      "Marcus approaches every project like an architect approaches a building — with complete structural integrity and extraordinary attention to the spaces between elements.",
    author: "Elena Vasquez",
    role: "CTO, Structura Studio",
  },
  {
    quote:
      "The Codex system Marcus delivered transformed how our team thinks about documentation. It's not just a tool — it's a philosophy made tangible.",
    author: "James Thornton",
    role: "Engineering Manager, Atlas Digital",
  },
  {
    quote:
      "I've worked with many senior engineers. Marcus is exceptional because he never loses sight of the human experience while solving the most complex technical problems.",
    author: "Dr. Sarah Chen",
    role: "Head of Product, Meridian Labs",
  },
]

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--concrete)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div {...fadeInUp(0)} className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="annotation">Section</span>
              <div className="w-3 h-px" style={{ backgroundColor: "var(--hairline)" }} />
              <span className="annotation">06</span>
            </div>
            <span className="section-label">Recognition</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display mb-6"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              Milestones &<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>acknowledgements.</em>
            </motion.h2>
          </div>
        </div>

        {/* Achievement grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l mb-24"
          style={{ borderColor: "var(--hairline)" }}
        >
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.07 }}
              className="p-8 border-r border-b group hover:bg-ivory/60 transition-colors duration-300"
              style={{ borderColor: "var(--hairline)" }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-9 h-9 border flex items-center justify-center"
                  style={{ borderColor: "var(--hairline)" }}
                >
                  <item.icon
                    className="w-4 h-4"
                    style={{ color: "var(--copper)" }}
                  />
                </div>
                <span className="section-label" style={{ fontSize: "0.5875rem" }}>{item.category}</span>
              </div>

              <div className="mb-3">
                <div
                  className="display leading-none mb-1"
                  style={{ fontSize: "2.75rem", color: "var(--charcoal)" }}
                >
                  {item.metric}
                </div>
                <div className="annotation" style={{ opacity: 0.6 }}>{item.unit}</div>
              </div>

              <div
                className="mb-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "var(--charcoal)",
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.8125rem",
                  color: "var(--graphite)",
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <motion.div {...fadeInUp(0)} className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--copper)" }} />
            <span className="section-label">Voices</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t" style={{ borderColor: "var(--hairline)" }}>
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className="py-10 pr-0 lg:pr-12 border-b lg:border-b-0 lg:border-r last:border-r-0 last:lg:pl-12 last:pr-0 lg:[&:nth-child(2)]:px-12"
                style={{ borderColor: "var(--hairline)" }}
              >
                <div
                  className="display mb-6"
                  style={{ fontSize: "4rem", color: "var(--copper)", opacity: 0.25, lineHeight: 1 }}
                  aria-hidden="true"
                >
                  "
                </div>
                <blockquote>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 300,
                      fontSize: "1.25rem",
                      color: "var(--charcoal)",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {t.quote}
                  </p>
                  <footer>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        color: "var(--charcoal)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {t.author}
                    </div>
                    <div className="annotation" style={{ opacity: 0.6 }}>{t.role}</div>
                  </footer>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="watermark-number absolute -bottom-8 right-0 pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }} aria-hidden="true">07</div>
    </section>
  )
}
