import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "./backend/firebase";

const Post = ({ text, hasImg, postedBy, topic, postedAt }) => {
  const [poster, setPoster] = useState(null);
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `users/${postedBy}`)).then((snapshot) => {
      setPoster(snapshot.val());
    });
    calcTimePassed(postedAt);
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
      pt = `${Math.floor(pt / 1000)} min`;
    } else if (pt > 1000) {
      pt = `${Math.floor(pt / 1000)} s`;
    }
    console.log(pt);
    return pt;
  }
  return poster ? (
    <div className="post">
      <img src={poster.imgUrl} alt="" />
      <div>
        <div>
          <span>{poster.name}</span>
          <span>{}</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Post;
