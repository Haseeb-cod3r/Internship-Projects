import React from "react";

export default function InternshipCard({ img1, img2 }) {
  return (
    <>
      <div className=" rounded-2xl  bg-[var(--bgNav)] dark:shadow-md">
        <div>
          <img className="rounded-2xl" src={img1} alt="" />
        </div>
        <div className=" p-5 flex flex-col gap-3 ">
          <h2 className="text-[20px] font-bold mt-10">Graphic Design</h2>
          <div className="flex gap-3 items-center">
            <img src={img2} alt="" />
            <a href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard" className="text-[var(--brand)] hover:text-[#16a34a] cursor-pointer">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
