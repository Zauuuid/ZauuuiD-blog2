import { ArrowUpLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "@/content/projects";
import NotFound from "@/pages/NotFound";
import LiveProjectLab from "@/components/portfolio/LiveProjectLab";
import Reveal from "@/components/portfolio/Reveal";
import SEO from "@/components/portfolio/SEO";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  const description = `${project.summary} ${project.technologies.join(" · ")}.`;

  return (
    <>
      <SEO title={project.title} description={description} path={`/projects/${project.slug}`} />
      <main className="project-page" id="main-content">
        <div className="project-page__top"><Link to="/" className="back-link"><ArrowUpLeft size={16} aria-hidden="true" />العودة للرئيسية</Link><span>{project.category}</span></div>
        <Reveal className="project-page__hero">
          <p className="eyebrow">{project.status} · {project.year}</p>
          <h1>{project.title}</h1><p className="project-page__subtitle">{project.subtitle}</p>
          <p className="project-page__summary">{project.summary}</p>
          <div className="project-page__stack">{project.technologies.map((technology) => <span key={technology} dir="ltr">{technology}</span>)}</div>
        </Reveal>
        <div className="project-page__grid">
          <div className="project-page__content">
            {project.caseStudy.map((section) => <Reveal className="case-section" key={section.heading}>
              <div><h2>{section.heading}</h2><p>{section.body}</p></div>
            </Reveal>)}
            <section className="project-page__contact">
              <p className="eyebrow">تواصل · {"المدينة المنورة"}</p><h2>هل ترغب بالتواصل؟</h2>
              <a href="mailto:rshashmanab00@gmail.com">راسلني <ArrowUpLeft size={16} aria-hidden="true" /></a>
            </section>
          </div>
          <aside className="project-page__aside"><LiveProjectLab preview={project.preview} title={project.title} /></aside>
        </div>
      </main>
    </>
  );
}
