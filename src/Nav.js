import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./scss/nav.scss";
const Nav = ({ setSidebarActive }) => {
  const { pathname } = useLocation();
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    setRouteName(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <div className="nav">
      <h3>{routeName || "feed"}</h3>
      <button className="hamburger" onClick={() => setSidebarActive((p) => !p)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Nav;
