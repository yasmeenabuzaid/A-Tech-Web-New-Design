"use client";

import React from "react";

interface SelectionCardProps {
  field: string;
  value: string;
  title: string;
  icon: any;
  currentValue: string;
  handleSelection: (field: string, value: string) => void;
}

export const SelectionCard = ({ 
  field, 
  value, 
  title, 
  icon: Icon, 
  currentValue, 
  handleSelection 
}: SelectionCardProps) => {
  const isSelected = currentValue === value;
  
  return (
    <div 
      onClick={() => handleSelection(field, value)}
      className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center h-full relative overflow-hidden
        ${isSelected 
          ? "bg-[#9306FF] text-white shadow-[0_0_20px_rgba(147,6,255,0.4)] scale-[1.02]" 
          : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"}
      `}
    >
      <Icon size={28} className={`relative z-10 transition-colors duration-300 ${isSelected ? "text-white" : "text-gray-500"}`} />
      <span className="font-bold text-sm tracking-wide relative z-10">{title}</span>
    </div>
  );
};

// Constant classes to keep index.tsx clean
export const styles = {
  inputWrapperClasses: "relative mt-2",
  inputIconClasses: "absolute left-4 top-4 text-gray-500 peer-focus:text-[#9306FF] transition-colors duration-300",
  inputClasses: "peer w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 text-white placeholder-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-[#9306FF] transition-all duration-300 outline-none border-none",
  textareaClasses: "peer w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 text-white placeholder-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-[#9306FF] transition-all duration-300 outline-none resize-none border-none",
  labelClasses: "block text-sm font-semibold text-gray-300 tracking-wide",
};