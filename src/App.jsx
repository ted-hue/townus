import React, { Suspense } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// Code splitting with React.lazy
const Why = React.lazy(() => import("./components/Why"));
const How = React.lazy(() => import("./components/How"));
const What = React.lazy(() => import("./components/What"));
const Process = React.lazy(() => import("./components/Process"));
const Promo = React.lazy(() => import("./components/Promo"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const CTA = React.lazy(() => import("./components/CTA"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <>
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-main">
        메인 콘텐츠로 건너뛰기
      </a>
      
      <Navigation />
      <main role="main" id="main-content">
        <Hero />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Why />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <How />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <What />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Process />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Promo />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <CTA />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}