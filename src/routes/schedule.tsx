import { createFileRoute } from "@tanstack/react-router";
import { Schedule } from "@/components/event-sections";
export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [
    { title: "Schedule — SPARKS26 · October 15, 2026" },
    { name: "description", content: "Preview the SPARKS26 journey on October 15, 2026 at Sona College of Technology. The official schedule and times will be announced." },
    { property: "og:title", content: "Schedule — SPARKS26" },
    { property: "og:description", content: "From first idea to final demo. Official timings to be announced." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SchedulePage,
});
function SchedulePage() { return <div className="dedicated-page"><Schedule /></div>; }