import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SettingPage from "./pages/settings";
import "./App.css";
import logo from "./logo.svg";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>這是首頁，點下方按鈕進入設定頁</p>
        <Link to="/settings" className="App-link">
          前往設定頁
        </Link>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
