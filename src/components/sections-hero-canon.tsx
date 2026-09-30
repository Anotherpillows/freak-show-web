import { HERO_IMG, DIRECTORS, SectionLabel } from "./archive-data";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-1 gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 bg-destructive" />
              <span className="label-mono text-muted-foreground">DESPACHO Nº001 // EST. 2026</span>
            </div>
            <h1 className="font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              <span className="block text-bone">La amenaza nunca fue</span>
              <span className="block text-gray-medium">el fantasma.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground sm:text-[18px]">
              Archivo de cine asiático, reseñas de trasnoche y fotografía en blanco y negro.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#archivo"
                className="label-mono border border-foreground bg-foreground px-6 py-3.5 transition-colors hover:bg-transparent hover:text-foreground"
                style={{ color: "var(--background)" }}
              >
                [Abrir Archivo]
              </a>
              <a
                href="#cuarto-oscuro"
                className="label-mono border border-border bg-transparent px-6 py-3.5 text-foreground transition-colors hover:border-foreground"
              >
                [Cuarto Oscuro]
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="contact-frame relative aspect-[4/3] w-full overflow-hidden bg-card">
              <img
                src={HERO_IMG}
                alt="Figura anónima en pasaje analógico de alto contraste y grano profundo"
                className="mono-photo h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse bg-destructive" />
                <span className="label-mono text-[9px] text-foreground/80">REC // 35MM</span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="label-mono text-[9px] text-foreground/70">
                  NEG.001 / SIN CALIBRAR
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="label-mono text-[9px] text-muted-foreground">
                EL PASILLO // CELULOIDE
              </span>
              <span className="label-mono text-[9px] text-muted-foreground">
                EXP. 1/30s · f/2.8 · ISO 800
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Declaracion() {
  return (
    <section id="declaracion" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-2xl font-medium leading-snug text-foreground sm:text-[2rem] sm:leading-[1.35]">
            Si al terminar los créditos no te quedás mirando la pared preguntándote ¿qué carajo hago
            con mi vida ahora?, o si ante la primera inconsistencia del guion la respuesta es «un
            hechicero lo hizo», paso.
          </p>
          <p className="mt-8 font-display text-2xl font-medium leading-snug text-muted-foreground sm:text-[2rem] sm:leading-[1.35]">
            Prefiero ruido analógico, departamentos chicos y gente desquiciada posta. Para
            sobresaltos fáciles ya tengo los bocinazos del bondi a las ocho de la mañana.
          </p>
        </div>
      </div>
    </section>
  );
}

export function MentesMaestras() {
  return (
    <section id="mentes-maestras" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <SectionLabel index="02" label="MENTES MAESTRAS" />
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Mentes Maestras
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Cinco directores que construyeron el desasosiego a partir del silencio, el agua y las
          habitaciones vacías.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {DIRECTORS.map((d) => (
            <a
              key={d.name}
              href={d.letterboxd}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-border bg-background transition-colors hover:border-foreground"
            >
              <div className="contact-frame relative aspect-square overflow-hidden bg-card">
                <img
                  src={d.img}
                  alt={`Retrato en blanco y negro de ${d.name}`}
                  className="mono-photo h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-3 py-4">
                <span className="label-mono text-[10px] text-foreground transition-colors group-hover:text-accent">
                  {d.name.toUpperCase()}
                </span>
                <span className="label-mono mt-1.5 block text-[8px] text-muted-foreground">
                  LETTERBOXD ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
