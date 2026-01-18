"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import backendConector from "../../services/connectors/backendConector";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "custom",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await backendConector.sendContactForm(formData);

      if (response.data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="lg:col-span-3">
      <div
        className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        style={{ borderTop: `4px solid #9306FF` }}
      >
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name & Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block mb-2"
                    style={{ color: "#031338" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{ color: "#031338" }}
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        company: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                    placeholder="Acme Corporation"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block mb-2"
                    style={{ color: "#031338" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                    placeholder="john@acme.com"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{ color: "#031338" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Interest Selection */}
              <div>
            <label
  className="block mb-3"
  style={{ color: "#031338" }}
>
  I&apos;m interested in: *
</label>

                <div className="grid md:grid-cols-2 gap-4">
                  <label
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.interest === "custom"
                        ? "border-[#9306FF] bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value="custom"
                      checked={formData.interest === "custom"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          interest: e.target.value,
                        })
                      }
                      className="mr-3"
                      style={{ accentColor: "#9306FF" }}
                    />
                    <div>
                      <div style={{ color: "#031338" }}>
                        Custom Software Development
                      </div>
                      <div className="text-sm text-gray-500">
                        Build a bespoke solution
                      </div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.interest === "demo"
                        ? "border-[#9306FF] bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="interest"
                      value="demo"
                      checked={formData.interest === "demo"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          interest: e.target.value,
                        })
                      }
                      className="mr-3"
                      style={{ accentColor: "#9306FF" }}
                    />
                    <div>
                      <div style={{ color: "#031338" }}>
                        POS/ERP Platform Demo
                      </div>
                      <div className="text-sm text-gray-500">
                        See our product in action
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block mb-2"
                  style={{ color: "#031338" }}
                >
                  Tell us about your project *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors resize-none"
                  placeholder="Describe your business needs, challenges, and what you're hoping to achieve..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg text-white flex items-center justify-center gap-3 transition-all hover:shadow-xl group"
                style={{ backgroundColor: "#9306FF" }}
              >
                <span>Send Message</span>
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy.
                We&apos;ll never share your information.
              </p>
            </div>
          </form>
        ) : (
          <div className="text-center py-12">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(147, 6, 255, 0.1)" }}
            >
              <CheckCircle size={40} style={{ color: "#9306FF" }} />
            </div>
            <h3 className="text-3xl mb-4" style={{ color: "#031338" }}>
              Thank You!
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;ve received your message and will be in touch within 24
              hours.
            </p>
            <p className="text-gray-500">
              Check your inbox for a confirmation email with next steps.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 px-6 py-3 rounded-lg border-2 transition-all hover:bg-purple-50"
              style={{
                borderColor: "#9306FF",
                color: "#9306FF",
              }}
            >
              Submit Another Request
            </button>
          </div>
        )}
      </div>
    </div>
  );
}