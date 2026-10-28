import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { readingDocuments } from '../data/readingData';
import { BookReader } from '../components/BookReader';

export const ReadPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Locate the document matching the current route slug
  const activeDoc = readingDocuments.find((d) => d.slug === slug);

  // Synchronize browser title
  useEffect(() => {
    if (activeDoc) {
      document.title = `${activeDoc.title} | Gabrielle Everall`;
    } else {
      document.title = 'Reading Archive | Gabrielle Everall';
    }
  }, [activeDoc]);

  // If slug is invalid or not matched, redirect to first reading document
  if (!activeDoc) {
    return <Navigate to="/read/lolita-speaks" replace />;
  }

  return <BookReader document={activeDoc} />;
};
