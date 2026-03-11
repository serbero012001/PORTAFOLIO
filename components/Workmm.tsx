"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Importaciones corregidas con alias @
import diseno1 from "@/assets/work/diseno1.jpg";
import diseno2 from "@/assets/work/diseno2.jpg";
import diseno3 from "@/assets/work/diseno3.jpg";

const trabajos = [
  { tipo: "Diseño", titulo: "Banner Promocional", img: diseno1 },
  { tipo: "Diseño", titulo: "Landing Page Cliente", img: diseno2 },
  { tipo: "Diseño", titulo: "Branding Identidad", img: diseno3 },
  // Aquí puedes añadir más cuando tengas los archivos físicos
];

const filtros = ["Todos", "Dirección", "Edición", "Motion", "Diseño"];

export default function Work() {
  const [filter, setFilter] = useState("Todos");
  
  const trabajosFiltrados = filter === "Todos" 
    ? trabajos 
    : trabajos.filter((t) => t.tipo === filter);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#050505]">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-6xl font-serif font-bold mb-12 text-[#D90429]"
      >
        Proyectos
      </motion.h2>

      {/* Barra de Filtros */}
      <div className="flex gap-3 mb-16 flex-wrap">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              filter === f 
                ? "bg-[#D90429] border-[#D90429] text-white shadow-[0_0_15px_rgba(217,4,41,0.4)]" 
                : "border-white/20 text-white/60 hover:border-[#D90429] hover:text-[#D90429]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos con tamaño controlado */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {trabajosFiltrados.map((t, i) => (
            <motion.div
              key={t.titulo + i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              // TAMAÑO CONTROLADO: h-[400px] evita que sean gigantes
              className="group relative h-[400px] w-full overflow-hidden rounded-xl cursor-pointer bg-[#111] border border-white/5"
            >
              <Image 
                src={t.img} 
                alt={t.titulo} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
              />
              
              {/* Overlay de información (Estilo Cine) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-[#D90429] text-xs font-black uppercase tracking-[0.2em] mb-2">
                  {t.tipo}
                </p>
                <h3 className="text-white text-2xl font-serif font-bold leading-tight">
                  {t.titulo}
                </h3>
                <div className="w-12 h-[2px] bg-[#D90429] mt-4" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Mensaje si no hay proyectos en esa categoría */}
      {trabajosFiltrados.length === 0 && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-white/40 text-center py-20 italic"
        >
          Próximamente más proyectos de {filter}...
        </motion.p>
      )}
    </section>
  );
}
