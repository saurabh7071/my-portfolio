
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-10 border-t"
      style={{
        backgroundColor: "var(--charcoal)",
        borderColor: "oklch(0.975 0.010 75 / 0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* SV Logo */}
          <div className="flex items-center gap-3">
            <svg
              width="44" height="32"
              viewBox="0 0 48 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Saurabh Vaidya"
            >
              <rect x="0.5" y="0.5" width="47" height="35" stroke="var(--copper)" strokeWidth="1" />
              <rect x="4" y="4" width="40" height="28" stroke="var(--copper)" strokeWidth="0.5" strokeOpacity="0.35" />
              <line x1="8" y1="18" x2="40" y2="18" stroke="var(--copper)" strokeWidth="0.5" strokeOpacity="0.2" />
              <text x="24" y="16" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="11" fill="var(--copper)" letterSpacing="1">SAURABH</text>
              <text x="24" y="29" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontWeight="500" fontSize="11" fill="var(--copper)" letterSpacing="1">VAIDYA</text>
            </svg>
          </div>

          {/* Center — copyright */}
          <div className="annotation" style={{ color: "oklch(0.975 0.010 75)", opacity: 0.3 }}>
            © {year} — All rights reserved
          </div>

          {/* Right — tagline */}
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
