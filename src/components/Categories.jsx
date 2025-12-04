import React, { useEffect, useRef } from "react";
import { CategoriesCard } from "./CategoriesCard";
import laptopImg from "../assets/images/lapropguy.jpg";
import engineerImg from "../assets/images/engineer.webp";
import blueImg from "../assets/images/bluebackground.avif";

export default function Categories({appear}) {
       const graduate = useRef();
            
              useEffect(() => {
                if (appear) {
                 graduate.current.classList.add("mt-70")
                } else {
                  graduate.current.classList.remove("mt-70")
                }
              }, [appear]);
  return (
    <div className="bg-[var(--bg)] p-1 text-[var(--text)] flex justify-center">
      <div className="max-w-[1300px] mt-20 px-20 mb-20 max-md:px-10">
        <div ref={(ref)=>{graduate.current = ref}} className="flex flex-col gap-5 items-center mb-10">
          <h1 className="text-[clamp(2rem,4vw,5rem)] font-bold text-[var(--text2)]">
            Graduate Programs
          </h1>
          <p className="text-center">
            Explore our comprehensive graduate programs designed to advance your
            career and expand your knowledge.
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-[30px] font-bold text-[var(--text2)]">
            Explore Categories
          </h2>
          <div className="flex gap-5 max-md:flex-col">
            <CategoriesCard
              img={laptopImg}
              title={"Health Care"}
              description={
                "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare."
              }
              to="healthcare"
            />
            <CategoriesCard
              img={engineerImg}
              title={"Engineering"}
              description={
                "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver’s seat of innovation. Whether it’s civil, electrical, mechanical, or software get ready to design, build, and disrupt."
              }
              to="engineering"
            />
            <CategoriesCard
              img={blueImg}
              title={"Information Technology"}
              description={
                "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology."
              }
              to="information"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
