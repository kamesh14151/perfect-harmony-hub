import { createFileRoute } from "@tanstack/react-router";
import { VideoHero, Hero, Registration } from "@/components/event-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AuraGen 2026 — Next-Gen AI Hackathon | Sona College of Technology" },
      {
        name: "description",
        content:
          "AuraGen 2026 organized by the Department of AI & ML at Sona College of Technology, Salem on October 15, 2026.",
      },
      { property: "og:title", content: "AuraGen 2026 — Where Ideas Ignite" },
      {
        property: "og:description",
        content:
          "An elite AI hackathon at Sona College of Technology, Salem organized by the Department of AI & ML.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  return (
    <>
      <div id="home">
        <VideoHero />
        <Hero />
      </div>
      <Registration />
    </>
  );
}
