import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Film, Gamepad2, Landmark, FileText } from 'lucide-react';
import './PlaceholderPage.css';

interface PlaceholderPageProps {
  title: string;
  count: number;
}

interface CardItem {
  id: number;
  tag: string;
  title: string;
  desc: string;
  meta: string;
  imgLabel: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title, count }) => {
  
  // Custom mock contents for different categories to make the app feel alive
  const getCategoryContent = (): CardItem[] => {
    switch (title.toLowerCase()) {
      case 'comic chapter 2':
      case 'movies':
        return [
          {
            id: 1,
            tag: 'Feature Film',
            title: 'Metro 2033 (In Development)',
            desc: 'The official big-screen adaptation of the international bestseller. Bringing Artyom\'s dark journey and the claustrophobic metro tunnels to theaters globally.',
            meta: 'Production: TBA',
            imgLabel: 'METRO 2033 FILM'
          },
          {
            id: 2,
            tag: 'Psychological Thriller',
            title: 'Text (2019)',
            desc: 'The critically acclaimed Russian thriller film directed by Klim Shipenko. Adapting Glukhovsky\'s dark smartphone identity thriller, it swept the Golden Eagle Awards.',
            meta: 'Run time: 132 mins',
            imgLabel: 'TEXT (2019)'
          },
          {
            id: 3,
            tag: 'TV Series',
            title: 'Outpost (Series adaptation)',
            desc: 'A high-budget dramatic series adapting the Outpost graphic novels and audiobooks, depicting a poisoned Volga river frontier and silent borders.',
            meta: 'Status: Pre-Production',
            imgLabel: 'OUTPOST SERIES'
          }
        ];
      case 'comic chapter 3':
      case 'games':
        return [
          {
            id: 1,
            tag: '4A Games',
            title: 'Metro 2033 (2010)',
            desc: 'The legendary first-person shooter combining survival horror, stealth, and exploration. Developed by 4A Games and published by THQ.',
            meta: 'Platform: PC / Consoles',
            imgLabel: 'METRO 2033 GAME'
          },
          {
            id: 2,
            tag: '4A Games',
            title: 'Metro: Last Light (2013)',
            desc: 'The epic sequel exploring the civil struggles in the metro and the secrets of the mysterious Dark Ones. Expanding the narrative limits of the franchise.',
            meta: 'Platform: PC / Consoles',
            imgLabel: 'LAST LIGHT'
          },
          {
            id: 3,
            tag: '4A Games',
            title: 'Metro Exodus (2019)',
            desc: 'A sprawling sandbox journey on the Aurora steam engine across the vast Russian wilderness, searching for a habitable life outside Moscow.',
            meta: 'Platform: PC / Consoles',
            imgLabel: 'EXODUS'
          }
        ];
      case 'comic chapter 4':
      case 'theater':
        return [
          {
            id: 1,
            tag: 'Yermolova Theatre',
            title: 'Text (Staged Play)',
            desc: 'A highly successful stage adaptation of the novel directed by Maxim Didenko, featuring mobile projection tech and physical theater sequences.',
            meta: 'Location: Moscow',
            imgLabel: 'TEXT STAGE'
          },
          {
            id: 2,
            tag: 'Experimental Staging',
            title: 'Dusk: The Mayan Codex',
            desc: 'An immersive chamber performance where audience members translate ancient Spanish diaries in dark rooms while supernatural occurrences unfold.',
            meta: 'Format: Immersive',
            imgLabel: 'DUSK IMMERSIVE'
          }
        ];
      case 'comic chapter 5':
      case 'articles':
      default:
        return [
          {
            id: 1,
            tag: 'Political Column',
            title: 'Letters from the Safehouses (2024)',
            desc: 'An ongoing series of essays exploring political exile, writing under pressure, and how literature represents the ultimate shield of cultural memory.',
            meta: 'Publisher: Novaya Gazeta',
            imgLabel: 'SAFEHOUSE LETTERS'
          },
          {
            id: 2,
            tag: 'Sociological Essay',
            title: 'The Smartphone Panopticon (2023)',
            desc: 'A deep dive into how digital footprints, social messaging apps, and personal smartphones have become state tracking vectors in modern surveillance states.',
            meta: 'Publisher: Harper\'s',
            imgLabel: 'DIGITAL PANOPTICON'
          },
          {
            id: 3,
            tag: 'Historical Review',
            title: 'Echoes of the Russian Soul (2022)',
            desc: 'Analyzing how traditional folk motifs, apocalyptic expectations, and administrative structures shape modern-day geopolitical directions.',
            meta: 'Publisher: Le Monde',
            imgLabel: 'HISTORICAL REVIEW'
          }
        ];
    }
  };

  const cards = getCategoryContent();

  const getCategoryIcon = () => {
    switch (title.toLowerCase()) {
      case 'comic chapter 2':
      case 'movies': return <Film size={20} />;
      case 'comic chapter 3':
      case 'games': return <Gamepad2 size={20} />;
      case 'comic chapter 4':
      case 'theater': return <Landmark size={20} />;
      case 'comic chapter 5':
      case 'articles':
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <motion.div
      className="placeholder-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="placeholder-header">
        <div className="placeholder-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {getCategoryIcon()}
          {title} &middot; {count} items
        </div>
        <h1 className="placeholder-title">Dmitry&apos;s {title}</h1>
      </div>

      <div className="placeholder-grid">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            className="placeholder-card"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
          >
            <div className="card-img-block">
              {/* Overlay with custom styling */}
              <div className="card-img-overlay">
                {card.imgLabel}
              </div>
            </div>
            
            <div className="card-content-block">
              <span className="card-tag">{card.tag}</span>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.desc}</p>
              
              <div className="card-footer">
                <span>{card.meta}</span>
                <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
