import { Routes, Route } from "react-router-dom";

import TourGuidesPage from "./pages/TourGuidesPage";
import GuideProfilePage from "./pages/GuideProfilePage";
import GuideMessagePage from "./pages/GuideMessagePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<TourGuidesPage />}
      />

      <Route
        path="/guide/:id"
        element={<GuideProfilePage />}
      />

      <Route
        path="/guide/:id/message"
        element={<GuideMessagePage />}
      />

    </Routes>
  );
}

export default App;