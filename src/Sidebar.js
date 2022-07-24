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
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
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
const Sidebar = ({ setTopic }) => {
  const [user] = useContext(userContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <div className="logo">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </Link>
        <ul className="links">
          <li>
            <button onClick={() => setTopic("")}>
              <span>
                <FontAwesomeIcon icon={faEarthAfrica} />
              </span>
              <span>All</span>
            </button>
          </li>
          <li>
            <button onClick={() => setTopic("coding")}>
              <span>
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span>Coding</span>
            </button>
          </li>
          <li>
            <button onClick={() => setTopic("football")}>
              <span>
                <FontAwesomeIcon icon={faFutbol} />
              </span>
              <span>Football</span>
            </button>
          </li>
          <li>
            <button onClick={() => setTopic("music")}>
              <span>
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <span>Music</span>
            </button>
          </li>
          <li>
            <button>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Profile</span>
            </button>
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
