import { useState } from "react";
import { ExternalLink, Linkedin, Maximize2, Plus } from "lucide-react";
import type { Organizer } from "@/data/event";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function OrganizerCard({ person, index }: { person: Organizer; index: number }) {
  const [failed, setFailed] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <>
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

          {/* Top Right Action Button: Follow on LinkedIn */}
          <a
            href={person.linkedin ?? "https://www.linkedin.com/school/sona-college-of-technology/"}
            target="_blank"
            rel="noopener noreferrer"
            title={`LinkedIn · ${person.name}`}
            aria-label={`LinkedIn · ${person.name}`}
            className="group/plus absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md shadow-sm text-foreground flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/40 dark:border-white/20 cursor-pointer z-20"
          >
            <Plus size={15} className="group-hover/plus:rotate-90 transition-transform duration-300" />
            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-black/90 dark:bg-white text-white dark:text-black text-[11px] font-semibold tracking-wide shadow-xl backdrop-blur-md opacity-0 scale-95 group-hover/plus:opacity-100 group-hover/plus:scale-100 transition-all duration-200 whitespace-nowrap z-30 flex items-center gap-1.5">
              <Linkedin size={11} className="text-[#0a66c2]" />
              <span>LinkedIn</span>
            </span>
          </a>

          {/* Top Left Index Pill */}
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/40 backdrop-blur-md text-white/90 border border-white/15 shadow-xs">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Centered Circular Avatar with Rainbow Ring (Overlapping Banner - Clickable to Open Full Picture Modal) */}
        <div className="relative -mt-9 sm:-mt-10 mx-auto z-10 flex flex-col items-center">
          <button
            type="button"
            onClick={() => setIsPhotoOpen(true)}
            className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-[#bf472c] via-[#f59e0b] to-[#06b6d4] shadow-md hover:scale-108 hover:shadow-xl transition-all duration-300 cursor-zoom-in group/avatar focus:outline-none focus:ring-2 focus:ring-[#bf472c] focus:ring-offset-2"
            title={`Click to view full portrait of ${person.name}`}
            aria-label={`Click to view full portrait of ${person.name}`}
          >
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white dark:bg-[#161a22] p-[1.5px] relative">
              {person.image && !failed ? (
                <img
                  src={person.image}
                  alt={`${person.name} portrait`}
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-300 group-hover/avatar:scale-105"
                  onError={() => setFailed(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-base sm:text-lg font-mono">
                  {initials}
                </div>
              )}
              {/* Subtle hover zoom overlay */}
              <span className="absolute inset-0 rounded-full bg-black/35 backdrop-blur-[0.5px] opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                <Maximize2 size={16} className="drop-shadow-md animate-in zoom-in-75 duration-200" />
              </span>
            </div>
          </button>
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

      {/* Social Icons Bar at Bottom: Insta, X, Threads (Matching Reference Mockup) */}
      <div className="flex items-center justify-center gap-7 pt-3.5 pb-1 text-muted-foreground">
        {/* Instagram */}
        <div className="relative group/insta flex flex-col items-center">
          <a
            href={person.instagram ?? "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-all p-1 hover:scale-115 active:scale-95 block"
            title={`${person.name} on Instagram`}
            aria-label={`${person.name} on Instagram`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <span className="pointer-events-none absolute bottom-full mb-1.5 px-2 py-0.5 rounded-md bg-black/90 dark:bg-white text-white dark:text-black text-[10px] font-semibold tracking-wide shadow-lg opacity-0 scale-90 group-hover/insta:opacity-100 group-hover/insta:scale-100 transition-all duration-200 whitespace-nowrap z-30">
            Instagram
          </span>
        </div>

        {/* X (Twitter) */}
        <div className="relative group/x flex flex-col items-center">
          <a
            href={person.twitter ?? "https://x.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-all p-1 hover:scale-115 active:scale-95 block"
            title={`${person.name} on X`}
            aria-label={`${person.name} on X`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <span className="pointer-events-none absolute bottom-full mb-1.5 px-2 py-0.5 rounded-md bg-black/90 dark:bg-white text-white dark:text-black text-[10px] font-semibold tracking-wide shadow-lg opacity-0 scale-90 group-hover/x:opacity-100 group-hover/x:scale-100 transition-all duration-200 whitespace-nowrap z-30">
            X
          </span>
        </div>

        {/* Threads */}
        <div className="relative group/threads flex flex-col items-center">
          <a
            href={person.threads ?? "https://threads.net"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-all p-1 hover:scale-115 active:scale-95 block"
            title={`${person.name} on Threads`}
            aria-label={`${person.name} on Threads`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c2.82 0 5.38-1.17 7.22-3.06l-1.42-1.42c-1.48 1.52-3.54 2.48-5.8 2.48-4.411 0-8-3.589-8-8s3.589-8 8-8c4.372 0 7.933 3.526 7.998 7.896-.033 1.944-.805 3.32-2.128 3.32-.782 0-1.47-.53-1.47-1.716V10.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v.37c-.6-.57-1.42-.97-2.4-.97-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c1.19 0 2.22-.48 2.97-1.26.47 1.05 1.48 1.66 2.73 1.66 2.378 0 3.798-2.146 3.798-5.4 0-5.523-4.477-10-10-10zm0 13.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z" />
            </svg>
          </a>
          <span className="pointer-events-none absolute bottom-full mb-1.5 px-2 py-0.5 rounded-md bg-black/90 dark:bg-white text-white dark:text-black text-[10px] font-semibold tracking-wide shadow-lg opacity-0 scale-90 group-hover/threads:opacity-100 group-hover/threads:scale-100 transition-all duration-200 whitespace-nowrap z-30">
            Threads
          </span>
        </div>
      </div>
    </article>

    {/* Full Portrait Photo Modal */}
    <Dialog open={isPhotoOpen} onOpenChange={setIsPhotoOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-0 overflow-hidden bg-card/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl rounded-3xl [&>button]:text-white [&>button]:bg-black/50 [&>button]:p-1.5 [&>button]:rounded-full [&>button]:backdrop-blur-md [&>button]:hover:bg-black/80 [&>button]:hover:text-white [&>button]:transition-all z-50">
        {/* Top decorative banner */}
        <div className="relative w-full h-24 sm:h-28 bg-gradient-to-r from-[#bf472c] via-[#e26b48] to-[#06b6d4] overflow-hidden">
          <img
            src="/IMG_dbbd97c0-dd87-4ff2-b952-92fff78f57aa.jpg"
            alt="Sona Campus"
            className="w-full h-full object-cover opacity-25 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <span className="absolute top-3.5 left-4 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20 shadow-xs">
            AuraGen 2026 Core Organizer
          </span>
        </div>

        {/* Full portrait photo container */}
        <div className="px-5 sm:px-6 -mt-12 flex flex-col items-center pb-5">
          <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-[#bf472c] via-[#f59e0b] to-[#06b6d4] shadow-2xl max-w-xs sm:max-w-sm w-full">
            <div className="w-full max-h-[55vh] rounded-[14px] overflow-hidden bg-background flex items-center justify-center">
              {person.image && !failed ? (
                <img
                  src={person.image}
                  alt={`${person.name} full portrait`}
                  className="w-full h-full max-h-[55vh] object-cover object-top"
                />
              ) : (
                <div className="w-full py-20 flex items-center justify-center text-4xl font-mono text-muted-foreground bg-muted">
                  {initials}
                </div>
              )}
            </div>
          </div>

          {/* Name, Role & Details */}
          <div className="text-center mt-3.5 space-y-1 w-full">
            <DialogTitle className="text-xl sm:text-2xl font-bold font-sans text-foreground tracking-tight">
              {person.name}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm font-semibold text-[#bf472c]">
              {person.role ?? "Organizer"} · {person.department ?? "Department of AI & ML"}
            </DialogDescription>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto pt-1 leading-relaxed">
              {person.biography ??
                "AuraGen 2026 Core Organizing Team · Department of AI & ML, Sona College of Technology."}
            </p>
          </div>

          {/* Social Links Row in Modal */}
          <div className="flex items-center justify-center gap-4 py-3 w-full border-t border-border/70 mt-3 text-muted-foreground">
            {person.linkedin && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-[#0a66c2] transition-colors py-1 px-2.5 rounded-lg hover:bg-muted font-medium"
              >
                <Linkedin size={14} className="text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
            )}
            {person.instagram && (
              <a
                href={person.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-[#e4405f] transition-colors py-1 px-2.5 rounded-lg hover:bg-muted font-medium"
              >
                <svg className="w-3.5 h-3.5 text-[#e4405f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            )}
            {person.twitter && (
              <a
                href={person.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-foreground transition-colors py-1 px-2.5 rounded-lg hover:bg-muted font-medium"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X</span>
              </a>
            )}
            {person.threads && (
              <a
                href={person.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-foreground transition-colors py-1 px-2.5 rounded-lg hover:bg-muted font-medium"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c2.82 0 5.38-1.17 7.22-3.06l-1.42-1.42c-1.48 1.52-3.54 2.48-5.8 2.48-4.411 0-8-3.589-8-8s3.589-8 8-8c4.372 0 7.933 3.526 7.998 7.896-.033 1.944-.805 3.32-2.128 3.32-.782 0-1.47-.53-1.47-1.716V10.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v.37c-.6-.57-1.42-.97-2.4-.97-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c1.19 0 2.22-.48 2.97-1.26.47 1.05 1.48 1.66 2.73 1.66 2.378 0 3.798-2.146 3.798-5.4 0-5.523-4.477-10-10-10zm0 13.5c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5z" />
                </svg>
                <span>Threads</span>
              </a>
            )}
          </div>

          {/* Direct Image Link */}
          {person.image && (
            <a
              href={person.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors pt-2 hover:underline underline-offset-4"
            >
              <ExternalLink size={11} />
              <span>Open original photo in new tab</span>
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  </>
  );
}
