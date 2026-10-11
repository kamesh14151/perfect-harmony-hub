import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/event-chrome";
import { IntroVideo, Hero, About, Tracks, Schedule, Organizers, Registration, FAQ } from "@/components/event-sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SPARKS26 — Internal Hackathon | Sona College of Technology" },
    { name: "description", content: "SPARKS26 at Sona College of Technology, Salem, on October 15, 2026. Innovate, collaborate, and build something remarkable." },
    { property: "og:title", content: "SPARKS26 — Ideas into reality" },
    { property: "og:description", content: "An internal hackathon at Sona College of Technology. October 15, 2026 · Salem, Tamil Nadu." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() {
  return <><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-card focus:p-4">Skip to content</a><Navbar /><main id="main-content"><div id="home"><IntroVideo /><Hero /></div><About /><Tracks /><Schedule /><Organizers /><Registration /><FAQ /></main><Footer /></>;
}
