import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from '../pages/Home';
import { BookDetail } from '../pages/BookDetail';
import { PlaceholderPage } from '../pages/PlaceholderPage';

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Homepage */}
        <Route path="/" element={<Home />} />
        
        {/* Books index redirects to Metro 2033 */}
        <Route path="/books" element={<Navigate to="/books/metro-2033" replace />} />
        <Route path="/books/:slug" element={<BookDetail />} />
        
        {/* Other Sections */}
        <Route path="/movies" element={<PlaceholderPage title="Movies" count={3} />} />
        <Route path="/games" element={<PlaceholderPage title="Games" count={5} />} />
        <Route path="/theater" element={<PlaceholderPage title="Theater" count={2} />} />
        <Route path="/articles" element={<PlaceholderPage title="Articles" count={47} />} />
        
        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};
