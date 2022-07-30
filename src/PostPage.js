import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { db } from "./backend/firebase";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    get(ref(db, `posts/${params.id}`)).then((snapshot) => {
      setPost(snapshot.val());
    });
  }, []);
  return post ? (
    <div className="sec">
      <Post
        id={params.id}
        text={post.text}
        hasImg={post.hasImg}
        postedBy={post.postedBy}
        postedAt={post.postedAt}
        likeCount={post.likeCount}
        likes={post.likes}
        inFeed={false}
      />
    </div>
  ) : null;
};

export default PostPage;
