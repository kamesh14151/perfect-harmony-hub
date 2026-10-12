import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { OrganizerCard } from "./organizer-card";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  ChevronDown,
  Code2,
  Dumbbell,
  Lightbulb,
  MapPin,
  Pause,
  Pill,
  Play,
  Sparkles,
  Users,
  Utensils,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { event, countdownValues } from "@/config/event";
import {
  faqs,
  organizers,
  schedule,
  tracks,
  suggestedRules,
  suggestedSubmission,
  suggestedJudging,
} from "@/data/event";
import { Brand, RegistrationButton, RegistrationDialog } from "./event-chrome";

export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="eyebrow">
      {number ? (
        <span className="section-number">{number} /</span>
      ) : (
        <span className="eyebrow-dot" />
      )}
      {children}
    </div>
  );
}
export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-end overflow-hidden bg-black text-white"
      aria-label="AuraGen 2026 Video Hero"
    >
      {/* Full-bleed Background Video */}
      <video
        ref={videoRef}
        src={event.introVideoPath ?? "/Intro.mp4"}
        poster={event.videoPosterUrl ?? undefined}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-101"
      />

      {/* Subtle Ambient Vignette & Bottom Dissolve */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/35 pointer-events-none" />

      {/* Hero Foreground Content */}
      <div className="shell relative z-10 w-full pb-14 md:pb-20 pt-20 md:pt-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          {/* Left Column: Frosted Pill, Serif Italic Title, Subtitle, Ivory Button */}
          <div className="max-w-2xl">
            {/* Frosted Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-white/95 bg-black/45 backdrop-blur-md border border-white/20 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#bf472c] animate-pulse" />
              <span>Department of AI &amp; ML · Free Entry</span>
            </div>

            {/* Serif Italic Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic font-normal text-white tracking-tight leading-[1.08] mb-4">
              Where bold ideas ignite.
            </h1>

            {/* Body Description */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 font-sans">
              AuraGen 2026 brings student innovators together for an intensive 8-hour sprint. Build
              AI-powered web applications, generative agents, and machine learning prototypes at
              Shivva Ayyandurai Lab.
              <br className="hidden sm:inline" />
              <span className="text-[#e8a391] font-medium"> Thursday, October 15, 2026</span> · Sona
              College of Technology, Salem.
            </p>

            {/* Ivory Pill Button */}
            <RegistrationDialog>
              <button
                type="button"
                className="px-8 py-3.5 rounded-full text-sm font-semibold bg-[#f7f3ec] text-[#2c1d18] hover:bg-white hover:scale-102 active:scale-98 transition-all shadow-xl cursor-pointer"
              >
                Register Now
              </button>
            </RegistrationDialog>
          </div>

          {/* Right Column: 3 Stats Columns & Circular Play/Pause Button */}
          <div className="flex items-end justify-between lg:justify-end gap-6 md:gap-10">
            <div className="flex items-center gap-5 sm:gap-8">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  8-Hour Sprint
                </div>
                <div className="text-xs text-white/70 mt-1">Intensive Building</div>
              </div>

              <div className="w-px h-10 bg-white/25 self-center" />

              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  2 AI Tracks
                </div>
                <div className="text-xs text-white/70 mt-1">Web Dev &amp; Agentic AI</div>
              </div>

              <div className="w-px h-10 bg-white/25 self-center" />

              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Free Entry
                </div>
                <div className="text-xs text-white/70 mt-1">Teams of 3–4 Members</div>
              </div>
            </div>

            {/* Circular Video Pause/Play Button */}
            <button
              type="button"
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 shrink-0"
              title={isPlaying ? "Pause video" : "Play video"}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const IntroVideo = VideoHero;

export function Countdown() {
  const [values, setValues] = useState<ReturnType<typeof countdownValues> | null>(null);
  useEffect(() => {
    const update = () => setValues(countdownValues(Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  const note = values?.reached
    ? "The countdown is complete! The hackathon is underway."
    : `Until October 15, 2026 · ${event.suggestedHours} at ${event.room}`;
  return (
    <div aria-label="Event countdown" className="space-y-4">
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg">
        {(["days", "hours", "minutes", "seconds"] as const).map((label) => (
          <div
            className="rounded-2xl bg-white/80 dark:bg-black/40 border border-[#ded5c7] dark:border-white/10 p-3 sm:p-4 text-center backdrop-blur-md shadow-xs hover:border-[#bf472c]/50 transition-colors"
            key={label}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono text-[#2c1d18] dark:text-white">
              {values ? String(values[label]).padStart(2, "0") : "—"}
            </div>
            <div className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#bf472c] mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#786c5e] dark:text-[#a09485] font-medium">{note}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="vision"
      className="relative z-10 bg-background text-foreground border-t border-border/80 pt-16 md:pt-20 pb-20 transition-colors"
      aria-label="AuraGen 2026 Overview"
    >
      <div className="shell">
        {/* Ultra-Premium Glassmorphic Briefing & Countdown Hero Card */}
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] p-8 sm:p-12 md:p-16 border border-border/80 shadow-2xl">
          {/* Sona College of Technology Campus Photographic Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/IMG_dbbd97c0-dd87-4ff2-b952-92fff78f57aa.jpg"
              alt="Sona College of Technology Campus"
              className="w-full h-full object-cover object-center filter contrast-[1.05]"
            />
            {/* Elegant frosted overlay for pristine readability in both light & dark modes */}
            <div className="absolute inset-0 bg-white/88 dark:bg-[#0c0e12]/88 backdrop-blur-[4px] transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/84 to-white/78 dark:from-[#0c0e12]/92 dark:via-[#0c0e12]/85 dark:to-[#0c0e12]/80" />
          </div>

          {/* Subtle Ambient Accent Glows */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#bf472c]/15 blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Institutional Credibility & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#bf472c]/10 text-[#bf472c] border border-[#bf472c]/20 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#bf472c] animate-pulse" />
                SONA COLLEGE OF TECHNOLOGY
              </div>

              <div>
                <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  DEPARTMENT OF AI &amp; ML
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-foreground mt-2 leading-tight">
                  Next-Gen AI Hackathon
                </h3>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                AuraGen 2026 brings student innovators together for an intensive 8-hour sprint.
                Build AI-powered web applications, generative agents, and machine learning
                prototypes at Shivva Ayyandurai Lab.
              </p>

              {/* Event Chips */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted/80 border border-border text-xs font-medium text-foreground">
                  <Users size={13} className="text-[#bf472c]" />
                  3–4 Members Per Team
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#bf472c]/10 text-[#bf472c] border border-[#bf472c]/20 text-xs font-bold">
                  100% Free Entry
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted/80 border border-border text-xs font-medium text-foreground">
                  All Year Students
                </span>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <RegistrationDialog>
                  <button
                    type="button"
                    className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#bf472c] hover:bg-[#a83d24] transition-all shadow-md hover:scale-102 active:scale-98 cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Register Your Team</span>
                    <ArrowUpRight size={15} />
                  </button>
                </RegistrationDialog>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full !text-xs font-semibold"
                  asChild
                >
                  <Link to="/tracks">
                    Explore Tracks
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Display Title, Meta, and Luxury Countdown */}
            <div className="lg:col-span-7 space-y-7">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-foreground tracking-tight leading-[1.12]">
                Where Bold Ideas{" "}
                <span className="italic text-[#bf472c]">Ignite Intelligence.</span>
              </h2>

              {/* Fast Facts Grid */}
              <div className="event-meta flex flex-wrap gap-3 text-xs font-medium">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 text-foreground shadow-xs">
                  <CalendarDays size={14} className="text-[#bf472c]" />
                  Thursday, October 15, 2026 · {event.suggestedHours}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 text-foreground shadow-xs">
                  <MapPin size={14} className="text-[#bf472c]" />
                  {event.room} · Salem
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 text-foreground shadow-xs">
                  <Users size={14} className="text-[#bf472c]" />
                  {event.teamSize} · Free Entry
                </span>
              </div>

              {/* Luxury Countdown Container */}
              <div className="rounded-3xl bg-muted/40 dark:bg-black/30 border border-border/80 p-6 sm:p-8 backdrop-blur-md shadow-xs">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4 font-bold flex items-center justify-between">
                  <span>Hackathon Launch Countdown</span>
                  <span className="text-[#bf472c]">Live Clock</span>
                </div>
                <Countdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function About() {
  const features = [
    {
      title: "Think boldly",
      icon: Lightbulb,
      copy: "Explore complex challenges from new perspectives and pioneer unconventional AI-driven solutions.",
    },
    {
      title: "Build together",
      icon: Users,
      copy: "Collaborate with peers across batches, exchange domain knowledge, and turn ideas into tangible code.",
    },
    {
      title: "Create impact",
      icon: Sparkles,
      copy: "Develop working systems that demonstrate technical excellence, creativity, and real-world value.",
    },
  ];
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <Eyebrow number="01">THE SPIRIT OF AURAGEN</Eyebrow>
            <h1>
              Where ideas find their <em>aura.</em>
            </h1>
            <p className="section-description">
              An elite internal hackathon organized by the Department of Artificial Intelligence and
              Machine Learning at Sona College of Technology, empowering students to innovate, code,
              and ship prototypes in a high-energy collaborative environment.
            </p>
          </div>
        </div>
        <dl className="event-facts">
          <div>
            <dt>Eligibility</dt>
            <dd>{event.eligibility}</dd>
          </div>
          <div>
            <dt>Team size</dt>
            <dd>{event.teamSize}</dd>
          </div>
          <div>
            <dt>Participation Fee</dt>
            <dd>{event.fee}</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>{event.room}</dd>
          </div>
        </dl>
        <div className="feature-grid">
          {features.map((feature, i) => (
            <article key={feature.title} className={`feature-card ${i === 1 ? "selected" : ""}`}>
              <feature.icon className="feature-icon" strokeWidth={1.3} />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
        <EventGuidelines />
      </div>
    </section>
  );
}
export function Tracks() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const icons = [Code2, BrainCircuit];
  return (
    <section id="tracks" className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <Eyebrow number="02">FIND YOUR DIRECTION</Eyebrow>
            <h1>
              Choose a problem
              <br />
              worth <em>solving.</em>
            </h1>
          </div>
          <span className="section-status">2 Confirmed Tracks · 3–4 Members Per Team</span>
        </div>
        <div className="track-grid">
          {tracks.map((track, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <article className="track-card" key={track.title}>
                <div className="track-top">
                  <Icon size={25} strokeWidth={1.2} />
                  <span className="track-index">0{i + 1}</span>
                </div>
                <p className="track-level">{track.short}</p>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <Button
                  variant="link"
                  className="!h-auto !p-0 !text-xs"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                  aria-controls={`track-${i}`}
                >
                  {expanded === i ? "Close Track" : "Explore Track"}
                  <ArrowRight />
                </Button>
                {expanded === i && (
                  <div className="track-detail" id={`track-${i}`}>
                    {track.detail}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function Schedule() {
  return (
    <section id="schedule" className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <Eyebrow number="03">THE DAY AHEAD</Eyebrow>
            <h1>
              From first prompt to <em>final demo.</em>
            </h1>
          </div>
          <span className="section-status">Confirmed schedule · {event.room}</span>
        </div>
        <div className="schedule-banner">
          <div className="schedule-date">
            <CalendarDays size={18} />
            {event.dateLabel}
          </div>
          <p className="text-xs text-muted-foreground">
            {event.suggestedHours} · 8-Hour Hackathon Sprint at {event.room}
          </p>
        </div>
        <div className="schedule-grid">
          {schedule.map((stage, i) => (
            <article className="schedule-stage" key={stage.title}>
              <span>
                <i className="stage-dot" />
                STAGE {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.time} IST</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Organizers() {
  return (
    <section id="organizers" className="section">
      <div className="shell">
        <div className="section-heading">
          <div>
            <Eyebrow number="04">THE PEOPLE BEHIND AURAGEN</Eyebrow>
            <h1>
              One team. A shared <em>ambition.</em>
            </h1>
            <p className="section-description">
              Meet the student organizers and Department of AI &amp; ML team behind AuraGen 2026 —
              the innovators bringing the hackathon to life.
            </p>
          </div>
          <span className="section-status">Organizing team</span>
        </div>
        <div className="organizer-grid">
          {organizers.map((person, index) => (
            <OrganizerCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export function Registration() {
  return (
    <section className="registration-band">
      <div className="shell registration-inner">
        <div>
          <Eyebrow>YOUR NEXT BREAKTHROUGH STARTS HERE</Eyebrow>
          <h2>
            Ready to ignite your potential at
            <br />
            <em>AuraGen 2026?</em>
          </h2>
          <p>
            Bring your curiosity, assemble your team of 3–4 members, and get ready to innovate at
            Shivva Ayyandurai Lab.
          </p>
          <p className="!mt-4">
            {event.dateLabel} · {event.suggestedHours} · {event.room}, {event.institution}
          </p>
        </div>
        <div className="registration-actions">
          <RegistrationButton inverse />
          <p className="status-note">
            Free Entry · Registration is open · Contact:{" "}
            <a href={`mailto:${event.email}`} className="underline hover:text-white">
              {event.email}
            </a>
          </p>
          <Button asChild variant="link" className="!mt-3 text-inverse-foreground">
            <Link to="/organizers">
              Meet the Organizers
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="shell faq-layout">
        <div>
          <div className="section-heading">
            <div>
              <Eyebrow number="05">FREQUENTLY ASKED QUESTIONS</Eyebrow>
              <h2>
                Clear answers for
                <br />
                <em>innovators.</em>
              </h2>
              <p className="section-description">
                Everything you need to know before stepping into AuraGen 2026.
              </p>
            </div>
          </div>
          <div className="contact-area">
            <h3>Need a hand?</h3>
            <p>
              Have questions about registration or the event? Get in touch with the AuraGen 2026
              organizing team.
            </p>
            {event.email ? (
              <a className="contact-note" href={`mailto:${event.email}`}>
                {event.email}
                <ArrowRight size={12} />
              </a>
            ) : (
              <div className="contact-note">
                <span className="eyebrow-dot" />
                Contact details will be announced soon.
              </div>
            )}
            {event.phone && (
              <a className="contact-note" href={`tel:${event.phone}`}>
                {event.phone}
              </a>
            )}
          </div>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map(([question, answer], i) => (
            <AccordionItem value={`faq-${i}`} key={question}>
              <AccordionTrigger className="!py-5 !text-[13px] focus-visible:outline-2 focus-visible:outline-ring">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed !text-xs">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function EventGuidelines() {
  return (
    <div className="event-guidelines">
      <div className="section-heading">
        <div>
          <Eyebrow>PARTICIPATION & EVALUATION</Eyebrow>
          <h2>Build fairly. Present clearly.</h2>
        </div>
        <span className="section-status">Official Guidelines · {event.room}</span>
      </div>
      <div className="guideline-columns">
        <div>
          <h3>Official Rules</h3>
          <ol>
            {suggestedRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3>Submission Requirements</h3>
          <ol>
            {suggestedSubmission.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="guideline-note">
            Track 1: Prompt engineering logs, responsive UI, usability, and live demo. Track 2:
            Advanced machine learning, generative models, autonomous agent orchestration, and
            architecture documentation.
          </p>
        </div>
      </div>
      <h3>Judging Criteria · 100 Points</h3>
      <dl className="judging-list">
        {suggestedJudging.map((item) => (
          <div key={item.criterion}>
            <dt>{item.criterion}</dt>
            <dd>{item.weight} points</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
