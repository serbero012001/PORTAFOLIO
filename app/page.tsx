"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stack from "../components/Stack";
import Experience from "../components/Experience";
import Process from "../components/Process";
import Work from "../components/Workmm";
import Contact from "../components/Contact";

export default function Page() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <>
      {/* Pasamos lang y la función para cambiarlo al Navbar */}
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <div id="home">
          <Hero lang={lang} />
        </div>
        <div id="method">
          <Services lang={lang} />
        </div>
        <Stack lang={lang} />
        <div id="experience">
          <Experience lang={lang} />
        </div>
        <div id="process">
          <Process lang={lang} />
        </div>
        <div id="work">
          <Work lang={lang} />
        </div>
        <div id="contact">
          <Contact lang={lang} />
        </div>
      </main>
    </>
  );
}
