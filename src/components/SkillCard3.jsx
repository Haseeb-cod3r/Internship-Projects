import React from "react";

export default function SkillCard3({
  icon,
  icon2,
  tittle,
  description,
  btnText,
  isBtn2,
}) {
  return (
    <>
      <div className="flex flex-col gap-5 items-center py-5 px-15 z-2 mt-15 bg-[var(--bgCard)] rounded-2xl mb-20  max-w-[1300px] max-sm:px-5">
        <h1 className="text-[clamp(1rem,3vw,2rem)] text-center font-bold">
          {tittle}
        </h1>
        <p className="text-[var(--text)] text-center text-[20px]">
          {description}.
        </p>

        {isBtn2 ? (
          <div className="flex gap-5">
            <a href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard" className="flex items-center bg-[var(--brand)] py-2 px-5 max-sm:px-2 rounded-2xl cursor-pointer  text-white">
              <span className="font-bold max-sm:font-normal max-sm:text-[12px]">{btnText}</span>
              <img src={icon} alt="" />
            </a>
            <a href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"  className="flex max-sm:px-2 items-center bg-[var(--btnBg)] py-4 px-5 rounded-2xl cursor-pointer  text-white">
              <span className="font-bold max-sm:font-normal text-[var(--brand)] max-sm:text-[12px]">
                View Programs
              </span>
              <img className="w-[20px]" src={icon2} alt="" />
            </a>
          </div>
        ) : (
          <a href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"  className="flex items-center bg-[var(--brand)] py-2 px-5 rounded-2xl cursor-pointer  text-white">
            <span className="font-bold ">{btnText}</span>
            <img src={icon} alt="" />
          </a>
        )}
      </div>
    </>
  );
}
