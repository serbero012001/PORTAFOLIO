"use client";
import { motion } from "framer-motion";

export default function Stack({ lang }: { lang: "es" | "en" }) {
  const areas = [
    {
      id: "01",
      title: lang === "es" ? "DISEÑO Y COMUNICACIÓN VISUAL" : "DESIGN & VISUAL COMMUNICATION",
      desc: lang === "es" ? "Creación de piezas gráficas y desarrollo de recursos visuales orientados a comunicar mensajes de manera clara y coherente con la identidad de una marca." : "Creation of graphic pieces and development of visual resources aimed at communicating messages clearly and coherently with a brand's identity."
    },
    {
      id: "02",
      title: lang === "es" ? "PRODUCCIÓN AUDIOVISUAL" : "AUDIOVISUAL PRODUCTION",
      desc: lang === "es" ? "Experiencia en procesos de grabación y fotografía, preparación de material, operación de cámara y participación en las diferentes etapas de producción de contenidos." : "Experience in recording and photography processes, material preparation, camera operation, and participation in different stages of content production."
    },
    {
      id: "03",
      title: lang === "es" ? "EDICIÓN Y POSTPRODUCCIÓN" : "EDITING & POST-PRODUCTION",
      desc: lang === "es" ? "Organización de material, montaje, edición y finalización de piezas audiovisuales para distintos formatos y canales digitales." : "Material organization, assembly, editing, and finalization of audiovisual pieces for different formats and digital channels."
    },
    {
      id: "04",
      title: lang === "es" ? "MOTION GRAPHICS" : "MOTION GRAPHICS",
      desc: lang === "es" ? "Animación gráfica y desarrollo de recursos visuales en movimiento para complementar y fortalecer la comunicación audiovisual." : "Graphic animation and development of visual resources in motion to complement and strengthen audiovisual communication."
    },
    {
      id: "05",
      title: lang === "es" ? "DISEÑO WEB Y SOLUCIONES DIGITALES" : "WEB DESIGN & DIGITAL SOLUTIONS",
      desc: lang === "es" ? "Diseño, estructuración y mejora de interfaces web. Exploración de herramientas de inteligencia artificial como apoyo para desarrollar y optimizar soluciones." : "Design, structuring, and improvement of web interfaces. Exploration of AI tools as support to develop and optimize solutions."
    },
    {
      id: "06",
      title: lang === "es" ? "GESTIÓN DE CONTENIDO DIGITAL" : "DIGITAL CONTENT MANAGEMENT",
      desc: lang === "es" ? "Publicación y seguimiento de contenidos en redes sociales, con revisión de estadísticas de interacción y apoyo a la continuidad de la comunicación digital." : "Publishing and monitoring of content on social media, reviewing interaction statistics, and supporting the continuity of digital communication."
    }
  ];

  return (
    <section id="stack" className="py-24 md:py-40 bg-[#050505] px-6 md:px-20 border-t border-white/5">
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#D90429]/20 pb-6 gap-4">
          <h3 className="text-[10px] md:text-xs font-mono text-[#D90429] tracking-[0.5em] uppercase font-black">
            {lang === "es" ? "ÁREAS DE ESPECIALIZACIÓN" : "AREAS OF EXPERTISE"}
          </h3>
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
            {lang === "es" ? "Competencias técnicas" : "Technical skills"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {areas.map((area, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col border-t border-white/5 pt-6"
            >
              <span className="text-[#D90429] font-mono text-xs font-black mb-4">
                [ {area.id} ]
              </span>
              <h4 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4 tracking-tighter uppercase group-hover:text-[#D90429] transition-colors">
                {area.title}
              </h4>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed uppercase tracking-wider">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}