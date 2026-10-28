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
        backgroundColor: '#F6F0E7',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transform: visible ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(-12px)',
          transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
          opacity: visible ? 1 : 0,
        }}
      >
        <img
          src="/logo.png"
          alt="Gabrielle Everall"
          style={{
            width: '110px',
            height: '110px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 16px rgba(21, 32, 33, 0.08))',
            marginBottom: '16px',
          }}
        />
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.25rem',
            color: '#152021',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          Gabrielle Everall
        </div>
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.72rem',
            color: 'rgba(21, 32, 33, 0.55)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            marginTop: '6px',
          }}
        >
          Author
        </div>
        <div
          style={{
            marginTop: '16px',
            height: '2px',
            width: '60px',
            backgroundColor: '#C85A32',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
          }}
        />
      </div>
    </div>
  );
};
