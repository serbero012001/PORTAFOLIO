"use client";
import { motion } from "framer-motion";

import premiere from "@/assets/icons/premiere.svg";
import afterEffects from "@/assets/icons/aftereffects.svg";
import photoshop from "@/assets/icons/photoshop.svg";
import illustrator from "@/assets/icons/illustrator.svg";

const stack = [
  { name: "Premiere", icon: premiere.src },
  { name: "After Effects", icon: afterEffects.src },
  { name: "Photoshop", icon: photoshop.src },
  { name: "Illustrator", icon: illustrator.src },
];

export default function Stack() {
  return (
    <section id="stack" className="py-32 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-[#FF0000]">Stack & Herramientas</h2>
      <div className="flex flex-wrap gap-6">
        {stack.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 bg-[#111111] px-4 py-3 rounded-xl shadow-lg cursor-pointer hover:shadow-[#FF0000] hover:shadow-lg transition"
          >
            <img src={s.icon} alt={s.name} className="w-10 h-10 object-contain" />
            <span className="text-[#F5F5F5] font-semibold">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}