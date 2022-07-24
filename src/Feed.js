import { useContext, useEffect, useState } from "react";
import userContext from "./userContext";
import AddPost from "./AddPost";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import { db } from "./backend/firebase";
import "./scss/feed.scss";
const Feed = ({ topic }) => {
  const [user] = useContext(userContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let q;
    if (topic) {
      q = query(ref(db, "posts"), orderByChild("topic"), equalTo(topic));
    } else {
      q = query(ref(db, "posts"));
    }
    setPosts([]);
    get(q).then((snapshot) => {
      snapshot.forEach((child) => {
        setPosts((old) => [...old, child.val()]);
      });
    });
  }, [topic]);
  return (
    <div className="feed">
      {user && <AddPost user={user} />}
      <div className="posts"></div>
    </div>
  );
};

export default Feed;
