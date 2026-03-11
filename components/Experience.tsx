"use client";

export default function Experience() {
  const data = [
    { year: "2021", company: "URBASER", role: "Productor In-house (Soacha)" },
    { year: "2022-2023", company: "Freelance", role: "Proyectos independientes" },
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 text-[#D90429]">Trayectoria</h2>
      <div className="flex flex-col gap-12">
        {data.map((exp, i) => (
          <div key={i} className="flex items-start gap-6">
            <span className="text-[#D90429] font-bold text-3xl md:text-4xl">{exp.year}</span>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#F5F5F5]">{exp.company}</h3>
              <p className="text-[#F5F5F5]/80">{exp.role}</p>
            </div>
          </div>
        ))}
        <p className="mt-8 text-[#F5F5F5]/80 font-medium">
          +2 años creando narrativa visual de alto impacto
        </p>
      </div>
    </section>
  );
}