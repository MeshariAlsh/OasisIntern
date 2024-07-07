import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchProvider } from './Componets/SearchContext';
import Header from './Componets/Header';
import { MainPage } from './Componets/MainPage';
import Engineering from './Pages/Engineering'; 
import './App.css';
import Legal from './Pages/Legal';
import Business from './Pages/Business';
import { Oasis } from './Pages/OasisIntern';
import '@fortawesome/fontawesome-free/css/all.css';

ReactGA.initialize("G-BR6F17F97H");

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
        <TrackPageView />
        <Header /> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/oasis" element={<Oasis />} />
          {/* Add more routes */}
        </Routes>
        </SearchProvider>
      </Router>
    </div>
  );
}

export default App;

