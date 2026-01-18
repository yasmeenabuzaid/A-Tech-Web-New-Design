"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="lg:col-span-2">
      <div className="sticky top-24">
        <h2 className="text-3xl mb-6" style={{ color: "#031338" }}>
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8">
          We&apos;re excited to learn about your project. Our team typically responds
          within a few hours during business hours.
        </p>

        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <Mail size={20} style={{ color: "#9306FF" }} />
            </div>
            <div>
              <h4 className="mb-1" style={{ color: "#031338" }}>
                Email Us
              </h4>
              <p className="text-gray-600">support@a-tech.dev</p>
              <p className="text-sm text-gray-500">
                We&apos;ll respond within 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <Phone size={20} style={{ color: "#9306FF" }} />
            </div>
            <div>
              <h4 className="mb-1" style={{ color: "#031338" }}>
                Call Us
              </h4>
              <p className="text-gray-600">+962779300014</p>
              <p className="text-gray-600">+962771016006</p>
              <p className="text-gray-600">+962795240885</p>
              <p className="text-sm text-gray-500">Sun-Thu</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <MapPin size={20} style={{ color: "#9306FF" }} />
            </div>
            <div>
              <h4 className="mb-1" style={{ color: "#031338" }}>
                Visit Us
              </h4>
              <p className="text-gray-600">
                Almadina Almonawara Street, Alsa&apos;ad 5, office 309
              </p>
              <p className="text-gray-600">Jordan, Amman</p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4747214838567!2d35.86469021155921!3d31.988636073894686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1544cb3015f%3A0x13a42b4e25f64d8a!2sA-tech!5e1!3m2!1sen!2sjo!4v1765843855103!5m2!1sen!2sjo"
            width="600"
            className="w-full h-full flex items-center justify-center text-gray-400"
            style={{
              backgroundColor: "rgba(147, 6, 255, 0.1)",
              border: 0,
            }}
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}