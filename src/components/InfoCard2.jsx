import React from "react";

export default function InfoCard2({ icon, tittle, description }) {
  return (
    <div className="flex flex-col gap-2 items-center bg-[var(--bgCard)] justify-center p-5 rounded-2xl w-full shadow-md">
      <img className={"w-[30px]"} src={icon} alt="" />

      <h1 className="font-medium text-[clamp(1rem,2vw,2rem)] text-[var(--heading)]">
        {tittle}
      </h1>

      <p className="text-[var(--text)] text-center">{description}</p>
    </div>
  );
}
