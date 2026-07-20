import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, ChevronDown, Check } from 'lucide-react';
import { booksData, type Book } from '../data/booksData';
import './BookDetail.css';

export const BookDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [activeCoverUrl, setActiveCoverUrl] = useState<string>('');
  const [selectedThumbIndex, setSelectedThumbIndex] = useState<number>(0);
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  // Sync active book based on slug parameters
  useEffect(() => {
    const currentSlug = slug || 'metro-2033';
    const book = booksData.find((b) => b.slug === currentSlug) || booksData[0];
    setActiveBook(book);
    setActiveCoverUrl(book.coverUrl);
    setSelectedThumbIndex(0); // Reset thumbnail selection on page change
  }, [slug]);

  if (!activeBook) {
    return <div style={{ padding: '40px', color: '#152021' }}>Loading...</div>;
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  const currentBookIndex = booksData.findIndex((b) => b.id === activeBook.id);

  return (
    <motion.div
      className="book-detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Pinned Left Pagination Rail */}
      <aside className="left-pagination-rail">
        <div className="rail-label-vertical">
          Comic Chapter 1 &middot; 9
        </div>
        
        {/* Dot paginator representing the 9 books */}
        <div className="pagination-dots-stack">
          {booksData.map((book, idx) => (
            <Link
              key={book.id}
              to={`/books/${book.slug}`}
              className={`pagination-dot-link ${idx === currentBookIndex ? 'active' : ''}`}
              title={book.title}
              aria-label={`Go to ${book.title}`}
            />
          ))}
        </div>

        {/* Small footer index indicator */}
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, opacity: 0.5 }}>
          0{activeBook.id} / 09
        </div>
      </aside>

      {/* Main content grid */}
      <div className="book-main-content">
        {/* Left Column: Fixed Cover Art */}
        <div className="book-cover-column">
          <div className="book-cover-frame">
            {/* Animating the cover based on active URL state */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={activeCoverUrl}
                src={activeCoverUrl}
                alt={activeBook.title}
                className="book-cover-image"
                initial={{ x: -160, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Title and details */}
        <div className="book-info-column">
          {/* Staggered entrance for content block */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <h1 className="book-detail-title">{activeBook.title}</h1>

            {/* Thumbnail edition switcher */}
            <div className="variants-section">
              <div className="variants-label">Cover Editions / Variants</div>
              <div className="variants-row">
                {activeBook.thumbnails.map((thumbUrl, idx) => (
                  <div
                    key={idx}
                    className={`variant-item ${idx === selectedThumbIndex ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedThumbIndex(idx);
                      setActiveCoverUrl(thumbUrl);
                    }}
                  >
                    <div className="variant-thumb-frame">
                      <img src={thumbUrl} alt={`Edition ${idx + 1}`} className="variant-thumb" />
                    </div>
                    <div className="variant-number">.0{idx + 1}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="actions-row">
              <a
                href={activeBook.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-dropdown-btn"
              >
                Buy Book <ChevronDown size={16} />
              </a>
              <button 
                className="share-btn" 
                onClick={handleShare} 
                title="Copy Link to Share"
                aria-label="Share page"
              >
                {shareCopied ? <Check size={18} style={{ color: 'green' }} /> : <Share2 size={18} />}
              </button>
              {shareCopied && (
                <span style={{ fontSize: '0.8rem', color: 'green', fontWeight: 600 }}>
                  Copied link to clipboard!
                </span>
              )}
            </div>

            {/* Metadata structure */}
            <div className="metadata-table">
              <div className="metadata-row">
                <span className="metadata-label">Year</span>
                <span className="metadata-value">{activeBook.year}</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-label">Genre</span>
                <span className="metadata-value">{activeBook.genre}</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-label">Languages</span>
                <span className="metadata-value">{activeBook.languages}</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-label">About</span>
                <span className="metadata-value about-paragraph">{activeBook.about}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
