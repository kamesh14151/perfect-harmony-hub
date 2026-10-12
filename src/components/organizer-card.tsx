import { useState } from "react";
import { ArrowUpRight, UserRound } from "lucide-react";
import type { Organizer } from "@/data/event";

export function OrganizerCard({ person, index }: { person: Organizer; index: number }) {
  const [failed, setFailed] = useState(false);
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  const hasPhoto = Boolean(person.image && !person.imageIsPlaceholder && !failed);

  return (
    <article className="group relative rounded-2xl sm:rounded-3xl bg-card border border-border/80 hover:border-[#bf472c]/50 shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between p-3.5">
      {/* Golden Ratio Portrait Avatar */}
      <div className="relative aspect-[4/5] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-muted flex items-center justify-center shadow-inner">
        {person.image && !failed ? (
          <img
            className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 ${
              person.imageIsPlaceholder ? "placeholder-portrait opacity-85" : ""
            }`}
            src={person.image}
            alt={
              person.imageIsPlaceholder
                ? `${person.name} — initials placeholder`
                : `${person.name} portrait`
            }
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-muted via-muted/80 to-muted/50 text-muted-foreground">
            <span
              className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground/40"
              aria-label={`${person.name} initials`}
            >
              {initials}
            </span>
          </div>
        )}

        {/* Ambient Dark Bottom Vignette for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-85 transition-opacity" />

        {/* Index Pill */}
        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/45 backdrop-blur-md text-white/90 border border-white/15 shadow-xs">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Official Status Chip or Pending Badge */}
        {hasPhoto ? (
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Official
          </span>
        ) : (
          <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-medium bg-black/50 backdrop-blur-md text-white/70 border border-white/10 flex items-center gap-1 shadow-xs">
            <UserRound size={10} />
            Portrait pending
          </span>
        )}
      </div>

      {/* Info Lockup */}
      <div className="p-3 sm:p-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-serif text-base sm:text-lg font-bold text-foreground group-hover:text-[#bf472c] transition-colors leading-snug line-clamp-1">
            {person.name}
          </h3>
          <span className="w-2 h-2 rounded-full bg-[#bf472c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-semibold text-[#bf472c] uppercase tracking-wider">
            {person.role ?? "Organizer"}
          </span>
          {person.department && (
            <span className="text-[11px] text-muted-foreground before:content-['·'] before:mr-2">
              {person.department}
            </span>
          )}
        </div>

        {person.biography && (
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {person.biography}
          </p>
        )}

        {(person.linkedin || person.email) && (
          <div className="pt-2 flex items-center gap-3">
            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground hover:text-[#bf472c] transition-colors"
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
            )}
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground hover:text-[#bf472c] transition-colors"
              >
                Email <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
