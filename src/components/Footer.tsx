export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="pt-16 pb-10 border-t overflow-hidden"
      style={{
        backgroundColor: "var(--charcoal)",
        borderColor: "oklch(0.975 0.010 75 / 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Big wordmark */}
        <div className="mb-10 lg:mb-14">
          <h2
            className="select-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(3.5rem, 13vw, 11rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1px oklch(0.975 0.010 75 / 0.5)",
            }}
          >
            S.
            <span
              style={{
                color: "var(--copper)",
                WebkitTextStroke: "0px",
              }}
            >
              Vaidya
            </span>
          </h2>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t" style={{ borderColor: "oklch(0.975 0.010 75 / 0.08)" }}>

          <div className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.3 }}>
            © {year} — All rights reserved
          </div>

          <div
            className="flex items-center gap-3"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "0.9375rem",
              color: "oklch(0.975 0.010 75)",
              opacity: 0.35,
            }}
          >
            Designing with architectural precision
          </div>
        </div>
      </div>
    </footer>
  )
}