export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-16 pb-10 border-t overflow-hidden"
      style={{
        backgroundColor: "#050505",
        borderColor: "oklch(0.975 0.010 75 / 0.08)",
      }}
    >
      {/* Gloss highlight — soft light source from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.975 0.010 75 / 0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Fine sheen sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(115deg, transparent 30%, oklch(0.975 0.010 75 / 0.025) 48%, oklch(0.975 0.010 75 / 0.04) 50%, oklch(0.975 0.010 75 / 0.025) 52%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 120%, oklch(0.595 0.120 48 / 0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Reflective inner edge */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 1px 0 oklch(0.975 0.010 75 / 0.08), inset 0 -1px 0 oklch(0.975 0.010 75 / 0.03)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

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