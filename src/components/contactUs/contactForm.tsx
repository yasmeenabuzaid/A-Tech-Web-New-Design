"use client";

import React, { useState, FC, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import backendConector from "../../services/connectors/backendConector";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: "custom" | "demo";
  message: string;
}

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "custom",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      interest: e.target.value as "custom" | "demo",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (backendConector && backendConector.sendContactForm) {
        const response = await backendConector.sendContactForm(formData);
        if (response.data.success) {
          setSubmitted(true);
        } else {
          alert("Something went wrong");
        }
      } else {
        console.log("Form Data (Simulation):", formData);
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border bg-white/5 border-gray-700 text-white placeholder-gray-500 focus:border-[#9306FF] focus:ring-1 focus:ring-[#9306FF] focus:outline-none transition-all duration-200 outline-none";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-200";

  return (
    <div className="lg:col-span-3 text-white font-sans p-4 sm:p-6 md:p-8 lg:p-0">
      <div
        className="bg-[#0B101E] rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-800 relative overflow-hidden"
        style={{ borderTop: `4px solid #9306FF` }}
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9306FF] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="Acme Corporation"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="john@acme.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClasses}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 text-sm font-medium text-gray-200">
                  I&apos;m interested in: *
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group ${
                      formData.interest === "custom"
                        ? "border-[#9306FF] bg-[#9306FF]/10 shadow-lg shadow-[#9306FF]/5"
                        : "border-gray-700 bg-white/5 hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value="custom"
                      checked={formData.interest === "custom"}
                      onChange={handleRadioChange}
                      className="w-5 h-5 mr-4 form-radio accent-[#9306FF] transition-transform group-hover:scale-110"
                    />
                    <div>
                      <div className="font-semibold text-white text-base">
                        Custom Software Development
                      </div>
                      <div className="text-sm text-gray-400 font-light">
                        Build a bespoke solution
                      </div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group ${
                      formData.interest === "demo"
                        ? "border-[#9306FF] bg-[#9306FF]/10 shadow-lg shadow-[#9306FF]/5"
                        : "border-gray-700 bg-white/5 hover:border-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value="demo"
                      checked={formData.interest === "demo"}
                      onChange={handleRadioChange}
                      className="w-5 h-5 mr-4 form-radio accent-[#9306FF] transition-transform group-hover:scale-110"
                    />
                    <div>
                      <div className="font-semibold text-white text-base">
                        POS/ERP Platform Demo
                      </div>
                      <div className="text-sm text-gray-400 font-light">
                        See our product in action
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  placeholder="Describe your business needs, challenges, and what you're hoping to achieve..."
                />
              </div>

              <div className="pt-4 flex flex-col items-center gap-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-[#9306FF]/30 active:scale-[0.98]"
                  style={{ backgroundColor: "#9306FF" }}
                >
                  <span className="text-base">Send Message</span>
                  <Send
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <p className="text-sm text-gray-500 text-center font-light pt-2 max-w-md">
                  By submitting this form, you agree to our privacy policy.
                  We&apos;ll never share your information.
                </p>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-16 relative z-10 flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#9306FF]/20 ring-4 ring-[#9306FF]/10"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <CheckCircle size={48} style={{ color: "#d8b4ff" }} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              Thank You!
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md font-light leading-relaxed">
              We&apos;ve received your message and our team will be in touch
              within{" "}
              <span className="font-semibold text-[#d8b4ff]">24 hours</span>.
            </p>
            <p className="text-base text-gray-500 mb-10">
              Check your inbox for a confirmation email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full px-8 py-3 rounded-xl border-2 transition-all duration-300 hover:bg-[#9306FF] hover:text-white transform hover:scale-105 active:scale-95 text-base font-medium"
              style={{ borderColor: "#9306FF", color: "#d8b4ff" }}
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
};