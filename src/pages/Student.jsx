import React from "react";
import { UnlockPotential } from "../components/UnlockPotential";
import StudenOptions from "../components/StudenOptions";
import { useOutletContext } from "react-router-dom";

export default function Student() {
  const appear = useOutletContext();
  return (
    <>
      <UnlockPotential appear={appear} />
      <StudenOptions />
    </>
  );
}
