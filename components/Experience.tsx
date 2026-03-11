"use client";

export default function Experience({ lang }: { lang: "es" | "en" }) {
  return (
    <section id="experience" className="py-32 px-6 md:px-20 bg-[#050505] flex flex-col md:flex-row gap-16 border-t border-white/5">
      <div className="md:w-1/4">
        <h2 className="text-4xl font-serif font-bold text-white border-l-4 border-[#D90429] pl-6 sticky top-40">
          {lang === "es" ? "TRAYECTORIA" : "EXPERIENCE"}
        </h2>
      </div>
      
      <div className="md:w-3/4 space-y-16">
        <div className="border-b border-white/10 pb-12 group">
          <span className="text-[#D90429] font-mono text-xs mb-4 block">[ 2024 - 2025 ]</span>
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:pl-4 transition-all italic">URBASER</h3>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            {lang === "es" ? "Producción Multimedia In-house. Identidad audiovisual sede Soacha." : "In-house Multimedia Production. Audiovisual identity Soacha branch."}
          </p>
        </div>
      </div>

      <div className="md:w-3/4 space-y-16">
        <div className="border-b border-white/10 pb-12 group">
          <span className="text-[#D90429] font-mono text-xs mb-4 block">[ 2023 - 2026 ]</span>
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:pl-4 transition-all italic">FREELANCE</h3>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            {lang === "es" ? "Sistemas visuales y contenido dinámico para proyectos independientes." : "In-house Multimedia Production. Audiovisual identity Soacha branch."}
          </p>
        </div>
      </div>
    </section>
  );
}
