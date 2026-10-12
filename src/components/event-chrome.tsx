import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/config/event";

export const navigation = [{ name: "Home", to: "/" }, { name: "About", to: "/about" }, { name: "Tracks", to: "/tracks" }, { name: "Schedule", to: "/schedule" }, { name: "Organizers", to: "/organizers" }] as const;
export function Brand({ large = false }: { large?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (event.logoUrl && !failed) return <img className={large ? "film-logo" : "brand-image"} src={event.logoUrl} alt="SPARKS26" onError={() => setFailed(true)} />;
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

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

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
    <Link to="/" aria-label="SPARKS26 home"><Brand /></Link>
    <nav className="nav-links" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} className="nav-link" to={item.to} activeProps={{ className: "nav-link active", "aria-current": "page" }} activeOptions={{ exact: true }}>{item.name}</Link>)}<Link className="nav-link" to="/" hash="faq">FAQ</Link></nav>
    <div className="nav-actions"><Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light theme" : "Dark theme"}>{dark ? <Sun /> : <Moon />}</Button><RegistrationButton className="nav-register !h-9 !px-4 !text-xs" /><Button variant="ghost" size="icon" className="mobile-trigger" onClick={() => setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="mobile-navigation">{menu ? <X /> : <Menu />}</Button></div>
  </div>{menu && <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} className="nav-link" to={item.to} onClick={() => setMenu(false)}>{item.name}</Link>)}<Link to="/" hash="faq" className="nav-link" onClick={() => setMenu(false)}>FAQ</Link><RegistrationButton /></nav>}</header>;
}
export function Footer() {
  return <footer className="site-footer"><div className="shell"><div className="footer-top"><div><Link to="/" aria-label="SPARKS26 home"><Brand /></Link><p className="footer-description">An internal hackathon. A shared ambition.<br />Sona College of Technology, Salem.</p></div><nav className="footer-nav" aria-label="Footer navigation">{navigation.slice(1).map(item => <Link key={item.to} to={item.to}>{item.name}</Link>)}<Link to="/" hash="faq">FAQ</Link></nav></div><div className="footer-bottom"><span>© 2026 SPARKS26. All rights reserved.</span><span className="studio-credit"><span>Designed &amp; Developed by AJ STUDIOZ</span>{event.studioUrl ? <a href={event.studioUrl} className="studio-wordmark" target="_blank" rel="noopener noreferrer"><img src={event.studioLogoUrl} alt="AJ STUDIOZ logo" /><span>AJ STUDIOZ ↗</span></a> : <span className="studio-wordmark">aj studioz</span>}</span></div></div></footer>;
}
