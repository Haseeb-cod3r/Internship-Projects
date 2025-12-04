import React, { useState } from "react";

export const Faq = ({ title, content }) => {
  return (
    <details
      className="group border border-zinc-800 bg-[var(--bg)]  transition-colors duration-300 hover:bg-[#12a34a] mx-auto w-[800px]"
      
    >
      <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-[var(--text2)] select-none">
        <span>{title}</span>
        <span className="transition-transform duration-300 group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-6 text-[var(--text)] space-y-4 leading-relaxed hover:bg-[#12a34a]">
        {content}
      </div>
    </details>
  );
};
