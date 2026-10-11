import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { OrganizerCard } from "./organizer-card";
import { ArrowDown, ArrowRight, BrainCircuit, CalendarDays, ChevronDown, Code2, Lightbulb, MapPin, Play, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { event, countdownValues } from "@/config/event";
import { faqs, organizers, schedule, tracks } from "@/data/event";
import { Brand, RegistrationButton } from "./event-chrome";

export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) { return <div className="eyebrow">{number ? <span className="section-number">{number} /</span> : <span className="eyebrow-dot" />}{children}</div>; }
export function IntroVideo() {
  const [available, setAvailable] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch(event.introVideoPath, { method: "HEAD", signal: controller.signal }).then(response => {
      setAvailable(response.ok && Boolean(response.headers.get("content-type")?.startsWith("video/")));
    }).catch(() => {});
    return () => controller.abort();
  }, []);
  return <section className="intro shell reveal" aria-label="Official introduction"><div className="intro-top"><Eyebrow>SPARKS26 PRESENTS</Eyebrow><span className="edition">THE 2026 EDITION</span></div><div className="film">{available ? <video controls preload="metadata" src={event.introVideoPath} poster={event.videoPosterUrl ?? undefined}>Your browser does not support video playback.</video> : <><div className="film-center"><Sparkles className="film-symbol" size={30} strokeWidth={1.1} /><p className="film-kicker">ONE IDEA. ENDLESS POSSIBILITIES.</p><Brand large /><span className="film-play" aria-hidden="true"><Play size={19} strokeWidth={1.3} /></span><p className="film-caption">The SPARKS26 story begins here.</p></div><div className="film-bottom"><span>SONA COLLEGE OF TECHNOLOGY</span><span>INTRO FILM · COMING SOON</span></div></>}</div><div className="intro-caption"><span>OFFICIAL INTRODUCTION {available ? "" : "· COMING SOON"}</span><em>Every great idea starts with a spark.</em></div></section>;
}
export function Countdown() {
  const [values, setValues] = useState<ReturnType<typeof countdownValues> | null>(null);
  useEffect(() => { const update = () => setValues(countdownValues(Date.now())); update(); const id = setInterval(update, 1000); return () => clearInterval(id); }, []);
  const note = values?.reached ? event.startDateTime ? "The countdown is complete." : "October 15 is here. Official start time to be announced." : event.startDateTime ? "Until the official start" : "Until October 15 · Official start time to be announced";
  return <div aria-label="Event countdown"><div className="countdown">{(["days", "hours", "minutes", "seconds"] as const).map(label => <div className="count-unit" key={label}><div className="count-number">{values ? String(values[label]).padStart(2, "0") : "—"}</div><div className="count-label">{label}</div></div>)}</div><p className="count-note">{note}</p></div>;
}
export function Hero() {
  return <section className="hero shell reveal"><Eyebrow>SONA COLLEGE OF TECHNOLOGY · INTERNAL HACKATHON</Eyebrow><h1>Turn bold ideas into<br />something <em>real.</em></h1><p className="hero-copy">SPARKS26 brings student innovators together to build, experiment, collaborate, and turn ambitious ideas into working solutions.</p><div className="event-meta"><span><CalendarDays />Thursday, October 15, 2026</span><span><MapPin />Sona College of Technology, Salem</span></div><Countdown /><div className="hero-actions"><RegistrationButton /><Button variant="outline" size="lg" asChild><Link to="/about">Explore the Event<ArrowRight /></Link></Button></div><div className="scroll-cue"><span className="eyebrow-dot" />Big ideas start here<ChevronDown size={12} /></div></section>;
}
export function About() {
  const features = [{ title: "Think boldly", icon: Lightbulb, copy: "Explore problems from new perspectives and challenge conventional approaches." }, { title: "Build together", icon: Users, copy: "Collaborate with teammates, exchange knowledge, and turn concepts into working prototypes." }, { title: "Create impact", icon: Sparkles, copy: "Develop solutions that demonstrate creativity, technical ability, and real-world potential." }];
  return <section id="about" className="section"><div className="shell"><div className="section-heading"><div><Eyebrow number="01">THE SPIRIT OF SPARKS26</Eyebrow><h1>Where ideas find their <em>spark.</em></h1><p className="section-description">An internal hackathon designed to encourage students to think creatively, solve meaningful problems, collaborate across disciplines, and transform ideas into practical prototypes.</p></div></div><div className="feature-grid">{features.map((feature, i) => <article key={feature.title} className={`feature-card ${i === 1 ? "selected" : ""}`}><feature.icon className="feature-icon" strokeWidth={1.3} /><h3>{feature.title}</h3><p>{feature.copy}</p></article>)}</div></div></section>;
}
export function Tracks() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const icons = [BrainCircuit, Code2, Sparkles];
  return <section id="tracks" className="section"><div className="shell"><div className="section-heading"><div><Eyebrow number="02">FIND YOUR DIRECTION</Eyebrow><h1>Choose a problem<br />worth <em>solving.</em></h1></div><span className="section-status">Proposed tracks · To be confirmed</span></div><div className="track-grid">{tracks.map((track,i) => { const Icon = icons[i] ?? Sparkles; return <article className="track-card" key={track.title}><div className="track-top"><Icon size={25} strokeWidth={1.2} /><span className="track-index">0{i + 1}</span></div><h3>{track.title}</h3><p>{track.description}</p><Button variant="link" className="!h-auto !p-0 !text-xs" onClick={() => setExpanded(expanded === i ? null : i)} aria-expanded={expanded === i} aria-controls={`track-${i}`}>{expanded === i ? "Close Track" : "Explore Track"}<ArrowRight /></Button>{expanded === i && <div className="track-detail" id={`track-${i}`}>{track.detail}</div>}</article>; })}</div></div></section>;
}
export function Schedule() {
  return <section id="schedule" className="section"><div className="shell"><div className="section-heading"><div><Eyebrow number="03">THE DAY AHEAD</Eyebrow><h1>From first idea to <em>final demo.</em></h1></div><span className="section-status">Schedule to be announced</span></div><div className="schedule-banner"><div className="schedule-date"><CalendarDays size={18} />{event.dateLabel}</div><p className="text-xs text-muted-foreground">A preview of the journey. Final sequence and timings to follow.</p></div><div className="schedule-grid">{schedule.map((title, i) => <article className="schedule-stage" key={title}><span><i className="stage-dot" />STAGE {String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>Time to be announced</p></article>)}</div></div></section>;
}
export function Organizers() {
  return <section id="organizers" className="section"><div className="shell"><div className="section-heading"><div><Eyebrow number="04">THE PEOPLE BEHIND THE SPARK</Eyebrow><h1>One team. A shared <em>ambition.</em></h1><p className="section-description">Meet the people behind SPARKS26 — the team bringing the event to life.</p></div><span className="section-status">Organizing team</span></div><div className="organizer-grid">{organizers.map((person, index) => <OrganizerCard key={person.name} person={person} index={index} />)}</div></div></section>;
}
export function Registration() {
  return <section className="registration-band"><div className="shell registration-inner"><div><Eyebrow>YOUR NEXT BIG IDEA STARTS HERE</Eyebrow><h2>Ready to make something<br /><em>remarkable?</em></h2><p>Bring your curiosity, find your team, and get ready to build at SPARKS26.</p><p className="!mt-4">October 15, 2026 · Sona College of Technology, Salem</p></div><div className="registration-actions"><RegistrationButton inverse /><p className="status-note">{event.registrationStatus === "Open" && event.registrationUrl ? "Registration is open" : event.registrationStatus === "Closed" ? "Registration is closed" : "Registration details will be announced soon"}</p><Button asChild variant="link" className="!mt-3 text-inverse-foreground"><Link to="/organizers">Meet the Organizers<ArrowRight /></Link></Button></div></div></section>;
}
export function FAQ() {
  return <section id="faq" className="section"><div className="shell faq-layout"><div><div className="section-heading"><div><Eyebrow number="05">A LITTLE CLARITY</Eyebrow><h2>Good questions.<br /><em>Clear answers.</em></h2><p className="section-description">Everything you need to know before your next big idea.</p></div></div><div className="contact-area"><h3>Need a hand?</h3><p>Have questions about registration or the event? Get in touch with the SPARKS26 organizing team.</p>{event.email ? <a className="contact-note" href={`mailto:${event.email}`}>{event.email}<ArrowRight size={12} /></a> : <div className="contact-note"><span className="eyebrow-dot" />Contact details will be announced soon.</div>}{event.phone && <a className="contact-note" href={`tel:${event.phone}`}>{event.phone}</a>}</div></div><Accordion type="single" collapsible>{faqs.map(([question, answer], i) => <AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger className="!py-5 !text-[13px] focus-visible:outline-2 focus-visible:outline-ring">{question}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed !text-xs">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}
