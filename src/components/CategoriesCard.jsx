import React from "react";
import { Link } from "react-router-dom";
export const CategoriesCard = ({ img, title, description,to }) => {
  return (
    <Link
    to={to}
      className="
      group 
      relative 
      w-full 
      max-w-[360px] 
      bg-[var(--bg)] 
      rounded-2xl 
      overflow-hidden 
      cursor-pointer
      transition-all 
      duration-500 
      ease-out
      transform
      hover:scale-105
      shadow-[0_10px_30px_-15px_var(--text)]
      hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.15)]
      text-[var(--text)]
    "
    >
      <div className="h-64 w-full overflow-hidden relative ">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
        <img
          src={img}
          alt={title}
          className="
            w-full 
            h-full 
            object-cover 
            transition-transform 
            duration-700 
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-8 flex flex-col items-center text-center relative z-20 -mt-6">
        <h2
          className="
          text-3xl 
          font-bold 
         text-[var(--text2)] 
          mb-6 
          tracking-wide
          group-hover:text-[var(--brand)]
        "
        >
          {title}
        </h2>

        <p
          className="
          
          text-sm 
          leading-7 
          font-medium
          opacity-90
        "
        >
          {description}
        </p>
      </div>
    </Link>
  );
};
