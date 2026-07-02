import { m as motion } from "framer-motion"
import { ArrowUpRight, GitFork } from "lucide-react"
import { fadeInUp } from "@/lib/animations"

const PROJECTS = [
  {
    number: "001",
    name: "Forma",
    category: "Platform",
    year: "2024",
    tagline: "A digital workspace for architecture studios.",
    challenge:
      "Architecture practices need to collaborate across complex, multi-layered project files spanning years. Existing tools were built for software teams, not spatial design disciplines.",
    solution:
      "A bespoke collaboration platform with real-time 3D model previews, version-controlled drawing sets, and stakeholder review workflows. Built with structural precision to match the craft of its users.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Three.js", "WebSockets", "Vercel"],
    impact: ["3 architecture firms adopted in beta", "40% reduction in review cycle time", "12,000+ design assets managed"],
    github: "#",
    live: "#",
  },
  {
    number: "002",
    name: "Codex",
    category: "Developer Tool",
    year: "2023",
    tagline: "Knowledge architecture for engineering teams.",
    challenge:
      "Growing engineering organisations lose institutional knowledge as documentation scatters across wikis, tickets, and conversations. Onboarding new engineers costs weeks of tribal knowledge transfer.",
    solution:
      "A structured documentation system with semantic search, automated API reference generation, and an AI-assisted writing layer. Documentation becomes a first-class engineering asset.",
    stack: ["React 19", "Node.js", "PostgreSQL", "Algolia", "OpenAI API", "Docker"],
    impact: ["Used by 200+ engineers daily", "4.2× faster onboarding reported", "Open source: 2.4k GitHub stars"],
    github: "#",
    live: "#",
  },
  {
    number: "003",
    name: "Meridian",
    category: "Analytics Dashboard",
    year: "2022",
    tagline: "Financial intelligence with spatial clarity.",
    challenge:
      "Financial analysts drowning in spreadsheets needed a way to visualise portfolio performance, risk distribution, and market correlations simultaneously without losing precision.",
    solution:
      "A high-performance analytics dashboard with custom D3.js visualisations, real-time market data streaming, and exportable reports. Numbers rendered with the clarity of architectural drawings.",
    stack: ["React", "TypeScript", "D3.js", "Python / FastAPI", "PostgreSQL", "AWS Lambda"],
    impact: ["$2.4B AUM tracked through the platform", "Sub-50ms query response on 10M+ rows", "Deployed at 3 hedge funds"],
    github: "#",
    live: "#",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--ivory)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div {...fadeInUp(0)} className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="annotation">Section</span>
              <div className="w-3 h-px" style={{ backgroundColor: "var(--hairline)" }} />
              <span className="annotation">03</span>
            </div>
            <span className="section-label">Exhibition</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display mb-6"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              Selected<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>case studies.</em>
            </motion.h2>
            <motion.p
              {...fadeInUp(0.2)}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "1.0625rem",
                color: "var(--graphite)",
                lineHeight: 1.75,
                maxWidth: "42rem",
              }}
            >
              Each project is treated as an architectural commission — with a clearly
              defined brief, a considered structural approach, and an executed result
              that outlasts the original problem.
            </motion.p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-0">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="border-t group"
              style={{ borderColor: "var(--hairline)" }}
            >
              <div className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                {/* Left — Project meta */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div
                      className="watermark-number"
                      style={{ fontSize: "5rem", opacity: 0.06, lineHeight: 1 }}
                      aria-hidden="true"
                    >
                      {project.number}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="annotation">{project.year}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 text-xs font-medium tracking-widest uppercase border"
                        style={{
                          borderColor: "var(--copper)",
                          color: "var(--copper)",
                          letterSpacing: "0.15em",
                          fontSize: "0.625rem",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3
                      className="display"
                      style={{ fontSize: "var(--text-heading)", color: "var(--charcoal)" }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                        fontSize: "1.25rem",
                        color: "var(--graphite)",
                        fontStyle: "italic",
                        lineHeight: 1.5,
                      }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs border"
                        style={{
                          borderColor: "var(--hairline)",
                          color: "var(--graphite)",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                          fontSize: "0.75rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-auto pt-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-copper group/link"
                      style={{ color: "var(--graphite)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.6875rem" }}
                    >
                      <GitFork className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                    <div className="w-px h-4" style={{ backgroundColor: "var(--hairline)" }} />
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 group/link"
                      style={{ color: "var(--charcoal)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.6875rem" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--copper)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
                    >
                      <span>Live Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                {/* Right — Description */}
                <div className="lg:col-span-8">
                  {/* Visual placeholder */}
                  <div
                    className="w-full aspect-video mb-10 flex items-end p-6 relative overflow-hidden"
                    style={{ backgroundColor: "var(--concrete)" }}
                  >
                    <div className="blueprint-grid" aria-hidden="true" style={{ opacity: 0.06 }} />
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div
                        className="display opacity-10"
                        style={{ fontSize: "clamp(4rem, 12vw, 10rem)", color: "var(--charcoal)" }}
                      >
                        {project.name}
                      </div>
                    </div>
                    <div
                      className="relative z-10 px-3 py-1 border text-xs font-medium tracking-widest uppercase"
                      style={{
                        borderColor: "var(--hairline)",
                        color: "var(--graphite)",
                        backgroundColor: "oklch(0.935 0.008 72 / 0.85)",
                        letterSpacing: "0.15em",
                        fontSize: "0.625rem",
                      }}
                    >
                      {project.number} — {project.category}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-4 h-px" style={{ backgroundColor: "var(--copper)" }} />
                        <span className="section-label" style={{ fontSize: "0.625rem" }}>Challenge</span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                          fontSize: "0.9375rem",
                          color: "var(--graphite)",
                          lineHeight: 1.75,
                        }}
                      >
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-4 h-px" style={{ backgroundColor: "var(--copper)" }} />
                        <span className="section-label" style={{ fontSize: "0.625rem" }}>Solution</span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                          fontSize: "0.9375rem",
                          color: "var(--graphite)",
                          lineHeight: 1.75,
                        }}
                      >
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact metrics */}
                  <div
                    className="mt-8 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-4"
                    style={{ borderColor: "var(--hairline)" }}
                  >
                    {project.impact.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--copper)" }} />
                        <span
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                            fontSize: "0.875rem",
                            color: "var(--charcoal)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t" style={{ borderColor: "var(--hairline)" }} />
        </div>
      </div>

      <div className="watermark-number absolute -bottom-8 right-0 pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }} aria-hidden="true">04</div>
    </section>
  )
}
