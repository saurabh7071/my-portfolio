import { useState } from "react"
import { m as motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { ArrowUpRight, Mail, MapPin, Clock, RotateCcw } from "lucide-react"
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL
const LOCATION = import.meta.env.VITE_LOCATION
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL
const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL
const TWITTER_URL = import.meta.env.VITE_TWITTER_URL

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setError(null)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
          replyto: data.email,
          from_name: "Portfolio Contact Form",
          subject: `New inquiry: ${data.subject}`,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
        reset()
      } else {
        setError("Something went wrong. Please try again or email me directly.")
      }
    } catch {
      setError("Something went wrong. Please try again or email me directly.")
    }
  }

  const inputStyle = {
    fontFamily: "var(--font-inter)",
    fontWeight: 300,
    fontSize: "0.9375rem",
    color: "var(--charcoal)",
    backgroundColor: "transparent",
    borderColor: "var(--hairline)",
    outline: "none",
    width: "100%",
    padding: "0.875rem 0",
    borderBottom: "1px solid var(--hairline)",
    transition: "border-color 0.2s ease",
    display: "block",
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="blueprint-grid" aria-hidden="true" style={{ opacity: 0.04, backgroundImage: "linear-gradient(oklch(0.975 0.010 75) 0.5px, transparent 0.5px), linear-gradient(90deg, oklch(0.975 0.010 75) 0.5px, transparent 0.5px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}>Section</span>
              <div className="w-3 h-px" style={{ backgroundColor: "oklch(0.975 0.010 75)", opacity: 0.2 }} />
              <span className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}>07</span>
            </div>
            <span className="section-label">Connect</span>
          </motion.div>

          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="display mb-6"
              style={{ fontSize: "var(--text-display)", color: "var(--ivory)" }}
            >
              Let's build something<br />
              <em style={{ color: "var(--copper)", fontStyle: "normal" }}>worth exhibiting.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "1.0625rem",
                color: "oklch(0.975 0.010 75)",
                opacity: 0.65,
                lineHeight: 1.75,
                maxWidth: "36rem",
              }}
            >
              Available for new engagements, consulting, and collaborations.
              I work with teams and organisations who believe that the quality
              of the engineering process matters as much as the final product.
            </motion.p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div
              className="border-t pt-8"
              style={{ borderColor: "oklch(0.975 0.010 75 / 0.1)" }}
            >
              <div className="space-y-6">
                <a
                  href="mailto:marcus@example.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 border flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{ borderColor: "oklch(0.975 0.010 75 / 0.15)" }}
                  >
                    <Mail className="w-4 h-4" style={{ color: "var(--copper)" }} />
                  </div>
                  <div>
                    <div className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4, marginBottom: "0.25rem" }}>Email</div>
                    <div
                      className="text-sm transition-colors duration-200"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 400, color: "oklch(0.975 0.010 75)" }}
                    >
                      {CONTACT_EMAIL}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 border flex items-center justify-center shrink-0"
                    style={{ borderColor: "oklch(0.975 0.010 75 / 0.15)" }}
                  >
                    <MapPin className="w-4 h-4" style={{ color: "var(--copper)" }} />
                  </div>
                  <div>
                    <div className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4, marginBottom: "0.25rem" }}>Location</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "0.9375rem", color: "oklch(0.975 0.010 75)" }}>
                      {LOCATION}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 border flex items-center justify-center shrink-0"
                    style={{ borderColor: "oklch(0.975 0.010 75 / 0.15)" }}
                  >
                    <Clock className="w-4 h-4" style={{ color: "var(--copper)" }} />
                  </div>
                  <div>
                    <div className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4, marginBottom: "0.25rem" }}>Availability</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "0.9375rem", color: "oklch(0.975 0.010 75)" }}>
                      Open to new projects
                    </div>
                    {/* <div style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "0.8125rem", color: "var(--copper)" }}>
                      From Q1 2025
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div
              className="border-t pt-8"
              style={{ borderColor: "oklch(0.975 0.010 75 / 0.1)" }}
            >
              <div className="annotation mb-4" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}>Find me elsewhere</div>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, label: "GitHub", href: GITHUB_URL },
                  { icon: FaLinkedinIn, label: "LinkedIn", href: LINKEDIN_URL },
                  { icon: FaInstagram, label: "Instagram", href: INSTAGRAM_URL },
                  { icon: FaXTwitter, label: "X (Twitter)", href: TWITTER_URL },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 border flex items-center justify-center transition-all duration-200 group"
                    style={{
                      borderColor: "oklch(0.975 0.010 75 / 0.15)",
                      color: "oklch(0.975 0.010 75)",
                      opacity: 0.7,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--copper)"
                      e.currentTarget.style.color = "var(--copper)"
                      e.currentTarget.style.opacity = "1"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "oklch(0.975 0.010 75 / 0.15)"
                      e.currentTarget.style.color = "oklch(0.975 0.010 75)"
                      e.currentTarget.style.opacity = "0.7"
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-8"
          >
            {submitted ? (
              <div
                className="border-t pt-16 flex flex-col items-center text-center"
                style={{ borderColor: "oklch(0.975 0.010 75 / 0.1)" }}
              >
                <div
                  className="display mb-4"
                  style={{ fontSize: "var(--text-heading)", color: "var(--copper)" }}
                >
                  Message received.
                </div>
                <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, color: "oklch(0.975 0.010 75)", opacity: 0.6 }}>
                  I'll respond within 24 hours. Looking forward to the conversation.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 flex items-center gap-4 px-8 py-4 border transition-all duration-300 group"
                  style={{
                    borderColor: "var(--copper)",
                    color: "var(--copper)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "0.8125rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--copper)"
                    e.currentTarget.style.color = "var(--ivory)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "var(--copper)"
                  }}
                >
                  <span>Send Another Message</span>
                  <RotateCcw className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="border-t pt-8"
                style={{ borderColor: "oklch(0.975 0.010 75 / 0.1)" }}
                noValidate
              >
                {error && (
                  <div
                    className="mb-6 px-4 py-3 border annotation"
                    style={{ borderColor: "var(--copper)", color: "var(--copper)" }}
                  >
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                  {/* Name */}
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="block annotation mb-2"
                      style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      style={{ ...inputStyle, color: "oklch(0.975 0.010 75)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                    />
                    {errors.name && (
                      <span className="annotation mt-1 block" style={{ color: "var(--copper)" }}>
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="block annotation mb-2"
                      style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                      })}
                      placeholder="your@email.com"
                      style={{ ...inputStyle, color: "oklch(0.975 0.010 75)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                    />
                    {errors.email && (
                      <span className="annotation mt-1 block" style={{ color: "var(--copper)" }}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-8">
                  <label
                    htmlFor="subject"
                    className="block annotation mb-2"
                    style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    placeholder="Project enquiry, collaboration, etc."
                    style={{ ...inputStyle, color: "oklch(0.975 0.010 75)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                  />
                  {errors.subject && (
                    <span className="annotation mt-1 block" style={{ color: "var(--copper)" }}>
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="mb-10">
                  <label
                    htmlFor="message"
                    className="block annotation mb-2"
                    style={{ color: "oklch(0.975 0.010 75)", opacity: 0.4 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    placeholder="Tell me about your project…"
                    style={{
                      ...inputStyle,
                      borderBottom: "none",
                      border: "1px solid var(--hairline)",
                      padding: "0.875rem",
                      resize: "vertical",
                      color: "oklch(0.975 0.010 75)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--copper)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--hairline)")}
                  />
                  {errors.message && (
                    <span className="annotation mt-1 block" style={{ color: "var(--copper)" }}>
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-4 px-8 py-4 border transition-all duration-300 group disabled:opacity-50"
                  style={{
                    borderColor: "var(--copper)",
                    color: "var(--copper)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "0.8125rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "var(--copper)"
                      e.currentTarget.style.color = "var(--ivory)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "var(--copper)"
                  }}
                >
                  <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
                  {!isSubmitting && (
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div
        className="watermark-number absolute -bottom-8 right-0 pointer-events-none"
        style={{ fontSize: "clamp(8rem, 18vw, 20rem)", color: "oklch(0.975 0.010 75)", opacity: 0.025 }}
        aria-hidden="true"
      >
        08
      </div>
    </section>
  )
}
