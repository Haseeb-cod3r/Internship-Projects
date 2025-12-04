import React from "react";
import Categories from "../components/Categories";
import { Outlet, useOutletContext } from "react-router-dom";

export default function Graduate() {
   const appear =  useOutletContext()
  return (
    <>
      <Categories appear={appear}/>
      <Outlet />
    </>
  );
}
