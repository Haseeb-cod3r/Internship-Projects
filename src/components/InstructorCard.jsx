import React from "react";

export default function InstructorCard({
  icon1,
  tittle,
  description,
  btnText,
  icon2,
}) {
  return (
    <>
      <div className="flex flex-col gap-5 bg-[var(--bgCard)] p-10 rounded-2xl w-full shadow-lg">
        <div>
          <img
            className="w-[60px] p-3 bg-[var(--bgCard2)] rounded-2xl"
            src={icon1}
            alt=""
          />
        </div>
        <h1 className="font-medium text-[clamp(1rem,2vw,2rem)] text-[var(--heading)]">
          {tittle}
        </h1>
        <p>{description}</p>
        <button className="flex items-center cursor-pointer">
          <span className="text-[var(--brand)] hover:text-[#16a34a]">
            {btnText}
          </span>
          <img className="w-[20px]" src={icon2} alt="" />
        </button>
      </div>
    </>
  );
}
