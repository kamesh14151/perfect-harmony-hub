import { describe, expect, it } from "vitest";
import { countdownValues, event } from "@/config/event";
import { organizers } from "@/data/event";

describe("SPARKS26 event data", () => {
  it("includes all 14 confirmed organizers without fabricated portraits", () => {
    expect(organizers).toHaveLength(14);
    expect(new Set(organizers.map(person => person.name)).size).toBe(14);
    expect(organizers.every(person => person.imageIsPlaceholder === true)).toBe(true);
    expect(organizers.every(person => person.imageFilename?.endsWith(".jpg"))).toBe(true);
  });
  it("keeps unconfirmed registration and official start time unset", () => {
    expect(event.startDateTime).toBeNull();
    expect(event.registrationUrl).toBeNull();
    expect(event.registrationStatus).toBe("Coming Soon");
  });
  it("counts to the calendar date in Indian Standard Time without inventing a start time", () => {
    const result = countdownValues(new Date("2026-10-14T00:00:00+05:30").getTime());
    expect(result).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0, reached: false });
  });
  it("supports a confirmed start time and stops at zero", () => {
    const before = countdownValues(new Date("2026-10-15T09:00:00+05:30").getTime(), "2026-10-15T10:30:00+05:30");
    expect(before.hours).toBe(1);
    expect(before.minutes).toBe(30);
    const after = countdownValues(new Date("2026-10-16T00:00:00+05:30").getTime());
    expect(after).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, reached: true });
  });
});