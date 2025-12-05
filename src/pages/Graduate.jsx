import React, { useEffect } from "react";
import Categories from "../components/Categories";
import { Outlet, useOutletContext } from "react-router-dom";

export default function Graduate() {
  const { setAppear } = useOutletContext();

  useEffect(() => {
    setAppear(false);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Categories/>
      <Outlet />
    </>
  );
}
