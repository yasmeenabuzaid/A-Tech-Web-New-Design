import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import BackgroundEngine from "../components/backgroundEngine";
import AdvancedCursor from "../components/advancedCursor";
import FloatingWidgets from "./layout/floatingWidgets"; 

export const metadata: Metadata = {
  title: {
    default: "A-Tech ",
    template: "%s | A-Tech"
  },
  description: "Transform your business with A-Tech's unified ERP and Smart POS ecosystem. Custom software engineering designed for high-scale retail, hospitality, and enterprise growth.",
  keywords: ["ERP Systems", "Smart POS", "Retail Software", "Custom Software Engineering", "Business Automation", "Unified Commerce"],
  creator: "A-Tech Workspace",
  publisher: "A-Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "A-Tech | Unified Business OS",
    description: "The complete ecosystem for modern business: Inventory, POS, and Finance in one loop.",
    url: "https://atech-workspace.com",
    siteName: "A-Tech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Tech | Unified Business OS",
    description: "Build exactly what your business needs with our enterprise-grade solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-[#9306FF]/30 selection:text-white">
        <AdvancedCursor />
        <BackgroundEngine />
        
        <Header />
        
        <main className="relative z-10">
          {children}
        </main>
        
        <Footer />
        
        <FloatingWidgets />
        
      </body>
    </html>
  );
}