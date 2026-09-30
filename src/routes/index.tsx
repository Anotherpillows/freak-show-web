import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Hero, Declaracion, MentesMaestras } from "../components/sections-hero-canon";
import { Archivo, CuartoOscuro } from "../components/sections-dispatches-gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The Girl at the Freak Show — Archivo de cine asiático y cuarto oscuro",
      },
      {
        name: "description",
        content:
          "Archivo personal de cine asiático, reseñas de trasnoche y fotografía en blanco y negro. La amenaza nunca fue el fantasma.",
      },
      {
        property: "og:title",
        content: "The Girl at the Freak Show — Archivo de cine asiático y cuarto oscuro",
      },
      {
        property: "og:description",
        content:
          "Archivo personal de cine asiático, reseñas de trasnoche y fotografía en blanco y negro.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1790735305423503085/assets/1335289e-59f7-4fc5-a898-59bd21c5289f.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1790735305423503085/assets/1335289e-59f7-4fc5-a898-59bd21c5289f.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Declaracion />
        <MentesMaestras />
        <Archivo />
        <CuartoOscuro />
      </main>
      <SiteFooter />
    </div>
  );
}
