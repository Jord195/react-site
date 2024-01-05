import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { ServicesPage } from './pages/services';
import { TestimonialsPage } from './pages/testimonials';
import { ContactUs } from './pages/contact';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
