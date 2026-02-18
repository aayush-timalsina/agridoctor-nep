import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import { useThemeStore } from './store/useStore';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Detection = lazy(() => import('./pages/Detection'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Community = lazy(() => import('./pages/Community'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const FarmerDashboard = lazy(() => import('./pages/FarmerDashboard'));
const BuyerDashboard = lazy(() => import('./pages/BuyerDashboard'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

function App() {
  const { isDark, setTheme } = useThemeStore();

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('agridoctor-theme');
    if (savedTheme) {
      const themeData = JSON.parse(savedTheme);
      setTheme(themeData.state.isDark);
    }
  }, [setTheme]);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="detection" element={<Detection />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="community" element={<Community />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="farmer-dashboard" element={<FarmerDashboard />} />
            <Route path="buyer-dashboard" element={<BuyerDashboard />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
