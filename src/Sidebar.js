import React, { useContext } from "react";
import "./scss/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faEarthAfrica,
  faFutbol,
  faCode,
  faMusic,
  faFeatherPointed,
  faArrowRightFromBracket,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { auth, provider } from "./backend/firebase";
import { signInWithPopup } from "firebase/auth";
import userContext from "./userContext";
import { db } from "./backend/firebase";
import { child, get, ref, set } from "firebase/database";
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((a) => {
      const dbRef = ref(db);
      const { uid, email, displayName, photoURL } = a.user;
      get(child(dbRef, "users/" + uid)).then((snapshot) => {
        if (!snapshot.exists()) {
          set(ref(db, "users/" + uid), {
            name: displayName,
            email: email,
            imgUrl: photoURL,
            saveCount: 0,
          });
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
const logout = () => {
  auth.signOut();
};
const Sidebar = ({ setTopic, sidebarActive, setSidebarActive }) => {
  const [user] = useContext(userContext);
  return (
    <div className={`sidebar ${sidebarActive ? "active" : null}`}>
      <div className="top">
        <Link to="/">
          <div className="logo">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </Link>
        <ul className="links">
          <li>
            <Link to="/" onClick={() => setTopic("")}>
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
            <Link
              to={`saved/${user.uid}`}
              onClick={() => setSidebarActive(false)}
            >
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <span>Saved</span>
            </Link>
          </li>
          <li>
            <Link
              to={`profile/${user.uid}`}
              onClick={() => setSidebarActive(false)}
            >
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
        <button className="btn tweet">
          <span>
            <FontAwesomeIcon icon={faFeatherPointed} />
          </span>
          <span>Tweet</span>
        </button>
      </div>
      <div className="bottom">
        {user ? (
          <button className="btn" onClick={logout}>
            <span>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span>Logout</span>
          </button>
        ) : (
          <button className="btn" onClick={signInWithGoogle}>
            <span>
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            <span>Login</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
