import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/event-sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — AuraGen 2026 | Sona College of Technology" },
      {
        name: "description",
        content:
          "Frequently asked questions about AuraGen 2026: registration, tracks, eligibility, rules, and venue details.",
      },
      { property: "og:title", content: "FAQ — AuraGen 2026" },
      {
        property: "og:description",
        content:
          "Everything you need to know about AuraGen 2026 AI Hackathon at Sona College of Technology, Salem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="dedicated-page">
      <FAQ />
    </div>
  );
}
