import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LayoutGrid, Bookmark, Pin, FileText } from 'lucide-react';
import { readingDocuments } from '../data/readingData';

interface PersistentLayoutProps {
  children: React.ReactNode;
}

export const PersistentLayout: React.FC<PersistentLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Reading documents for the right vertical navigation rail (replacing Comic Chapter 1,2,3,4,5)
  const navItems = readingDocuments.map((doc) => ({
    label: doc.shortTitle,
    count: String(doc.id).padStart(2, '0'),
    path: `/read/${doc.slug}`,
    activeMatch: `/read/${doc.slug}`,
  }));

  // Utility checking if nav item matches current path
  const isItemActive = (pathMatch: string) => {
    return location.pathname === pathMatch;
  };

  return (
    <div className="page-container">
      {/* Fixed Top Navbar */}
      <nav className="top-navbar">
        {/* Left branding */}
        <Link
          to="/"
          className={`navbar-logo ${isHome ? 'hidden' : 'visible'}`}
          aria-label="Home"
        >
          DG
        </Link>

        {/* Center label */}
        {isHome && (
          <div className="navbar-center-label">
            Screenwriter
          </div>
        )}
        {!isHome && (
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.8 }}>
            Works
          </div>
        )}

        {/* Right utilities */}
        <div className="navbar-utilities">
          <button className="nav-util-btn" title="View Mode"><LayoutGrid size={18} /></button>
          <button className="nav-util-btn" title="Pinned Items"><Pin size={18} /></button>
          <button className="nav-util-btn" title="Bookmarks"><Bookmark size={18} /></button>
          <Link to="/read/lolita-speaks" className="nav-util-btn" title="Documents"><FileText size={18} /></Link>
        </div>
      </nav>

      {/* Main content area */}
      <main className="main-wrapper">
        {children}
      </main>

      {/* Fixed Right-side Category Rail — each item is its own vertical strip */}
      <aside className="category-rail">
        {navItems.map((item) => {
          const active = isItemActive(item.activeMatch);
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`rail-strip ${active ? 'active' : ''}`}
              title={item.label}
            >
              {/* Count at top */}
              <span className="rail-strip-count">{item.count}</span>
              {/* Rotated label running down */}
              <span className="rail-strip-label">
                <span className="rail-desktop-text">{item.label}</span>
                <span className="rail-mobile-text">{item.count}</span>
              </span>
            </Link>
          );
        })}
      </aside>
    </div>
  );
};
