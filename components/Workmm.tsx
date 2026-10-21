"use client";
import Link from "next/link";

export default function Work({ lang }: { lang: "es" | "en" }) {
  const t = {
    es: {
      line1: "MIS",
      line2: "PROYECTOS",
      desc: "Una selección de trabajos que combinan narrativa, dirección y ejecución técnica.",
      cta: "VER TODOS LOS PROYECTOS",
      view: "VER DETALLES"
    },
    en: {
      line1: "MY",
      line2: "PROJECTS",
      desc: "A selection of works that combine narrative, direction, and technical execution.",
      cta: "VIEW ALL PROJECTS",
      view: "VIEW DETAILS"
    }
  };

  
  const featured = [
    { 
      id: 1, 
      title: "NÚCLEO", 
      img: "/videos/teaser-nucleo.mp4", 
      link: "/proyectos/nucleo" 
    },
    { 
      id: 2, 
      title: "ESTA VEZ SÍ", 
      img: "/videos/esta-vez-si.mp4", 
      link: "/proyectos/esta-vez-si" 
    },
    { 
      id: 3, 
      title: "OTRA VEZ", 
      img: "/videos/otra-vez.mp4", 
      link: "/proyectos/otra-vez" 
    },
  ];

  return (
    // Añadimos overflow-hidden para evitar scroll horizontal en móviles
    <section id="work" className="py-20 md:py-32 bg-[#050505] px-6 md:px-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA LIMPIA (Sin metadata) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="w-full">
            <h2 className="flex flex-col items-start">
              <span className="text-5xl md:text-7xl font-serif font-bold text-white leading-none tracking-tighter uppercase">
                {t[lang].line1}
              </span>
              {/* Usamos text-[13vw] para que en móvil se ajuste perfecto al ancho de la pantalla */}
              <span className="text-[13vw] md:text-[8rem] font-serif font-black text-[#D90429] leading-[0.8] tracking-tighter uppercase mt-1">
                {t[lang].line2}
              </span>
            </h2>
          </div>
          <p className="text-white/50 text-xs md:text-sm max-w-sm uppercase tracking-widest leading-relaxed md:text-right">
            {t[lang].desc}
          </p>
        </div>

        {/* GRID DE PROYECTOS (3 COLUMNAS EN PC, 1 EN MÓVIL) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featured.map((proj) => (
            <Link 
              key={proj.id} 
              href={proj.link}
              className="group relative flex flex-col h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-[#D90429]/50 transition-all duration-500"
            >
              {/* VIDEO DE FONDO */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              >
                <source src={proj.img} type="video/mp4" />
              </video>
              
              {/* GRADIENTE OSCURO PARA LEER EL TEXTO */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 transition-opacity duration-500" />
              
              {/* TÍTULO Y ACCIÓN */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="text-4xl md:text-5xl font-serif font-black text-white uppercase tracking-tighter leading-none mb-4">
                  {proj.title}
                </h3>
                
                {/* INDICADOR DE ACCIÓN AL HACER HOVER (Oculto en móvil para no saturar) */}
                <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="font-mono text-[10px] text-white tracking-widest uppercase">
                    {t[lang].view}
                  </span>
                  <span className="text-[#D90429] text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTÓN FINAL */}
        <div className="flex justify-center">
          <Link 
            href="/proyectos" 
            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-white border border-[#D90429]/40 rounded-full transition-all duration-500 hover:border-[#D90429] shadow-[0_0_30px_rgba(217,4,41,0.1)]"
          >
            <span className="relative z-10 text-[10px] md:text-xs tracking-[0.3em] uppercase">
              {t[lang].cta}
            </span>
            <div className="absolute inset-0 bg-[#D90429] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>

      </div>
    </section>
  );
}