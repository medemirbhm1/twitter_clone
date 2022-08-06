import React, { useContext } from "react";
import "./scss/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faEarthAfrica,
  faFutbol,
  faCode,
  faMusic,
  faArrowRightFromBracket,
  faBookmark,
  faUser,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "./backend/firebase";
import userContext from "./userContext";

const Sidebar = ({ setTopic, sidebarActive, setSidebarActive }) => {
  const [user] = useContext(userContext);
  const navigate = useNavigate("");
  const logout = () => {
    auth.signOut();
    navigate("/");
    setSidebarActive(false);
  };
  return (
    <div className={`sidebar ${sidebarActive ? "active" : null}`}>
      <div className="top">
        <Link to="/" onClick={() => window.location.reload()}>
          <div className="logo">
            <FontAwesomeIcon icon={faShareNodes} />
          </div>
        </Link>
        <ul className="links">
          <li>
            <Link
              to="/"
              onClick={() => {
                setTopic("");
                setSidebarActive(false);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faEarthAfrica} />
              </span>
              <span>All</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setTopic("coding");
                setSidebarActive(false);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span>Coding</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setTopic("football");
                setSidebarActive(false);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faFutbol} />
              </span>
              <span>Football</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                setTopic("music");
                setSidebarActive(false);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <span>Music</span>
            </Link>
          </li>
          <li>
            <Link to="/saved" onClick={() => setSidebarActive(false)}>
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <span>Saved</span>
            </Link>
          </li>
          <li>
            <Link
              to={`/profile/${user?.uid}`}
              onClick={() => setSidebarActive(false)}
            >
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <button className="btn" onClick={logout}>
          <span>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
