import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gentelImg from "../assets/images/gentleman.avif";
import building from "../assets/images/building.avif";

export const UnlockPotential = () => {
  return (
    <>
      <div className="bg-[var(--bgNav)] relative flex justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={gentelImg}
            alt="Background"
            className="w-full h-[500px] object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30"></div>
        </div>

        <div className="relative z-10 max-w-[1300px] flex items-center justify-center px-30 max-sm:px-5">
          <div className="flex flex-col gap-8 mt-50">
            <div className="px-2">
              <h1 className="text-[clamp(2rem,5vw,5rem)] font-bold leading-tight tracking-tight text-white">
                Internee.pk
                <br />
                Student Ambassadors
              </h1>
            </div>

            <div className="bg-[var(--bgCard)] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <div className="p-10 mb-25">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text2)]">
                      Become a Student Ambassador
                    </h2>
                    <p className="text-[var(--text)] leading-relaxed text-base md:text-lg">
                      Join our global community of students who are passionate
                      about building AI-driven solutions with Microsoft
                      technology. Accelerate innovation and grow the skills you
                      need to have greater impact in the projects and
                      communities that matter to you.
                    </p>
                  </div>

                  <button className="group flex items-center gap-2 bg-[#064e18] hover:bg-[#086320] text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 whitespace-nowrap mt-2 lg:mt-0">
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform" />
                  </button>
                </div>
              </div>

              <div>
                <div className="relative h-64 md:h-auto overflow-hidden ml-20 mb-20 max-md:hidden">
                  <img
                    src={building}
                    alt="Modern building facade"
                    className="w-[50%] h-[700px] object-cover object-left-bottom rounded-2xl"
                  />

                  <div className="bg-[var(--bgNav)] p-5 flex flex-col justify-center absolute rounded-2xl max-w-[400px] top-[50%] right-0 transform translate-x-[-30%] translate-y-[-50%] max-lg:max-w-[300px]">
                    <h2 className="text-[clamp(2rem,4vw,5rem)] font-bold mb-8 leading-tight text-[var(--text2)]">
                      Unlock
                      <br />
                      Your
                      <br />
                      Potential
                    </h2>

                    <div className="space-y-4 text-[var(--text)] text-lg">
                      <p className="block">
                        Discover new opportunities and enhance your skills.
                      </p>
                      <p className="block">
                        Gain real-world experience with hands-on projects.
                      </p>
                      <p className="block">
                        Connect with a network of like-minded individuals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
