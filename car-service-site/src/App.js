import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quotes from "./pages/Quotes";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />       
        <Route path="/contact" element={<Contact />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}
