import React from "react";

export default function InfoCard({ icon, tittle, description }) {
  return (
    <>
      <div className="flex flex-col gap-5 items-start bg-[var(--bgCard)] p-5 rounded-2xl w-full hover:scale-[1.1] transition duration-[.33s] ease-in-out shadow-md">
        <div className="flex gap-5 items-center">
          <img
            className={"w-[50px] p-3 bg-[var(--bgCard2)] rounded-2xl"}
            src={icon}
            alt=""
          />

          <h1 className="font-medium text-[clamp(1rem,2vw,2rem)] text-[var(--heading)]">
            {tittle}
          </h1>
        </div>
        <p className="text-[var(--text)]">{description}</p>
      </div>
    </>
  );
}
