import React, { useState } from "react";
import AstrologyApp from "./components/AstrologyApp";
import ShoppingApp from "./components/ShoppingApp";
import Stakeholders from "./components/Stakeholders";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("astrology");

  const renderPage = () => {
    switch (currentPage) {
      case "astrology":
        return <AstrologyApp />;
      case "shopping":
        return <ShoppingApp />;
      case "stakeholders":
        return <Stakeholders />;
      case "home":
        return <AstrologyApp />;
      case "card":
        return <AstrologyApp />;
      default:
        return <AstrologyApp />;
    }
  };

  const navItems = [
    { key: "card", img: "/icon/card.png", activeImg: "/activeicon/card1.png" },
    { key: "stakeholders", img: "/icon/group.png", activeImg: "/activeicon/team1.png" },
    { key: "home", img: "/icon/home.png", activeImg: "/activeicon/home1.png" },
    { key: "shopping", img: "/icon/shopping.png", activeImg: "/activeicon/shopping1.png" },
    { key: "astrology", img: "/icon/user.png", activeImg: "/activeicon/user1.png" },
  ];

  return (
    <div className="App">
      {renderPage()}

      <div className="app-navigation">
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`nav-btn ${currentPage === item.key ? "active" : ""}`}
            onClick={() => setCurrentPage(item.key)}
          >
            <div className="nav-icon-wrapper">
              <img src={currentPage === item.key ? item.activeImg : item.img} alt={item.key} className="nav-icon" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
