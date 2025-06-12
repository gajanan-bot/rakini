import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Frame } from './screens/Frame/Frame';
import { HowToStart } from './components/HowToStart/HowToStart';
import Service from './components/Service/Services';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Frame />} />
        <Route path="/how-to-start" element={<HowToStart />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </Router>
  </StrictMode>
);
