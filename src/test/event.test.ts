import { describe, expect, it } from "vitest";
import { countdownValues, event } from "@/config/event";
import { organizers, tracks, schedule, suggestedJudging } from "@/data/event";

describe("AuraGen 2026 event data", () => {
  it("includes all 14 confirmed organizers with official portraits for Sarvesh P, Kamesh R, Nithyasri, and Sridevi", () => {
    expect(organizers).toHaveLength(14);
    expect(new Set(organizers.map((person) => person.name)).size).toBe(14);
    const sarvesh = organizers.find((p) => p.name === "Sarvesh P");
    const kamesh = organizers.find((p) => p.name === "Kamesh R");
    const nithyasri = organizers.find((p) => p.name === "Nithyasri");
    const sridevi = organizers.find((p) => p.name === "Sridevi");
    expect(sarvesh?.image).toBe("/organizers/Sarvesh.png");
    expect(sarvesh?.imageIsPlaceholder).toBe(false);
    expect(kamesh?.image).toBe("/organizers/Kamez.png");
    expect(kamesh?.imageIsPlaceholder).toBe(false);
    expect(nithyasri?.image).toBe("/organizers/Nithyasri.jpg");
    expect(nithyasri?.imageIsPlaceholder).toBe(false);
    expect(sridevi?.image).toBe("/organizers/Sridevi.png");
    expect(sridevi?.imageIsPlaceholder).toBe(false);
    expect(organizers.every((person) => person.role === "Organizer")).toBe(true);
  });
  it("verifies registration is open and official start time is set", () => {
    expect(event.startDateTime).toBe("2026-10-15T09:00:00+05:30");
    expect(event.registrationUrl).toBeTruthy();
    expect(event.registrationStatus).toBe("Open");
  });
  it("counts to the confirmed start time in Indian Standard Time", () => {
    const result = countdownValues(new Date("2026-10-14T09:00:00+05:30").getTime());
    expect(result).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0, reached: false });
  });
  it("supports a confirmed start time and stops at zero", () => {
    const before = countdownValues(
      new Date("2026-10-15T09:00:00+05:30").getTime(),
      "2026-10-15T10:30:00+05:30",
    );
    expect(before.hours).toBe(1);
    expect(before.minutes).toBe(30);
    const after = countdownValues(new Date("2026-10-16T00:00:00+05:30").getTime());
    expect(after).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, reached: true });
  });
  it("includes confirmed details and tracks", () => {
    expect(event.name).toBe("AuraGen 2026");
    expect(tracks).toHaveLength(2);
    expect(event.room).toBe("Shivva Ayyandurai Lab");
    expect(event.fee).toBe("Free");
    expect(event.teamSize).toBe("3–4 members per team");
    expect(event.email).toBe("auragenofficial@gmail.com");
    expect(event.studioUrl).toBe("https://ajstusioz.co.in");
    expect(schedule).toHaveLength(8);
    expect(suggestedJudging.reduce((sum, item) => sum + item.weight, 0)).toBe(100);
    expect(event.startDateTime).toBe("2026-10-15T09:00:00+05:30");
  });
});
