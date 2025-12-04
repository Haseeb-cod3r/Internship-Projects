import React from "react";

export default function SkillCard({
  icon,
  tittle,
  description,
  icon2,
  points,
}) {
  return (
    <>
      <div className="flex flex-col gap-5 bg-[var(--bgCard)] p-10 rounded-2xl w-full">
        <div>
          <img
            className="w-[60px] p-3 bg-[var(--bgImg)] rounded-2xl"
            src={icon}
            alt=""
          />
        </div>

        <h1 className="font-medium text-[clamp(1rem,3vw,2rem)] text-[var(--heading)]">
          {tittle}
        </h1>
        <p>{description}</p>
        <ul className="flex flex-col gap-5">
          {points.map((point) => (
            <li key={crypto.randomUUID()} className="flex gap-3 items-center">
              <img className="w-[20px]" src={icon2} alt="" />
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
