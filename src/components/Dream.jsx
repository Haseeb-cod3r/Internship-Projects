import React from "react";
import arrowImg from "../assets/images/intershiparrow.png";
import Img1 from "../assets/images/img1.webp";
import Img2 from "../assets/images/img2.webp";
import Img3 from "../assets/images/machine.jpg";
import Img4 from "../assets/images/img4.webp";
import Img5 from "../assets/images/img5.webp";
import Img6 from "../assets/images/img6.webp";
import InternshipCard from "./DreamCard";

export default function Internships() {
  return (
    <div className="bg-[var(--bg)] text-[var(--heading)] px-20 flex flex-col gap-10 items-center max-md:px-10">
      <div className="mt-10 text-center flex gap-2 bg-[var(--dream)] px-1 py-1 items-center rounded-3xl">
        <h3 className="text-[var(--bg)] bg-[var(--heading)] p-2 rounded-3xl font-medium">
          Trending
        </h3>
        <h3 className="font-medium">Explore Internship</h3>
        <h3 className="font-medium">Opportunities</h3>
      </div>
      <div>
        <h1 className="text-center text-[clamp(2rem,4vw,3rem)]  leading-13">
          Your Dream Internship is Just One <br /> Click Away!
        </h1>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 w-full gap-10 mb-20 max-w-[1300px] max-lg:grid-cols-2 max-md:grid-cols-1">
        <InternshipCard img1={Img1} img2={arrowImg} />
        <InternshipCard img1={Img2} img2={arrowImg} />
        <InternshipCard img1={Img3} img2={arrowImg} />
        <InternshipCard img1={Img4} img2={arrowImg} />
        <InternshipCard img1={Img5} img2={arrowImg} />
        <InternshipCard img1={Img6} img2={arrowImg} />
      </div>
    </div>
  );
}
