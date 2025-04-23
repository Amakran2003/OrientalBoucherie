import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import './translations/i18n';
import { initGA } from './lib/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;