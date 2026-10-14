"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function NucleoProjectPage() {
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
            NÚCLEO / 2026
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
              EPK / VIDEOCLIP
            </span>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
              NÚCLEO
            </h1>
            <h2 className="text-xl md:text-3xl font-serif text-white/60 uppercase tracking-widest">
              GHOST × NASCAR
            </h2>
          </motion.div>

          {/* VIDEO PRINCIPAL */}
          <div className="relative w-full aspect-video bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden rounded-sm mb-16">
            <video controls preload="metadata" playsInline className="w-full h-full object-cover">
              <source src="/videos/teaser-nucleo.mp4" type="video/mp4" />
            </video>
          </div>

          {/* INFORMACIÓN Y DETALLES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 border-b border-white/10 pb-4">
                SOBRE EL PROYECTO
              </h3>
              <p className="text-white/60 leading-relaxed uppercase text-xs tracking-wider mb-6">
                Un viaje nocturno por Bogotá que contrasta la realidad cruda del ascenso con un universo digital distorsionado. El videoclip para 'NÚCLEO' de Ghost y Nascar explora la fama, la velocidad y la pérdida del control a través de una estética Glitch Core.
              </p>
              <p className="text-white/60 leading-relaxed uppercase text-xs tracking-wider">
                NÚCLEO nace de una propuesta performativa y autobiográfica que transforma espacios reales de Bogotá en parte de su narrativa. La noche, la calle, el movimiento y la ciudad construyen un universo donde la música y la identidad visual avanzan juntas.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">MI ROL</h4>
                <p className="font-bold text-sm uppercase">Operador de Cámara, Editor, Productor</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">GÉNERO</h4>
                <p className="font-bold text-sm uppercase">Trap / Future</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">DURACIÓN</h4>
                <p className="font-bold text-sm uppercase">02:52</p>
              </div>
              <div className="border-l-2 border-[#D90429] pl-4">
                <h4 className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1">UBICACIÓN</h4>
                <p className="font-bold text-sm uppercase">Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA BTS */}
        <section className="mb-24">
          <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">
            DETRÁS DE ESCENA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative aspect-square bg-[#111] border border-white/5 overflow-hidden rounded-sm group">
                <Image 
                  src={`/proyectos/epk-artistas/bts${num}.jpg`} 
                  alt={`Behind the scenes ${num}`}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>
        </section>

        {/* DESCARGA EPK */}
        <section className="bg-[#0a0a0a] border border-white/10 p-12 text-center rounded-sm">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
            MATERIAL DE PRENSA
          </h3>
          <p className="text-white/50 text-xs uppercase tracking-widest mb-8 max-w-lg mx-auto">
            Descarga el Electronic Press Kit completo con toda la información del proyecto, letras, y material visual en alta calidad.
          </p>
          <a 
            href="/docs/epk-videoclip.pdf" 
            target="_blank" 
            className="inline-block border-2 border-[#D90429] text-[#D90429] hover:bg-[#D90429] hover:text-black transition-all duration-300 py-4 px-12 font-mono text-xs tracking-[0.2em] font-bold uppercase rounded-full"
          >
            DESCARGAR EPK (PDF)
          </a>
        </section>

      </main>
      <Footer lang="es" />
    </div>
  );
}