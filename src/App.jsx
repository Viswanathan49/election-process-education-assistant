import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Eligibility from './pages/Eligibility';
import Workflow from './pages/Workflow';
import Forms from './pages/Forms';
import Assistant from './pages/Assistant';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="eligibility" element={<Eligibility />} />
          <Route path="workflow" element={<Workflow />} />
          <Route path="forms" element={<Forms />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
