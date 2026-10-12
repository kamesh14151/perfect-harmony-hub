import { createFileRoute } from "@tanstack/react-router";
import { Schedule } from "@/components/event-sections";
export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — AuraGen 2026 · October 15, 2026" },
      {
        name: "description",
        content:
          "Official 8-hour schedule for AuraGen 2026 on October 15, 2026 at Shivva Ayyandurai Lab, Sona College of Technology, Salem.",
      },
      { property: "og:title", content: "Schedule — AuraGen 2026" },
      {
        property: "og:description",
        content: "From first idea to final demo. Full schedule for AuraGen 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SchedulePage,
});
function SchedulePage() {
  return (
    <div className="dedicated-page">
      <Schedule />
    </div>
  );
}
