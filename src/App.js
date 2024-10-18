import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchProvider } from './Components/SearchContext';
import { AuthProvider } from './Components/AuthContext'; 
import Header from './Components/Header';
import { MainPage } from './Components/MainPage';
import { Profile } from './Pages/Profile';
import Engineering from './Pages/Engineering'; 
import './App.css';
import Legal from './Pages/Legal';
import Business from './Pages/Business';
import { Oasis } from './Pages/OasisIntern';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import '@fortawesome/fontawesome-free/css/all.css';



ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: document.title });
  }, [location]);

  return null;
};

function App() {
  return (
    <div className="background-container">
      <Router>
        <SearchProvider>
        <AuthProvider>
        <TrackPageView />
        <Header /> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/oasis" element={<Oasis />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes */}
        </Routes>
        </AuthProvider>
        </SearchProvider>
      </Router>
    </div>
  );
}

export default App;

