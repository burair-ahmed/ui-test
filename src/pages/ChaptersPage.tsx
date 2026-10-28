import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { readingDocuments } from '../data/readingData';
import './ChaptersPage.css';

export const ChaptersPage: React.FC = () => {
  return (
    <motion.div
      className="chapters-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Header */}
      <div className="chapters-header">
        <div className="chapters-eyebrow">Reading Archive</div>
        <h1 className="chapters-title">All Chapters</h1>
        <p className="chapters-subtitle">
          Ten companion texts exploring Nabokov's Lolita through critical,
          poetic and feminist voices.
        </p>
      </div>

      {/* Document Grid */}
      <div className="chapters-grid">
        {readingDocuments.map((doc, i) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={`/read/${doc.slug}`} className="chapter-card">
              {/* Artwork thumb */}
              <div className="chapter-card-thumb">
                <img
                  src={doc.artworkUrl}
                  alt={doc.title}
                  className="chapter-card-img"
                />
                <div className="chapter-card-num">
                  {String(doc.id).padStart(2, '0')}
                </div>
              </div>

              {/* Text content */}
              <div className="chapter-card-body">
                <div className="chapter-card-label">
                  Document {String(doc.id).padStart(2, '0')} / 10
                  {doc.isPoem && <span className="chapter-card-badge">Poem</span>}
                </div>
                <h2 className="chapter-card-title">{doc.title}</h2>
                <p className="chapter-card-preview">
                  {doc.paragraphs[1]?.text?.slice(0, 120) ?? ''}
                  {(doc.paragraphs[1]?.text?.length ?? 0) > 120 ? '…' : ''}
                </p>
                <div className="chapter-card-read">
                  Read <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
