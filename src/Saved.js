import { get, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { db } from "./backend/firebase";
import Post from "./Post";
import userContext from "./userContext";

const Saved = () => {
  const [user] = useContext(userContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (user && user.saves) {
      Object.keys(user.saves).forEach((postId) => {
        get(ref(db, `/posts/${postId}`)).then((snapshot) => {
          setPosts((p) => [...p, { ...snapshot.val(), key: snapshot.key }]);
        });
      });
    }
  }, [user]);
  return (
    <div className="saved sec">
      { posts.length ? posts.map(
        ({ key, text, hasImg, postedBy, postedAt, likes, likeCount }) => (
          <Post
            key={key}
            id={key}
            text={text}
            hasImg={hasImg}
            postedBy={postedBy}
            postedAt={postedAt}
            likeCount={likeCount}
            likes={likes}
            inFeed={true}
          />
        )
      ): (<div className="nothing">Nothing Found !</div>)}
    </div>
  );
};

export default Saved;
