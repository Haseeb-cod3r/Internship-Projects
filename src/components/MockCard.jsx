import React from "react";

export default function MockCard({ icon, tittle, description }) {
  return (
    <>
      <div className="flex flex-col gap-5 bg-[var(--bgCard)] p-10 rounded-2xl w-full shadow-md">
        <div>
          <img className="w-[30px]" src={icon} alt="" />
        </div>

        <h1 className="font-medium text-[clamp(1rem,2vw,1.3rem)] text-[var(--heading)]">
          {tittle}
        </h1>
        <p className="text-[var(--text)]">{description}</p>
      </div>
    </>
  );
}
