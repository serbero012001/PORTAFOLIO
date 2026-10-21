"use client";
import { motion } from "framer-motion";

export default function Experience({ lang }: { lang: "es" | "en" }) {
  const experiences = [
    {
      type: "work",
      date: "2024 — 2025",
      title: "URBASER",
      role: lang === "es" ? "PRODUCCIÓN MULTIMEDIA" : "MULTIMEDIA PRODUCTION",
      desc: lang === "es" ? "Seguimiento de redes sociales, producción de contenido multimedia, preparación de jornadas de grabación y fotografía, edición, postproducción y publicación de contenidos." : "Social media monitoring, multimedia content production, preparation of recording and photography sessions, editing, post-production, and content publishing."
    },
    {
      type: "work",
      date: "2023 — Presente",
      title: "FREELANCE",
      role: lang === "es" ? "PRODUCTOR VISUAL CREATIVO" : "CREATIVE VISUAL PRODUCER",
      desc: lang === "es" ? "Trabajo independiente en diseño gráfico, edición audiovisual, motion graphics, diseño web y creación de soluciones digitales con IA. Adaptación a necesidades concretas de clientes." : "Independent work in graphic design, audiovisual editing, motion graphics, web design, and creating digital solutions with AI. Adapting to specific client needs."
    },
    {
      type: "education",
      date: "Actualidad",
      title: "UNIVERSIDAD CUN",
      role: lang === "es" ? "DIRECCIÓN Y PRODUCCIÓN AUDIOVISUAL" : "AUDIOVISUAL DIRECTION & PRODUCTION",
      desc: lang === "es" ? "Cursando actualmente séptimo semestre. Formación enfocada en la conceptualización, dirección y ejecución de proyectos audiovisuales." : "Currently in seventh semester. Education focused on the conceptualization, direction, and execution of audiovisual projects."
    },
    {
      type: "education",
      date: "Graduado",
      title: "SENA",
      role: lang === "es" ? "TECNOLOGÍA EN PRODUCCIÓN MULTIMEDIA" : "MULTIMEDIA PRODUCTION TECHNOLOGY",
      desc: lang === "es" ? "Programa tecnológico de 2 años y medio. Exploración de disciplinas creativas como diseño, video, animación y desarrollo web." : "Two-and-a-half-year technological program. Exploration of creative disciplines such as design, video, animation, and web development."
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-20 md:mb-32 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white tracking-tighter uppercase leading-none">
            {lang === "es" ? "TRAYECTORIA Y FORMACIÓN" : "EXPERIENCE & EDUCATION"}
          </h2>
          <div className="w-12 h-[3px] bg-[#D90429] mt-4" />
        </div>

        <div className="relative space-y-20 md:space-y-32">
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-[#D90429] via-white/10 to-transparent hidden md:block" />

          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative md:pl-16 group"
            >
              <div className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full hidden md:block group-hover:scale-150 transition-transform ${exp.type === 'work' ? 'bg-[#D90429]' : 'bg-white'}`} />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#D90429] font-mono text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                    {exp.date}
                  </span>
                  <span className="text-white/30 font-mono text-[9px] uppercase tracking-widest border border-white/10 px-2 py-1">
                    {exp.type === 'work' ? (lang === "es" ? "EXPERIENCIA" : "WORK") : (lang === "es" ? "FORMACIÓN" : "EDUCATION")}
                  </span>
                </div>

                <h3 className="text-3xl md:text-6xl font-serif font-black text-white tracking-tighter uppercase leading-none">
                  {exp.title}
                </h3>
                
                <div className="max-w-2xl border-t border-white/5 pt-4 mt-2">
                  <h4 className="text-white/40 font-mono text-[9px] md:text-xs font-bold mb-3 tracking-widest uppercase">
                    {exp.role}
                  </h4>
                  <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed uppercase tracking-wider">
                    {exp.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}