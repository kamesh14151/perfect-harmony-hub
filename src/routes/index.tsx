import { createFileRoute } from "@tanstack/react-router";
import { IntroVideo, Hero, Registration, FAQ } from "@/components/event-sections";

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
  return <><div id="home"><IntroVideo /><Hero /></div><Registration /><FAQ /></>;
}
