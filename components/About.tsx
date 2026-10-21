"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About({ lang }: { lang: "es" | "en" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const t = {
    es: {
      title: "SOBRE MÍ",
      subtitle: "Mi recorrido creativo",
      p1: "Soy Alejandro Villa, profesional creativo y estudiante de Dirección y Producción Audiovisual. Combino mi formación académica en el SENA y la CUN con más de 4 años de experiencia práctica en diseño, edición y producción multimedia. Mi enfoque está en crear soluciones visuales que conecten con las marcas y su audiencia.",
      p2: "Mi interés por este campo nació a partir de una formación que despertó mi curiosidad por la comunicación visual y se convirtió progresivamente en una vocación. Posteriormente, cursé un programa tecnológico de Producción Multimedia, que me permitió explorar diferentes disciplinas creativas y comprender la relación entre imagen, narrativa y comunicación.",
      p3: "Durante ese proceso descubrí que el lenguaje audiovisual era uno de los pilares que conectaba gran parte de mis intereses. Por eso decidí continuar mi formación universitaria en Dirección y Producción Audiovisual.",
      p4: "Mi experiencia combina trabajo con clientes y proyectos freelance, además de experiencia laboral en el área de comunicación visual. Este recorrido me ha permitido desarrollar una visión transversal del proceso creativo: desde la planificación y conceptualización hasta la producción, la postproducción y la publicación de contenidos.",
      p5: "Me interesa seguir creciendo profesionalmente, aportar soluciones visuales bien pensadas y participar en proyectos donde la creatividad, la comunicación y la ejecución técnica trabajen en conjunto.",
      readMore: "LEER MÁS",
      readLess: "LEER MENOS",
      cta: "CONOCER MI EXPERIENCIA"
    },
    en: {
      title: "ABOUT ME",
      subtitle: "My creative journey",
      p1: "I'm Alejandro Villa, a creative professional and Audiovisual Direction and Production student. I combine my academic training at SENA and CUN with over 4 years of hands-on experience in design, editing, and multimedia production. My focus is on creating visual solutions that connect brands with their audience.",
      p2: "My interest in this field was born from an education that sparked my curiosity for visual communication and progressively became a vocation. Later, I completed a technological program in Multimedia Production, which allowed me to explore different creative disciplines and understand the relationship between image, narrative, and communication.",
      p3: "During that process, I discovered that audiovisual language was one of the pillars connecting most of my interests. That's why I decided to continue my university education in Audiovisual Direction and Production.",
      p4: "My experience combines work with clients and freelance projects, along with professional experience in the visual communication area. This journey has allowed me to develop a transversal vision of the creative process: from planning and conceptualization to production, post-production, and content publishing.",
      p5: "I am interested in continuing to grow professionally, providing well-thought-out visual solutions, and participating in projects where creativity, communication, and technical execution work together.",
      readMore: "READ MORE",
      readLess: "READ LESS",
      cta: "VIEW MY EXPERIENCE"
    }
  };

  return (
    <section id="about" className="py-24 md:py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Columna Izquierda: Título Fijo */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <span className="text-[#D90429] font-mono text-[10px] tracking-[0.5em] uppercase font-black block mb-4">
              {t[lang].subtitle}
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-white uppercase tracking-tighter leading-none mb-8">
              {t[lang].title}
            </h2>
            <a 
              href="#experience" 
              className="hidden lg:inline-flex items-center gap-3 text-white/50 hover:text-[#D90429] font-mono text-[11px] tracking-widest uppercase transition-colors group"
            >
              {t[lang].cta}
              <span className="group-hover:translate-x-2 transition-transform">↓</span>
            </a>
          </div>
        </div>

        {/* Columna Derecha: Texto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 flex flex-col gap-6 text-white/60 text-sm md:text-base leading-relaxed uppercase tracking-wider font-light"
        >
          {/* Párrafo siempre visible */}
          <p className="text-white text-lg md:text-xl font-medium leading-snug">{t[lang].p1}</p>

          {/* Contenido expandible */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden flex flex-col gap-6"
              >
                <p>{t[lang].p2}</p>
                <p>{t[lang].p3}</p>
                <p>{t[lang].p4}</p>
                <p className="text-white/80 border-l-2 border-[#D90429] pl-6 italic">{t[lang].p5}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón Leer Más / Leer Menos */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 self-start font-mono text-[11px] tracking-[0.2em] font-bold text-[#D90429] border-b border-[#D90429]/30 hover:border-[#D90429] pb-1 uppercase transition-colors"
          >
            {isExpanded ? t[lang].readLess : t[lang].readMore}
          </button>
        </motion.div>

      </div>
    </section>
  );
}