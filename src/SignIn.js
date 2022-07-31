import React from "react";
import { auth, provider, db } from "./backend/firebase";
import { signInWithPopup } from "firebase/auth";
import { ref, child, get, set } from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
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
              followerCount: 0,
              followingCount: 0,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signin">
      <button className="btn" onClick={signInWithGoogle}>
        <span>
          <FontAwesomeIcon icon={faGoogle} />
        </span>
        <span>Sign in with google</span>
      </button>
    </div>
  );
};

export default SignIn;
