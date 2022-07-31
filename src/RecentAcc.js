import React, { useEffect, useState } from "react";
import { ref, query, orderByChild, limitToLast, get } from "firebase/database";
import { db } from "./backend/firebase";
import "./scss/recentAcc.scss";
import User from "./User";

function RecentAcc() {
  const [recentUsers, setRecentUsers] = useState(null);
  useEffect(() => {
    const recentUsersRef = query(
      ref(db, "users"),
      orderByChild("createdAt"),
      limitToLast(5)
    );
    get(recentUsersRef).then((snapshot) => {
      setRecentUsers(snapshot.val());
    });
  }, []);
  return (
    <div className="recentAcc">
      <h2>Recent created accounts</h2>
      {recentUsers
        ? Object.entries(recentUsers).map(([uid, user]) => (
            <User
              key={uid}
              id={uid}
              name={user.name}
              imgUrl={user.imgUrl}
              email={user.email}
            />
          ))
        : null}
    </div>
  );
}

export default RecentAcc;
