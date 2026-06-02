import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import InmoBotCombo from "./components/InmoBotCombo";
import GrowthFramework from "./components/GrowthFramework";
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

const DEFAULT_TITLE =
  "Automatik Media | Marketing, IA y Automatización para High-Ticket";
const DEFAULT_DESC =
  "Automatik Media — Marketing, IA y Automatización para negocios high-ticket. Captamos clientes premium con Meta Ads, Google Ads, IA, WhatsApp Bots y sistemas inteligentes 24/7.";
const DEFAULT_CANONICAL = "https://automatikmedia.com/";

const Landing = () => {
  return (
    <main
      data-testid="landing-page"
      className="relative overflow-x-clip bg-[#050505] text-white antialiased selection:bg-[#9EFF00] selection:text-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <Helmet>
        <title>{DEFAULT_TITLE}</title>
        <meta name="description" content={DEFAULT_DESC} />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESC} />
        <meta property="og:url" content={DEFAULT_CANONICAL} />
        <link rel="canonical" href={DEFAULT_CANONICAL} />
      </Helmet>
      <Analytics />
      <CursorGlow />
      <CountdownBanner />
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <InmoBotCombo />
      <GrowthFramework />
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
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/clinicas-esteticas"
              element={<NichePage slug="clinicas-esteticas" />}
            />
            <Route path="/cirujanos" element={<NichePage slug="cirujanos" />} />
            <Route
              path="/odontologia"
              element={<NichePage slug="odontologia" />}
            />
            <Route
              path="/inmobiliarias"
              element={<NichePage slug="inmobiliarias" />}
            />
            <Route
              path="/disenadores-interiores"
              element={<NichePage slug="disenadores-interiores" />}
            />
            <Route path="/abogados" element={<NichePage slug="abogados" />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
