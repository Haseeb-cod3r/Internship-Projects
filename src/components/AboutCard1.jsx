import React from "react";
import { Tablet, Award } from "lucide-react";
import aboutImg from "../assets/images/about1.webp";

export const AboutCard1 = () => {
  return (
    <section className="w-full bg-[var(--bg)] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden flex justify-center">
      <div className="max-w-[1300px] px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-1 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square bg-gray-900 max-lg:max-w-[500px]">
              <img
                src={aboutImg}
                alt="Students collaborating on a laptop"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center order-2 lg:order-2">
            <div className="mb-6">
              <span className="inline-block bg-[#1f2937] text-[#9ca3af] px-4 py-1.5 rounded-full text-sm font-medium border border-gray-800">
                About Internee.pk
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text2)] leading-[1.2] tracking-tight mb-6">
              Revolutionizing Career Growth Through Meaningful Internships
            </h2>

            <p className="text-[var(--text)]  text-base sm:text-lg mb-10 leading-relaxed max-w-2xl">
              We bridge the gap between talent and opportunity, helping students
              and fresh graduates secure valuable internships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-[#1f2937] rounded-xl flex items-center justify-center border border-gray-800">
                  <Tablet className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[var(--text)] text-base font-medium leading-snug">
                  Gain Practical Experience & Build Industry Skills
                </span>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 bg-[#1f2937] rounded-xl flex items-center justify-center border border-gray-800">
                  <Award className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[var(--text)] text-base font-medium leading-snug">
                  Connect with Leading Companies & Industry Experts
                </span>
              </div>
            </div>

            <div>
              <button className="bg-[var(--brand)] cursor-pointer text-white px-8 py-3.5 rounded-full font-semibold text-base transition-colors duration-300 ease-in-out inline-flex items-center justify-center">
                Explore Internships
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
