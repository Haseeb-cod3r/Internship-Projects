import React from "react";
import linkImg from "../assets/images/link.png";
import gymImg from "../assets/images/gym-bag.png";
import tickImg from "../assets/images/check-mark.png";
import verifyImg from "../assets/images/verify.png";
import bookImg from "../assets/images/open-book.png";
import arrowImg from "../assets/images/next.png";
import SkillCard from "./SkillCard";
import SkillTittle from "./SkillTittle";
import SkillCard2 from "./SkillCard2";
import SkillCard3 from "./SkillCard3";

export default function Skill() {
  const description1 =
    "Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our virtual internships on internee.pk.";
  const description2 =
    " Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our virtual internships.";
  const description3 =
    " Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our virtual internships and comprehensive tracking system.";
  const description4 =
    "Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our virtual internship offerings.";
  const description5 =
    "Follow a structured learning path designed for both beginners and advanced learners as part of our virtual internship curriculum.";
  const description6 =
    "Join our virtual internships and get access to industry-standard tasks that will help you build a remarkable portfolio, only at internee.pk.";

  const points1 = [
    "Project-based learning",
    "Industry-standard practices",
    "Portfolio building",
  ];
  const points2 = [
    "Skill verification",
    "Progress tracking",
    "Achievement badges",
  ];
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80)] px-20 bg-cover bg-center flex flex-col items-center text-[var(--heading)] background relative max-md:px-10">
      <div className="absolute inset-0 bg-[var(--bg)]/60 backdrop-blur-[5px]"></div>

      <SkillTittle
        icon={linkImg}
        tittle={"Task Management Platform"}
        heading={"Master Real-World Skills with Our Task Portal at internee.pk"}
        description={description1}
      />

      <div className="z-2 flex text-[var(--text)] justify-between gap-10 mt-20 max-w-[1300px] max-md:flex-col">
        <SkillCard
          icon={gymImg}
          tittle={"Hands-on Industry Projects with internee.pk"}
          description={description2}
          icon2={tickImg}
          points={points1}
        />
        <SkillCard
          icon={verifyImg}
          tittle={"Skill Verification System by internee.pk"}
          description={description3}
          icon2={tickImg}
          points={points2}
        />
      </div>

      <div className="z-2 flex gap-10 mt-15 max-w-[1300px] max-md:flex-col">
        <SkillCard2
          icon={linkImg}
          tittle={"SDLC Implementation via internee.pk"}
          description={description4}
        />
        <SkillCard2
          icon={bookImg}
          tittle={"Guided Learning Path at internee.pk"}
          description={description5}
        />
      </div>
      <SkillCard3
        icon={arrowImg}
        tittle={"Ready to Build Your Professional Portfolio with internee.pk?"}
        description={description6}
        btnText={"Start Your Journey Now"}
      />
    </div>
  );
}
