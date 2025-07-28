import React, { useState } from "react";
import AstrologyApp from "./components/AstrologyApp";
import ShoppingApp from "./components/ShoppingApp";
import Stakeholders from "./components/Stakeholders";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("astrology"); // 'astrology' 或 'shopping'

  const renderPage = () => {
    switch (currentPage) {
      case "astrology":
        return <AstrologyApp />;
      case "shopping":
        return <ShoppingApp />;
      case "stakeholders":
        return <Stakeholders />;
      default:
        return <AstrologyApp />;
    }
  };

  return (
    <div className="App">
      {/* 頁面內容 */}
      {renderPage()}

      {/* 導覽列 */}
      <div className="app-navigation">
        <button className={`nav-btn ${currentPage === "astrology" ? "active" : ""}`} onClick={() => setCurrentPage("astrology")}>
          <span className="nav-icon">🔮</span>
          <span className="nav-text">占星</span>
        </button>
        <button className={`nav-btn ${currentPage === "shopping" ? "active" : ""}`} onClick={() => setCurrentPage("shopping")}>
          <span className="nav-icon">🛍️</span>
          <span className="nav-text">購物</span>
        </button>
        <button
          className={`nav-btn ${currentPage === "stakeholders" ? "active" : ""}`}
          onClick={() => setCurrentPage("stakeholders")}
        >
          <span className="nav-icon">✨</span>
          <span className="nav-text">運勢</span>
        </button>
      </div>
    </div>
  );
}

export default App;
