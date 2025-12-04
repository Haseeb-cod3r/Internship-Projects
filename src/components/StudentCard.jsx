import React from "react";
import { Notebook } from "lucide-react";

export const StudentCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        group 
        relative 
        flex  
        w-[290px]
        h-[130px]  
        overflow-hidden 
        cursor-pointer 
        transition-all 
        duration-300 
        ease-out 
        hover:scale-105 
        bg-[var(--bgNav)]
       
      "
    >
      <div className="absolute inset-0 border border-[var(--brand)]/30  transition-colors duration-300 pointer-events-none z-20" />

      <div className="w-[100px] bg-[var(--bgCard)] flex items-center justify-center flex-shrink-0 relative z-10">
        <img
          src={icon}
          className="w-10 h-10 opacity-90 group-hover:scale-110 transition-transform duration-300"
          strokeWidth={1.5}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-4 bg-[var(--bgNav)] relative z-10">
        <h3 className="text-[var(--text2)] font-bold text-lg leading-tight mb-2 group-hover:text-[var(--brand)] transition-colors">
         {title}
        </h3>
        <div className="text-[var(--text)] text-sm font-normal leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};
