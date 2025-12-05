import React, { useEffect } from "react";
import { UnlockPotential } from "../components/UnlockPotential";
import StudenOptions from "../components/StudenOptions";
import { useOutletContext } from "react-router-dom";

export default function Student() {
  const { setAppear } = useOutletContext();
  useEffect(() => {
    setAppear(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UnlockPotential />
      <StudenOptions />
    </>
  );
}
