import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stack from "../components/Stack";
import Experience from "../components/Experience";
import Process from "../components/Process";
import Work from "../components/Workmm";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stack />
        <Experience />
        <Process />
        <Work />
        <Contact />
      </main>
    </>
  );
}