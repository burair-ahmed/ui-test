export interface Book {
  id: number;
  slug: string;
  title: string;
  year: string;
  genre: string;
  languages: string;
  about: string;
  coverUrl: string;
  thumbnails: string[];
  buyLink: string;
}

export const booksData: Book[] = [
  {
    id: 1,
    slug: 'metro-2033',
    title: 'Metro 2033',
    year: '2005',
    genre: 'Post-Apocalyptic / Sci-Fi',
    languages: '37 Languages Worldwide',
    about: 'The year is 2033. The world has been reduced to rubble. Humanity is nearly extinct. Moscow has become a ghost town, and the few survivors live in the depths of the Moscow Metro—the world\'s largest air-raid shelter. There, at VDNKh station, young Artyom is tasked with a mission that will send him to the very heart of the metro system to save what remains of mankind.',
    coverUrl: '/assets/cover_metro2033.png',
    thumbnails: [
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png',
      '/assets/cover_metro2033.png'
    ],
    buyLink: 'https://www.amazon.com/Metro-2033-Dmitry-Glukhovsky/dp/0956914705'
  },
  {
    id: 2,
    slug: 'metro-2034',
    title: 'Metro 2034',
    year: '2009',
    genre: 'Post-Apocalyptic / Sci-Fi',
    languages: '25 Languages',
    about: 'A whole station in the Moscow Metro is infected by a mysterious and deadly plague. To prevent the spread of the infection, the station is sealed off by armed guards and left to die. A small band of heroes, led by the mysterious stalker Hunter and the young chronicler Homer, must venture into the dark and dangerous tunnels to find a cure before the station is annihilated.',
    coverUrl: '/assets/cover_metro2034.png',
    thumbnails: [
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png',
      '/assets/cover_metro2034.png'
    ],
    buyLink: 'https://www.amazon.com/Metro-2034-Dmitry-Glukhovsky/dp/1473204305'
  },
  {
    id: 3,
    slug: 'metro-2035',
    title: 'Metro 2035',
    year: '2015',
    genre: 'Post-Apocalyptic / Sci-Fi',
    languages: '20 Languages',
    about: 'The final chapter of the Metro trilogy. Artyom returns to the surface, obsessed with the idea that survivors exist beyond Moscow. While the rest of the metro remains buried in fear and darkness, Artyom risks his life, his reputation, and his marriage to find a radio signal from the outside world. What he discovers will shatter everything the survivors believed.',
    coverUrl: '/assets/cover_metro2035.png',
    thumbnails: [
      '/assets/cover_metro2035.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_text.png',
      '/assets/cover_metro2035.png'
    ],
    buyLink: 'https://www.amazon.com/Metro-2035-Dmitry-Glukhovsky/dp/1539985633'
  },
  {
    id: 4,
    slug: 'text',
    title: 'Text',
    year: '2017',
    genre: 'Noir Thriller / Drama',
    languages: '30 Languages',
    about: 'A chilling psychological thriller set in modern-day Moscow. Ilya, a young man wrongfully imprisoned for seven years on false drug charges, returns home seeking revenge. When he ends up with the smartphone of the corrupt officer who framed him, he begins living the officer\'s life through text messages, slowly stealing his identity, his relationships, and his secrets.',
    coverUrl: '/assets/cover_text.png',
    thumbnails: [
      '/assets/cover_text.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png'
    ],
    buyLink: 'https://www.amazon.com/Text-Dmitry-Glukhovsky/dp/1786077382'
  },
  {
    id: 5,
    slug: 'future',
    title: 'Futu.re',
    year: '2013',
    genre: 'Dystopian / Sci-Fi',
    languages: '15 Languages',
    about: 'In a future Europe, death has been cured. Aging is a thing of the past, and resources are strictly rationed. To maintain balance, any couple who chooses to have a child must agree to have one parent injected with an aging serum that will end their immortality. Jan, an elite enforcer of the population control registry, faces a crisis of conscience when he is tasked with hunting down illegal children.',
    coverUrl: '/assets/cover_text.png',
    thumbnails: [
      '/assets/cover_text.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png'
    ],
    buyLink: 'https://www.amazon.com/Futu-re-Dmitry-Glukhovsky/dp/1473212871'
  },
  {
    id: 6,
    slug: 'outpost',
    title: 'Outpost',
    year: '2019',
    genre: 'Post-Apocalyptic / Thriller',
    languages: '12 Languages',
    about: 'In a devastated future Russia, the remains of civilization cling to life along the Volga River. A remote outpost guarded by young recruits stands at the border of the unknown, separated by a toxic, mist-covered bridge that no one has crossed in decades. When a mysterious, silent traveler emerges from the fog, the fragile peace of the outpost is broken forever.',
    coverUrl: '/assets/cover_metro2033.png',
    thumbnails: [
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png',
      '/assets/cover_metro2033.png'
    ],
    buyLink: 'https://www.amazon.com/Outpost-Dmitry-Glukhovsky-audiobook/dp/B07VPW8C68'
  },
  {
    id: 7,
    slug: 'dusk',
    title: 'Dusk',
    year: '2007',
    genre: 'Mystery / Supernatural Thriller',
    languages: '18 Languages',
    about: 'Dusk follows Dmitry, a translator who receives a 16th-century Spanish manuscript detailing a Spanish expedition to the Yucatan peninsula. As he translates the diary of a conquistador, he notices mysterious phenomena occurring in his Moscow apartment, and the boundaries between the Mayan apocalypse in the text and his current reality begin to dissolve.',
    coverUrl: '/assets/cover_metro2034.png',
    thumbnails: [
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png',
      '/assets/cover_metro2034.png'
    ],
    buyLink: 'https://www.amazon.com/Dusk-Dmitry-Glukhovsky/dp/1473212847'
  },
  {
    id: 8,
    slug: 'tales-about-motherland',
    title: 'Tales About the Motherland',
    year: '2010',
    genre: 'Satire / Short Stories',
    languages: '8 Languages',
    about: 'A collection of satirical short stories exploring the absurdity of modern Russian politics, bureaucracy, and society. Blending elements of science fiction, folklore, and dark humor, Glukhovsky constructs surreal scenarios that expose the deep cultural and political ironies of his homeland.',
    coverUrl: '/assets/cover_text.png',
    thumbnails: [
      '/assets/cover_text.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_metro2035.png',
      '/assets/cover_text.png'
    ],
    buyLink: 'https://www.glukhovsky.com'
  },
  {
    id: 9,
    slug: 'outpost-2',
    title: 'Outpost 2',
    year: '2021',
    genre: 'Post-Apocalyptic / Thriller',
    languages: '10 Languages',
    about: 'The exciting continuation of the Outpost series. As the toxic mist from the East begins to spread and corrupt those who touch it, the remaining outposts must band together. Tensions rise as resources dwindle, and the survivors are forced to confront the dark secrets of the old world that lay buried in the radioactive wasteland.',
    coverUrl: '/assets/cover_metro2035.png',
    thumbnails: [
      '/assets/cover_metro2035.png',
      '/assets/cover_metro2033.png',
      '/assets/cover_metro2034.png',
      '/assets/cover_text.png',
      '/assets/cover_metro2035.png'
    ],
    buyLink: 'https://www.glukhovsky.com'
  }
];
