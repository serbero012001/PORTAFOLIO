import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Alejandro Villa | Portfolio Premium",
  description: "Portafolio de Alejandro Villa, Productor Audiovisual y Multimedia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#050505] text-[#F5F5F5] font-sans transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}