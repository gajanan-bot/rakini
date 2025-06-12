import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Frame } from './screens/Frame/Frame';
import { HowToStart } from './components/HowToStart/HowToStart';
import Service from './components/Service/Services';
import Layout from './Layout';
import Technologies from './components/Technology/Technology';

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Frame />} />
          <Route path="/how-to-start" element={<HowToStart />} />
          <Route path="/services" element={<Service />} />
          <Route path="/technologies" element={<Technologies/>}/>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
