import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, Check } from 'lucide-react';
import { readingDocuments, type ReadingDoc, type DocumentParagraph, type TextRun } from '../data/readingData';
import './BookReader.css';

interface BookReaderProps {
  document: ReadingDoc;
}

export const BookReader: React.FC<BookReaderProps> = ({ document: doc }) => {
  const navigate = useNavigate();
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  const currentIndex = readingDocuments.findIndex((d) => d.id === doc.id);
  const prevDoc = currentIndex > 0 ? readingDocuments[currentIndex - 1] : null;
  const nextDoc = currentIndex < readingDocuments.length - 1 ? readingDocuments[currentIndex + 1] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2000);
  };

  const renderRun = (run: TextRun, idx: number) => {
    let content: React.ReactNode = run.text;
    if (run.italic) {
      content = <em key={idx} className="run-italic">{content}</em>;
    }
    if (run.bold) {
      content = <strong key={idx} className="run-bold">{content}</strong>;
    }
    return <span key={idx}>{content}</span>;
  };

  const renderParagraph = (p: DocumentParagraph, pIndex: number) => {
    // If the entire paragraph is a standalone heading run
    const isHeading = p.runs.length === 1 && p.runs[0].bold && p.text.length < 80;
    
    // Check if it's the subtitle note in Document 1
    const isNote = p.text.startsWith('Text in italics are from');

    if (isNote) {
      return (
        <div key={pIndex} className="book-doc-subtitle-note">
          {p.runs.map(renderRun)}
        </div>
      );
    }

    if (isHeading) {
      return (
        <h2 key={pIndex} className="reader-heading-para">
          {p.runs.map(renderRun)}
        </h2>
      );
    }

    return (
      <p key={pIndex} className="reader-paragraph">
        {p.runs.map(renderRun)}
      </p>
    );
  };

  return (
    <div className="reader-page-layout">
      {/* Pinned Left Vertical Navigation Rail */}
      <aside className="reader-left-rail">
        <div className="rail-label-vertical">
          Reading Series &middot; 10
        </div>
        
        {/* Dot paginator representing the 10 documents */}
        <div className="pagination-dots-stack">
          {readingDocuments.map((docItem) => (
            <Link
              key={docItem.id}
              to={`/read/${docItem.slug}`}
              className={`pagination-dot-link ${docItem.id === doc.id ? 'active' : ''}`}
              title={`${String(docItem.id).padStart(2, '0')}. ${docItem.shortTitle}`}
              aria-label={`Go to ${docItem.title}`}
            />
          ))}
        </div>

        {/* Small footer index indicator */}
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, opacity: 0.5 }}>
          {String(doc.id).padStart(2, '0')} / 10
        </div>
      </aside>

      <motion.div
        className="reader-page-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
      {/* Top Controller Bar */}
      <div className="reader-top-bar">
        <div className="reader-breadcrumb">
          <Link to="/" className="reader-breadcrumb-link">Home</Link>
          <span className="reader-breadcrumb-sep">/</span>
          <span className="reader-breadcrumb-link">Reading</span>
          <span className="reader-breadcrumb-sep">/</span>
          <span className="reader-doc-indicator">Document {String(doc.id).padStart(2, '0')} of 10</span>
        </div>

        <div className="reader-controls">
          <button
            className="reader-nav-btn reader-icon-btn"
            onClick={() => prevDoc && navigate(`/read/${prevDoc.slug}`)}
            disabled={!prevDoc}
            title={prevDoc ? `Previous: ${prevDoc.shortTitle}` : 'No previous document'}
            aria-label="Previous document"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            className="reader-nav-btn reader-icon-btn"
            onClick={() => nextDoc && navigate(`/read/${nextDoc.slug}`)}
            disabled={!nextDoc}
            title={nextDoc ? `Next: ${nextDoc.shortTitle}` : 'No next document'}
            aria-label="Next document"
          >
            <ChevronRight size={18} />
          </button>

          <button
            className="reader-nav-btn"
            onClick={handleShare}
            title="Copy link to document"
            aria-label="Share document"
          >
            {shareCopied ? (
              <>
                <Check size={16} style={{ color: 'green' }} />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Share2 size={16} />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Quick Document Navigation Strip */}
      <div className="reader-quick-strip" role="navigation" aria-label="Document selection">
        {readingDocuments.map((item) => (
          <Link
            key={item.id}
            to={`/read/${item.slug}`}
            className={`reader-doc-pill ${item.id === doc.id ? 'active' : ''}`}
            title={item.title}
          >
            {String(item.id).padStart(2, '0')}. {item.shortTitle}
          </Link>
        ))}
      </div>

      {/* The Central Open Book */}
      <div className="book-stage">
        <div className="book-cover-wrapper">
          {/* Silk Bookmark Ribbon */}
          <div className="book-ribbon" aria-hidden="true" />

          {/* Book Pages Container */}
          <div className="book-pages-container">
            {/* Center Spine Crease Effect */}
            <div className="book-spine-crease" aria-hidden="true" />

            {/* LEFT PAGE: Artwork Presentation */}
            <div className="book-page book-page-left">
              <div className="page-header-strip">
                <span>Plate {String(doc.id).padStart(2, '0')}</span>
                <span>Original Artwork</span>
              </div>

              <div className="artwork-frame-outer">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={doc.artworkUrl}
                    src={doc.artworkUrl}
                    alt={`Artwork for ${doc.title}`}
                    className="artwork-img-element"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
              </div>

              <div className="artwork-caption-strip">
                <span className="artwork-caption-strong">Figure {doc.id}.0</span> &middot; Visual Study
              </div>

              <div className="page-footer-strip">
                <span>Archive Collection</span>
                <span className="page-number">{doc.id * 2 - 1}</span>
              </div>
            </div>

            {/* RIGHT PAGE: Reading Document */}
            <div className="book-page book-page-right">
              <div className="page-header-strip">
                <span>Reading Series</span>
                <span>Document {String(doc.id).padStart(2, '0')} / 10</span>
              </div>

              <div className="book-reading-content">
                {/* For Poem (Document 6) */}
                {doc.isPoem ? (
                  <>
                    <h1 className="book-doc-title">{doc.title}</h1>
                    <div className="poem-container">
                      {doc.paragraphs.slice(1).map((p, idx) => (
                        <div key={idx} className="poem-line">
                          {p.text}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Standard Prose Document */
                  <>
                    <div className="prose-content-block">
                      {doc.paragraphs.map((p, idx) => renderParagraph(p, idx))}
                    </div>
                  </>
                )}
              </div>

              <div className="page-footer-strip">
                <span>{doc.shortTitle}</span>
                <span className="page-number">{doc.id * 2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className="reader-bottom-nav">
        {prevDoc ? (
          <Link to={`/read/${prevDoc.slug}`} className="reader-bottom-link prev">
            <ChevronLeft size={16} />
            <span>Previous: {prevDoc.shortTitle}</span>
          </Link>
        ) : <div />}

        {nextDoc ? (
          <Link to={`/read/${nextDoc.slug}`} className="reader-bottom-link next">
            <span>Next: {nextDoc.shortTitle}</span>
            <ChevronRight size={16} />
          </Link>
        ) : <div />}
      </div>
    </motion.div>
  </div>
  );
};
