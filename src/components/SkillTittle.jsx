import React from "react";

export default function SkillTittle({
  icon,
  tittle,
  heading,
  description,
  isBtn,
  btnText,
  btnIcon,
}) {
  return (
    <>
      {isBtn ? (
        <div className="flex flex-col gap-5 items-start z-2 max-w-[1300px] mb-15">
          <div className="flex items-center justify-center mt-20">
            <p className=" bg-[hsla(106,65%,40%,20%)] px-5 py-1 rounded-2xl text-[hsl(106,65%,40%)] text-[20px] flex gap-2 items-center">
              <img className="w-[25px]" src={icon} alt="" />
              {tittle}
            </p>
          </div>
          <h1 className=" font-bold text-[clamp(3rem,4vw,3rem)] leading-13">
            {heading}
          </h1>
          <p className="text-[20px] max-w-[700px] ">{description}</p>
          <a
            href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
            className="flex items-center bg-[var(--brand)] py-2 px-5 rounded-2xl cursor-pointer text-white"
          >
            <span className="font-bold ">{btnText}</span>
            <img src={btnIcon} alt="" />
          </a>
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center z-2 max-w-[1300px] mb-15">
          <div className="flex items-center justify-center mt-20">
            <p className="text-center bg-[hsla(106,65%,40%,20%)] px-5 py-1 rounded-2xl text-[hsl(106,65%,40%)] text-[20px] flex gap-2 items-center">
              <img className="w-[25px]" src={icon} alt="" />
              {tittle}
            </p>
          </div>
          <h1 className="text-center font-bold text-[clamp(3rem,4vw,3rem)] leading-13 text-[var(--text2)]">
            {heading}
          </h1>
          <p className="text-[20px] max-w-[700px] text-center text-[var(--text)]">
            {description}
          </p>
        </div>
      )}
    </>
  );
}
