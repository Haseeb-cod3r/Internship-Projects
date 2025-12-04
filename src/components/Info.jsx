import React from "react";
import SkillTittle from "./SkillTittle";
import InfoCard from "./infoCard";
import InfoCard2 from "./InfoCard2";
import dollarImg from "../assets/images/dollar-symbol.png";
import bookImg from "../assets/images/open-book.png";
import mentorImg from "../assets/images/mentorship.png";
import trophyImg from "../assets/images/trophy.png";
import starImg from "../assets/images/shining.png";
import penImg from "../assets/images/pen-tool.png";
import bulbImg from "../assets/images/lightbulb.png";

export default function Info() {
  const description1 =
    "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.";
  const description2 =
    "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.";
  const description3 =
    "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.";
  const description4 =
    "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.";

  return (
    <div className="bg-[var(--bgNav)] px-10 p-1 flex flex-col items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-15 max-w-[1300px] mt-20 max-md:grid-cols-1 max-md:grid-rows-1">
        <InfoCard
          icon={penImg}
          tittle={"AI Resume Building"}
          description={description1}
        />
        <InfoCard
          icon={bookImg}
          tittle={"Cover Letter Creation"}
          description={description2}
        />
        <InfoCard
          icon={mentorImg}
          tittle={"Interview Preparation"}
          description={description3}
        />
        <InfoCard
          icon={bulbImg}
          tittle={"Industry Insights"}
          description={description4}
        />
      </div>
      <div className="flex flex-col gap-5 items-center py-5 px-15 z-2 mt-15 bg-[var(--bgCard)] rounded-2xl mb-20 w-full  max-w-[1300px] max-sm:px-5">
        <SkillTittle
          icon={dollarImg}
          tittle={"Monetize Your Expertise"}
          heading={"Share Your Knowledge & Earn"}
          description={
            "Are you an AI expert? Share your knowledge through courses, tutorials, or content. Build your personal brand and generate income while helping others succeed in their AI careers."
          }
        />
      </div>
      <div className="max-w-[1300px] flex flex-col items-center gap-15 mb-20">
        <h1 className="text-[var(--text2)] text-[clamp(1rem,3vw,4rem)] font-bold">
          Why Choose AI Career Coach?
        </h1>
        <div className="flex gap-5 max-md:flex-col max-md:gap-10">
          <InfoCard2
            icon={trophyImg}
            tittle={"Comprehensive Guidance"}
            description={"Everything you need to succeed in the AI industry"}
          />
          <InfoCard2
            icon={starImg}
            tittle={"Industry-Ready Insights"}
            description={"Everything you need to succeed in the AI industry"}
          />
          <InfoCard2
            icon={dollarImg}
            tittle={"Monetization Options"}
            description={"Share your AI knowledge and earn income"}
          />
        </div>
      </div>
    </div>
  );
}
