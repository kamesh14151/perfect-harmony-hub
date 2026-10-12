import { useState } from "react";
import { Globe, Linkedin, Mail, Plus, Sparkles } from "lucide-react";
import type { Organizer } from "@/data/event";
import { event } from "@/config/event";

export function OrganizerCard({ person, index }: { person: Organizer; index: number }) {
  const [failed, setFailed] = useState(false);
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="group relative rounded-[28px] sm:rounded-[32px] bg-card border border-border/80 hover:border-[#bf472c]/40 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between p-3.5 sm:p-4">
      {/* Top Banner Cover (Sky / Cloud Theme matching reference) */}
      <div className="relative w-full h-24 sm:h-28 rounded-2xl overflow-hidden bg-gradient-to-b from-[#a9c5df] via-[#c6dbed] to-[#e4eef6] dark:from-[#1b2533] dark:via-[#16202c] dark:to-[#111720]">
        <img
          src="/IMG_dbbd97c0-dd87-4ff2-b952-92fff78f57aa.jpg"
          alt="Sky Cover"
          className="w-full h-full object-cover object-top opacity-90 filter brightness-[1.05]"
        />
        {/* Soft light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/40 dark:to-black/30 pointer-events-none" />

        {/* Top Right Action Button (+) */}
        <a
          href={person.email ? `mailto:${person.email}` : `mailto:${event.email}`}
          title={`Contact ${person.name}`}
          className="absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-sm text-foreground flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/40 dark:border-white/20 cursor-pointer"
        >
          <Plus size={15} />
        </a>

        {/* Top Left Index Pill */}
        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/40 backdrop-blur-md text-white/90 border border-white/15 shadow-xs">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Centered Circular Avatar with Rainbow Ring (Overlapping Banner) */}
      <div className="relative -mt-9 sm:-mt-10 mx-auto z-10 flex flex-col items-center">
        <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-[#bf472c] via-[#f59e0b] to-[#06b6d4] shadow-md group-hover:scale-105 transition-transform duration-300">
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white dark:bg-[#161a22] p-[1.5px]">
            {person.image && !failed ? (
              <img
                src={person.image}
                alt={`${person.name} portrait`}
                className="w-full h-full object-cover object-top rounded-full"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-base sm:text-lg font-mono">
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Centered Name & Subtitle / Bio */}
      <div className="text-center mt-2.5 space-y-1">
        <h3 className="font-sans font-bold text-base sm:text-lg text-foreground tracking-tight group-hover:text-[#bf472c] transition-colors leading-snug line-clamp-1">
          {person.name}
        </h3>
        <p className="text-xs text-muted-foreground max-w-[220px] mx-auto line-clamp-2 leading-relaxed">
          {person.biography ??
            (person.department
              ? `${person.role ?? "Organizer"} · ${person.department}`
              : "AuraGen 2026 Core Organizing Team")}
        </p>
      </div>

      {/* Rounded Stats / Metadata Capsule (Matching Reference Mockup) */}
      <div className="mt-3.5 rounded-2xl bg-muted/50 dark:bg-muted/20 border border-border/70 p-2.5 sm:p-3 flex items-center justify-around text-center">
        <div>
          <div className="text-xs sm:text-sm font-bold text-foreground">AI &amp; ML</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">Dept</div>
        </div>
        <div className="w-px h-6 bg-border/80" />
        <div>
          <div className="text-xs sm:text-sm font-bold text-foreground">Organizer</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">Role</div>
        </div>
        <div className="w-px h-6 bg-border/80" />
        <div>
          <div className="text-xs sm:text-sm font-bold text-foreground">2026</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">Sprint</div>
        </div>
      </div>

      {/* Social Icons Bar at Bottom */}
      <div className="flex items-center justify-center gap-5 pt-3 pb-1 text-muted-foreground">
        {person.linkedin ? (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors p-1"
            title="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </a>
        ) : (
          <a
            href={`mailto:${event.email}`}
            className="hover:text-foreground transition-colors p-1"
            title="Email Organizer"
          >
            <Mail size={15} />
          </a>
        )}

        {person.email ? (
          <a
            href={`mailto:${person.email}`}
            className="hover:text-foreground transition-colors p-1"
            title="Direct Contact"
          >
            <Mail size={15} />
          </a>
        ) : (
          <span
            className="p-1 hover:text-foreground cursor-default transition-colors"
            title="AuraGen Core Organizer"
          >
            <Sparkles size={15} />
          </span>
        )}

        <a
          href="https://ajstudioz.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors p-1"
          title="Official Website"
        >
          <Globe size={15} />
        </a>
      </div>
    </article>
  );
}
