import React from "react";
import "./scss/nav.scss";
const Nav = ({ setSidebarActive }) => {
  return (
    <div className="nav">
      <h3>Home</h3>
      <button className="hamburger" onClick={() => setSidebarActive((p) => !p)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Nav;
