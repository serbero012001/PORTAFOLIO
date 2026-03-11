"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 text-center bg-[#050505]">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-[6rem] font-serif font-bold text-[#D90429] leading-tight max-w-7xl mx-auto"
      >
        ¿ESTÁS LISTO PARA CONTAR TU HISTORIA?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6"
      >
        <a
          href="mailto:av062712@gmail.com"
          className="px-8 py-4 border border-[#D90429] text-[#D90429] rounded-lg hover:bg-[#D90429]/20 transition"
        >
          Gmail
        </a>
        <a
          className="px-8 py-4 border border-[#D90429] text-[#D90429] rounded-lg hover:bg-[#D90429]/20 transition"
        >
          Telefono
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-villa-hern%C3%A1ndez-97063b325/"
          className="px-8 py-4 border border-[#D90429] text-[#D90429] rounded-lg hover:bg-[#D90429]/20 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}