import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import PointsPage from "./pages/PointsPage";
import HistoryPage from "./pages/HistoryPage";
import BottomNav from "./components/BottomNav";
import Social1 from "./pages/Social1";
import Social2 from "./pages/Social2";
import Social3 from "./pages/Social3";


function App() {
  return (
    <Router>
      <div style={{ paddingBottom: "60px" }}>
        <Routes>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/points" element={<PointsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/social1" element={<Social1 />} />
          <Route path="/social2" element={<Social2 />} />
          <Route path="/social3" element={<Social3 />} />
          <Route path="*" element={<Navigate to="/favorites" />} />
        </Routes>
      </div>
      <BottomNav />
    </Router>
  );
}

export default App;
