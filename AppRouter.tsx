import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppContent } from './App';
import { LanguageProvider } from './LanguageContext';


function AppRouter() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Catch-all route to redirect any unknown path to '/' */}
          <Route path="/" element={<AppContent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default AppRouter;
