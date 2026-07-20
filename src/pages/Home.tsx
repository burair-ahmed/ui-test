import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, BookOpen, Film, Gamepad2, Landmark, Radio } from 'lucide-react';
import './Home.css';

/* ---------- Intersection Observer Reveal Component ---------- */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  slide?: 'up' | 'left' | 'right';
  delayClass?: string;
}
const Reveal: React.FC<RevealProps> = ({ children, className = '', slide = 'up', delayClass = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.unobserve(e.target); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const base = slide === 'left' ? 'reveal-slide-left' : slide === 'right' ? 'reveal-slide-right' : 'reveal-on-scroll';
  return <div ref={ref} className={`${base} ${active ? 'active' : ''} ${delayClass} ${className}`}>{children}</div>;
};

/* ---------- News data ---------- */
const newsItems = [
  { thumb: '/assets/cover_metro2033.png', tags: ['Comic Chapter 1'], date: 'May 31, 2026', headline: 'Dmitry Glukhovsky Begins Work on a New Book' },
  { thumb: '/assets/cover_metro2034.png', tags: ['Comic Chapter 2', 'Updates'], date: 'May 15, 2026', headline: 'Screen Adaptation of «Metro 2033» Currently in Discussion' },
  { thumb: '/assets/cover_metro2035.png', tags: ['Comic Chapter 4'], date: 'Apr 10, 2026', headline: 'Stage Premiere of TEXT Opens in Berlin' },
];

/* ---------- Works cycle tabs ---------- */
const categories = [
  { name: 'Works',   icon: <Radio size={13} /> },
  { name: 'Comic Chapter 1',   icon: <BookOpen size={13} /> },
  { name: 'Comic Chapter 2',  icon: <Film size={13} /> },
  { name: 'Comic Chapter 3',   icon: <Gamepad2 size={13} /> },
  { name: 'Comic Chapter 4', icon: <Landmark size={13} /> },
];

export const Home: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000;
    const step = 50;
    const inc = (step / duration) * 100;
    const t = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { setActiveIdx(i => (i + 1) % categories.length); return 0; }
        return prev + inc;
      });
    }, step);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* =========================================================
          HERO — 3-column editorial layout
          ========================================================= */}
      <section className="hero-grid">

        {/* LEFT: Latest News column */}
        <aside className="hero-news-col">
          <div className="hero-news-header">Latest news</div>
          <div className="hero-news-items">
            {newsItems.map((item, i) => (
              <a key={i} href="#news" className="hero-news-item">
                <img src={item.thumb} alt={item.headline} className="hero-news-thumb" />
                <div className="hero-news-tags">
                  {item.tags.map(t => <span key={t} className="hero-news-tag">{t}</span>)}
                  <span className="hero-news-date">| {item.date}</span>
                </div>
                <div className="hero-news-headline">{item.headline}</div>
              </a>
            ))}
          </div>
          <a href="#news" className="hero-news-readall">
            Read all news <ArrowRight size={11} />
          </a>
        </aside>

        {/* CENTER: Name + portrait + works progress */}
        <div className="hero-center-col">
          {/* Giant name */}
          <h1 className="hero-name-display">Dmitry Glukhovsky</h1>

          {/* Language selector */}
          <div className="hero-lang-selector">
            ENG <ChevronDown size={12} />
          </div>

          {/* Portrait */}
          <div className="hero-portrait-frame">
            <img
              src="/assets/author_portrait.png"
              alt="Dmitry Glukhovsky"
              className="hero-portrait-img"
            />
            {/* Signature scrawl */}
            <div className="hero-signature" aria-hidden="true">DG~</div>
          </div>

          {/* Works progress cycle */}
          <div className="hero-works-bar">
            <div className="hero-works-row">
              <div className="hero-works-tabs">
                {categories.map((c, i) => (
                  <button
                    key={c.name}
                    className={`hero-works-tab ${i === activeIdx ? 'active' : ''}`}
                    onClick={() => { setActiveIdx(i); setProgress(0); }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
              <span className="hero-works-percent">…{Math.round(progress)}%</span>
            </div>
            <div className="hero-progress-track">
              <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BELOW FOLD — scroll-triggered sections
          ========================================================= */}

      {/* Latest News full section */}
      <section id="news" className="news-section">
        <div className="grid-container">
          <div style={{ gridColumn: 'span 12' }} className="news-heading-block">
            <Reveal>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '10px' }}>
                Updates & Announcements
              </div>
              <h2 className="section-title">Latest News</h2>
            </Reveal>
          </div>

          <div style={{ gridColumn: 'span 7' }}>
            <div className="news-cards-stack">
              {newsItems.map((item, i) => (
                <Reveal key={i} slide="left" delayClass={`delay-${(i + 1) * 100}`}>
                  <div className="news-card">
                    <div className="news-thumb-wrapper">
                      <img src={item.thumb} alt={item.headline} className="news-thumb" />
                    </div>
                    <div>
                      <div className="news-meta">
                        {item.tags.map(t => <span key={t} className="news-tag">{t}</span>)}
                        <span className="news-date">{item.date}</span>
                      </div>
                      <h3 className="news-title">{item.headline}</h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 'span 5' }}>
            <Reveal slide="right" delayClass="delay-200" className="news-featured-block">
              <div>
                <img
                  src="/assets/author_portrait.png"
                  alt="Featured"
                  className="news-featured-image"
                  style={{ filter: 'grayscale(1)' }}
                />
                <h3 className="news-featured-title">Writing in Exile: A Voice of Modern Resistance</h3>
                <p className="news-featured-desc">
                  An exclusive interview on writing from European safehouses, and why literature remains the ultimate tool of truth against authoritarian regimes.
                </p>
              </div>
              <a href="#" className="btn-outline" style={{ marginTop: '24px', alignSelf: 'flex-start' }}>
                Read Interview
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Terracotta Quote Section */}
      <section className="terracotta-section">
        <div className="grid-container">
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Reveal slide="left">
              <blockquote className="terracotta-quote">
                In the tunnels of the Metro, the biggest monster is always the one looking back at you in the mirror.
              </blockquote>
              <div className="terracotta-author">— Dmitry Glukhovsky, Metro trilogy</div>
            </Reveal>
          </div>
          <div style={{ gridColumn: 'span 5' }}>
            <Reveal slide="right" delayClass="delay-200">
              <div className="terracotta-img-frame">
                <img src="/assets/cover_text.png" alt="" className="terracotta-img" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dark Universe Section */}
      <section className="dark-section">
        <div className="grid-container">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '50px' }}>
            <Reveal>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: '10px' }}>
                Cross-Media Universe
              </div>
              <h2 className="section-title" style={{ color: '#F6F0E7' }}>Expanding the Boundaries</h2>
            </Reveal>
          </div>

          <div style={{ gridColumn: 'span 5' }}>
            <Reveal slide="left">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '16px' }}>A Global Phenomenon</h3>
              <p style={{ color: 'rgba(246, 240, 231, 0.65)', lineHeight: '1.65', marginBottom: '28px', fontSize: '0.95rem' }}>
                From a self-published online experiment to a global franchise. The Metro series captivates audiences across continents through novels, acclaimed games, and cinematic adaptations.
              </p>
              <div className="dark-stats-grid">
                <div className="stat-item">
                  <div className="stat-number">10M+</div>
                  <div className="stat-label">Copies Sold</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">37</div>
                  <div className="stat-label">Translations</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3</div>
                  <div className="stat-label">AAA Games</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div style={{ gridColumn: 'span 7' }}>
            <div className="game-cards-row">
              {[
                { year: '2010', title: 'Metro 2033', desc: 'The survival horror shooter that launched the franchise.' },
                { year: '2013', title: 'Last Light', desc: 'Civil war narrative within the underground stations.' },
                { year: '2019', title: 'Metro Exodus', desc: 'Epic sandboxed journey across post-apocalyptic Russia.' },
              ].map((g, i) => (
                <Reveal key={g.title} slide="right" delayClass={`delay-${(i + 1) * 100}`}>
                  <div className="game-card">
                    <div className="game-tag">{g.year}</div>
                    <h4 className="game-title">{g.title}</h4>
                    <p className="game-desc">{g.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="grid-container">
          <div style={{ gridColumn: 'span 4' }}>
            <div className="footer-logo">DG</div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.65', maxWidth: '270px', color: 'rgba(246,240,231,0.55)' }}>
              Creative works, publications and announcements from author Dmitry Glukhovsky.
            </p>
          </div>
          <div style={{ gridColumn: 'span 2' }} className="footer-nav-col">
            <h4>Sections</h4>
            <ul className="footer-links">
              <li><Link to="/books/metro-2033">Comic Chapter 1</Link></li>
              <li><Link to="/movies">Comic Chapter 2</Link></li>
              <li><Link to="/games">Comic Chapter 3</Link></li>
              <li><Link to="/theater">Comic Chapter 4</Link></li>
            </ul>
          </div>
          <div style={{ gridColumn: 'span 2' }} className="footer-nav-col">
            <h4>Universe</h4>
            <ul className="footer-links">
              <li><a href="#">Metro Wiki</a></li>
              <li><a href="#">4A Games</a></li>
              <li><a href="#">Book Retailers</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>
          <div style={{ gridColumn: 'span 4' }} className="footer-nav-col">
            <h4>Newsletter</h4>
            <p style={{ fontSize: '0.82rem', marginBottom: '12px', color: 'rgba(246,240,231,0.5)' }}>
              Stay updated on new releases and event appearances.
            </p>
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Join</button>
            </form>
          </div>
          <div style={{ gridColumn: 'span 12' }} className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Dmitry Glukhovsky. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '18px' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};
