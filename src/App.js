import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import userContext from "./userContext";
import { auth, db } from "./backend/firebase";
import Profile from "./Profile";
import { child, get, ref } from "firebase/database";
import Loader from "./Loader";
import Nav from "./Nav";
import PostPage from "./PostPage";
import Saved from "./Saved";
import RecentAcc from "./RecentAcc";
import LoadingContext from "./LoadingContext";

const App = () => {
  const user = useState(null);
  const setUser = user[1];
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        setLoading(true);
        get(child(ref(db), `users/${u.uid}`)).then((snapshot) => {
          if (snapshot.exists()) {
            setUser({ ...snapshot.val(), uid: snapshot.key });
          }
          setLoading(false);
        });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <React.StrictMode>
        {loading ? (
          <Loader />
        ) : (
          <userContext.Provider value={user}>
            <LoadingContext.Provider value={setLoading}>
              <div className="container">
                <Router>
                  <Nav setSidebarActive={setSidebarActive} />
                  <Sidebar
                    setTopic={setTopic}
                    sidebarActive={sidebarActive}
                    setSidebarActive={setSidebarActive}
                  />
                  <Routes>
                    <Route path="/" element={<Feed topic={topic} />} />
                    <Route path="/post/:id" element={<PostPage />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/saved" element={<Saved />} />
                  </Routes>
                  <RecentAcc />
                </Router>
              </div>
            </LoadingContext.Provider>
          </userContext.Provider>
        )}
      </React.StrictMode>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
