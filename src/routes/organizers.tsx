import { createFileRoute } from "@tanstack/react-router";
import { Organizers } from "@/components/event-sections";
export const Route = createFileRoute("/organizers")({
  head: () => ({ meta: [
    { title: "Organizers — Meet the SPARKS26 team" },
    { name: "description", content: "Meet the 14 organizers bringing SPARKS26 to life at Sona College of Technology, Salem." },
    { property: "og:title", content: "Organizers — Meet the SPARKS26 team" },
    { property: "og:description", content: "One team. A shared ambition. The people behind SPARKS26." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: OrganizersPage,
});
function OrganizersPage() { return <div className="dedicated-page"><Organizers /></div>; }