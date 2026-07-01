import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const VALUES = [
  {
    number: "01",
    title: "Systems Thinking",
    body: "Every interface is a surface of a deeper architecture. I design from the inside out — defining data structures, API contracts, and state topology before a single pixel is placed.",
  },
  {
    number: "02",
    title: "Structural Clarity",
    body: "Code should communicate intent as precisely as a blueprint. Naming, hierarchy, and modularity are not aesthetics — they are the load-bearing walls of maintainable software.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    body: "The best engineers are also curators. They remove what isn't essential, refine what remains, and understand that excellence lives in the unglamorous details others overlook.",
  },
  {
    number: "04",
    title: "Continuous Refinement",
    body: "Architecture improves through iteration. I treat every codebase as a living system — studying its usage patterns, measuring its performance, and evolving it with disciplined restraint.",
  },
]

const STATS = [
  { value: "8+", label: "Years of Engineering" },
  { value: "40+", label: "Projects Delivered" },
  { value: "12", label: "Technologies Mastered" },
  { value: "∞", label: "Problems Solved" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden" style={{ backgroundColor: "var(--ivory)" }}>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-28">

          {/* Label col */}
          <motion.div {...fadeInUp(0)} className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="annotation">Section</span>
                <div className="w-3 h-px" style={{ backgroundColor: "var(--hairline)" }} />
                <span className="annotation">01</span>
              </div>
              <span className="section-label">Identity</span>
            </div>
            <motion.div
              {...fadeInUp(0.2)}
              className="hidden lg:block mt-auto pt-12"
            >
              <div className="h-px w-full" style={{ backgroundColor: "var(--hairline)" }} />
              <div className="pt-6 grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="display mb-1"
                      style={{ fontSize: "2.5rem", color: "var(--charcoal)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="annotation" style={{ opacity: 0.7 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Main content */}
          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display mb-10"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              Engineering with the rigor<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>and elegance</em> of architecture.
            </motion.h2>

            <motion.p
              {...fadeInUp(0.2)}
              className="max-w-2xl mb-16"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "1.125rem",
                color: "var(--graphite)",
                lineHeight: 1.8,
              }}
            >
              I'm Marcus Elias Webb, a Full Stack Engineer based in New York. Over eight years
              of practice, I've cultivated a singular focus: building software systems that are
              as structurally sound as they are beautiful to use. My approach borrows from
              architecture — meticulous planning, respect for materials (technologies), and an
              unwillingness to compromise on the integrity of the final structure.
            </motion.p>

            {/* Philosophy grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l"
              style={{ borderColor: "var(--hairline)" }}
            >
              {VALUES.map((item) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="p-8 border-r border-b group hover:bg-concrete/40 transition-colors duration-300"
                  style={{ borderColor: "var(--hairline)" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="annotation mt-1">{item.number}</span>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.375rem",
                        fontWeight: 400,
                        color: "var(--charcoal)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h3>
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
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <motion.div {...fadeInUp(0.2)} className="lg:hidden grid grid-cols-2 gap-6 pt-8 border-t" style={{ borderColor: "var(--hairline)" }}>
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="display mb-1" style={{ fontSize: "2.5rem", color: "var(--charcoal)" }}>{stat.value}</div>
              <div className="annotation" style={{ opacity: 0.7 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="watermark-number absolute -bottom-8 right-0 pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }} aria-hidden="true">02</div>
    </section>
  )
}
