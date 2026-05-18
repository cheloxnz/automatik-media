import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import InmoBotCombo from "./components/InmoBotCombo";
import HowItWorks from "./components/HowItWorks";
import Automation from "./components/Automation";
import Results from "./components/Results";
import ValueCalculator from "./components/ValueCalculator";
import Psychology from "./components/Psychology";
import SuccessCases from "./components/SuccessCases";
import Pricing from "./components/Pricing";
import PlansComparator from "./components/PlansComparator";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CursorGlow from "./components/CursorGlow";
import ExitIntentPopup from "./components/ExitIntentPopup";
import TrialIntentModal from "./components/TrialIntentModal";
import CountdownBanner from "./components/CountdownBanner";
import Analytics from "./components/Analytics";
import NichePage from "./pages/NichePage";

const Landing = () => {
  return (
    <main
      data-testid="landing-page"
      className="relative overflow-x-clip bg-[#050505] text-white antialiased selection:bg-[#9EFF00] selection:text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <Analytics />
      <CursorGlow />
      <CountdownBanner />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <InmoBotCombo />
      <HowItWorks />
      <Automation />
      <Results />
      <ValueCalculator />
      <Psychology />
      <SuccessCases />
      <Pricing />
      <PlansComparator />
      <FAQ />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
      <ExitIntentPopup />
      <TrialIntentModal />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/clinicas-esteticas" element={<NichePage />} />
          <Route path="/cirujanos" element={<NichePage />} />
          <Route path="/odontologia" element={<NichePage />} />
          <Route path="/inmobiliarias" element={<NichePage />} />
          <Route path="/disenadores-interiores" element={<NichePage />} />
          <Route path="/abogados" element={<NichePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
