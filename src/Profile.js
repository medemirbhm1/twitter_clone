import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userContext from "./userContext";
import { db } from "./backend/firebase";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [visitor] = useContext(userContext);
  const { id } = useParams();
  useEffect(() => {
    if (id === visitor.uid) {
      setUser(visitor);
    } else {
      get(ref(db, `users/${id}`)).then((snapshot) => {
        setUser(snapshot.val());
      });
    }
    const q = query(ref(db, "posts"), orderByChild("postedBy", equalTo(id)));
    get(q).then((snapshot) => {
      setPosts(snapshot.val());
    });
  }, []);
  return (
    <div className="profile">
      {user && posts ? (
        <div className="head">
          <img src={user.imgUrl} referrerPolicy="no-referrer" alt="" />
          <div className="text">
            <h1>{user.name}</h1>
            <ul className="stats">
              <li>
                <span>Follwers</span>
                <span>10k</span>
              </li>
              <li>
                <span>Following</span>
                <span>22</span>
              </li>
              <li>
                <span>Posts</span>
                <span>{posts.keys}</span>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
