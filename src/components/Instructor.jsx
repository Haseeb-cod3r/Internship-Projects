import React from "react";
import arrowImg from "../assets/images/nextgreen.png";
import cloudImg from "../assets/images/cloud-computing.png";
import dollarImg from "../assets/images/dollar-symbol.png";
import avatarImg from "../assets/images/avatar.png";
import handImg from "../assets/images/handshake.png";
import InstructorCard from "./InstructorCard";

export default function Instructor() {
  const description1 =
    "Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.";
  const description2 =
    "Internee.pk offers virtual internships in Pakistan where techcreators and instructors can earn passive income by sharing their knowledge.";
  const description3 =
    "Become a trusted voice on internee.pk. Our virtual internshipecosystem helps you build your personal [var(--brand)] in the online learning space.";
  const description4 =
    "We keep it transparent. Join internee.pk and benefit from a fairmodel that pays you well — all while gaining experience in virtual internships.";

  return (
    <div className="bg-[var(--bgNav)] text-[var(--text)] p-20 flex flex-col items-center relative overflow-hidden max-md:px-10">
      <div className="absolute w-[150%] h-[400px] bg-[var(--tild)] top-[-60px] rotate-[-5deg]"></div>
      <div className="flex flex-col items-center gap-5 mt-5 mb-10 max-w-[1300px] z-2">
        <h1 className="text-[clamp(1rem,4vw,4rem)] text-center font-bold">
          Tech Instructor or Content Creator?
        </h1>
        <p className="font-medium text-[var(--brand)] text-center text-[20px] mb-2">
          Create in Your Native Language & Start Earning
        </p>
        <a  href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"  className="bg-[var(--brand)] py-2 px-5 rounded-2xl font-medium text-[20px] text-[var(--heading)] text-white">
          Start Teaching Today
        </a>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-10 max-w-[1300px] max-md:grid-cols-1">
        <InstructorCard
          icon1={cloudImg}
          tittle={"Upload Tutorials & Exercises"}
          description={description1}
          btnText={"Learn more"}
          icon2={arrowImg}
        />
        <InstructorCard
          icon1={dollarImg}
          tittle={"Earn from Your Expertise"}
          description={description2}
          btnText={"Learn more"}
          icon2={arrowImg}
        />
        <InstructorCard
          icon1={avatarImg}
          tittle={"Build Your Instructor Profile"}
          description={description3}
          btnText={"Learn more"}
          icon2={arrowImg}
        />
        <InstructorCard
          icon1={handImg}
          tittle={"Fair Revenue Sharing"}
          description={description4}
          btnText={"Learn more"}
          icon2={arrowImg}
        />
      </div>
    </div>
  );
}
