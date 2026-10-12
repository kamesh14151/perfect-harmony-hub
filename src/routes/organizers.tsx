import { createFileRoute } from "@tanstack/react-router";
import { Organizers } from "@/components/event-sections";
export const Route = createFileRoute("/organizers")({
  head: () => ({
    meta: [
      { title: "Organizers — Meet the AuraGen 2026 Team" },
      {
        name: "description",
        content:
          "Meet the student organizers and Department of AI & ML team bringing AuraGen 2026 to life at Sona College of Technology, Salem.",
      },
      { property: "og:title", content: "Organizers — Meet the AuraGen 2026 Team" },
      {
        property: "og:description",
        content: "One team. A shared ambition. The people behind AuraGen 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrganizersPage,
});
function OrganizersPage() {
  return (
    <div className="dedicated-page">
      <Organizers />
    </div>
  );
}
