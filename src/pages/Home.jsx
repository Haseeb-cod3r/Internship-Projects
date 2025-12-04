import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import Partners from "../components/Partners.jsx";
import Internships from "../components/Dream.jsx";
import Skill from "../components/Skill.jsx";
import Instructor from "../components/Instructor.jsx";
import Career from "../components/Career.jsx";
import Mock from "../components/Mock.jsx";
import Journey from "../components/Journey.jsx";
import AiCoach from "../components/AiCoach.jsx";
import Info from "../components/Info.jsx";
import Rating from "../components/Rating.jsx";
import Opportunities from "../components/Opportunities.jsx";
import Numbers from "../components/Numbers.jsx";
import { PopUp } from "../components/PopUp.jsx";
import winnerImg from "../assets/images/winners.jpeg";
import { useOutletContext } from "react-router-dom";
const imgUrl = winnerImg;
export default function () {
  const appear = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");
    if (!alreadyShown) {
      setIsModalOpen(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <PopUp
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={imgUrl}
      />
      <Hero appear={appear} />
      <Partners />
      <Internships />
      <Skill />
      <Instructor />
      <Career />
      <Mock />
      <Journey />
      <AiCoach />
      <Info />
      <Rating />
      <Opportunities />
      <Numbers />
    </>
  );
}
