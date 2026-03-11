"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import perfil from "@/assets/foto.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h1 className="text-[5rem] md:text-[7rem] font-serif font-bold leading-[1.1] text-[#F5F5F5]">
          Productor Multimedia:{" "}
        </h1>
        <p className="italic mt-6 text-lg md:text-xl max-w-xl leading-relaxed text-[#D90429]/80">
          Dirección Creativa, Guion, Post-producción, Motion Graphics, Estrategia Visual.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 bottom-0 w-96 md:w-[32rem] h-96 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl"
      >
        <Image src={perfil} alt="Alejandro Villa" className="object-cover grayscale" priority />
      </motion.div>
    </section>
  );
}