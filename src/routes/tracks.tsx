import { createFileRoute } from "@tanstack/react-router";
import { Tracks } from "@/components/event-sections";
export const Route = createFileRoute("/tracks")({
  head: () => ({
    meta: [
      { title: "Tracks — AuraGen 2026" },
      {
        name: "description",
        content:
          "Explore the confirmed AuraGen 2026 tracks: Track 1 (AI Website Development) and Track 2 (Machine Learning, Generative AI, and Agentic AI).",
      },
      { property: "og:title", content: "Tracks — AuraGen 2026" },
      {
        property: "og:description",
        content: "Choose a problem worth solving at AuraGen 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TracksPage,
});
function TracksPage() {
  return (
    <div className="dedicated-page">
      <Tracks />
    </div>
  );
}
