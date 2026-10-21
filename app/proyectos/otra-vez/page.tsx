"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function OtraVezPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#D90429]">
      
      {/* NAVBAR SIMPLE */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl px-6 py-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/proyectos" className="flex items-center gap-2 group">
            <span className="text-white/40 group-hover:text-white transition-colors text-xl">←</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors uppercase font-bold">
              VOLVER A PROYECTOS
            </span>
          </Link>
          <span className="font-mono text-[10px] text-[#D90429] tracking-widest font-black uppercase">
            OTRA VEZ / 2026
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        
        {/* HERO DEL PROYECTO */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-[#D90429] font-mono text-xs tracking-[0.5em] uppercase font-black block mb-4">
              CORTOMETRAJE / DRAMA
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
              OTRA VEZ
            </h1>
            <h2 className="text-xl md:text-3xl font-serif text-white/60 uppercase tracking-widest">
              La trampa de la segunda oportunidad
            </h2>
          </motion.div>

          {/* VIDEO PRINCIPAL */}
          <div className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden rounded-sm mb-16">
            <video controls preload="metadata" playsInline className="w-full h-full object-cover">
              <source src="/videos/otra-vez.mp4" type="video/mp4" />
            </video>
          </div>

          {/* INFORMACIÓN Y DETALLES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 border-b border-white/10 pb-4">
                SOBRE EL PROYECTO
              </h3>
              <p className="text-white/60 leading-relaxed uppercase text-xs tracking-wider mb-6">
                Un hombre convencido de que todo merece una segunda oportunidad. Su argumento es siempre el mismo: <em>"es que antes no lo hice bien"</em>. Se repite a sí mismo que en otra ocasión sí podrá controlarlo, que esta vez será distinto. Y así, sin darse cuenta, vuelve a caer.
              </p>
              <p className="text-white/60 leading-relaxed uppercase text-xs tracking-wider">
                Este cortometraje forma parte de una dupla narrativa junto a <strong className="text-[#D90429]">"ESTA VEZ SÍ"</strong>, explorando las dos caras de un mismo problema: la resistencia y la recaída.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">MI ROL</h4>
                <p className="font-bold text-sm uppercase">Director</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">GÉNERO</h4>
                <p className="font-bold text-sm uppercase">Drama / Psicológico</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">DURACIÓN</h4>
                <p className="font-bold text-sm uppercase">01:02</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">UBICACIÓN</h4>
                <p className="font-bold text-sm uppercase">Soacha, Cundinamarca</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">AÑO</h4>
                <p className="font-bold text-sm uppercase">2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* NOTA DE DIRECCIÓN */}
        <section className="mb-20 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-sm">
          <h3 className="text-xl font-bold uppercase tracking-tighter mb-6 border-b border-white/10 pb-4">
            NOTA DE DIRECCIÓN
          </h3>
          <p className="text-white/60 leading-relaxed uppercase text-xs tracking-wider italic">
            "La frase 'es que antes no lo hice bien' es la mentira más grande que se cuenta un ludópata a sí mismo. Este corto es la recaída, el momento en el que la excusa se vuelve más fuerte que la razón. Es el 'después' del otro corto."
          </p>
          <p className="text-[#D90429] font-mono text-[10px] tracking-widest uppercase font-black mt-6">
            — Alejandro Villa, Director
          </p>
        </section>

        {/* ENLACE AL PROYECTO COMPAÑERO */}
        <section className="text-center border-t border-white/10 pt-16">
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] block mb-4">
            Proyecto compañero
          </span>
          <Link 
            href="/proyectos/esta-vez-si"
            className="inline-flex items-center gap-4 border border-white/10 px-8 py-4 hover:border-[#D90429] hover:bg-[#D90429]/5 transition-all group"
          >
            <span className="font-mono text-xs text-white uppercase tracking-widest group-hover:text-[#D90429]">
              VER "ESTA VEZ SÍ"
            </span>
            <span className="text-[#D90429] group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </section>

      </main>
      <Footer lang="es" />
    </div>
  );
}