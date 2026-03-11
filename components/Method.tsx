"use client";

export default function Method() {
  const steps = [
    { title: "Visión", desc: "Guion y Estrategia Creativa" },
    { title: "Captura", desc: "Producción y Dirección" },
    { title: "Alquimia", desc: "Post-producción y Color" },
  ];

  return (
    <section id="method" className="py-32 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-[#D90429]">Método</h2>
      <div className="flex flex-col md:flex-row gap-12">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 text-center">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5F5] mb-4">{s.title}</h3>
            <p className="text-[#F5F5F5]/80 text-lg md:text-xl">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}