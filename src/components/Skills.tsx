import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const LAYERS = [
  {
    id: "foundation",
    label: "Foundation Layer",
    number: "L-01",
    technologies: [
      { name: "HTML5 / CSS3", role: "Structure & Presentation" },
      { name: "TypeScript", role: "Type-Safe Logic" },
      { name: "JavaScript (ES2024+)", role: "Runtime Execution" },
      { name: "Web APIs", role: "Browser Interface" },
      { name: "Accessibility", role: "WCAG 2.2 Compliance" },
    ],
  },
  {
    id: "application",
    label: "Application Layer",
    number: "L-02",
    technologies: [
      { name: "React 19", role: "UI Architecture" },
      { name: "Next.js 15", role: "Full-Stack Framework" },
      { name: "Vue.js 3", role: "Reactive Interfaces" },
      { name: "Node.js", role: "Server Runtime" },
      { name: "Python / FastAPI", role: "API Services" },
      { name: "Go", role: "High-Performance Services" },
    ],
  },
  {
    id: "data",
    label: "Data Layer",
    number: "L-03",
    technologies: [
      { name: "PostgreSQL", role: "Relational Storage" },
      { name: "MongoDB", role: "Document Store" },
      { name: "Redis", role: "Cache & Pub/Sub" },
      { name: "GraphQL", role: "API Query Language" },
      { name: "REST / OpenAPI", role: "Service Contracts" },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure Layer",
    number: "L-04",
    technologies: [
      { name: "AWS (EC2, S3, Lambda)", role: "Cloud Platform" },
      { name: "Google Cloud Platform", role: "Cloud Services" },
      { name: "Docker / Kubernetes", role: "Containerisation" },
      { name: "CI/CD (GitHub Actions)", role: "Deployment Pipeline" },
      { name: "Terraform", role: "Infrastructure as Code" },
      { name: "Vercel / Netlify", role: "Edge Deployment" },
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
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
              <span className="annotation">02</span>
            </div>
            <span className="section-label">Architecture</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display mb-6"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              The technical<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>stack map.</em>
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
              Software systems are layered architectures. Here is how I organise
              the technologies in my practice — from structural foundation to
              deployed infrastructure.
            </motion.p>
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="relative">
          {/* Connecting vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-0 lg:left-[11.5rem] top-0 bottom-0 w-px origin-top hidden lg:block"
            style={{ backgroundColor: "var(--hairline)" }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {LAYERS.map((layer, layerIdx) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: layerIdx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 border-t"
                style={{ borderColor: "var(--hairline)" }}
              >
                {/* Layer label */}
                <div className="lg:col-span-3 py-8 lg:pr-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 border" style={{ borderColor: "var(--copper)" }} />
                    <span className="annotation">{layer.number}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--charcoal)",
                    }}
                  >
                    {layer.label}
                  </h3>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-9 py-8 lg:pl-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {layer.technologies.map((tech, techIdx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: layerIdx * 0.1 + techIdx * 0.05 }}
                      className="flex flex-col group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-1 h-1 rounded-full transition-colors duration-300 group-hover:bg-copper"
                          style={{ backgroundColor: "var(--graphite)", opacity: 0.4 }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                            fontSize: "0.9375rem",
                            color: "var(--charcoal)",
                          }}
                        >
                          {tech.name}
                        </span>
                      </div>
                      <span
                        className="annotation ml-3"
                        style={{ opacity: 0.55 }}
                      >
                        {tech.role}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t" style={{ borderColor: "var(--hairline)" }} />
          </div>
        </div>

        {/* Footer annotation */}
        <motion.div {...fadeInUp(0.3)} className="mt-12 flex items-center gap-6">
          <div className="w-8 h-px" style={{ backgroundColor: "var(--copper)" }} />
          <span className="annotation" style={{ opacity: 0.6 }}>
            Continuously expanding. Currently exploring Rust & Elixir.
          </span>
        </motion.div>
      </div>

      <div className="watermark-number absolute -bottom-8 right-0 pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }} aria-hidden="true">03</div>
    </section>
  )
}
