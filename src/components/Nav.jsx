import React, { useContext, useEffect, useRef, useState } from "react";
import moonImg from "../assets/images/moon.png";
import sunImg from "../assets/images/summer.png";
import logo1Img from "../assets/images/logoColor.png";
import logo2Img from "../assets/images/white-internee.png";
import menuImg from "../assets/images/menu.png";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/themeContext";
import cancelImg from "../assets/images/close.png";

export default function Nav({ setAppear }) {
  const { theme, setTheme } = useContext(AppContext);
  const imageRef = useRef();
  const sunRef = useRef();
  const moonRef = useRef();
  const toggle = useRef();
  const img1 = useRef();
  const img2 = useRef();

  function handleToggle() {
    if (img1.current.classList.contains("hidden")) {
      setAppear(false);
      img1.current.classList.remove("hidden");
      img2.current.classList.add("hidden");
      toggle.current.classList.add("hidden");
    } else {
      setAppear(true);
      img1.current.classList.add("hidden");
      img2.current.classList.remove("hidden");
      toggle.current.classList.remove("hidden");
    }
  }

  function handleTheme() {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    if (html.className === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function changeImg() {
    if (theme === "dark") {
      imageRef.current.src = logo2Img;
      moonRef.current.classList.remove("block");
      moonRef.current.classList.add("hidden");
      sunRef.current.classList.remove("hidden");
      sunRef.current.classList.add("block");
    } else if (theme === "light") {
      imageRef.current.src = logo1Img;
      sunRef.current.classList.remove("block");
      sunRef.current.classList.add("hidden");
      moonRef.current.classList.remove("hidden");
      moonRef.current.classList.add("block");
    }
  }
  useEffect(() => {
    changeImg();
  }, [theme]);

  return (
    <header className="flex bg-[var(--bgNav)] justify-between items-center text-[var(--heading)] py-4 border-[[var(--heading)]] sticky top-0 px-20 font-arial gap-2 z-30 max-xl:px-10">
      <div>
        <img
          ref={(ref) => {
            imageRef.current = ref;
          }}
          className="w-[200px] max-lg:w-[170px]"
          src={logo2Img}
          alt=""
        />
      </div>
      <nav>
        <ul className="flex gap-5 max-lg:hidden items-center">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "hover:text-[var(--brand)] cursor-pointer text-[15px] text-[var(--brand)]"
                : "hover:text-[var(--brand)] cursor-pointer text-[15px]";
            }}
          >
            Home
          </NavLink>
          <a
            href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Finternship"
            className="hover:text-[var(--brand)] cursor-pointer text-[15px]"
          >
            Internship
          </a>
          <NavLink
            to="/graduateprogram"
            className={({ isActive }) => {
              return isActive
                ? "hover:text-[var(--brand)] cursor-pointer text-[15px] text-[var(--brand)]"
                : "hover:text-[var(--brand)] cursor-pointer text-[15px]";
            }}
          >
            Graduate Program
          </NavLink>
          <NavLink
            to="/studentambassadors"
            className={({ isActive }) => {
              return isActive
                ? "hover:text-[var(--brand)] cursor-pointer text-[15px] text-[var(--brand)]"
                : "hover:text-[var(--brand)] cursor-pointer text-[15px]";
            }}
          >
            Student Ambassador
          </NavLink>
        </ul>

        <ul
          ref={(ref) => {
            toggle.current = ref;
          }}
          className="flex-col flex bg-[var(--bgNav)] absolute w-full right-0 bottom-[-300px] h-[300px] justify-between py-5 px-10 hidden"
        >
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "hover:text-[var(--brand)] cursor-pointer text-[15px] text-[var(--brand)]"
                : "hover:text-[var(--brand)] cursor-pointer text-[15px]";
            }}
          >
            Home
          </NavLink>
          <a
            href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Finternship"
            className="hover:text-[var(--brand)] cursor-pointer text-[15px]"
          >
            Internship
          </a>
          <a
            href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
            className="hover:text-[var(--brand)] cursor-pointer text-[15px]"
          >
            Job Portal
          </a>
          <NavLink
            to="/graduateprogram"
            className={({ isActive }) => {
              return isActive
                ? "hover:text-[var(--brand)] cursor-pointer text-[15px] text-[var(--brand)]"
                : "hover:text-[var(--brand)] cursor-pointer text-[15px]";
            }}
          >
            Graduate Program
          </NavLink>
          <NavLink
            to="/studentambassadors"
            className={({ isActive }) => {
              return isActive
                ? "hover:text-[var(--brand)] cursor-pointer text-[15px] text-[var(--brand)]"
                : "hover:text-[var(--brand)] cursor-pointer text-[15px]";
            }}
          >
            Student Ambassador
          </NavLink>
          <a
            href="https://www.internee.pk/sign-in"
            className="hover:text-[var(--brand)] cursor-pointer text-[15px]"
          >
            Sign In
          </a>
        </ul>
      </nav>
      <div className="flex gap-5 items-center">
        <a
          href="https://accounts.internee.pk/sign-in?redirect_url=https%3A%2F%2Fwww.internee.pk%2Fdashboard"
          className="px-5 py-2 bg-[var(--brand)] rounded-2xl hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-[var(--brand)] cursor-pointer max-lg:hidden transition duration-[.22s] ease-in-out text-white max-xl:px-3"
        >
          Job Portal
        </a>
        <a
          href="https://www.internee.pk/sign-in"
          className="px-5 py-2 bg-[var(--brand)] rounded-2xl border-2 border-transparent hover:border-2 hover:border-[var(--brand)] cursor-pointer max-lg:hidden transition duration-[.22s] ease-in-out text-white max-xl:px-3"
        >
          Sign In
        </a>
        <div className="flex gap-3 items-center">
          <div
            ref={(ref) => {
              moonRef.current = ref;
            }}
            className="flex justify-center items-center p-3 bg-[var(--btnBg)] rounded-full hidden"
          >
            <img
              onClick={handleTheme}
              className="w-[20px] min-w-[20px] cursor-pointer"
              src={moonImg}
              alt=""
            />
          </div>
          <div
            ref={(ref) => {
              sunRef.current = ref;
            }}
            className="flex justify-center items-center p-3 bg-[var(--btnBg)] rounded-full"
          >
            <img
              onClick={handleTheme}
              className="w-[20px] min-w-[20px] cursor-pointer"
              src={sunImg}
              alt=""
            />
          </div>
          <div
            onClick={handleToggle}
            className="flex px-2 py-1 bg-[var(--brand)] rounded-[12px] hidden max-lg:block "
          >
            <img
              ref={(ref) => {
                img1.current = ref;
              }}
              className=" mt-1 cursor-pointer"
              src={menuImg}
              alt=""
            />
            <img
              ref={(ref) => {
                img2.current = ref;
              }}
              className=" w-[32px] p-2 cursor-pointer hidden"
              src={cancelImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
