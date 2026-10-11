import { createFileRoute } from "@tanstack/react-router";
import { Tracks } from "@/components/event-sections";
export const Route = createFileRoute("/tracks")({
  head: () => ({ meta: [
    { title: "Tracks — SPARKS26" },
    { name: "description", content: "Explore proposed SPARKS26 directions in AI and machine learning, web and app development, and open innovation. Final tracks to be confirmed." },
    { property: "og:title", content: "Tracks — SPARKS26" },
    { property: "og:description", content: "Choose a problem worth solving. Explore proposed hackathon tracks." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: TracksPage,
});
function TracksPage() { return <div className="dedicated-page"><Tracks /></div>; }