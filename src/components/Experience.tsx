import { m as motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

const EXPERIENCE = [
  {
    number: "01",
    role: "Senior Software Engineer",
    company: "Structura Studio",
    period: "2022 — Present",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Leading the architecture and delivery of the firm's flagship platform product. Established frontend engineering standards, mentored a team of six engineers, and reduced deployment time by 70% through CI/CD redesign.",
    achievements: [
      "Architected a real-time collaboration system handling 10,000+ concurrent sessions",
      "Led migration from monolith to microservices, improving P99 latency by 65%",
      "Established component library adopted across 4 product squads",
    ],
  },
  {
    number: "02",
    role: "Frontend Engineer",
    company: "Atlas Digital",
    period: "2019 — 2022",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Core member of the product team responsible for customer-facing interfaces. Owned the design system and worked closely with designers to establish a shared visual language across the product suite.",
    achievements: [
      "Built and maintained a design system with 80+ components, used by 15+ engineers",
      "Improved Core Web Vitals scores from 45 to 92 (LCP, FID, CLS) across flagship product",
      "Shipped 3 major product features adopted by 50,000+ users",
    ],
  },
  {
    number: "03",
    role: "Software Developer",
    company: "Meridian Labs",
    period: "2017 — 2019",
    location: "Boston, MA",
    type: "Full-time",
    description:
      "Full-stack development on financial technology products. Built data visualisation tools and internal analytics dashboards for enterprise clients in the asset management industry.",
    achievements: [
      "Delivered a real-time portfolio analytics dashboard processing $2.4B in assets",
      "Engineered ETL pipelines processing 1M+ financial transactions daily",
      "Introduced TypeScript across the frontend codebase, eliminating runtime type errors",
    ],
  },
]

const EDUCATION = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Massachusetts Institute of Technology",
    period: "2013 — 2017",
    note: "Minor in Mathematics",
  },
  {
    degree: "AWS Solutions Architect",
    institution: "Amazon Web Services",
    period: "2021",
    note: "Professional Certification",
  },
  {
    degree: "Google Cloud Professional",
    institution: "Google Cloud",
    period: "2022",
    note: "Cloud Engineer Certification",
  },
]

export function Experience() {
  return (
    <section
      id="experience"
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
              <span className="annotation">05</span>
            </div>
            <span className="section-label">Record</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display mb-6"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              Eight years of<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>professional practice.</em>
            </motion.h2>
          </div>
        </div>

        {/* Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {EXPERIENCE.map((job, idx) => (
                <motion.div
                  key={job.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                  className="border-t py-10 group"
                  style={{ borderColor: "var(--hairline)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Meta */}
                    <div>
                      <div className="annotation mb-3" style={{ opacity: 0.5 }}>{job.number}</div>
                      <div
                        className="mb-1 font-medium"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--copper)",
                        }}
                      >
                        {job.company}
                      </div>
                      <div className="annotation" style={{ opacity: 0.6 }}>{job.period}</div>
                      <div className="annotation mt-1" style={{ opacity: 0.45 }}>{job.location}</div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2">
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontWeight: 400,
                          fontSize: "1.5rem",
                          color: "var(--charcoal)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {job.role}
                      </h3>
                      <p
                        className="mb-6"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                          fontSize: "0.9375rem",
                          color: "var(--graphite)",
                          lineHeight: 1.75,
                        }}
                      >
                        {job.description}
                      </p>
                      <div className="space-y-2">
                        {job.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-start gap-3">
                            <div
                              className="w-4 h-px mt-2.5 shrink-0"
                              style={{ backgroundColor: "var(--copper)", opacity: 0.7 }}
                            />
                            <p
                              style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 300,
                                fontSize: "0.875rem",
                                color: "var(--charcoal)",
                                lineHeight: 1.6,
                              }}
                            >
                              {achievement}
                            </p>
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

          {/* Education */}
          <div className="lg:col-span-4">
            <motion.div {...fadeInUp(0.2)}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-px" style={{ backgroundColor: "var(--copper)" }} />
                <span className="section-label" style={{ fontSize: "0.625rem" }}>Education & Certifications</span>
              </div>
              <div className="space-y-0">
                {EDUCATION.map((item, idx) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                    className="border-t py-6"
                    style={{ borderColor: "var(--hairline)" }}
                  >
                    <div className="annotation mb-2" style={{ opacity: 0.5 }}>{item.period}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 400,
                        fontSize: "1.1875rem",
                        color: "var(--charcoal)",
                        lineHeight: 1.3,
                        marginBottom: "0.375rem",
                      }}
                    >
                      {item.degree}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                        fontSize: "0.8125rem",
                        color: "var(--graphite)",
                      }}
                    >
                      {item.institution}
                    </div>
                    <div className="annotation mt-1" style={{ opacity: 0.5 }}>{item.note}</div>
                  </motion.div>
                ))}
                <div className="border-t" style={{ borderColor: "var(--hairline)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="watermark-number absolute -bottom-8 right-0 pointer-events-none" style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }} aria-hidden="true">05</div>
    </section>
  )
}
