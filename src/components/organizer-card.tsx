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
  return (
    <article className="organizer-card">
      <div className="organizer-avatar">
        {person.image && !failed ? (
          <img
            className={person.imageIsPlaceholder ? "placeholder-portrait" : undefined}
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
          <span aria-label={`${person.name} initials`}>{initials}</span>
        )}
        <span className="organizer-index">{String(index + 1).padStart(2, "0")}</span>
        {(person.imageIsPlaceholder || !person.image || failed) && (
          <span className="portrait-pending">
            <UserRound size={12} />
            Portrait pending
          </span>
        )}
      </div>
      <div className="organizer-info">
        <div className="organizer-name-row">
          <h3>{person.name}</h3>
          <span className="organizer-mark" aria-hidden="true" />
        </div>
        <p>{person.role ?? "Organizer"}</p>
        {person.department && <p>{person.department}</p>}
        {person.biography && <p>{person.biography}</p>}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="organizer-social"
          >
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`} className="organizer-social">
            Email
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </article>
  );
}
