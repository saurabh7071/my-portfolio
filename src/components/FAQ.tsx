import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { Plus } from "lucide-react"
import { fadeInUp, EASE_EXPO } from "@/lib/animations"

const FAQ_ITEMS = [
  {
    value: "faq-1",
    question: "What technologies and stacks do you specialize in?",
    answer:
      "My primary stack is TypeScript across the full system — React and Next.js on the frontend, Node.js and Go on the backend, with PostgreSQL and Redis for persistence. I have deep experience with cloud infrastructure on AWS and GCP, and I treat architecture decisions like structural engineering: I choose the right material for the load, not the most fashionable one.",
  },
  {
    value: "faq-2",
    question: "Are you available for freelance or contract engagements?",
    answer:
      "Yes. I take on a small number of engagements each year to maintain quality over throughput. I prioritize projects where the problem is genuinely complex — systems with scale requirements, products in their architectural inflection point, or teams that need a senior technical partner rather than just an executor. If that sounds like you, reach out.",
  },
  {
    value: "faq-3",
    question: "What does a typical project engagement look like?",
    answer:
      "I work in three phases. First, a discovery and architecture sprint — no code written until the system design is agreed upon. Second, an iterative build phase with weekly deliverables and tight feedback loops. Third, a hardening phase covering performance profiling, security review, and documentation. Every engagement ends with a handoff I'm proud of.",
  },
  {
    value: "faq-4",
    question: "How do you approach building a product from zero to one?",
    answer:
      "I start with data topology — understanding what the system needs to know and how that knowledge changes over time. From there I define the API contract before touching any UI. Frontend architecture comes last. This inside-out approach eliminates the most expensive class of mistakes: the ones baked into the foundation that surface only after months of building on top of them.",
  },
  {
    value: "faq-5",
    question: "What is the best way to get in touch to discuss a project?",
    answer:
      "Use the contact form at the bottom of this page — it goes directly to me. Include a brief description of the problem you're trying to solve, your timeline, and any technical constraints you're already working within. I respond to every serious inquiry within 48 hours.",
  },
]

export function FAQ() {
  const [openValue, setOpenValue] = useState<string>("")

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--ivory)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <motion.div {...fadeInUp(0)} className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="annotation">Section</span>
              <div className="w-3 h-px" style={{ backgroundColor: "var(--hairline)" }} />
              <span className="annotation">07</span>
            </div>
            <span className="section-label">FAQ</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              {...fadeInUp(0.1)}
              className="display"
              style={{ fontSize: "var(--text-display)", color: "var(--charcoal)" }}
            >
              Questions worth<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>answering well.</em>
            </motion.h2>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          {...fadeInUp(0.15)}
          className="h-px w-full mb-0"
          style={{ backgroundColor: "var(--hairline)" }}
        />

        {/* Accordion */}
        <AccordionPrimitive.Root
          type="single"
          collapsible
          value={openValue}
          onValueChange={setOpenValue}
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openValue === item.value

            return (
              <motion.div
                key={item.value}
                {...fadeInUp(0.1 + index * 0.06)}
              >
                <AccordionPrimitive.Item value={item.value}>

                  {/* Trigger */}
                  <AccordionPrimitive.Header>
                    <AccordionPrimitive.Trigger
                      className="group w-full flex items-start justify-between gap-6 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      style={{ borderBottom: `1px solid var(--hairline)` }}
                    >
                      {/* Number + question */}
                      <div className="flex items-start gap-5 flex-1 min-w-0">
                        <span
                          className="annotation shrink-0 mt-0.5"
                          style={{ opacity: 0.4 }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                            fontWeight: 400,
                            color: isOpen ? "var(--copper)" : "var(--charcoal)",
                            lineHeight: 1.3,
                            transition: "color 0.3s ease",
                          }}
                        >
                          {item.question}
                        </span>
                      </div>

                      {/* Plus icon — rotates to X when open */}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: EASE_EXPO }}
                        className="shrink-0 mt-1"
                        style={{ color: isOpen ? "var(--copper)" : "var(--graphite)" }}
                      >
                        <Plus size={18} strokeWidth={1.5} />
                      </motion.span>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>

                  {/* Content — Framer Motion height animation via forceMount */}
                  <AccordionPrimitive.Content forceMount asChild>
                    <div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={item.value}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 py-7"
                              style={{ borderBottom: `1px solid var(--hairline)` }}
                            >
                              {/* Spacer to align with question text */}
                              <div className="hidden lg:block lg:col-span-3" />
                              <p
                                className="lg:col-span-9"
                                style={{
                                  fontFamily: "var(--font-inter)",
                                  fontWeight: 300,
                                  fontSize: "1.0625rem",
                                  color: "var(--graphite)",
                                  lineHeight: 1.8,
                                  maxWidth: "56ch",
                                }}
                              >
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AccordionPrimitive.Content>

                </AccordionPrimitive.Item>
              </motion.div>
            )
          })}
        </AccordionPrimitive.Root>

      </div>

      {/* Watermark */}
      <div
        className="watermark-number absolute -bottom-8 right-0 pointer-events-none"
        style={{ fontSize: "clamp(8rem, 18vw, 20rem)" }}
        aria-hidden="true"
      >
        07
      </div>
    </section>
  )
}
