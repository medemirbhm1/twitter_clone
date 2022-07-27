import {
  child,
  get,
  limitToLast,
  orderByKey,
  push,
  query,
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
import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Comment from "./Comment";
const Post = ({
  id,
  text,
  hasImg,
  postedBy,
  postedAt,
  likes,
  likeCount,
  inFeed,
}) => {
  const [poster, setPoster] = useState(null);
  const [timePassed, setTimePassed] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [likesC, setLikesC] = useState(likeCount);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [commenting, setCommenting] = useState(false);
  const [comments, setComments] = useState(null);
  const [user] = useContext(userContext);

  useEffect(() => {
    //getting poster info
    const dbRef = ref(db);
    get(child(dbRef, `users/${postedBy}`)).then((snapshot) => {
      setPoster(snapshot.val());
    });
    //calculating time passed since posting
    setTimePassed(calcTimePassed(postedAt));

    //getting post image
    if (hasImg) {
      const imgRef = storageRef(storage, "postImgs/" + id);
      getDownloadURL(imgRef)
        .then((r) => setImgUrl(r))
        .catch((e) => console.log(e));
    }
    //check if user has liked this post before
    if (likeCount > 0 && user) {
      if (likes[user.uid]) {
        setLiked(true);
      }
    } else {
      setLiked(false);
    }
    //check if user has saved this post
    if (user?.saveCount > 0) {
      if (user.saves[id]) {
        setSaved(true);
      }
    } else {
      setSaved(false);
    }
    if (inFeed) {
      //get two latest comments
      const latestCommentsQuery = query(
        ref(db, "comments/" + id),
        orderByKey(),
        limitToLast(3)
      );
      get(latestCommentsQuery).then((snapshot) => {
        setComments(snapshot.val());
      });
    } else {
      get(ref(db, `comments/${id}`)).then((snapshot) => {
        setComments(snapshot.val());
      });
      setCommenting(true);
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
    } else {
      pt = "just now";
    }
    return pt;
  }
  function deletePost() {
    remove(ref(db, "posts/" + id));
    if (hasImg) {
      deleteObject(storageRef(storage, "postImgs/" + id));
    }
    setPoster(null);
  }
  function toggleLike(e) {
    e.stopPropagation();
    if (user) {
      const postRef = ref(db, "/posts/" + id);
      if (liked) {
        setLikesC((p) => p - 1);
      } else {
        setLikesC((p) => p + 1);
      }
      setLiked((p) => !p);
      runTransaction(postRef, (post) => {
        if (post) {
          if (post.likes && post.likes[user?.uid]) {
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
  }
  function toggleSave(e) {
    e.stopPropagation();
    if (user) {
      const userRef = ref(db, "/users/" + user.uid);
      setSaved((p) => !p);
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
  }
  function validateComment(value) {
    let err;
    if (!value) {
      err = "Nice try ! Please type something.";
    }
    return err;
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
          <div>
            <button onClick={toggleLike}>
              {liked ? (
                <span>
                  <FontAwesomeIcon icon={faHeartSolid} />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              )}
            </button>
            <span className="number">{likesC}</span>
          </div>
          <div>
            <button onClick={() => setCommenting((p) => !p)}>
              {commenting ? (
                <span>
                  <FontAwesomeIcon icon={faCommentSolid} />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faComment} />
                </span>
              )}
            </button>
          </div>
          <div>
            <button onClick={toggleSave}>
              {saved ? (
                <span>
                  <FontAwesomeIcon icon={faBookmarkSolid} />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faBookmark} />
                </span>
              )}
            </button>
          </div>
        </div>
        {commenting && user ? (
          <>
            <Formik
              initialValues={{
                comment: "",
              }}
              onSubmit={async (values, props) => {
                const commentsListRef = ref(db, "comments/" + id);
                const newCommentRef = push(commentsListRef);
                setComments((p) => {
                  return {
                    ...p,
                    newCommentRef: {
                      text: values.comment,
                      by: user.uid,
                      commentedAt: new Date().valueOf(),
                    },
                  };
                });
                set(newCommentRef, {
                  text: values.comment,
                  by: user.uid,
                  commentedAt: new Date().valueOf(),
                });
                props.resetForm();
              }}
            >
              {({ errors }) => (
                <Form className={`form ${errors.comment ? "error" : null}`}>
                  <Field
                    name="comment"
                    placeholder={errors.comment || "say something"}
                    validate={validateComment}
                  />
                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
            <div className="comments">
              {comments
                ? Object.entries(comments).map(([key, comment]) => (
                    <Comment
                      key={key}
                      id={key}
                      postId={id}
                      comment={comment}
                      calcTimePassed={calcTimePassed}
                    />
                  ))
                : null}
              {inFeed ? <Link to={`/post/${id}`}>view more comments</Link> : ""}
            </div>
          </>
        ) : null}
      </div>
    </div>
  ) : null;
};

export default Post;
