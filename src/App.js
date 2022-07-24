import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import userContext from "./userContext";
import { auth } from "./backend/firebase";
import Profile from "./Profile";

const App = () => {
  const user = useState();
  const [topic, setTopic] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => user[1](u));
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <React.StrictMode>
        <userContext.Provider value={user}>
          <div className="container">
            <Router>
              <Sidebar setTopic={setTopic} />
              <Routes>
                <Route path="/" element={<Feed topic={topic} />} />
                <Route path="/profile/:id" element={<Profile topic="" />} />
              </Routes>
            </Router>
            {/* Search bar */}
          </div>
        </userContext.Provider>
      </React.StrictMode>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
