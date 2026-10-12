import logoPlaceholder from "@/assets/placeholders/logo.png.asset.json";
import siteLogo from "@/assets/official/logo.png.asset.json";
import studioLogo from "@/assets/official/aj-logo.png.asset.json";
import introVideo from "@/assets/official/intro.mp4.asset.json";

export const event = {
  name: "AuraGen 2026",
  shortName: "AuraGen",
  department: "Department of Artificial Intelligence and Machine Learning",
  date: "2026-10-15",
  dateLabel: "Thursday, October 15, 2026",
  institution: "Sona College of Technology",
  location: "Salem, Tamil Nadu, India",
  room: "Shivva Ayyandurai Lab",
  eligibility: "All-year students (1st, 2nd, 3rd & 4th year)",
  teamSize: "3–4 members per team",
  fee: "Free",
  suggestedHours: "9:00 AM – 5:00 PM IST",
  suggestedStartDateTime: "2026-10-15T09:00:00+05:30",
  suggestedEndDateTime: "2026-10-15T17:00:00+05:30",
  startDateTime: "2026-10-15T09:00:00+05:30" as string | null,
  endDateTime: "2026-10-15T17:00:00+05:30" as string | null,
  registrationStatus: "Open" as "Coming Soon" | "Open" | "Closed",
  registrationUrl: "https://events.ajstudioz.co.in/register/auragen-mafqr0",
  introVideoPath: "/Intro.mp4",
  logoUrl: "/logo.png" as string | null,
  studioLogoUrl: "/aj-logo.png",
  logoFilename: "logo.png",
  logoPlaceholderUrl: "/logo.png",
  videoPosterUrl: null as string | null,
  email: "auragenofficial@gmail.com" as string | null,
  phone: null as string | null,
  studioUrl: "https://ajstudiozz.vercel.app",
};

export function countdownValues(now: number, startDateTime: string | null = event.startDateTime) {
  // Midnight is only the calendar-date boundary, not an assumed event start time.
  const target = new Date(startDateTime ?? `${event.date}T00:00:00+05:30`).getTime();
  const seconds = Math.max(0, Math.floor((target - now) / 1000));
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor(seconds / 3600) % 24,
    minutes: Math.floor(seconds / 60) % 60,
    seconds: seconds % 60,
    reached: seconds === 0,
  };
}
