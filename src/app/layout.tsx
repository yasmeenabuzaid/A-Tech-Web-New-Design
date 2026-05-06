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
  description: "Scale your operations with A-Tech's Unified Business OS. We build advanced ERP, Smart POS, and bespoke software engineering solutions for high-growth enterprises.",
  icons: {
    icon: '/app-icon-v2.png',
    apple: '/app-icon-v2.png', 
  },
  keywords: [
    "Enterprise ERP", 
    "Smart POS Systems", 
    "Retail Technology", 
    "Custom Software Engineering", 
    "Business Automation OS", 
    "Unified Commerce",
    "Digital Transformation",
    "SaaS Development"
  ],
  creator: "A-Tech Workspace",
  publisher: "A-Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "A-Tech | Enterprise Software & Unified OS",
    description: "Centralize your operations with A-Tech. Integrating advanced ERP, POS, and custom software architecture to drive growth and market dominance.",
    url: "https://atech-workspace.com",
    siteName: "A-Tech",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "A-Tech | Engineering the Future of Business",
    description: "Scale faster with A-Tech. Bespoke software engineering, advanced ERP, and Smart POS solutions built for ultimate enterprise growth.",
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