import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "RustSpain",
    role: "Desarrollador de Plugins",
    description: "Plugin de economía, tienda y kits para la comunidad más grande de Rust en España.",
    tags: ["Economía", "Tienda", "Kits"],
    url: "https://rustspain.com",
  },
  {
    name: "Brasa.gg",
    role: "Desarrollador de Plugins",
    description: "Sistema de VIP, rangos y eventos personalizados para la comunidad brasileña.",
    tags: ["VIP", "Rangos", "Eventos"],
    url: "https://brasa.gg",
  },
  {
    name: "LATAMRUST",
    role: "Fundador y Administrador",
    description: "Comunidad de servidores pirata LATAM con más de 10,000 jugadores activos.",
    tags: ["Comunidad", "Servidores", "Soporte"],
    url: "#",
  },
];

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 px-4" id="proyectos" style={{ background: "linear-gradient(to bottom, #0a1225, #070d1b)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-orange-500 text-sm font-bold tracking-widest uppercase">
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Donde trabajé
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Experiencia real en comunidades gaming de Latinoamérica y España.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border border-white/5 bg-[#0a1225] hover:bg-[#0e1a30] hover:border-orange-500/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Project name */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Role */}
              <p className="text-orange-400 text-sm font-semibold mb-3">{project.role}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
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
