import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SiteShell from "@/components/portfolio/SiteShell";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProjectPage from "@/pages/ProjectPage";

function ScrollToRoute() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToRoute />
      <SiteShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  );
}
