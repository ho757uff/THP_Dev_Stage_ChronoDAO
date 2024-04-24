import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPopup from "./build/chrome-mv3-dev/IndexPopup";
import FullScreenPage from "./src/pages/FullScreenPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/full-screen" Component={FullScreenPage} />
        <Route path="/" Component={IndexPopup} />
      </Routes>
    </Router>
  );
};

export default App;
