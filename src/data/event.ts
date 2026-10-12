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
  instagram?: string;
  twitter?: string;
  threads?: string;
  email?: string;
  category?: string;
}

export const organizers: Organizer[] = [
  {
    name: "Kanish S",
    image: portrait0.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "kanish-s.jpg",
  },
  {
    name: "Sarvesh P",
    image: "/organizers/Sarvesh.png",
    imageIsPlaceholder: false,
    role: "Organizer",
    imageFilename: "Sarvesh.png",
    department: "Department of AI & ML",
  },
  {
    name: "Ajay",
    image: portrait2.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "ajay.jpg",
  },
  {
    name: "Nithish",
    image: portrait3.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "nithish.jpg",
  },
  {
    name: "Dev",
    image: portrait4.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "dev.jpg",
  },
  {
    name: "Elango",
    image: portrait5.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "elango.jpg",
  },
  {
    name: "Nithyasri",
    image: "/organizers/Nithyasri.jpg",
    imageIsPlaceholder: false,
    role: "Organizer",
    imageFilename: "Nithyasri.jpg",
    department: "Department of AI & ML",
  },
  {
    name: "Kamesh R",
    image: "/organizers/Kamez.png",
    imageIsPlaceholder: false,
    role: "Organizer",
    imageFilename: "Kamez.png",
    department: "Department of AI & ML",
    linkedin: "https://www.linkedin.com/in/kamesh-ravichandran-9723b6326?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/ajkamez_offl?cplk=Z25rcnExMnVmeDk5",
    twitter: "https://x.com/Kamesh14151",
    threads: "https://www.threads.net/@ajkamez_offl",
  },
  {
    name: "Raaj Nikitaa",
    image: portrait8.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "raaj-nikitaa.jpg",
  },
  {
    name: "Kamali",
    image: portrait9.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "kamali.jpg",
  },
  {
    name: "Kavyashree",
    image: portrait10.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "kavyashree.jpg",
  },
  {
    name: "Sridevi",
    image: "/organizers/Sridevi.png",
    imageIsPlaceholder: false,
    role: "Organizer",
    imageFilename: "Sridevi.png",
    department: "Department of AI & ML",
  },
  {
    name: "Srinivasan M",
    image: portrait12.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "srinivasan-m.jpg",
  },
  {
    name: "Sudhish Vijai",
    image: portrait13.url,
    imageIsPlaceholder: true,
    role: "Organizer",
    imageFilename: "sudhish-vijai.jpg",
  },
];

export const tracks = [
  {
    title: "Basic – AI-Powered Website Development (Prompting)",
    short: "Track 1 · Basic",
    description:
      "Build an interactive, responsive website through AI prompting, iterative design, and web technologies.",
    detail:
      "Harness AI-assisted prompting (ChatGPT, Claude, v0, etc.) to design and implement a modern, functional website. Submission requirements: working URL or local site code, prompt logs/documentation of the prompt engineering process, and a 3-minute demo video.",
    icon: "code",
  },
  {
    title: "Advanced – Machine Learning, Generative AI, and Agentic AI",
    short: "Track 2 · Advanced",
    description:
      "Build intelligent systems leveraging machine learning models, generative AI pipelines, or autonomous agents.",
    detail:
      "Develop an end-to-end prototype using machine learning, generative models, or autonomous agent workflows (tool calling, multi-agent coordination, RAG). Submission requirements: GitHub repository, setup instructions, architecture documentation, and a live demonstration.",
    icon: "brain",
  },
];

export const schedule = [
  { title: "Registration & Team Check-in", time: "9:00 – 9:30 AM" },
  { title: "Opening Ceremony & Track Briefing", time: "9:30 – 10:00 AM" },
  { title: "Hacking Sprint Begins", time: "10:00 AM – 12:30 PM" },
  { title: "Lunch Break & Networking", time: "12:30 – 1:00 PM" },
  { title: "Sprint Phase 2: Build & Mentor Review", time: "1:00 – 3:30 PM" },
  { title: "Project Submission Cutoff", time: "3:30 – 3:45 PM" },
  { title: "Live Demonstrations & Judging Panel", time: "3:45 – 4:45 PM" },
  { title: "Winner Announcement & Closing Ceremony", time: "4:45 – 5:00 PM" },
];

export const suggestedRules = [
  "Team Size: 3 to 4 members per team. Inter-departmental and mixed-year collaborations are encouraged.",
  "Track Selection: Each team must choose either Track 1 (Basic) or Track 2 (Advanced) and submit one original project.",
  "Original Development: All core project code must be developed during the hackathon hours. Pre-existing starter templates, libraries, or datasets must be clearly declared.",
  "AI Tool Attribution: AI tools, LLMs, and prompt-assisted coding are permitted; teams must transparently document key prompts and AI tool usage.",
  "Free Participation: Registration is completely free (₹0 fees). No entry or participation charges.",
  "Hardware & Setup: Participants must bring their own laptops, chargers, adapters, and necessary software tools.",
  "Ethics & Data Privacy: Use authorized data and public APIs only. Storing private credentials, personal data, or API keys in public repositories is strictly prohibited.",
  "Fair Play: Plagiarism or submitting work that is not the team's own will result in immediate disqualification.",
  "Deadlines: Submissions must be delivered before the 3:30 PM cutoff. Late submissions cannot be judged.",
];

export const suggestedSubmission = [
  "GitHub Repository Link: Public repo containing clean source code, setup instructions, README, and list of team members.",
  "Live Demo / Runnable URL: Working deployed website or clear instructions to run locally for live evaluation.",
  "Track 1 Deliverable: Prompt engineering log showing prompt iterations, model feedback, and creative design process.",
  "Track 2 Deliverable: Architecture diagram, model/agent descriptions, dataset details, and API integrations.",
  "Project Presentation: 3-minute pitch followed by 2 minutes of Q&A with the judges covering problem, solution, implementation, and future scope.",
];

export const suggestedJudging = [
  { criterion: "Working implementation & technical execution", weight: 30 },
  { criterion: "Problem relevance & real-world impact", weight: 25 },
  { criterion: "Creativity & originality", weight: 20 },
  { criterion: "Track-specific execution & best practices", weight: 15 },
  { criterion: "UI/UX design, documentation & presentation", weight: 10 },
];

export const faqs = [
  [
    "Who is eligible to participate in AuraGen 2026?",
    `All-year students (1st, 2nd, 3rd, and 4th year across all departments) of ${event.institution} are eligible to participate.`,
  ],
  [
    "What is the team size requirement?",
    `Teams must consist of ${event.teamSize}. All team members must be enrolled students.`,
  ],
  [
    "What are the confirmed tracks?",
    "Track 1: Basic – AI-Powered Website Development (prompting). Track 2: Advanced – Machine Learning, Generative AI, and Agentic AI.",
  ],
  ["Is there any registration fee?", "No! Participation in AuraGen 2026 is 100% free (₹0)."],
  ["Where is the venue?", `${event.room}, ${event.institution}, Salem, Tamil Nadu.`],
  [
    "What are the event timings?",
    `${event.dateLabel}, 9:00 AM – 5:00 PM IST (8-hour hackathon sprint).`,
  ],
  [
    "How do teams register?",
    `Registration is open! Click 'Register Now' or email your team details to ${event.email}.`,
  ],
  [
    "What should participants bring to the venue?",
    "Bring your laptop, chargers, extension cords, college ID card, and any software development tools required.",
  ],
  [
    "Who is organizing and supporting AuraGen 2026?",
    `Organized by the Department of Artificial Intelligence and Machine Learning along with student organizers at Sona College of Technology. For queries, email ${event.email}.`,
  ],
];
