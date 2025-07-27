import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { label: "首頁", path: "/favorites", icon: "🏠" },
    { label: "積分", path: "/points", icon: "⭐" },
    { label: "歷史", path: "/history", icon: "📜" },
    { label: "其他", path: "#", icon: "🧙‍♀️" },
    { label: "我", path: "#", icon: "👤" },
  ];

  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0,
      background: "#fff", borderTop: "1px solid #ccc",
      display: "flex", justifyContent: "space-around",
      padding: "0.5rem 0"
    }}>
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} style={{ textAlign: "center", color: location.pathname === item.path ? "#a64dff" : "#888", textDecoration: "none" }}>
          <div>{item.icon}</div>
          <div style={{ fontSize: "0.75rem" }}>{item.label}</div>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
