import { useState } from "react";
import { ExternalLink, Maximize2, Monitor, RotateCcw, Smartphone, Tablet } from "lucide-react";
import { demoOrigins } from "@/content/site";

const viewports = [
  { id: "desktop", label: "كمبيوتر", icon: Monitor },
  { id: "tablet", label: "جهاز لوحي", icon: Tablet },
  { id: "mobile", label: "جوال", icon: Smartphone },
];

function approvedEmbedUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && demoOrigins.has(url.origin) ? url.href : null;
  } catch {
    return null;
  }
}

export default function LiveProjectLab({ preview, title }) {
  const [viewport, setViewport] = useState("desktop");
  const [reloadKey, setReloadKey] = useState(0);
  const embedUrl = preview?.mode === "iframe" ? approvedEmbedUrl(preview.url) : null;
  const showImage = preview?.image && preview.mode !== "unavailable";

  return (
    <section className="project-lab" aria-labelledby="project-lab-title">
      <div className="project-lab__heading">
        <div><span className="eyebrow">معاينة</span><h2 id="project-lab-title">عرض الموقع</h2></div>
        <span className="status-label"><span aria-hidden="true" />{embedUrl ? "مباشر" : showImage ? "دراسة حالة" : "غير متاح"}</span>
      </div>
      <div className={`project-viewport project-viewport--${viewport}`}>
        {showImage ? (
          <img key={reloadKey} src={preview.image} alt={preview.alt || `${title} preview`} loading="lazy" />
        ) : embedUrl ? (
          <iframe key={reloadKey} src={embedUrl} title={`${title} live preview`}
            sandbox="allow-scripts allow-forms" allow="fullscreen"
            referrerPolicy="strict-origin-when-cross-origin" loading="lazy" />
        ) : (
          <div className="preview-empty" role="status"><span>المعاينة غير متاحة</span>
            <p>{preview?.message || "لا توجد نسخة تجريبية عامة لهذا المشروع."}</p></div>
        )}
      </div>
      <div className="project-lab__controls">
        <div className="viewport-controls" aria-label="حجم المعاينة">
          {viewports.map(({ id, label, icon: Icon }) => (
            <button type="button" key={id} aria-pressed={viewport === id} onClick={() => setViewport(id)}>
              <Icon size={15} aria-hidden="true" /><span>{label}</span>
            </button>
          ))}
        </div>
        <div className="viewport-actions">
          <button type="button" onClick={() => setReloadKey((key) => key + 1)}><RotateCcw size={14} aria-hidden="true" /><span>إعادة العرض</span></button>
          {embedUrl && <a href={embedUrl} target="_blank" rel="noreferrer"><ExternalLink size={14} aria-hidden="true" /><span>فتح خارج الموقع</span></a>}
          <span className="preview-fit"><Maximize2 size={14} aria-hidden="true" />متجاوب</span>
        </div>
      </div>
    </section>
  );
}
