import React, { useContext, useEffect, useRef } from "react";
import googleImg from "../assets/images/google.png";
import seeImg from "../assets/images/see1.png";
import founderImg from "../assets/images/founderhub.png";
import itgImg from "../assets/images/itg.png";
import nationalImg from "../assets/images/nationalexpense.png";
import pitbImg from "../assets/images/pitb1.png";

import cloundImg from "../assets/images/cloudColor.png";
import pakImg from "../assets/images/pakColor.png";
import founderColorImg from "../assets/images/founderColor.png";
import itgColorImg from "../assets/images/itgColor.png";
import nationalColorImg from "../assets/images/nationalColor.png";
import pitbColorImg from "../assets/images/pitbColor.png";
import { AppContext } from "../context/themeContext";

export default function Partners() {
  const imagesRef = useRef([]);
  const { theme } = useContext(AppContext);
  function changeImg() {
    if (theme === "dark") {
      imagesRef.current.map((img) => {
        img.classList.remove("grayscale-0");
        img.classList.add("grayscale");
      });
    } else if (theme === "light") {
      imagesRef.current.map((img) => {
        img.classList.remove("grayscale");
        img.classList.add("grayscale-0");
      });
    }
  }
  useEffect(() => {
    changeImg();
  }, [theme]);

  return (
    <div className="bg-[var(--bg)] text-[var(--heading)]  flex flex-col gap-10 items-center px-20 max-md:px-10">
      <h2 className="mt-15 text-[var(--text)]">
        Collaborated with Trusted Worldwide Partners
      </h2>
      <div className="flex items-center flex-wrap gap-15 mb-20 justify-center">
        <img
          ref={(ref) => {
            imagesRef.current[0] = ref;
          }}
          className="w-[100px] hover:scale-[1.1] transition duration-[.33s] ease-in-out"
          src={cloundImg}
          alt=""
        />
        <img
          ref={(ref) => {
            imagesRef.current[1] = ref;
          }}
          className="w-[100px] hover:scale-[1.1] transition duration-[.33s] ease-in-out"
          src={pakImg}
          alt=""
        />
        <img
          ref={(ref) => {
            imagesRef.current[2] = ref;
          }}
          className="w-[100px] hover:scale-[1.1] transition duration-[.33s] ease-in-out"
          src={founderColorImg}
          alt=""
        />
        <img
          ref={(ref) => {
            imagesRef.current[3] = ref;
          }}
          className="w-[100px] hover:scale-[1.1] transition duration-[.33s] ease-in-out"
          src={itgColorImg}
          alt=""
        />
        <img
          ref={(ref) => {
            imagesRef.current[4] = ref;
          }}
          className="w-[100px] hover:scale-[1.1] transition duration-[.33s] ease-in-out"
          src={nationalColorImg}
          alt=""
        />
        <img
          ref={(ref) => {
            imagesRef.current[5] = ref;
          }}
          className="w-[100px] hover:scale-[1.1] transition duration-[.33s] ease-in-out"
          src={pitbColorImg}
          alt=""
        />
      </div>
    </div>
  );
}
