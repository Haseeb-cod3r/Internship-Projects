import React from "react";
import starImg from "../assets/images/star.png";

export const RatingComponent = ({ name, location, imageUrl, testimonial }) => {
  return (
    <div className="bg-[#f3f4f6] w-full min-w-[450px] rounded-2xl pt-15 pb-10 text-center shadow-2xl relative z-10 flex flex-col gap-2  h-[250px] ml-5 cursor-pointer max-sm:min-w-[350px]">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
        <div className="relative p-1 bg-slate-50 rounded-full">
          <img
            src={imageUrl}
            alt={name}
            className="w-[80px] h-[80px] rounded-full object-cover border-4 border-slate-50 shadow-sm"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          {name}
        </h2>
        <p className="text-slate-500 font-medium text-base mt-1">{location}</p>
      </div>

      <blockquote>
        <p className="text-slate-600 text-lg leading-relaxed italic px-4">
          “{testimonial}”
        </p>
      </blockquote>

      <div className="flex items-center justify-center gap-1.5">
        <img className="w-[15px]" src={starImg} alt="" />
        <img className="w-[15px]" src={starImg} alt="" />
        <img className="w-[15px]" src={starImg} alt="" />
        <img className="w-[15px]" src={starImg} alt="" />
        <img className="w-[15px]" src={starImg} alt="" />
      </div>
    </div>
  );
};
