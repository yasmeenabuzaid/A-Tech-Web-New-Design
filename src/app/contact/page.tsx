"use client";

import { ContactHero } from "../../components/contactUs/contactHero";
import { ContactInfo } from "../../components/contactUs/contactInfo";
import { ContactForm } from "../../components/contactUs/contactForm";
import { ContactOptions } from "../../components/contactUs/contactOptions";

export function Contact() {
  return (
    <div className="min-h-screen text-white font-sans relative">
      <ContactHero />
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 text-white">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactOptions />
    </div>
  );
}

export default Contact;