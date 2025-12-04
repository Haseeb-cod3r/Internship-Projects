import React from "react";
import MockCard from "./MockCard";
import graduateImg from "../assets/images/graduate.png";
import { StudentCard } from "./StudentCard";
import codeImg from "../assets/images/code.png";
import mentorImg from "../assets/images/mentorship.png";
import bookImg from "../assets/images/open-book.png";
import cupImg from "../assets/images/trophy.png";
import tickImg from "../assets/images/check-mark.png";

export default function StudenOptions() {
  return (
    <div className="">
      <div className="bg-[var(--tild)] flex flex-col justify-center items-center">
        <div className="max-w-[1300px] mt-10 mb-10 px-10">
          <div className="flex gap-5 flex-wrap justify-center items-center">
            <StudentCard
              icon={bookImg}
              title={"Get started"}
              description={"Become a Student Ambassador"}
            />
            <StudentCard
              icon={mentorImg}
              title={"Community"}
              description={"Explore Student Ambassador profiles"}
            />
            <StudentCard
              icon={cupImg}
              title={"Startup Competition"}
              description={"Student competition for AI startups"}
            />
            <StudentCard
              icon={tickImg}
              title={"Founders Hub"}
              description={"A platform for entrepreneurs at any stage"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[var(--bgNav)] justify-center items-center">
        <div className="max-w-[1300px] px-10 flex flex-col gap-3 mt-15 mb-10">
          <h1 className="text-[var(--text2)] text-2xl font-bold">
            Why you should join
          </h1>
          <div className="flex gap-5 max-md:flex-col">
            <MockCard
              icon={graduateImg}
              tittle={"Learn and Grow"}
              description={
                "Access exclusive learning resources and certifications to build your technical skills."
              }
            />
            <MockCard
              icon={mentorImg}
              tittle={"Build Community"}
              description={
                "Connect with fellow students and mentors from around the world."
              }
            />
            <MockCard
              icon={codeImg}
              tittle={"Create Solutions"}
              description={
                "Work on real projects using cutting-edge Internee's technologies."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
