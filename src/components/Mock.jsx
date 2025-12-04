import React from "react";
import brainImg from "../assets/images/brain.png";
import commintImg from "../assets/images/comment.png";
import targetImg from "../assets/images/target.png";
import medalImg from "../assets/images/medal.png";
import diagramImg from "../assets/images/diagram.png";
import docImg from "../assets/images/document.png";
import arrowImg from "../assets/images/next.png";
import SkillTittle from "./SkillTittle";
import SkillCard2 from "./SkillCard2";
import MockCard from "./mockCard";

export default function Mock() {
  const description1 =
    "Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our virtual internships on internee.pk.";
  const description2 =
    " Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness.";
  const description3 =
    "Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates.";
  const description4 =
    " Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.";
  const description5 =
    "Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.";
  const description6 =
    "Structured interview training that prepares you for real-world scenarios. Perfect for students applying for internships.";
  const description7 =
    "Access detailed performance reports you can share with mentors and hiring managers.";

  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80)] px-20 bg-cover bg-center flex flex-col items-center text-[var(--heading)] background relative gap-5 max-md:px-10">
      <div className="absolute inset-0 bg-[var(--bg)]/60 backdrop-blur-[3px]"></div>
      <div className="z-2 flex gap-10 max-w-[1300px] w-full mt-15 max-md:flex-col">
        <SkillTittle
          icon={brainImg}
          tittle={"AI Mock Interviews"}
          heading={
            "Master Real-World Skills with Our Task Portal at internee.pk"
          }
          description={description1}
          isBtn={true}
          btnText={"Apply Now for Virtual Internship"}
          btnIcon={arrowImg}
        />

        <div className="flex flex-col gap-5">
          <SkillCard2
            icon={commintImg}
            tittle={"Realistic AI Interview Simulations"}
            description={description2}
            isBgColor={true}
          />
          <SkillCard2
            icon={brainImg}
            tittle={"Smart Feedback with AI"}
            description={description3}
            isBgColor={true}
          />
          <SkillCard2
            icon={targetImg}
            tittle={"Role-Based Mock Interviews"}
            description={description4}
            isBgColor={true}
          />
        </div>
      </div>

      <div className=" z-2 flex gap-5 mt-15 mb-15 w-full max-w-[1300px] max-md:flex-col">
        <MockCard
          icon={medalImg}
          tittle={"Build Real Interview Confidence"}
          description={description5}
        />
        <MockCard
          icon={diagramImg}
          tittle={"Become Job-Ready Fast"}
          description={description6}
        />
        <MockCard
          icon={docImg}
          tittle={"Track Progress with Reports"}
          description={description7}
        />
      </div>
    </div>
  );
}
