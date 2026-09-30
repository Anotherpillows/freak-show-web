export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="label-mono text-[9px] text-muted-foreground">
            The Girl at the Freak Show © 2026 · Archivo personal
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://letterboxd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-[9px] text-muted-foreground transition-colors hover:text-foreground"
            >
              Letterboxd
            </a>
            <span className="text-muted-foreground/40">·</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono text-[9px] text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
