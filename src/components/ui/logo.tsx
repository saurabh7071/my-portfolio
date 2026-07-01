import { motion } from "framer-motion"

interface LogoProps {
    showWordmark?: boolean
    className?: string
}

export function Logo({ showWordmark = true, className = "" }: LogoProps) {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`flex items-center gap-3 group ${className}`}
            aria-label="Back to top"
        >
            {/* SV double-border SVG mark */}
            <motion.div
                className="flex-shrink-0"
                style={{ color: "var(--copper)" }}
                whileHover={{ color: "oklch(0.975 0.010 75)" }}
                transition={{ duration: 0.2 }}
            >
                <svg
                    width="48" height="36"
                    viewBox="0 0 48 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    style={{ display: "block" }}
                >
                    {/* Outer copper border */}
                    <rect x="0.5" y="0.5" width="47" height="35" stroke="currentColor" strokeWidth="1" fill="transparent" className="group-hover:fill-copper" />
                    {/* Inner accent border */}
                    <rect x="4" y="4" width="40" height="28" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.35" />
                    {/* Thin copper rule — horizontal divider */}
                    <line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
                    {/* S — upper half */}
                    <text
                        x="24" y="16"
                        textAnchor="middle"
                        fontFamily="'Cormorant Garamond', Georgia, serif"
                        fontStyle="italic"
                        fontWeight="500"
                        fontSize="11"
                        fill="currentColor"
                        letterSpacing="1"
                    >SAURABH</text>
                    {/* V — lower half */}
                    <text
                        x="24" y="29"
                        textAnchor="middle"
                        fontFamily="'Cormorant Garamond', Georgia, serif"
                        fontStyle="italic"
                        fontWeight="500"
                        fontSize="11"
                        fill="currentColor"
                        letterSpacing="1"
                    >VAIDYA</text>
                </svg>
            </motion.div>

            {/* Wordmark — optional */}
            {showWordmark && (
                <div className="hidden sm:flex flex-col leading-none">
                    <span
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.5rem",
                            fontWeight: 500,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "var(--charcoal)",
                            opacity: 0.65,
                            lineHeight: 1.5,
                        }}
                    >
                        Full Stack
                    </span>
                    <span
                        style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "0.5rem",
                            fontWeight: 500,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "var(--charcoal)",
                            opacity: 0.65,
                            lineHeight: 1.5,
                        }}
                    >
                        Engineer
                    </span>
                </div>
            )}
        </button>
    )
}