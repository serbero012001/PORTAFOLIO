"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About"; // Nuevo diseño
import Stack from "../components/Stack"; // Rediseñado a Competencias
import Experience from "../components/Experience"; // Rediseñado con Formación
import Work from "../components/Workmm";
import Footer from "../components/Footer"; 

export default function Page() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        <div id="home">
          <Hero lang={lang} />
        </div>
        
        <div id="about">
          <About lang={lang} />
        </div>
        
        <div id="stack">
          <Stack lang={lang} />
        </div>
        
        <div id="experience">
          <Experience lang={lang} />
        </div>
        
        <div id="work">
          <Work lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}