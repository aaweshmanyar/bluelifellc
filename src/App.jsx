import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Servicepage from './Pages/Servicepage';
import Productpage from './Pages/Productpage';
import Partnershippage from './Pages/Partnershippage';
import Gallerypage from './Pages/Gallerypage';
import Blogpage from './Pages/Blogpage';
import ScrollToTop from './Components/ScrollToTop';
import BlogDetailPage from './Components/Blog/BlogDetailPage';
import Eventsdetail from './Pages/Eventsdetail';
import Eventpop from './Components/EventPop/EventPop'
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Eventpop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/partnership" element={<Partnershippage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/events" element={<Eventsdetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
       
      </Routes>
    </Router>
  );
}

export default App;
