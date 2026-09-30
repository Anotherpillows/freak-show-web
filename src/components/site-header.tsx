function IconInstagram() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="0" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconLetterboxd() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
      <rect x="0.5" y="3.5" width="5" height="11" stroke="currentColor" strokeWidth="1.2" />
      <rect x="8.5" y="3.5" width="5" height="11" stroke="currentColor" strokeWidth="1.2" />
      <rect x="16.5" y="3.5" width="5" height="11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MastheadMark() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-3 inline-block shrink-0"
      aria-hidden="true"
    >
      {/* Outer sharp 90-degree film frame border */}
      <rect x="2" y="2" width="20" height="20" stroke="#e2dfd8" strokeWidth="1.75" />
      {/* Film sprocket holes (top and bottom rows) */}
      <rect x="4.5" y="3.5" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="8" y="3.5" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="11.5" y="3.5" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="15" y="3.5" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="18" y="3.5" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="4.5" y="19" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="8" y="19" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="11.5" y="19" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="15" y="19" width="2" height="1.5" fill="#e2dfd8" />
      <rect x="18" y="19" width="2" height="1.5" fill="#e2dfd8" />
      {/* Inner celluloid window with fine crosshair grid */}
      <rect x="4.5" y="6.5" width="15" height="11" stroke="#e2dfd8" strokeWidth="1.2" />
      <line x1="12" y1="6.5" x2="12" y2="17.5" stroke="#5a5d66" strokeWidth="0.75" />
      <line x1="4.5" y1="12" x2="19.5" y2="12" stroke="#5a5d66" strokeWidth="0.75" />
    </svg>
  );
}

const NAV = [
  { label: "Inicio", href: "#top" },
  { label: "Mentes Maestras", href: "#mentes-maestras" },
  { label: "Archivo", href: "#archivo" },
  { label: "Cuarto Oscuro", href: "#cuarto-oscuro" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        {/* Masthead */}
        <a href="#top" className="flex items-center gap-2.5 text-foreground">
          <MastheadMark />
          <span className="font-display text-[15px] font-semibold tracking-[0.04em] text-foreground sm:text-[17px]">
            THE GIRL AT THE FREAK SHOW
          </span>
        </a>

        {/* Center nav */}
        <nav className="flex items-center gap-6 lg:gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right outbound icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://letterboxd.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Letterboxd"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <IconLetterboxd />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <IconInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}
