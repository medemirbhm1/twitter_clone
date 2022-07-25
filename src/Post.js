import {
  child,
  get,
  push,
  ref,
  remove,
  runTransaction,
  set,
} from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { db, storage } from "./backend/firebase";
import {
  ref as storageRef,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import userContext from "./userContext";
import {
  faBookmark,
  faComment,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as faBookmarkSolid,
  faComment as faCommentSolid,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ id, text, hasImg, postedBy, postedAt }) => {
  const [poster, setPoster] = useState(null);
  const [timePassed, setTimePassed] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [user] = useContext(userContext);
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `users/${postedBy}`)).then((snapshot) => {
      setPoster(snapshot.val());
    });
    calcTimePassed(postedAt);
    if (hasImg) {
      const imgRef = storageRef(storage, "postImgs/" + id);
      getDownloadURL(imgRef)
        .then((r) => setImgUrl(r))
        .catch((e) => console.log(e));
    }
  }, []);
  function calcTimePassed(pt) {
    pt = new Date().valueOf() - pt;
    if (pt > 1000 * 60 * 60 * 24 * 7 * 4 * 12) {
      pt = `${Math.floor(pt / (1000 * 60 * 60 * 24 * 7 * 4 * 12))} yea`;
    } else if (pt > 1000 * 60 * 60 * 24 * 7 * 4) {
      pt = `${Math.floor(pt / (1000 * 60 * 60 * 24 * 7 * 4))} mo`;
    } else if (pt > 1000 * 60 * 60 * 24 * 7) {
      pt = `${Math.floor(pt / (1000 * 60 * 60 * 24 * 7))} w`;
    } else if (pt > 1000 * 60 * 60 * 24) {
      pt = `${Math.floor(pt / (1000 * 60 * 60 * 24))} d`;
    } else if (pt > 1000 * 60 * 60) {
      pt = `${Math.floor(pt / (1000 * 60 * 60))} h`;
    } else if (pt > 1000 * 60) {
      pt = `${Math.floor(pt / (1000 * 60))} min`;
    } else if (pt > 1000) {
      pt = `${Math.floor(pt / 1000)} s`;
    }
    setTimePassed(pt);
  }
  function deletePost() {
    remove(ref(db, "posts/" + id));
    if (hasImg) {
      deleteObject(storageRef(storage, "postImgs/" + id));
    }
    setPoster(null);
  }
  function toggleLike() {
    const postRef = ref(db, "/posts/" + id);
    runTransaction(postRef, (post) => {
      if (post) {
        if (post.likes && post.likes[user.uid]) {
          post.likeCount--;
          post.likes[user.uid] = null;
        } else {
          post.likeCount++;
          if (!post.likes) {
            post.likes = {};
          }
          post.likes[user.uid] = true;
        }
      }
      return post;
    });
  }
  function toggleSave() {
    const userRef = ref(db, "/users/" + user.uid);
    runTransaction(userRef, (user) => {
      if (user) {
        if (user.saves && user.saves[id]) {
          user.saveCount--;
          user.saves[id] = null;
        } else {
          user.saveCount++;
          if (!user.saves) {
            user.saves = {};
          }
          user.saves[id] = true;
        }
      }
      return user;
    });
  }
  return poster ? (
    <div className="post">
      <img src={poster.imgUrl} alt="" />
      <div>
        <div className="up">
          <span>{poster.name}</span>
          <span>
            {poster.email} . {timePassed}
          </span>
          {postedBy === user?.uid ? (
            <button onClick={deletePost}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          ) : null}
        </div>
        <p>{text}</p>
        {hasImg ? (
          <div
            className="image"
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        ) : null}
        <div className="react">
          <button onClick={toggleLike}>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>
              <FontAwesomeIcon icon={faHeartSolid} />
            </span>
          </button>
          <button>
            <FontAwesomeIcon icon={faComment} />
          </button>
          <button onClick={toggleSave}>
            <span>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
            <span>
              <FontAwesomeIcon icon={faBookmarkSolid} />
            </span>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Post;
