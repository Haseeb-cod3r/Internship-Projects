import React from "react";

export default function SkillCard2({ icon, tittle, description, isBgColor }) {
  return (
    <>
      <div className="flex gap-5 items-start bg-[var(--bgCard)] p-5 rounded-2xl w-full">
        <img
          className={
            isBgColor
              ? "w-[60px] p-3 bg-[var(--bgCard2)] rounded-2xl"
              : "w-[60px] p-3 bg-[var(--bgImg)] rounded-2xl"
          }
          src={icon}
          alt=""
        />
        <div>
          <h1 className="font-medium text-[clamp(1rem,2vw,2rem)] text-[var(--heading)]">
            {tittle}
          </h1>
          <p className="text-[var(--text)]">{description}</p>
        </div>
      </div>
    </>
  );
}
