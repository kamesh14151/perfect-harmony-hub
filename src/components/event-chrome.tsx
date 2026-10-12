import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Mail, Menu, Moon, Search, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { event } from "@/config/event";

export const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Tracks", to: "/tracks" },
  { name: "Schedule", to: "/schedule" },
  { name: "Organizers", to: "/organizers" },
  { name: "FAQ", to: "/faq" },
] as const;

export function Brand({
  large = false,
  inverse = false,
}: {
  large?: boolean;
  scrolled?: boolean;
  inverse?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const logoSrc = event.logoUrl ?? "/logo.png";

  if (large) {
    return (
      <div className="film-brand-lockup flex flex-col items-center gap-3">
        {!failed && (
          <img
            className="film-logo hover:scale-105 transition-transform duration-300 w-24 h-24 object-contain"
            src={logoSrc}
            alt="AuraGen 2026"
            onError={() => setFailed(true)}
          />
        )}
        <span className="film-title text-3xl font-extrabold tracking-tight text-white">
          Aura<span className="text-[#bf472c]">Gen '26</span>
        </span>
      </div>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5 group">
      {!failed && (
        <span className="brand-logo-frame relative flex items-center justify-center p-1 rounded-xl bg-[#bf472c]/10 border border-[#bf472c]/20 shadow-xs transition-all duration-300 group-hover:scale-105">
          <img
            className="brand-image rounded-lg w-7 h-7 sm:w-8 sm:h-8 object-contain"
            src={logoSrc}
            alt="AuraGen"
            onError={() => setFailed(true)}
          />
        </span>
      )}
      <span
        className={`font-sans font-extrabold text-2xl tracking-tight transition-colors ${
          inverse ? "text-white" : "text-[#2c1d18] dark:text-white"
        }`}
      >
        Aura<span className="text-[#bf472c]">Gen '26</span>
      </span>
    </span>
  );
}

export function RegistrationDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [track, setTrack] = useState("Track 1: Basic – AI-Powered Website Development (Prompting)");
  const [leaderName, setLeaderName] = useState("");
  const [leaderYear, setLeaderYear] = useState("1st Year");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  const [member4, setMember4] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoBody = encodeURIComponent(
    `Team Registration for AuraGen 2026:\n\n` +
      `Team Name: ${teamName}\n` +
      `Selected Track: ${track}\n` +
      `Team Leader: ${leaderName} (${leaderYear}) - ${leaderEmail}\n` +
      `Member 2: ${member2}\n` +
      `Member 3: ${member3}\n` +
      `Member 4 (optional): ${member4 || "N/A"}\n\n` +
      `Department: Department of AI & ML\n` +
      `Venue: ${event.room}\n` +
      `Date: ${event.dateLabel} (9:00 AM – 5:00 PM IST)\n` +
      `Entry Fee: Free`,
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setSubmitted(false);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Registration Open · Free Entry
            </span>
            <span className="text-xs text-muted-foreground">{event.room}</span>
          </div>
          <DialogTitle className="text-2xl font-bold">
            Register Your Team · AuraGen 2026
          </DialogTitle>
          <DialogDescription className="text-xs">
            Organized by the Department of AI &amp; ML, Sona College of Technology. Eligible for
            all-year students (teams of 3–4 members).
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-lg font-semibold">Registration Recorded!</h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Your team <strong>{teamName || "Innovation Team"}</strong> has been submitted for{" "}
              <strong>{track}</strong>. We look forward to seeing you at {event.room} on{" "}
              {event.dateLabel}.
            </p>
            <div className="pt-2 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button asChild size="sm" variant="default">
                <a
                  href={`mailto:${event.email}?subject=${encodeURIComponent(`AuraGen 2026 Registration - ${teamName}`)}&body=${mailtoBody}`}
                >
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  Email Copy to Organizers
                </a>
              </Button>
              <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="teamName" className="text-xs font-medium">
                Team Name *
              </Label>
              <Input
                id="teamName"
                placeholder="e.g. Neural Sparks"
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="track" className="text-xs font-medium">
                Choose Track *
              </Label>
              <select
                id="track"
                className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-xs shadow-xs focus-visible:outline-2 focus-visible:outline-ring"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
              >
                <option value="Track 1: Basic – AI-Powered Website Development (Prompting)">
                  Track 1: Basic – AI-Powered Website Development (Prompting)
                </option>
                <option value="Track 2: Advanced – Machine Learning, Generative AI, and Agentic AI">
                  Track 2: Advanced – Machine Learning, Generative AI, and Agentic AI
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="leaderName" className="text-xs font-medium">
                  Team Leader Name *
                </Label>
                <Input
                  id="leaderName"
                  placeholder="Full name"
                  required
                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="leaderYear" className="text-xs font-medium">
                  Year of Study *
                </Label>
                <select
                  id="leaderYear"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-xs shadow-xs focus-visible:outline-2 focus-visible:outline-ring"
                  value={leaderYear}
                  onChange={(e) => setLeaderYear(e.target.value)}
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="leaderEmail" className="text-xs font-medium">
                Team Leader Email *
              </Label>
              <Input
                id="leaderEmail"
                type="email"
                placeholder="leader@sonatech.ac.in"
                required
                value={leaderEmail}
                onChange={(e) => setLeaderEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1.5 pt-1">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Teammates (3–4 Members Total)
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Input
                  placeholder="Member 2 Name *"
                  required
                  value={member2}
                  onChange={(e) => setMember2(e.target.value)}
                />
                <Input
                  placeholder="Member 3 Name *"
                  required
                  value={member3}
                  onChange={(e) => setMember3(e.target.value)}
                />
              </div>
              <div className="pt-1">
                <Input
                  placeholder="Member 4 Name (Optional)"
                  value={member4}
                  onChange={(e) => setMember4(e.target.value)}
                />
              </div>
            </div>

            <div className="rounded-lg bg-muted/60 p-3 text-[11px] text-muted-foreground space-y-1 border border-border/70">
              <p>
                📍 <strong>Venue:</strong> {event.room}, Sona College of Technology
              </p>
              <p>
                ⏰ <strong>Time:</strong> {event.dateLabel} (9:00 AM – 5:00 PM IST)
              </p>
              <p>
                💰 <strong>Fee:</strong> {event.fee} · Contact: {event.email}
              </p>
            </div>

            <Button type="submit" className="w-full font-semibold">
              Complete Free Registration <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function RegistrationButton({
  inverse = false,
  className = "",
}: {
  inverse?: boolean;
  className?: string;
}) {
  const open = event.registrationStatus === "Open";
  const label = open
    ? "Register Now"
    : event.registrationStatus === "Closed"
      ? "Registration Closed"
      : "Coming Soon";

  if (open) {
    return (
      <Button asChild size="lg" variant={inverse ? "inverse" : "default"} className={className}>
        <a
          href={event.registrationUrl ?? "https://events.ajstudioz.co.in/register/auragen-mafqr0"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
          <ArrowUpRight />
        </a>
      </Button>
    );
  }

  return (
    <Button size="lg" variant={inverse ? "inverse" : "default"} className={className} disabled>
      {label}
      <ArrowUpRight />
    </Button>
  );
}

export function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("auragen-theme", next ? "dark" : "light");
      localStorage.setItem("sparks26-theme", next ? "dark" : "light");
    } catch {
      /* Preference remains available for this visit. */
    }
  };

  return (
    <>
      {/* Main Navbar with clean, consistent luxury styling */}
      <header className="site-nav">
        <div className="shell nav-inner">
          <div className="flex items-center gap-3.5">
            <Link to="/" aria-label="AuraGen 2026 home" className="flex items-center gap-2">
              <Brand />
            </Link>
          </div>

          <nav className="nav-links hidden md:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                className="nav-function-link text-[#2c1d18] hover:text-[#bf472c] dark:text-[#f4efe6] dark:hover:text-[#bf472c]"
                to={item.to}
                activeProps={{
                  className: "nav-function-link font-semibold !text-[#bf472c] dark:!text-[#bf472c]",
                }}
                activeOptions={{ exact: true }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="nav-actions flex items-center gap-3 sm:gap-4">
            <a
              href={event.registrationUrl ?? "https://events.ajstudioz.co.in/register/auragen-mafqr0"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer hover:scale-102 active:scale-98 bg-[#bf472c] text-white hover:bg-[#a83d24] hover:shadow-md inline-flex items-center gap-1.5"
            >
              <span>Register Now</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-1.5 rounded-full transition-colors cursor-pointer text-[#2c1d18] hover:text-[#bf472c] dark:text-[#f4efe6]"
            >
              <Search size={18} />
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              title={dark ? "Light theme" : "Dark theme"}
              className="rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-[#2c1d18] dark:text-[#f4efe6] transition-colors"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <button
              type="button"
              className="md:hidden p-1.5 transition-colors cursor-pointer text-[#2c1d18] dark:text-[#f4efe6]"
              onClick={() => setMenu(!menu)}
              aria-label={menu ? "Close navigation" : "Open navigation"}
            >
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menu && (
          <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.to} className="nav-link" to={item.to} onClick={() => setMenu(false)}>
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={event.registrationUrl ?? "https://events.ajstudioz.co.in/register/auragen-mafqr0"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full text-xs font-semibold bg-[#bf472c] text-white hover:bg-[#a83d24] cursor-pointer text-center flex items-center justify-center gap-1.5"
                onClick={() => setMenu(false)}
              >
                <span>Register Now</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Quick Search Modal */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-serif">Search AuraGen 2026</DialogTitle>
            <DialogDescription className="text-xs">
              Search hackathon tracks, schedule, rules, guidelines, FAQs, or organizers.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tracks, timeline, rules, or questions..."
                className="pl-9 text-xs"
                autoFocus
              />
            </div>
            <div className="text-xs space-y-1.5 text-muted-foreground">
              <p className="font-semibold text-foreground text-[11px] uppercase tracking-wider">
                Quick Navigation
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <Link
                  to="/tracks"
                  onClick={() => setSearchOpen(false)}
                  className="px-2.5 py-1 rounded-full bg-muted hover:bg-muted/80 text-[11px]"
                >
                  Tracks &amp; Themes
                </Link>
                <Link
                  to="/schedule"
                  onClick={() => setSearchOpen(false)}
                  className="px-2.5 py-1 rounded-full bg-muted hover:bg-muted/80 text-[11px]"
                >
                  Schedule &amp; Milestones
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setSearchOpen(false)}
                  className="px-2.5 py-1 rounded-full bg-muted hover:bg-muted/80 text-[11px]"
                >
                  FAQs &amp; Rules
                </Link>
                <Link
                  to="/organizers"
                  onClick={() => setSearchOpen(false)}
                  className="px-2.5 py-1 rounded-full bg-muted hover:bg-muted/80 text-[11px]"
                >
                  Organizers
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link to="/" aria-label="AuraGen 2026 home">
              <Brand inverse />
            </Link>
            <p className="footer-description">
              Next-Gen AI Hackathon · Department of AI &amp; ML
              <br />
              {event.room} · Sona College of Technology, Salem.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navigation.slice(1).map((item) => (
              <Link key={item.to} to={item.to}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AuraGen. All rights reserved. · Sona College of Technology</span>
          <div className="relative group/studio inline-block">
            <a
              href="https://ajstudiozz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-credit inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors cursor-pointer py-1 px-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-border/60"
              title="Visit AJ Studioz (https://ajstudiozz.vercel.app)"
            >
              <span>Dev BY</span>
              <img
                src="/aj-logo.png"
                alt="AJ Studioz"
                className="w-5 h-5 rounded-full object-contain ring-1 ring-border group-hover/studio:ring-[#bf472c] transition-all group-hover/studio:scale-110"
              />
            </a>

            {/* Hover Prompt to Redirect */}
            <div className="pointer-events-none group-hover/studio:pointer-events-auto absolute bottom-full right-0 mb-2 w-64 rounded-2xl bg-card border border-border/90 shadow-2xl backdrop-blur-xl p-3 text-left opacity-0 translate-y-2 group-hover/studio:opacity-100 group-hover/studio:translate-y-0 transition-all duration-200 z-50">
              <div className="flex items-center gap-2 mb-1.5">
                <img src="/aj-logo.png" alt="AJ Studioz" className="w-5 h-5 rounded-full object-contain ring-1 ring-border" />
                <div>
                  <div className="text-xs font-bold text-foreground">AJ Studioz</div>
                  <div className="text-[10px] text-muted-foreground">Developer Portfolio</div>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 ml-auto">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug mb-2.5">
                Visit <span className="text-[#bf472c] font-medium underline underline-offset-2">ajstudiozz.vercel.app</span>? Click below to redirect.
              </p>
              <a
                href="https://ajstudiozz.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg text-xs font-semibold bg-[#bf472c] text-white hover:bg-[#a83d24] transition-all shadow-xs cursor-pointer"
              >
                <span>Redirect to Site</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
