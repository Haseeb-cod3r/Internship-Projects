import React from "react";
import graduatCap from "../assets/images/graduation-cap.png";
import tickImg from "../assets/images/check-mark.png";
import targetImg from "../assets/images/target.png";
import mentorImg from "../assets/images/mentorship.png";
import medalImg from "../assets/images/medal.png";
import docImg from "../assets/images/document.png";
import commentImg from "../assets/images/comment.png";
import diagramImg from "../assets/images/diagram.png";
import bookImg from "../assets/images/open-book.png";
import arrowImg from "../assets/images/next.png";
import arrowGreenImg from "../assets/images/nextgreen.png";
import SkillTittle from "./SkillTittle";
import CareerCard1 from "./CareerCard1";
import SkillCard from "./SkillCard";
import SkillCard3 from "./SkillCard3";

export default function Career() {
  const points1 = [
    "Web Development",
    "Digital Marketing",
    "UI/UX Design",
    "Content Writing",
    "Data Analytics",
    "Business Development",
  ];
  const points2 = [
    "One-on-One Guidance",
    "Weekly Sessions",
    "Project Reviews",
    "Career Planning",
    "Industry Connect",
    "Networking Events",
  ];
  const points3 = [
    "Skill Verification",
    "Project Portfolio",
    "Performance Badges",
    "Industry Recognition",
    "Digital Certificates",
    "LinkedIn Integration",
  ];
  const description1 =
    "Industry-specific virtual internships designed to build practical skills and experience.";
  const description2 = "Learn directly from industry experts at Internee.pk";
  const description3 =
    "Earn recognized certifications through virtual internships";

  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80)] px-20 bg-cover bg-center flex flex-col items-center text-[var(--heading)] background relative gap-5 max-md:px-10">
      <div className="absolute inset-0 bg-[var(--bg)]/60 backdrop-blur-[5px]"></div>

      <SkillTittle
        icon={graduatCap}
        tittle={"Professional Development"}
        heading={"Launch Your Career with Internee.pk"}
        description={
          "Pakistan's innovative platform for career growth and professional development. Join our virtual internships to gain practical experience and kickstart your professional journey."
        }
      />

      <div className="max-w-[1300px] grid grid-cols-4 max-md:grid-cols-2 max-md:grid-rows-2 z-2 gap-10 w-full">
        <CareerCard1 tittle1={"1000+"} tittle2={"Active Internships"} />
        <CareerCard1 tittle1={"500+"} tittle2={"Partner Companies"} />
        <CareerCard1 tittle1={"10,000+"} tittle2={"Success Stories"} />
        <CareerCard1 tittle1={"50+"} tittle2={"Industry Sectors"} />
      </div>

      <div className="w-full max-w-[1300px] z-2 flex gap-10 mt-15 max-custom1:flex-col">
        <SkillCard
          icon={targetImg}
          tittle={"Targeted Learning"}
          description={description1}
          icon2={tickImg}
          points={points1}
        />
        <SkillCard
          icon={mentorImg}
          tittle={"Mentorship Program"}
          description={description2}
          icon2={tickImg}
          points={points2}
        />
        <SkillCard
          icon={medalImg}
          tittle={"Certification Track"}
          description={description3}
          icon2={tickImg}
          points={points3}
        />
      </div>

      <div className="w-full max-w-[1300px] flex gap-10 z-2 mt-15 max-md:flex-col">
        <div className="bg-[var(--bgCard)] flex gap-5 p-5 w-full rounded-2xl flex-col">
          <h1 className="font-medium text-[25px]">Your Learning Journey</h1>
          <div className="p-4 bg-[var(--bgCard2)] flex flex-col gap-4">
            <h2 className="font-bold">Phase 1: Foundation</h2>
            <div className="h-[10px] bg-[#374151] w-full rounded-2xl">
              <div className="h-full w-[75%] bg-[var(--brand)] rounded-2xl"></div>
            </div>
          </div>
          <div className="p-4 bg-[var(--bgCard2)] flex flex-col gap-4">
            <h2 className="font-bold">Phase 2: Practical Skills</h2>
            <div className="h-[10px] bg-[#374151] w-full rounded-2xl">
              <div className="h-full w-[65%] bg-[var(--brand)] rounded-2xl"></div>
            </div>
          </div>
          <div className="p-4 bg-[var(--bgCard2)] flex flex-col gap-4">
            <h2 className="font-bold">Phase 3: Industry Projects</h2>
            <div className="h-[10px] bg-[#374151] w-full rounded-2xl">
              <div className="h-full w-[85%] bg-[var(--brand)] rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--bgCard)] flex flex-col gap-5 p-5 w-full rounded-2xl">
          <h1 className="font-medium text-[25px]">Career Resources</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="flex gap-2 p-4 bg-[var(--bgCard2)] items-center">
              <img className="w-[20px]" src={docImg} alt="" />
              <p>Resume Templates</p>
            </div>
            <div className="flex gap-2 p-4 bg-[var(--bgCard2)] items-center">
              <img className="w-[20px]" src={commentImg} alt="" />
              <p>Mock Interviews</p>
            </div>
            <div className="flex gap-2 p-4 bg-[var(--bgCard2)] items-center">
              <img className="w-[20px]" src={diagramImg} alt="" />
              <p>Skill Analysis</p>
            </div>
            <div className="flex gap-2 p-4 bg-[var(--bgCard2)] items-center">
              <img className="w-[20px]" src={bookImg} alt="" />
              <p>Learning Paths</p>
            </div>
          </div>
        </div>
      </div>

      <SkillCard3
        icon={arrowImg}
        icon2={arrowGreenImg}
        tittle={"Begin Your Professional Journey with Internee.pk"}
        description={
          "Join our virtual internships program and transform your career prospects with hands-on experience and expert guidance."
        }
        btnText={"Explore Opportunities"}
        isBtn2={true}
      />
    </div>
  );
}
