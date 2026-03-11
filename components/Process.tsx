"use client";
import { motion } from "framer-motion";

const steps = [
  { step: "Pre-Producción", desc: "Planificación, guion y estrategia visual" },
  { step: "Producción", desc: "Rodaje, diseño y creación de contenidos" },
  { step: "Post-Producción", desc: "Edición, animación y finalización profesional" },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12">Cómo trabajo</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-[#111111] p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#FF0000]">{s.step}</h3>
            <p className="mt-2 text-[#F5F5F5]/80">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}