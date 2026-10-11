import portrait0 from "@/assets/placeholders/kanish-s.jpg.asset.json";
import portrait1 from "@/assets/placeholders/sarvesh-p.jpg.asset.json";
import portrait2 from "@/assets/placeholders/ajay.jpg.asset.json";
import portrait3 from "@/assets/placeholders/nithish.jpg.asset.json";
import portrait4 from "@/assets/placeholders/dev.jpg.asset.json";
import portrait5 from "@/assets/placeholders/elango.jpg.asset.json";
import portrait6 from "@/assets/placeholders/nithyasri.jpg.asset.json";
import portrait7 from "@/assets/placeholders/kamesh.jpg.asset.json";
import portrait8 from "@/assets/placeholders/raaj-nikitaa.jpg.asset.json";
import portrait9 from "@/assets/placeholders/kamali.jpg.asset.json";
import portrait10 from "@/assets/placeholders/kavyashree.jpg.asset.json";
import portrait11 from "@/assets/placeholders/sridevi.jpg.asset.json";
import portrait12 from "@/assets/placeholders/srinivasan-m.jpg.asset.json";
import portrait13 from "@/assets/placeholders/sudhish-vijai.jpg.asset.json";

export interface Organizer {
  name: string;
  role?: string;
  image?: string;
  imageIsPlaceholder?: boolean;
  imageFilename?: string;
  department?: string;
  biography?: string;
  linkedin?: string;
  email?: string;
  category?: string;
}

export const organizers: Organizer[] = [
  { name: "Kanish S", image: portrait0.url, imageIsPlaceholder: true, imageFilename: "kanish-s.jpg" }, { name: "Sarvesh P", image: portrait1.url, imageIsPlaceholder: true, imageFilename: "sarvesh-p.jpg" }, { name: "Ajay", image: portrait2.url, imageIsPlaceholder: true, imageFilename: "ajay.jpg" },
  { name: "Nithish", image: portrait3.url, imageIsPlaceholder: true, imageFilename: "nithish.jpg" }, { name: "Dev", image: portrait4.url, imageIsPlaceholder: true, imageFilename: "dev.jpg" }, { name: "Elango", image: portrait5.url, imageIsPlaceholder: true, imageFilename: "elango.jpg", role: "Member" },
  { name: "Nithyasri", image: portrait6.url, imageIsPlaceholder: true, imageFilename: "nithyasri.jpg", role: "Member" }, { name: "Kamesh", image: portrait7.url, imageIsPlaceholder: true, imageFilename: "kamesh.jpg", role: "Member" },
  { name: "Raaj Nikitaa", image: portrait8.url, imageIsPlaceholder: true, imageFilename: "raaj-nikitaa.jpg", role: "Member" }, { name: "Kamali", image: portrait9.url, imageIsPlaceholder: true, imageFilename: "kamali.jpg", role: "Member" },
  { name: "Kavyashree", image: portrait10.url, imageIsPlaceholder: true, imageFilename: "kavyashree.jpg", role: "Member" }, { name: "Sridevi", image: portrait11.url, imageIsPlaceholder: true, imageFilename: "sridevi.jpg", role: "Member" },
  { name: "Srinivasan M", image: portrait12.url, imageIsPlaceholder: true, imageFilename: "srinivasan-m.jpg", role: "Member" }, { name: "Sudhish Vijai", image: portrait13.url, imageIsPlaceholder: true, imageFilename: "sudhish-vijai.jpg", role: "Member" },
];

export const tracks = [
  { title: "Artificial Intelligence & Machine Learning", short: "Intelligence, applied.", description: "Explore intelligent systems, meaningful data, and new ways to solve complex problems.", detail: "A proposed direction for ideas in machine learning, intelligent automation, and data-driven solutions. Official problem statements will be announced.", icon: "brain" },
  { title: "Web & App Development", short: "Build better experiences.", description: "Turn everyday challenges into thoughtful, useful digital experiences.", detail: "A proposed direction for web platforms, mobile experiences, and accessible digital tools. Official problem statements will be announced.", icon: "code" },
  { title: "Open Innovation", short: "No limits. Just possibilities.", description: "Bring a fresh perspective. Find your own problem and create something unexpected.", detail: "A proposed direction for original ideas across disciplines. Final track rules and problem statements will be announced.", icon: "spark" },
];

export const schedule = ["Registration & Check-in", "Opening Ceremony", "Theme Reveal", "Hacking Begins", "Mentoring & Progress Review", "Project Submission", "Final Presentations", "Results & Closing Ceremony"];

export const faqs = [
  ["Who can participate in SPARKS26?", "SPARKS26 is an internal hackathon at Sona College of Technology. Detailed eligibility requirements will be announced by the organizing team."],
  ["Is participation individual or team-based?", "The organizers will announce the participation format and team-size guidelines."],
  ["How do I register?", "Registration details and the official registration link will be announced soon."],
  ["What should participants bring?", "The organizing team will share the required equipment and preparation guidelines before the event."],
  ["What are the official hackathon tracks?", "Artificial Intelligence & Machine Learning, Web & App Development, and Open Innovation are proposed tracks. The final categories will be confirmed by the organizers."],
  ["Is there a registration fee?", "Registration fees, if any, will be announced by the organizing team."],
  ["Where will the event take place?", "SPARKS26 will take place at Sona College of Technology, Salem, Tamil Nadu. The specific venue within the campus will be announced."],
  ["Whom should I contact for assistance?", "Official contact details for the SPARKS26 organizing team will be announced soon."],
];