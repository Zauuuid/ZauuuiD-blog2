import { ArrowDown, ArrowUpLeft, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { buildAreas, capabilities } from "@/content/capabilities";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import Reveal from "@/components/portfolio/Reveal";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SEO from "@/components/portfolio/SEO";

const socialIcons = { Github, Linkedin, Mail, ExternalLink };

export default function Home() {
  const portfolioProject = projects.find((project) => project.slug === "technical-dossier");

  return (
    <>
      <SEO description={`${profile.title}. ${profile.bio}`} path="/" />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__inner page-wrap">
            <div className="hero__copy">
              <p className="eyebrow"><span className="eyebrow__dot" /> طالب تقنية المعلومات</p>
              <h1 id="hero-title">زايد <span>ZAUUUID</span></h1>
              <p className="hero__role">أدرس التقنية وأعمل على مشاريع في الأمن والبرمجيات.</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#work">مشاريعي <ArrowDown size={16} aria-hidden="true" /></a>
                <a className="button button--quiet" href="mailto:rshashmanab00@gmail.com">تواصل معي</a>
              </div>
            </div>
            <aside className="hero-card" aria-label="معلومات سريعة">
              <div className="hero-card__top"><span>معلومات سريعة</span><span>{profile.location}</span></div>
              <div className="hero-card__item"><span>الدراسة</span><strong>{profile.education.degree}</strong><small>{profile.education.institution} · {profile.education.period}</small></div>
              <div className="hero-card__item"><span>الاهتمام</span><strong>الشبكات والأمن المعلوماتي</strong></div>
              <div className="hero-card__certs"><span>الشهادات</span><strong dir="ltr">{profile.certifications.join(" · ")}</strong></div>
            </aside>
          </div>
        </section>

        <section className="section section--about" id="about" aria-labelledby="about-title">
          <div className="page-wrap">
            <SectionHeading title="نبذة" description={profile.about} id="about-title" />
          </div>
        </section>

        <section className="section section--work" id="work" aria-labelledby="work-title">
          <div className="page-wrap">
            <SectionHeading title="المشاريع" description="مجالات عملت عليها بشكل مستقل." id="work-title" />
            <div className="work-grid">
              {buildAreas.map((area) => (
                <Reveal className="work-card" key={area.title}>
                  <div><span className="work-card__category">{area.category}</span><h3>{area.title}</h3><p>{area.description}</p></div>
                </Reveal>
              ))}
            </div>
            {portfolioProject && (
              <Link className="case-study-wrap case-study-wrap--simple" to={`/projects/${portfolioProject.slug}`}>
                <div><span className="fact-card__label">مشروع ويب</span><h3>هذا الموقع</h3><p>موقع شخصي يجمع الدراسة والخبرة والمهارات والمشاريع.</p></div>
                <ArrowUpLeft size={22} aria-hidden="true" />
              </Link>
            )}
          </div>
        </section>

        <section className="section section--experience" id="experience" aria-labelledby="experience-title">
          <div className="page-wrap">
            <SectionHeading title="الخبرة" id="experience-title" />
            <div className="timeline">
              {experience.map((item) => (
                <Reveal className="timeline-card" key={item.role}>
                  <div className="timeline-card__date"><time>{item.period}</time></div>
                  <div className="timeline-card__body">
                    <span className="timeline-card__type">{item.type} · {item.location}</span>
                    <h3>{item.role}</h3><strong>{item.organization}</strong><p>{item.summary}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--skills" id="skills" aria-labelledby="skills-title">
          <div className="page-wrap">
            <SectionHeading title="المهارات" id="skills-title" />
            <div className="skills-grid">
              {capabilities.map((capability) => (
                <Reveal className="skill-card" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <ul>{capability.scope.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="skill-card__tools">{capability.tools.map((tool) => <span key={tool} dir="auto">{tool}</span>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-wrap">
            <div className="contact-card">
              <div><span className="fact-card__label">تواصل · {profile.location}</span><h2 id="contact-title">يسعدني تواصلك.</h2><p>للنقاش حول التقنية أو المشاريع.</p></div>
              <a className="button button--light" href="mailto:rshashmanab00@gmail.com">أرسل بريداً <ArrowUpLeft size={16} aria-hidden="true" /></a>
            </div>
            <footer className="site-footer">
              <span>© {new Date().getFullYear()} زايد · ZAUUUID</span>
              <div className="social-links" aria-label="روابط التواصل">
                {profile.socials.map((social) => { const Icon = socialIcons[social.icon] || ExternalLink; return <a key={social.label} href={social.href} target={social.href.startsWith("mailto:") ? undefined : "_blank"} rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}><Icon size={15} aria-hidden="true" /><bdi>{social.label}</bdi></a>; })}
              </div>
              {portfolioProject && <Link to={`/projects/${portfolioProject.slug}`}>دراسة الموقع <ArrowUpLeft size={14} aria-hidden="true" /></Link>}
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
