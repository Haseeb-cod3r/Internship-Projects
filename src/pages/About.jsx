import React, { useEffect } from "react";
import { AboutCard1 } from "../components/AboutCard1";
import AboutCard2 from "../components/AboutCard2";
import { useOutletContext } from "react-router-dom";

export default function About() {
  const { setAppear } = useOutletContext();
  useEffect(() => {
    setAppear(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutCard1 />
      <AboutCard2 />
    </>
  );
}
