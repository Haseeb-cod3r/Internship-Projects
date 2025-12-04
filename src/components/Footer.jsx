import React, { useContext, useEffect, useRef } from "react";
import phoneImg from "../assets/images/call.png";
import instagramImg from "../assets/images/instagram.png";
import twitterImg from "../assets/images/twitter.png";
import facebookImg from "../assets/images/facebook-app-symbol.png";
import linkedInImg from "../assets/images/linkedin.png";
import logo1Img from "../assets/images/white-internee.png";
import logo2Img from "../assets/images/logoColor.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/themeContext";

export default function Footer() {
  const imageRef = useRef();
  const { theme } = useContext(AppContext);
  function changeImg() {
    if (theme === "dark") {
      imageRef.current.src = logo1Img;
    } else if (theme === "light") {
      imageRef.current.src = logo2Img;
    }
  }
  useEffect(() => {
    changeImg();
  }, [theme]);

  function handle() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className="bg-[var(--bgNav)] text-[#939aa5] flex flex-col p-10">
      <div className="flex justify-between items-start border-b-[1px] pb-10 max-md:flex-col gap-5 mt-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-[30px] text-[var(--heading)]">
            Subscribe to Newsletter
          </h1>
          <p>
            Subscribe to our newsletter and get exclusive insights, industry
            trends.
          </p>
        </div>
        <div className="flex px-2 rounded-4xl items-center justify-between pl-20 py-2 bg-[var(--bgCard)] max-sm:pl-1 shadow-md">
          <input
            className="outline-none mr-2 max-sm:w-[150px]"
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <button
            className="bg-[var(--brand)] text-[var(--heading)] h-[40px]
          rounded-4xl px-5 hover:bg-[#16a34a] cursor-pointer  text-white"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex justify-between border-b-[1px] py-10 max-md:flex-col gap-5">
        <div className="flex flex-col gap-5">
          <img
            ref={(ref) => {
              imageRef.current = ref;
            }}
            className="w-[200px]"
            src={logo1Img}
            alt=""
          />
          <p>
            The ultimate platform designed to turbocharge the IT sector in
            Pakistan.
          </p>
          <div className="flex items-center gap-3">
            <img className="w-[20px]" src={phoneImg} alt="" />
            <p>+92 312 3023645</p>
          </div>

          <div className="flex gap-2">
            <div className="p-2 bg-[var(--brand)] rounded-full hover:scale-110 transition duration-[.33s] ease-in-out">
              <a target="_blank" href="https://www.facebook.com/internee.pk/">
                <img
                  className="w-[20px] cursor-pointer "
                  src={facebookImg}
                  alt=""
                />
              </a>
            </div>
            <div className="p-2 bg-[var(--brand)] rounded-full hover:scale-110 transition duration-[.33s] ease-in-out">
              <a target="_blank" href="https://x.com/interneepk">
                <img
                  className="w-[20px] cursor-pointer "
                  src={twitterImg}
                  alt=""
                />
              </a>
            </div>
            <div className="p-2 bg-[var(--brand)] rounded-full hover:scale-110 transition duration-[.33s] ease-in-out">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/internee-pk/?originalSubdomain=pk"
              >
                <img
                  className="w-[20px] cursor-pointer "
                  src={linkedInImg}
                  alt=""
                />
              </a>
            </div>
            <div className="p-2 bg-[var(--brand)] rounded-full hover:scale-110 transition duration-[.33s] ease-in-out">
              <a href="https://www.instagram.com/internee.pk/" target="_blank">
                <img
                  className="w-[20px] cursor-pointer "
                  src={instagramImg}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div>
            <h2 className="font-bold text-[20px] mb-3 text-[var(--heading)]">
              Company
            </h2>
            <ul className="flex flex-col gap-3">
              <Link onClick={handle} to="/" className="cursor-pointer">
                Home
              </Link>
              <Link to="/studentambassadors" className="cursor-pointer">
                Student Ambassador
              </Link>
              <a
                href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
                className="cursor-pointer"
              >
                Interns Profiles
              </a>
              <Link to="/about" className="cursor-pointer">
                About Us
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[20px] mb-3 text-[var(--heading)]">
              Resources
            </h2>
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer">
                <a href="https://linktr.ee/internee.pk">Community</a>
              </li>
              <a
                href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
                className="cursor-pointer"
              >
                Certification
              </a>
              <a
                href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
                className="cursor-pointer"
              >
                Scholarships
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-5 max-md:flex-col gap-5">
        <p className="text-[12px]">Copyright © 2025 internee.pk</p>
        <p className="flex gap-5 text-[12px]">
          <Link to="/Privacy" className="cursor-pointer">
            Terms of Use
          </Link>
          <Link to="/Privacy" className="cursor-pointer">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
