import "./globals.css";
import { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Alejandro Villa | Portfolio Premium",
  description: "Portafolio de Alejandro Villa, Productor Audiovisual y Multimedia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] font-sans transition-colors duration-500 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}