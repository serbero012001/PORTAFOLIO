"use client";

export default function Contact({ lang }: { lang: "es" | "en" }) {
  return (
    <section id="contact" className="py-40 bg-[#D90429] text-black px-6 text-center border-t-8 border-black">
      <div className="max-w-4xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.4em] font-bold mb-8 block">¿Listo para la producción?</span>
        <h2 className="text-[8vw] font-serif font-black leading-[0.8] mb-12 tracking-tighter">
          {lang === "es" ? "IMPULSEMOS TU VISIÓN" : "DRIVE YOUR VISION"}
        </h2>
        <p className="font-mono text-sm mb-16 max-w-xl mx-auto font-bold opacity-80">
          {lang === "es" ? "Productor Multimedia enfocado en resultados de alto impacto visual." : "Multimedia Producer focused on high visual impact results."}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:av062712@gmail.com" className="bg-black text-[#D90429] px-10 py-4 font-bold text-[10px] tracking-widest hover:scale-105 transition-transform uppercase">Enviar Correo</a>
          <a href="#" className="border-2 border-black px-10 py-4 font-bold text-[10px] tracking-widest hover:bg-black hover:text-[#D90429] transition-all uppercase">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
