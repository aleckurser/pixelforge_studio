import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LearningAcademy from './pages/learning-academy';
import PricingPlans from './pages/pricing-plans';
import AssetMarketplace from './pages/asset-marketplace';
import StudioWorkspace from './pages/studio-workspace';
import Homepage from './pages/homepage';
import AboutPixelForge from './pages/about-pixel-forge';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutPixelForge />} />
        <Route path="/learning-academy" element={<LearningAcademy />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/asset-marketplace" element={<AssetMarketplace />} />
        <Route path="/studio-workspace" element={<StudioWorkspace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about-pixel-forge" element={<AboutPixelForge />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
