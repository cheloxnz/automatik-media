import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import Problem from "./components/Problem";
import WhatWeDo from "./components/WhatWeDo";
import TheProcess from "./components/TheProcess";
import ByArea from "./components/ByArea";
import BySector from "./components/BySector";
import WhyAutomatik from "./components/WhyAutomatik";
import SuccessCases from "./components/SuccessCases";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CursorGlow from "./components/CursorGlow";
import Analytics from "./components/Analytics";
import NichePage from "./pages/NichePage";

const DEFAULT_TITLE =
  "Automatik Media | Agencia de Inteligencia Artificial para empresas";
const DEFAULT_DESC =
  "Construimos sistemas de IA a medida que transforman tu negocio: automatización de procesos, agentes conversacionales e integraciones inteligentes. Metodología en 4 fases, resultados desde la semana 1.";
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
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <Problem />
      <WhatWeDo />
      <TheProcess />
      <ByArea />
      <BySector />
      <WhyAutomatik />
      <SuccessCases />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
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
