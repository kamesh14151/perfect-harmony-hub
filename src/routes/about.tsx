import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/event-sections";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About SPARKS26 — The spirit of innovation" },
    { name: "description", content: "Discover the purpose of SPARKS26, the internal hackathon at Sona College of Technology: think boldly, build together, create impact." },
    { property: "og:title", content: "About SPARKS26 — The spirit of innovation" },
    { property: "og:description", content: "Where ideas find their spark at Sona College of Technology, Salem." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});
function AboutPage() { return <div className="dedicated-page"><About /></div>; }