import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About-us";
import Contact from "./pages/Contact-us";
import Blog from "./pages/Blog";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
