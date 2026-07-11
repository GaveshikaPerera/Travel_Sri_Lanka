import "./App.css";
import { Toaster } from "react-hot-toast";

import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;