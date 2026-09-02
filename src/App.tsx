import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Discover from './pages/Discover';
import TripDetail from './pages/TripDetail';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Login from './pages/Login';
import History from './pages/History';
import AiGenerator from './pages/AiGenerator';
import ResetPassword from './pages/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen relative bg-transparent">
          {/* Global Background Video with 100% Visibility */}
          <div className="fixed inset-0 -z-10 bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              // @ts-ignore
              webkit-playsinline="true"
              preload="auto"
              src="/wandor-bg-video.mp4"
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            />
          </div>

          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/trip/:id" element={<TripDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
