import { ARCHIVO, CUARTO_OSCURO, SectionLabel } from "./archive-data";

const BADGE_CLASS: Record<string, string> = {
  destructive: "border-destructive bg-destructive text-destructive-foreground",
  accent: "border-accent bg-accent text-accent-foreground",
  muted: "border-border bg-secondary text-muted-foreground",
};

const BADGE_ICON: Record<string, string> = {
  "Figurita difícil": "🗃️",
  "Mirable, sin drama": "📼",
  "A la papelera": "🗑️",
};

export function Archivo() {
  return (
    <section id="archivo" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <SectionLabel index="03" label="ARCHIVO" />
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Archivo
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Críticas de trasnoche, celuloide y autopsias sin anestesia.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ARCHIVO.map((d) => (
            <article key={d.title} className="group flex flex-col border border-border bg-card">
              <div className="contact-frame relative aspect-video overflow-hidden bg-background">
                <img
                  src={d.img}
                  alt={`${d.title} (${d.year})`}
                  className="mono-photo h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={
                    "absolute left-3 top-3 label-mono border px-2.5 py-1.5 text-[8px] " +
                    (BADGE_CLASS[d.badgeTone] ?? BADGE_CLASS.muted)
                  }
                >
                  {BADGE_ICON[d.badge] ?? "·"} {d.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="label-mono text-[9px] text-muted-foreground">
                  [{d.year}] · {d.country.toUpperCase()} · {d.format.toUpperCase()}
                </span>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
                    {d.title}
                  </h3>
                </div>
                <span className="label-mono mt-2 text-[9px] text-accent">
                  DIR. {d.director.toUpperCase()}
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {d.verdict}
                </p>
                <a
                  href="#archivo"
                  className="label-mono mt-5 inline-flex w-fit border border-border px-4 py-2.5 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-primary"
                >
                  [Abrir autopsia →]
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CuartoOscuro() {
  return (
    <section id="cuarto-oscuro" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <SectionLabel index="04" label="CUARTO OSCURO" />
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Cuarto Oscuro
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Fotos mías buscando esa incomodidad.
        </p>

        <div className="mt-12 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {CUARTO_OSCURO.map((g, i) => (
            <figure key={i} className="group break-inside-avoid">
              <div className="contact-frame relative overflow-hidden bg-background">
                <img
                  src={g.img}
                  alt={`${g.caption} — ${g.frame}`}
                  className="mono-photo w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 flex items-center justify-between">
                <span className="label-mono text-[8px] text-muted-foreground">
                  {g.caption.toUpperCase()}
                </span>
                <span className="label-mono text-[8px] text-muted-foreground">{g.frame}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
