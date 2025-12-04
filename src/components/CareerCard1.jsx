import React from "react";

export default function CareerCard1({ tittle1, tittle2 }) {
  return (
    <>
      <div className="bg-[var(--bgCard)] py-5 px-5 rounded-2xl w-full flex flex-col items-center">
        <h1 className="font-medium text-[var(--brand)] text-[30px]">
          {tittle1}
        </h1>
        <p className="text-[var(--text)]">{tittle2}</p>
      </div>
    </>
  );
}
