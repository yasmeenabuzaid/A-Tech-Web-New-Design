"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import backendConector from "../../services/connectors/backendConector";
export function Contact() {
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
        <div className="min-h-screen">
            {/* Hero */}
            <section
                className="text-white py-20"
                style={{ backgroundColor: "#031338" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl mb-6">
                            Let's Build Something{" "}
                            <span style={{ color: "#9306FF" }}>
                                Extraordinary
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Whether you need a custom solution or want to
                            explore our ERP/POS platform, we're here to help.
                            Fill out the form below and we'll be in touch within
                            24 hours.
                        </p>
                    </div>
                </div>
            </section>





            {/* Contact Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left Side - Contact Info */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <h2
                                    className="text-3xl mb-6"
                                    style={{ color: "#031338" }}
                                >
                                    Get In Touch
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    We're excited to learn about your project.
                                    Our team typically responds within a few
                                    hours during business hours.
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.1)",
                                            }}
                                        >
                                            <Mail
                                                size={20}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className="mb-1"
                                                style={{ color: "#031338" }}
                                            >
                                                Email Us
                                            </h4>
                                            <p className="text-gray-600">
                                                support@a-tech.dev
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                We'll respond within 24 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.1)",
                                            }}
                                        >
                                            <Phone
                                                size={20}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className="mb-1"
                                                style={{ color: "#031338" }}
                                            >
                                                Call Us
                                            </h4>
                                            <p className="text-gray-600">
                                                +962779300014
                                            </p>
                                            <p className="text-gray-600">
                                                +962771016006
                                            </p>
                                            <p className="text-gray-600">
                                                +962795240885
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Sun-Thu
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.1)",
                                            }}
                                        >
                                            <MapPin
                                                size={20}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className="mb-1"
                                                style={{ color: "#031338" }}
                                            >
                                                Visit Us
                                            </h4>
                                            <p className="text-gray-600">
                                                {`Almadina Almonawara Street, Alsa'ad 5, office 309`}
                                            </p>
                                            <p className="text-gray-600">
                                                Jordan, Amman
                                            </p>
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
                                            backgroundColor:
                                                "rgba(147, 6, 255, 0.1)",
                                            border: 0,
                                        }}
                                        height="450"
                                        // allowfullscreen=""
                                        loading="lazy"
                                        // referrerpolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>










                        {/* Right Side - Form */}
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
                                                        style={{
                                                            color: "#031338",
                                                        }}
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
                                                                name: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                                                        placeholder="John Smith"
                                                    />
                                                </div>

                                                <div>
                                                    <label
                                                        className="block mb-2"
                                                        style={{
                                                            color: "#031338",
                                                        }}
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
                                                                company:
                                                                    e.target
                                                                        .value,
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
                                                        style={{
                                                            color: "#031338",
                                                        }}
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
                                                                email: e.target
                                                                    .value,
                                                            })
                                                        }
                                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#9306FF] focus:outline-none transition-colors"
                                                        placeholder="john@acme.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label
                                                        className="block mb-2"
                                                        style={{
                                                            color: "#031338",
                                                        }}
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) =>
                                                            setFormData({
                                                                ...formData,
                                                                phone: e.target
                                                                    .value,
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
                                                    I'm interested in: *
                                                </label>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <label
                                                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                                            formData.interest ===
                                                            "custom"
                                                                ? "border-[#9306FF] bg-purple-50"
                                                                : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="interest"
                                                            value="custom"
                                                            checked={
                                                                formData.interest ===
                                                                "custom"
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    interest:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className="mr-3"
                                                            style={{
                                                                accentColor:
                                                                    "#9306FF",
                                                            }}
                                                        />
                                                        <div>
                                                            <div
                                                                style={{
                                                                    color: "#031338",
                                                                }}
                                                            >
                                                                Custom Software
                                                                Development
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                Build a bespoke
                                                                solution
                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label
                                                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                                            formData.interest ===
                                                            "demo"
                                                                ? "border-[#9306FF] bg-purple-50"
                                                                : "border-gray-200 hover:border-gray-300"
                                                        }`}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="interest"
                                                            value="demo"
                                                            checked={
                                                                formData.interest ===
                                                                "demo"
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    interest:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            className="mr-3"
                                                            style={{
                                                                accentColor:
                                                                    "#9306FF",
                                                            }}
                                                        />
                                                        <div>
                                                            <div
                                                                style={{
                                                                    color: "#031338",
                                                                }}
                                                            >
                                                                POS/ERP Platform
                                                                Demo
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                See our product
                                                                in action
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
                                                            message:
                                                                e.target.value,
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
                                                style={{
                                                    backgroundColor: "#9306FF",
                                                }}
                                            >
                                                <span>Send Message</span>
                                                <Send
                                                    size={20}
                                                    className="group-hover:translate-x-1 transition-transform"
                                                />
                                            </button>

                                            <p className="text-sm text-gray-500 text-center">
                                                By submitting this form, you
                                                agree to our privacy policy.
                                                We'll never share your
                                                information.
                                            </p>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center py-12">
                                        <div
                                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                            style={{
                                                backgroundColor:
                                                    "rgba(147, 6, 255, 0.1)",
                                            }}
                                        >
                                            <CheckCircle
                                                size={40}
                                                style={{ color: "#9306FF" }}
                                            />
                                        </div>
                                        <h3
                                            className="text-3xl mb-4"
                                            style={{ color: "#031338" }}
                                        >
                                            Thank You!
                                        </h3>
                                        <p className="text-xl text-gray-600 mb-6">
                                            We've received your message and will
                                            be in touch within 24 hours.
                                        </p>
                                        <p className="text-gray-500">
                                            Check your inbox for a confirmation
                                            email with next steps.
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




















                    </div>
                </div>
            </section>











            {/* Quick Contact Options */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl mb-4"
                            style={{ color: "#031338" }}
                        >
                            Other Ways to Connect
                        </h2>
                        <p className="text-xl text-gray-600">
                            Choose the method that works best for you
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-xl bg-gray-50">
                            <h3
                                className="text-xl mb-3"
                                style={{ color: "#031338" }}
                            >
                                Live Chat
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Get instant answers from our team during
                                business hours
                            </p>
                            <button
                                className="px-6 py-3 rounded-lg text-white transition-all hover:shadow-lg"
                                style={{ backgroundColor: "#9306FF" }}
                            >
                                Start Chat
                            </button>
                        </div>

                        <div className="text-center p-8 rounded-xl bg-gray-50">
                            <h3
                                className="text-xl mb-3"
                                style={{ color: "#031338" }}
                            >
                                Schedule a Call
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Book a time that works for your schedule
                            </p>
                            <button
                                className="px-6 py-3 rounded-lg border-2 transition-all hover:bg-purple-50"
                                style={{
                                    borderColor: "#9306FF",
                                    color: "#9306FF",
                                }}
                            >
                                View Calendar
                            </button>
                        </div>

                        <div className="text-center p-8 rounded-xl bg-gray-50">
                            <h3
                                className="text-xl mb-3"
                                style={{ color: "#031338" }}
                            >
                                Knowledge Base
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Find answers in our comprehensive documentation
                            </p>
                            <button
                                className="px-6 py-3 rounded-lg border-2 transition-all hover:bg-purple-50"
                                style={{
                                    borderColor: "#9306FF",
                                    color: "#9306FF",
                                }}
                            >
                                Browse Docs
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;