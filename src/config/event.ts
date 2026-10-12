import logoPlaceholder from "@/assets/placeholders/logo.png.asset.json";
import siteLogo from "@/assets/official/logo.png.asset.json";
import studioLogo from "@/assets/official/aj-logo.png.asset.json";
import introVideo from "@/assets/official/intro.mp4.asset.json";

export const event = {
  name: "SPARKS26",
  date: "2026-10-15",
  dateLabel: "Thursday, October 15, 2026",
  institution: "Sona College of Technology",
  location: "Salem, Tamil Nadu, India",
  room: "Shivva Ayyandurai Lab",
  eligibility: "All-year students of Sona College of Technology",
  teamSize: "3–4 members per team",
  fee: "Free",
  suggestedHours: "9:00 AM – 5:00 PM IST",
  suggestedStartDateTime: "2026-10-15T09:00:00+05:30",
  suggestedEndDateTime: "2026-10-15T17:00:00+05:30",
  // Include the timezone offset when the official start time is confirmed.
  startDateTime: null as string | null,
  registrationStatus: "Coming Soon" as "Coming Soon" | "Open" | "Closed",
  registrationUrl: null as string | null,
  introVideoPath: introVideo.url,
  logoUrl: siteLogo.url as string | null,
  studioLogoUrl: studioLogo.url,
  logoFilename: "logo.png",
  logoPlaceholderUrl: logoPlaceholder.url,
  videoPosterUrl: null as string | null,
  email: "auragenofficial@gmail.com" as string | null,
  phone: null as string | null,
  studioUrl: "https://ajstusioz.co.in" as string | null,
};

export function countdownValues(now: number, startDateTime: string | null = event.startDateTime) {
  // Midnight is only the calendar-date boundary, not an assumed event start time.
  const target = new Date(startDateTime ?? `${event.date}T00:00:00+05:30`).getTime();
  const seconds = Math.max(0, Math.floor((target - now) / 1000));
  return { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60, reached: seconds === 0 };
}