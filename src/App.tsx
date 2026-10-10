import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

// Route-split: each page loads on demand so the landing bundle stays lean
// (previously a single 761KB chunk). Hero + NavBar stay eager.
const Discover = lazy(() => import('./pages/Discover'));
const TripDetail = lazy(() => import('./pages/TripDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Faq = lazy(() => import('./pages/Faq'));
const Login = lazy(() => import('./pages/Login'));
const History = lazy(() => import('./pages/History'));
const AiGenerator = lazy(() => import('./pages/AiGenerator'));
import ProtectedRoute from './components/ProtectedRoute';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" aria-busy="true" aria-label="Loading page">
      <div className="w-10 h-10 rounded-full border-2 border-black/10 border-t-black/60 animate-spin" />
    </div>
  );
}

function App() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen relative bg-transparent">
          {/* Global background: still image for reduced-motion users (and as
              video poster), deferred-metadata video otherwise. Decorative. */}
          <div className="fixed inset-0 -z-10 bg-black" aria-hidden="true">
            {reducedMotion ? (
              <img
                src="/tokyo-img.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                // @ts-ignore
                webkit-playsinline="true"
                preload="metadata"
                poster="/tokyo-img.jpg"
                src="/wandor-bg-video.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-100"
              />
            )}
          </div>

          <NavBar />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/trip/:id" element={<TripDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/history"
                element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/ai-generator"
                element={
                  <ProtectedRoute>
                    <AiGenerator />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
