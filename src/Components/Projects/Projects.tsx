import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { useLanguage } from "../../Context/LanguageContext";
import { ExternalLink } from "lucide-react";

const urls = ["https://rustspain.com", "https://brasa.gg", "#"];

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t, tList } = useLanguage();
  const projects = tList("projects.list");

  return (
    <section
      ref={elementRef}
      className="py-24 bg-[#0a0a0a] border-t border-white/5"
      id="proyectos"
      style={{ contain: "layout style" }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            {t("projects.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.isArray(projects) &&
            projects.map((project: any, index: number) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-red-500/20 transition-colors duration-300 hover-lift"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 500ms ease-out ${index * 100}ms, transform 500ms ease-out ${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <a
                    href={urls[index] || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    aria-label={`${t("projects.visit")} ${project.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-red-400 text-sm font-semibold mb-3">
                  {project.role}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.tags) &&
                    project.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
