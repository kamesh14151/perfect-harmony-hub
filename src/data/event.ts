export interface Organizer {
  name: string;
  role?: string;
  image?: string;
  department?: string;
  biography?: string;
  linkedin?: string;
  email?: string;
  category?: string;
}

export const organizers: Organizer[] = [
  { name: "Kanish S" }, { name: "Sarvesh P" }, { name: "Ajay" },
  { name: "Nithish" }, { name: "Dev" }, { name: "Elango", role: "Member" },
  { name: "Nithyasri", role: "Member" }, { name: "Kamesh", role: "Member" },
  { name: "Raaj Nikitaa", role: "Member" }, { name: "Kamali", role: "Member" },
  { name: "Kavyashree", role: "Member" }, { name: "Sridevi", role: "Member" },
  { name: "Srinivasan M", role: "Member" }, { name: "Sudhish Vijai", role: "Member" },
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