import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Expertise from './pages/Expertise';
import Philosophy from './pages/Philosophy';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </Router>
  );
};

export default App;
