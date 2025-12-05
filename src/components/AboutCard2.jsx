import React from "react";
import AboutCard2Card from "./AboutCard2Card";
import { Check, BookOpen, Briefcase, Star } from "lucide-react";
import bgImg from "../assets/images/peoplethumbsup.webp";

export default function AboutCard2() {
  return (
    <div className="flex flex-col items-center bg-[var(--bgNavv)] px-20 max-md:px-10">
      <div className="max-w-[1300px] flex gap-10 mt-30 mb-30 items-center max-lg:flex-col">
        <div>
          <div>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--bg)] text-gray-400 text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-white leading-[1.15] mb-4 sm:mb-6">
              Quality Internships Designed for Your{" "}
              <br className="hidden md:block" />
              Growth and Flexibility
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Gain real-world experience, develop essential skills, and build
              the connections needed for a successful future.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10 pt-2">
            <AboutCard2Card
              icon={<Check className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3} />}
              title="Verified Internships"
              description="Gain access to trusted opportunities from reputable companies across various industries."
            />
            <AboutCard2Card
              icon={
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
              }
              title="LMS for Skill Growth"
              description="Access our Learning Management System (LMS) to upskill with high-quality courses, webinars, and workshops."
            />
            <AboutCard2Card
              icon={
                <Briefcase
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  strokeWidth={2.5}
                />
              }
              title="Dedicated Job Portal"
              description="Explore full-time job opportunities after your internship and connect with top employers hiring fresh talent."
            />
          </div>
        </div>
        <div>
          <img src={bgImg} alt="" />
        </div>
      </div>
    </div>
  );
}
