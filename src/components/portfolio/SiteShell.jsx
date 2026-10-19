import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  ["#about", "نبذة"], ["#work", "المشاريع"], ["#experience", "الخبرة"],
  ["#skills", "المهارات"], ["#contact", "تواصل"],
];

export default function SiteShell({ children }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!isHome) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.2, 0.5] });
    navItems.forEach(([hash]) => { const element = document.querySelector(hash); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [isHome]);
  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">انتقل إلى المحتوى</a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="wordmark" to="/" aria-label="الصفحة الرئيسية لزايد">
            <span className="wordmark__mark">ز</span><span className="wordmark__label">زايد <small>ZAUUUID</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navItems.map(([href, label]) => <a key={href} href={isHome ? href : `/${href}`} aria-current={isHome && active === href ? "location" : undefined}>{label}</a>)}
          </nav>
          <a className="header-contact" href="mailto:rshashmanab00@gmail.com">راسلني <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="mobile-nav" id="mobile-navigation" aria-label="التنقل للجوال" hidden={!open}>
          {navItems.map(([href, label]) => <a key={href} href={isHome ? href : `/${href}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} aria-hidden="true" /></a>)}
        </nav>
      </header>
      {children}
    </>
  );
}
