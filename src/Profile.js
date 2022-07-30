import {
  equalTo,
  get,
  orderByChild,
  query,
  ref,
  runTransaction,
} from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userContext from "./userContext";
import { db } from "./backend/firebase";
import "./scss/profile.scss";
import Post from "./Post";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const [following, setFollowing] = useState(false);
  const [visitor] = useContext(userContext);
  const { id } = useParams();
  useEffect(() => {
    if (id === visitor?.uid) {
      setUser(visitor);
    } else {
      get(ref(db, `users/${id}`)).then((snapshot) => {
        if (snapshot.val().followerCount) {
          setFollowing(
            Object.keys(snapshot.val().followers).includes(visitor?.uid)
          );
        }
        setUser(snapshot.val());
      });
    }
    const q = query(ref(db, "posts"), orderByChild("postedBy"), equalTo(id));
    get(q).then((snapshot) => {
      setPosts(snapshot.val());
    });
  }, [id]);
  function toggleFollow() {
    if (user) {
      const visitedRef = ref(db, "/users/" + id);
      const visitorRef = ref(db, "/users/" + visitor.uid);
      setFollowing((p) => !p);

      runTransaction(visitedRef, (user) => {
        if (user) {
          if (user.followers && user.followers[visitor.uid]) {
            user.followerCount--;
            user.followers[visitor.uid] = null;
          } else {
            user.followerCount++;
            if (!user.followers) {
              user.followers = {};
            }
            user.followers[visitor.uid] = true;
          }
        }
        return user;
      });
      runTransaction(visitorRef, (user) => {
        if (user) {
          if (user.followings && user.followings[id]) {
            user.followingCount--;
            user.followings[id] = null;
          } else {
            user.followingCount++;
            if (!user.followings) {
              user.followings = {};
            }
            user.followings[id] = true;
          }
        }
        return user;
      });
    }
  }
  return (
    <div className="profile sec">
      {user ? (
        <>
          <div className="head">
            <img src={user.imgUrl} referrerPolicy="no-referrer" alt="" />
            <div className="text">
              <h1>{user.name}</h1>
              <ul className="stats">
                <li>
                  <span>Follwers</span>
                  <span>{user.followerCount}</span>
                </li>
                <li>
                  <span>Following</span>
                  <span>{user.followingCount}</span>
                </li>
                <li>
                  <span>Posts</span>
                  <span>{posts ? Object.keys(posts).length : 0}</span>
                </li>
              </ul>
              {visitor ? (
                id !== visitor.uid ? (
                  <button className="Follow" onClick={toggleFollow}>
                    {following ? "Unfollow" : "Follow"}
                  </button>
                ) : null
              ) : null}
            </div>
          </div>
          {posts ? (
            <div className="posts">
              {Object.entries(posts).map(([key, post]) => (
                <Post
                  key={key}
                  id={key}
                  text={post.text}
                  hasImg={post.hasImg}
                  postedBy={post.postedBy}
                  postedAt={post.postedAt}
                  likeCount={post.likeCount}
                  likes={post.likes}
                  inFeed={true}
                />
              ))}
            </div>
          ) : (<div className="nothing">Nothing Posted</div>)}
        </>
      ) : null}
    </div>
  );
};

export default Profile;
