import React from "react";

export const ProgramsCard = ({ title, description }) => {
  return (
    <div className="w-full mx-auto flex flex-col items-center gap-12 bg-[var(--bg)] px-20 max-md:px-10">
      <div
        className="
          w-full 
          relative 
          overflow-hidden 
          rounded-[2rem] 
          bg-gradient-to-br from-[#688a76] to-[#3d5246] 
          px-6 py-16 
          md:px-20 md:py-24 
          text-center 
          shadow-lg
          flex flex-col items-center justify-center
          max-w-[1300px]
          mt-20
        "
        style={{
          backgroundImage: `radial-gradient(circle at top left, #7da58d 0%, #4a6355 50%, #2f3d35 100%)`,
        }}
      >
        <h1 className="text-[var(--text2)] text-5xl md:text-6xl font-[900] tracking-tight mb-8 drop-shadow-md">
          {title}
        </h1>

        <p className="text-[var(--text)] text-base md:text-[1.15rem] font-medium leading-relaxed max-w-3xl drop-shadow-sm">
          {description}
        </p>
      </div>

      <div className="text-center space-y-3  max-w-[1300px] mb-20">
        <h2 className="text-[var(--text2)] text-3xl md:text-4xl font-bold tracking-tight">
          Explore Internship Subcategories
        </h2>
        <p className="text-[var(--text)] text-lg font-normal">
          Discover opportunities under the Health Care category.
        </p>
      </div>
    </div>
  );
};
