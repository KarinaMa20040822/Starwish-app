import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import PointsPage from "./pages/PointsPage";
import HistoryPage from "./pages/HistoryPage";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: "60px" }}>
        <Routes>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<Navigate to="/favorites" />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;
