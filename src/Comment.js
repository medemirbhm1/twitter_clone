import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { child, get, ref, remove } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./backend/firebase";
import userContext from "./userContext";

const Comment = ({ comment, calcTimePassed, id, postId }) => {
  const [timePassed, setTimePassed] = useState("");
  const [commenter, setCommenter] = useState(null);
  const [user] = useContext(userContext);
  useEffect(() => {
    get(child(ref(db), "users/" + comment.by)).then((snapshot) => {
      setCommenter(snapshot.val());
    });
    setTimePassed(calcTimePassed(+comment.commentedAt));
  }, []);
  function deleteComment() {
    const commentRef = ref(db, "comments/" + postId + "/" + id);
    remove(commentRef);
    setCommenter(null);
  }
  return commenter ? (
    <div className="comment">
      <Link to={`/profile/${comment.by}`}>
        <img src={commenter.imgUrl} referrerPolicy="no-referrer" alt="" />
      </Link>
      <div className="text">
        <Link to={`/profile/${comment.by}`}>{commenter.name}</Link>
        <span className="time">{timePassed}</span>
        <p>{comment.text}</p>
      </div>
      {user.uid === comment.by ? (
        <button className="delete" onClick={deleteComment}>
          <FontAwesomeIcon icon={faBan} />
        </button>
      ) : null}
    </div>
  ) : null;
};

export default Comment;
