"use client";
import { motion } from "framer-motion";

const services = [
  { id: "01", title: "Estrategia de Contenidos", desc: "Planificación profesional para medios audiovisuales y redes sociales." },
  { id: "02", title: "Edición de Video Profesional", desc: "Post-producción completa con narrativa, color grading y motion graphics." },
  { id: "03", title: "Diseño de Identidad y Animación", desc: "Branding, diseño gráfico y animaciones para destacar visualmente." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 grid gap-16">
      {services.map((s) => (
        <motion.div
          key={s.id}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pl-24"
        >
          <span className="absolute left-0 top-0 text-6xl md:text-8xl font-bold text-[#FF0000]/20 font-serif">
            {s.id}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold">{s.title}</h3>
          <p className="mt-4 text-lg text-[#F5F5F5]/80 max-w-xl">{s.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}