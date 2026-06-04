import React from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Buenos Aires, Argentina",
    text: "la posta, le escribi a las 11 de la mañana y a las 2pm ya tenia el server 2275 andando. me guio por discord paso a paso porque yo era un queso con esto jaja. 10/10",
    rating: 5,
  },
  {
    name: "Diego R.",
    location: "CDMX, México",
    text: "ya habia comprado en otro lado y era todo mentira, el server se cayaba cada 2 dias. aca compre de nuevo y ya van 5 meses sin un solo crash. le escribo a cualquier hora y responde rapido, eso me sorprendio.",
    rating: 5,
  },
  {
    name: "Lucas P.",
    location: "Medellin, Colombia",
    text: "necesitaba un plugin custom que nadie me queria hacer. aca me lo armaron en 24 horas y me cobraron barato. ya le pedi como 3 cosas mas despues jaja, muy bueno el servicio",
    rating: 5,
  },
  {
    name: "Andres V.",
    location: "Santiago, Chile",
    text: "tenia dudas entre el 2275 y el 2388 y me ayudo a elegir. me explico todo bien y quedo el server andando con 30ms desde santiago. recomendado si no tenes idea",
    rating: 5,
  },
  {
    name: "Mateo S.",
    location: "Lima, Peru",
    text: "lo mejor es que no te suscriben a nada, pagas una vez y listo. ya hice 2 servidores con ellos, uno para mi y otro para mi hermano. los dos funcionan perfecto",
    rating: 5,
  },
  {
    name: "Roberto L.",
    location: "Montevideo, Uruguay",
    text: "queria un seed especifico y me lo configuro asi nomas. tambien me ayudo a poner los plugins de kits y la tienda. si no sabes nada de servidores de rust, te salva el tipo este",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className="py-24 bg-[#0a0a0a] border-t border-white/5" id="testimonios">
      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
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
            Gente que ya tiene su servidor armandose con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                &ldquo;{testimonial.text}&rdquo;
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
