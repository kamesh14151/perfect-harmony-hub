import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/config/event";

export const navigation = ["Home", "About", "Tracks", "Schedule", "Organizers", "FAQ"];
export function Brand({ large = false }: { large?: boolean }) {
  if (event.logoUrl) return <img className="brand-image" src={event.logoUrl} alt="SPARKS26" />;
  // This is a text identifier, not a recreated official logo.
  return <span className={large ? "film-title" : "brand-text"}>SPARKS<span>26</span></span>;
}
export function RegistrationButton({ inverse = false, className = "" }: { inverse?: boolean; className?: string }) {
  const open = event.registrationStatus === "Open" && Boolean(event.registrationUrl);
  const label = open ? "Register Now" : event.registrationStatus === "Closed" ? "Registration Closed" : "Coming Soon";
  if (open && event.registrationUrl) return <Button asChild size="lg" variant={inverse ? "inverse" : "default"} className={className}><a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight /></a></Button>;
  return <Button size="lg" variant={inverse ? "inverse" : "default"} className={className} disabled>{label}<ArrowUpRight /></Button>;
}
export function Navbar() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    navigation.forEach(name => { const element = document.getElementById(name.toLowerCase()); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!menu) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [menu]);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("sparks26-theme", next ? "dark" : "light"); } catch { /* Preference remains available for this visit. */ }
  };
  return <header className="site-nav"><div className="shell nav-inner">
    <a href="#home" aria-label="SPARKS26 home"><Brand /></a>
    <nav className="nav-links" aria-label="Main navigation">{navigation.map(name => <a key={name} className={`nav-link ${active === name.toLowerCase() ? "active" : ""}`} href={`#${name.toLowerCase()}`}>{name}</a>)}</nav>
    <div className="nav-actions"><Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light theme" : "Dark theme"}>{dark ? <Sun /> : <Moon />}</Button><RegistrationButton className="nav-register !h-9 !px-4 !text-xs" /><Button variant="ghost" size="icon" className="mobile-trigger" onClick={() => setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="mobile-navigation">{menu ? <X /> : <Menu />}</Button></div>
  </div>{menu && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">{navigation.map(name => <a key={name} className="nav-link" href={`#${name.toLowerCase()}`} onClick={() => setMenu(false)}>{name}</a>)}<RegistrationButton /></nav>}</header>;
}
export function Footer() {
  return <footer className="site-footer"><div className="shell"><div className="footer-top"><div><a href="#home" aria-label="SPARKS26 home"><Brand /></a><p className="footer-description">An internal hackathon. A shared ambition.<br />Sona College of Technology, Salem.</p></div><nav className="footer-nav" aria-label="Footer navigation">{navigation.slice(1).map(name => <a key={name} href={`#${name.toLowerCase()}`}>{name}</a>)}</nav></div><div className="footer-bottom"><span>© 2026 SPARKS26. All rights reserved.</span><span>Designed &amp; Developed by AJ STUDIOZ{event.studioUrl ? <a href={event.studioUrl} className="studio-wordmark" target="_blank" rel="noopener noreferrer">aj studioz ↗</a> : <span className="studio-wordmark">aj studioz</span>}</span></div></div></footer>;
}
