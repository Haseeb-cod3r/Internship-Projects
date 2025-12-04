import React from "react";
import SkillTittle from "./SkillTittle";
import brainImg from "../assets/images/brain.png";
export default function AiCoach() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80)] px-10 bg-cover bg-center flex flex-col items-center text-[var(--heading)] background relative">
      <div className="absolute inset-0 bg-[var(--bg)]/60 backdrop-blur-[5px]"></div>

      <div className="flex flex-col gap-5 items-start z-2 w-full max-w-[1300px] mb-15">
        <div className="max-w-[700px] flex flex-col gap-10">
          <div className="flex items-start mt-20">
            <p className="text-start bg-[hsla(106,65%,40%,20%)] px-5 py-1 rounded-2xl text-[hsl(106,65%,40%)] text-[20px] flex gap-2 items-center">
              <img className="w-[25px]" src={brainImg} alt="" />
              Your AI Career Journey
            </p>
          </div>
          <h1 className="text-start font-bold text-[clamp(3rem,3vw,4rem)] leading-13">
            AI Career Coach: Your Ultimate Guide to Building a Successful AI
            Career
          </h1>
          <p className="text-[20px] max-w-[700px] text-start">
            Looking to kickstart your career in the AI industry? Our AI Career
            Coach platform offers expert guidance in resume building, cover
            letter creation, interview preparation, quizzes, and industry
            insights—all designed to help you land your dream job in Artificial
            Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
