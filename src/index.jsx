import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Pages
import App from './pages/App.jsx';
import NotFound from './pages/NotFound.jsx';

// React Router
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}