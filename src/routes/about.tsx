import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/event-sections";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AuraGen 2026 — The Spirit of AI Innovation" },
      {
        name: "description",
        content:
          "Discover the mission of AuraGen 2026, the elite AI hackathon at Sona College of Technology organized by the Department of AI & ML.",
      },
      { property: "og:title", content: "About AuraGen 2026 — The Spirit of AI Innovation" },
      {
        property: "og:description",
        content: "Where ideas find their aura at Sona College of Technology, Salem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
function AboutPage() {
  return (
    <div className="dedicated-page">
      <About />
    </div>
  );
}
