"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, CheckCircle, Code2, User, Mail, Phone, Building, 
  Target, List, Link as LinkIcon, Calendar, 
  DollarSign, MonitorSmartphone, LayoutTemplate,
  Loader2, ChevronRight, ChevronLeft
} from "lucide-react";

// Import sub-components
import { StepVisuals } from "./stepVisuals";
import { SelectionCard, styles } from "./formElements";

export default function CustomProjectPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", company: "",
    projectType: "web", budget: "", timeline: "flexible",
    description: "", coreFeatures: "", referenceLinks: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelection = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    if (step === 0) {
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) return false;
    }
    if (step === 1) {
      if (!formData.budget.trim()) return false;
    }
    if (step === 2) {
      if (!formData.description.trim() || !formData.coreFeatures.trim()) return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => s + 1);
    else alert("Please fill in all required fields (*) to continue.");
  };

  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/custom-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Server error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const formSteps = [
    { title: "Contact", subtitle: "Who are we partnering with?" },
    { title: "Scope", subtitle: "What are we building?" },
    { title: "Details", subtitle: "Let's dive into details." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#9306FF]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-[#9306FF]/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {!submitted ? (
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* --- LEFT SIDE: Sticky Description & Visuals --- */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit flex flex-col">
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                Start Your <span className="text-[#9306FF]">Masterpiece</span>
              </h1>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                This is where your vision takes shape. Tell us about your goals, scope, and technical needs. We will review your requirements and craft a tailored engineering roadmap.
              </p>

              <div className="h-64 hidden lg:block">
                <StepVisuals step={step} />
              </div>
            </div>

            {/* --- RIGHT SIDE: Seamless Form Wizard --- */}
            <div className="lg:w-2/3 flex flex-col">
              
              {/* TOP STEPPER */}
              <div className="flex items-center justify-between mb-16 relative">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -z-10 -translate-y-1/2 rounded-full"></div>
                <div 
                  className="absolute top-1/2 left-0 h-[2px] bg-[#9306FF] -z-10 -translate-y-1/2 rounded-full transition-all duration-500" 
                  style={{ width: `${(step / 2) * 100}%` }}
                ></div>

                {[0, 1, 2].map((i) => {
                  const isActive = step === i;
                  const isPassed = step > i;
                  return (
                    <div key={i} className="flex flex-col items-center gap-3 bg-[#030712] px-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                        ${isActive ? "bg-[#9306FF] text-white shadow-[0_0_20px_rgba(147,6,255,0.4)] scale-110" : 
                          isPassed ? "bg-[#9306FF]/50 text-white" : "bg-white/5 text-gray-500"}
                      `}>
                        {isPassed ? <CheckCircle size={16} /> : i + 1}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? "text-[#9306FF]" : "text-gray-500"}`}>
                        {formSteps[i].title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* FORM FIELDS */}
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-white mb-8">
                  {formSteps[step].subtitle}
                </h2>

                <AnimatePresence mode="wait">
                  
                  {/* STEP 0: Contact */}
                  {step === 0 && (
                    <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-6 flex-grow">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                        <div>
                          <label htmlFor="firstName" className={styles.labelClasses}>First Name *</label>
                          <div className={styles.inputWrapperClasses}>
                            <User size={18} className={styles.inputIconClasses} />
                            <input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleInputChange} className={styles.inputClasses} placeholder="John" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="lastName" className={styles.labelClasses}>Last Name *</label>
                          <div className={styles.inputWrapperClasses}>
                            <User size={18} className={styles.inputIconClasses} />
                            <input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleInputChange} className={styles.inputClasses} placeholder="Doe" />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="email" className={styles.labelClasses}>Email Address *</label>
                          <div className={styles.inputWrapperClasses}>
                            <Mail size={18} className={styles.inputIconClasses} />
                            <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className={styles.inputClasses} placeholder="john@company.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className={styles.labelClasses}>Phone (Optional)</label>
                          <div className={styles.inputWrapperClasses}>
                            <Phone size={18} className={styles.inputIconClasses} />
                            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className={styles.inputClasses} placeholder="+1 555 000 0000" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="company" className={styles.labelClasses}>Company (Optional)</label>
                          <div className={styles.inputWrapperClasses}>
                            <Building size={18} className={styles.inputIconClasses} />
                            <input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} className={styles.inputClasses} placeholder="Acme Corp" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 1: Scope */}
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-10 flex-grow">
                      <div>
                        <label className={styles.labelClasses}>What type of project is this? *</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <SelectionCard field="projectType" value="web" title="Web" icon={LayoutTemplate} currentValue={formData.projectType} handleSelection={handleSelection} />
                          <SelectionCard field="projectType" value="mobile" title="Mobile" icon={MonitorSmartphone} currentValue={formData.projectType} handleSelection={handleSelection} />
                          <SelectionCard field="projectType" value="erp" title="SaaS/ERP" icon={Code2} currentValue={formData.projectType} handleSelection={handleSelection} />
                          <SelectionCard field="projectType" value="other" title="Other" icon={Target} currentValue={formData.projectType} handleSelection={handleSelection} />
                        </div>
                      </div>

                      <div>
                        <label className={styles.labelClasses}>Target Timeline *</label>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <SelectionCard field="timeline" value="asap" title="ASAP" icon={Calendar} currentValue={formData.timeline} handleSelection={handleSelection} />
                          <SelectionCard field="timeline" value="1-3m" title="1-3 Months" icon={Calendar} currentValue={formData.timeline} handleSelection={handleSelection} />
                          <SelectionCard field="timeline" value="3-6m" title="3-6 Months" icon={Calendar} currentValue={formData.timeline} handleSelection={handleSelection} />
                          <SelectionCard field="timeline" value="flexible" title="Flexible" icon={Calendar} currentValue={formData.timeline} handleSelection={handleSelection} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="budget" className={styles.labelClasses}>Estimated Budget (USD) *</label>
                        <p className="text-xs text-gray-500 mt-1 font-light">Please provide a rough estimate of your investment.</p>
                        <div className={styles.inputWrapperClasses}>
                          <DollarSign size={18} className={styles.inputIconClasses} />
                          <input id="budget" name="budget" type="text" required value={formData.budget} onChange={handleInputChange} className={`${styles.inputClasses} text-lg font-medium`} placeholder="e.g., 10,000 - 15,000" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Technicals */}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="space-y-8 flex-grow">
                      <div>
                        <label htmlFor="description" className={styles.labelClasses}>Project Overview *</label>
                        <p className="text-xs text-gray-500 mt-1 font-light">What is the primary goal of this project?</p>
                        <div className={styles.inputWrapperClasses}>
                          <Target size={18} className={styles.inputIconClasses} />
                          <textarea id="description" name="description" required value={formData.description} onChange={handleInputChange} rows={3} className={styles.textareaClasses} placeholder="We want to build a platform that..."></textarea>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="coreFeatures" className={styles.labelClasses}>Core Features *</label>
                        <p className="text-xs text-gray-500 mt-1 font-light">List the main functionalities you need.</p>
                        <div className={styles.inputWrapperClasses}>
                          <List size={18} className={styles.inputIconClasses} />
                          <textarea id="coreFeatures" name="coreFeatures" required value={formData.coreFeatures} onChange={handleInputChange} rows={3} className={styles.textareaClasses} placeholder="- User Auth&#10;- Payment Integration..."></textarea>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="referenceLinks" className={styles.labelClasses}>Reference Links (Optional)</label>
                        <div className={styles.inputWrapperClasses}>
                          <LinkIcon size={18} className={styles.inputIconClasses} />
                          <textarea id="referenceLinks" name="referenceLinks" value={formData.referenceLinks} onChange={handleInputChange} rows={1} className={styles.textareaClasses} placeholder="https://competitor.com"></textarea>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Navigation Controls */}
                <div className="pt-12 mt-auto flex items-center justify-between border-t border-white/5">
                  {step > 0 ? (
                    <button type="button" onClick={prevStep} className="flex items-center gap-2 px-6 py-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                      <ChevronLeft size={18} /> Back
                    </button>
                  ) : <div></div>}

                  {step < 2 ? (
                    <button type="button" onClick={nextStep} className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#9306FF] text-white font-bold hover:shadow-[0_0_20px_rgba(147,6,255,0.4)] hover:-translate-y-1 transition-all">
                      Continue <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button type="submit" disabled={loading} className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#9306FF] text-white font-bold hover:shadow-[0_0_30px_rgba(147,6,255,0.5)] hover:-translate-y-1 transition-all disabled:opacity-70 disabled:transform-none">
                      {loading ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : <><Send size={18} /> Submit Project</>}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* --- SUCCESS STATE --- */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}
            className="w-full  rounded-[3rem] p-16 text-center relative z-10 flex flex-col items-center min-h-[600px] justify-center"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12, delay: 0.2 }} className="w-24 h-24 rounded-full flex items-center justify-center mb-8 bg-[#9306FF] shadow-[0_0_40px_rgba(147,6,255,0.5)] relative">
              <div className="absolute inset-0 bg-[#9306FF] rounded-full animate-ping opacity-50"></div>
              <CheckCircle size={40} className="text-white relative z-10" />
            </motion.div>
            <h3 className="text-5xl font-black mb-6 text-white tracking-tight">Mission <span className="text-[#9306FF]">Initiated.</span></h3>
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
              Thank you, <span className="text-white font-medium">{formData.firstName}</span>. We've securely received your project blueprints. Our architecture team will be in touch shortly.
            </p>
            <button onClick={() => {setSubmitted(false); setStep(0); setFormData({firstName: "", lastName: "", email: "", phone: "", company: "", projectType: "web", budget: "", timeline: "flexible", description: "", coreFeatures: "", referenceLinks: ""})}} className="px-8 py-4 rounded-full transition-all bg-white/5 hover:bg-[#9306FF] text-white font-semibold">
              Start New Brief
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}