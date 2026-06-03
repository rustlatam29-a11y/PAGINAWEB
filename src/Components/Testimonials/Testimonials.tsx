import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Argentina",
    text: "Me armó un servidor Rust 2275 con 15 plugins en menos de un día. Todo funciona perfecto. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Diego R.",
    location: "México",
    text: "Ya probé otros servicios y ninguno se compara. El soporte es directo y resuelve rápido.",
    rating: 5,
  },
  {
    name: "Lucas P.",
    location: "Colombia",
    text: "Necesitaba un plugin personalizado y me lo hizo en 24 horas. La experiencia habla sola.",
    rating: 5,
  },
  {
    name: "Andrés V.",
    location: "Chile",
    text: "Tengo mi servidor funcionando hace 6 meses sin ningún problema. Los backups automáticos me dan tranquilidad.",
    rating: 5,
  },
  {
    name: "Mateo S.",
    location: "Perú",
    text: "El mejor servicio que encontré para Rust pirata. Pago único, sin sorpresas.",
    rating: 5,
  },
  {
    name: "Roberto L.",
    location: "Uruguay",
    text: "Configuró mi servidor con el seed que quise y los plugins que necesitaba. Todo personalizado.",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-20 px-4 bg-[#0a0a0a]" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-red-500 text-sm font-bold tracking-widest uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Opiniones reales de personas que compraron servidores o plugins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-red-500/20 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-red-500" fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
