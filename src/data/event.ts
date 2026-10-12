import { event } from "@/config/event";
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
  { name: "Kanish S", image: portrait0.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "kanish-s.jpg" }, { name: "Sarvesh P", image: portrait1.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "sarvesh-p.jpg" }, { name: "Ajay", image: portrait2.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "ajay.jpg" },
  { name: "Nithish", image: portrait3.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "nithish.jpg" }, { name: "Dev", image: portrait4.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "dev.jpg" }, { name: "Elango", image: portrait5.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "elango.jpg" },
  { name: "Nithyasri", image: portrait6.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "nithyasri.jpg" }, { name: "Kamesh", image: portrait7.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "kamesh.jpg" },
  { name: "Raaj Nikitaa", image: portrait8.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "raaj-nikitaa.jpg" }, { name: "Kamali", image: portrait9.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "kamali.jpg" },
  { name: "Kavyashree", image: portrait10.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "kavyashree.jpg" }, { name: "Sridevi", image: portrait11.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "sridevi.jpg" },
  { name: "Srinivasan M", image: portrait12.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "srinivasan-m.jpg" }, { name: "Sudhish Vijai", image: portrait13.url, imageIsPlaceholder: true, role: "Organizer", imageFilename: "sudhish-vijai.jpg" },
];

export const tracks = [
  { title: "Basic – AI-Powered Website Development", short: "Track 1 · Basic", description: "Build a useful website through AI prompting, iteration, and thoughtful design.", detail: "Use AI-assisted prompting to create and refine a working website. Suggested submission: a live URL or locally runnable site, a short prompt log, and a demo. Official problem statements are pending.", icon: "code" },
  { title: "Advanced – Machine Learning, Generative AI, and Agentic AI", short: "Track 2 · Advanced", description: "Build intelligent solutions with machine learning, generative models, or AI agents.", detail: "Develop a working prototype using machine learning, generative AI, or agentic workflows. Suggested submission: runnable code, setup instructions, model or agent documentation, and a demo. Official problem statements are pending.", icon: "brain" },
];

// Suggested by request; these timings are not the confirmed event schedule.
export const schedule = [
  { title: "Registration & Check-in", time: "9:00 – 9:30 AM" },
  { title: "Opening Ceremony & Track Briefing", time: "9:30 – 10:00 AM" },
  { title: "Hacking Begins", time: "10:00 AM – 12:30 PM" },
  { title: "Lunch Break", time: "12:30 – 1:00 PM" },
  { title: "Build, Mentor & Refine", time: "1:00 – 3:30 PM" },
  { title: "Project Submission", time: "3:30 – 3:45 PM" },
  { title: "Final Presentations & Judging", time: "3:45 – 4:45 PM" },
  { title: "Results & Closing Ceremony", time: "4:45 – 5:00 PM" },
];

export const suggestedRules = [
  "Teams of 3–4 members choose one track and submit one project.",
  "Build the core project during the hackathon. Declare any pre-existing code, templates, datasets, or models.",
  "AI tools and open-source resources are allowed; disclose their use and respect licenses.",
  "Use only data you are authorized to access. Do not include private information, passwords, or API keys in submissions.",
  "Credit all sources, work respectfully, and do not copy another team's project.",
  "Bring a laptop, charger, and required software. Internet and lab equipment availability are to be confirmed.",
];
export const suggestedSubmission = [
  "Submit a repository or project archive with a README, setup instructions, team names, and selected track.",
  "Include a working demo or accessible website link; list AI tools, prompts, models, datasets, and external resources used.",
  "Prepare a suggested 3-minute presentation and 2-minute Q&A covering the problem, solution, implementation, and limitations.",
  "The official submission channel and final deadline will be announced by the organizers.",
];
export const suggestedJudging = [
  { criterion: "Problem relevance & impact", weight: 25 },
  { criterion: "Working implementation", weight: 30 },
  { criterion: "Creativity & originality", weight: 20 },
  { criterion: "Track-specific execution", weight: 15 },
  { criterion: "Presentation & documentation", weight: 10 },
];

export const faqs = [
  ["Who can participate in SPARKS26?", `Students from all years at ${event.institution} are eligible.`],
  ["Is participation individual or team-based?", `Participation is team-based: ${event.teamSize}.`],
  ["How do I register?", "The registration link, status, and deadline are still to be announced."],
  ["What should participants bring?", "Suggested: a laptop, charger, and required software. Final equipment and internet arrangements are pending organizer approval."],
  ["What are the official hackathon tracks?", "Track 1: Basic – AI-Powered Website Development (prompting). Track 2: Advanced – Machine Learning, Generative AI, and Agentic AI. Problem statements are to be announced."],
  ["Is there a registration fee?", "No. Participation in SPARKS26 is free."],
  ["Where will the event take place?", `${event.room}, ${event.institution}, Salem, Tamil Nadu.`],
  ["What time does the event start?", "Suggested event hours are 9:00 AM – 5:00 PM IST on October 15, 2026. These timings are awaiting organizer approval."],
  ["Whom should I contact for assistance?", `Contact the organizing team at ${event.email}.`],
];
