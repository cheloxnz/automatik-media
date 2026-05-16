import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Automation from "./components/Automation";
import Results from "./components/Results";
import Psychology from "./components/Psychology";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CursorGlow from "./components/CursorGlow";

const Landing = () => {
  return (
    <main
      data-testid="landing-page"
      className="relative bg-[#050505] text-white antialiased selection:bg-[#9EFF00] selection:text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <CursorGlow />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Automation />
      <Results />
      <Psychology />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
