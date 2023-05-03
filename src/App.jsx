import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import { useState } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setScrollPosition(scrollTop);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });

  return (
    <>
      <Router onScroll={handleScroll}>
        <Navbar distance={scrollPosition} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register"  />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
