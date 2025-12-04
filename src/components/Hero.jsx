import React, { useEffect, useRef } from "react";
import arrowImg from "../assets/images/right-up-white.png";
import heroImg from "../assets/images/Group.webp";

export default function Hero({ appear }) {
  const hero = useRef();
  useEffect(() => {
    if (appear) {
      hero.current.classList.remove("mt-10");
      hero.current.classList.add("mt-100");
      hero.current.classList.add("mb-40");
    } else {
      hero.current.classList.remove("mb-40");
      hero.current.classList.remove("mt-100");
      hero.current.classList.add("mt-10");
    }
  }, [appear]);
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg)]
      text-[var(--heading)] flex px-20 max-lg:px-10 justify-between min-h-[90vh] 
      items-center max-lg:flex-col max-lg:justify-center max-lg:min-h-[60vh] font-arial"
    >
      <div className="absolute left-1/2 top-1/3 -translate-y-1/2 z-10 w-[350px] h-[350px] opacity-70 blur-[100px] bg-[radial-gradient(circle_at_center,_var(--brand),_transparent_1000%)] animate-slide"></div>

      <div
        ref={(ref) => {
          hero.current = ref;
        }}
        className="flex flex-col mt-10 gap-8 max-w-[700px] max-2xl:max-w-[500px] max-lg:max-w-full z-20"
      >
        <h1 className="font-bold text-[clamp(3rem,4vw,5rem)] leading-20 max-2xl:leading-12 max-2xl:text-[clamp(2.3rem,4vw,3rem)] max-lg:text-center">
          Looking for <br /> dream internship?
        </h1>

        <p className="tracking-[1px] max-lg:text-center text-[var(--text)]">
          Internee.pk kickstart student's tech careers with first internships,
          providing industry exposure, practical skills, and networking
          opportunities.
        </p>

        <div className="flex gap-5 max-lg:justify-center">
          <a
            href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
            className="bg-[var(--brand)] px-8 py-3 rounded-2xl shadow-[0_0_10px_#42a624] font-medium cursor-pointer hover:shadow-[0_0_10px_#2a7117] transition duration-[.22s] ease-in-out text-white"
          >
            Our Job Portal
          </a>

          <a
            href="https://www.internee.pk/sign-in"
            className="flex items-center bg-[#1e2736] px-8 py-3 rounded-2xl font-medium cursor-pointer hover:bg-[#2a3548] transition duration-[.22s] ease-in-out gap-2 text-white"
          >
            <span>Sign In</span>
            <img className="rotate-90 w-[20px]" src={arrowImg} alt="" />
          </a>
        </div>
      </div>

      <div className="max-lg:hidden z-20">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}
