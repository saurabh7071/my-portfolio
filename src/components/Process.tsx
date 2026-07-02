import { m as motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const STEPS = [
  {
    number: "01",
    phase: "Discovery",
    duration: "1–2 weeks",
    description:
      "Stakeholder interviews, competitive landscape analysis, and technical constraint mapping. Understanding the full scope before a single line is written.",
    activities: ["Requirement analysis", "Technical audit", "User research synthesis", "Scope definition"],
  },
  {
    number: "02",
    phase: "Architecture",
    duration: "1–3 weeks",
    description:
      "System design documents, data modelling, API contract definition, and infrastructure planning. The blueprint before construction begins.",
    activities: ["System design", "Data modelling", "API contracts", "Tech stack selection"],
  },
  {
    number: "03",
    phase: "Construction",
    duration: "4–16 weeks",
    description:
      "Iterative development with continuous integration. Code reviews, pair programming, and weekly demonstrations ensure the build stays true to the blueprint.",
    activities: ["Feature development", "Code reviews", "Integration testing", "Weekly demos"],
  },
  {
    number: "04",
    phase: "Quality",
    duration: "1–2 weeks",
    description:
      "Comprehensive testing across unit, integration, and end-to-end levels. Performance profiling and accessibility audits to ensure nothing is structurally unsound.",
    activities: ["Unit & E2E testing", "Performance audit", "Accessibility review", "Security scan"],
  },
  {
    number: "05",
    phase: "Deployment",
    duration: "1 week",
    description:
      "Staged rollout with monitoring, rollback procedures, and documentation handover. The building is handed over with full operating manuals.",
    activities: ["Staged rollout", "Monitoring setup", "Documentation", "Team handover"],
  },
  {
    number: "06",
    phase: "Maintenance",
    duration: "Continuous",
    description:
      "Ongoing observability, dependency management, and iterative improvement. Software, like buildings, requires stewardship to remain excellent over time.",
    activities: ["Performance monitoring", "Dependency updates", "Feature iteration", "Architectural review"],
  },
]

export function Process() {
  return (
    <section
      id="process"
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
              <span className="annotation">04</span>
            </div>
            <span className="section-label">Process</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display mb-6"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              How the<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>building is built.</em>
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
              Every great structure follows a disciplined construction sequence.
              Here is the methodology I apply to each engineering engagement —
              adapted for context, never compromised on rigour.
            </motion.p>
          </div>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute left-[1.4rem] lg:left-[3.5rem] top-0 bottom-0 w-px origin-top"
            style={{ backgroundColor: "var(--hairline)" }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className="flex gap-8 lg:gap-16 py-10 border-t group"
                style={{ borderColor: "var(--hairline)" }}
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-[2.8rem] h-[2.8rem] lg:w-[7rem] border flex items-center justify-center relative z-10 transition-colors duration-300 group-hover:border-copper"
                    style={{
                      borderColor: "var(--hairline)",
                      backgroundColor: "var(--concrete)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                        fontSize: "1.25rem",
                        color: "var(--charcoal)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-2">
                  <div className="lg:col-span-3">
                    <h3
                      className="display mb-1"
                      style={{ fontSize: "1.75rem", color: "var(--charcoal)" }}
                    >
                      {step.phase}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--copper)" }} />
                      <span className="annotation" style={{ opacity: 0.7 }}>{step.duration}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 300,
                        fontSize: "0.9375rem",
                        color: "var(--graphite)",
                        lineHeight: 1.75,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="space-y-1.5">
                      {step.activities.map((activity) => (
                        <div key={activity} className="flex items-center gap-2.5">
                          <div
                            className="w-3 h-px shrink-0"
                            style={{ backgroundColor: "var(--copper)", opacity: 0.6 }}
                          />
                          <span
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontWeight: 400,
                              fontSize: "0.8125rem",
                              color: "var(--charcoal)",
                            }}
                          >
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="border-t" style={{ borderColor: "var(--hairline)" }} />
          </div>
        </div>
      </div>

      <div className="watermark-number absolute -bottom-8 right-0 pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }} aria-hidden="true">05</div>
    </section>
  )
}
