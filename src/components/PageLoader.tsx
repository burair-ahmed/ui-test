import React, { useEffect, useState } from 'react';

export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Initial loading is quick, 800ms branding beat then 300ms fadeout
    const timer = setTimeout(() => {
      setVisible(false);
    }, 800);

    const renderTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1100);

    return () => {
      clearTimeout(timer);
      clearTimeout(renderTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#152021',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity 0.3s ease-in-out',
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '3rem',
          color: '#F6F0E7',
          fontWeight: 700,
          letterSpacing: '0.1em',
          transform: visible ? 'translateY(0)' : 'translateY(-15px)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        DG
      </div>
      <div
        style={{
          marginTop: '10px',
          height: '1px',
          width: '50px',
          backgroundColor: '#CE9D87',
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
        }}
      />
    </div>
  );
};
