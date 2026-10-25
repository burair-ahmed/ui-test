export interface TextRun {
  text: string;
  bold: boolean;
  italic: boolean;
}

export interface DocumentParagraph {
  text: string;
  runs: TextRun[];
}

export interface ReadingDoc {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  docFileName: string;
  artworkUrl: string;
  isPoem: boolean;
  paragraphs: DocumentParagraph[];
}

export const readingDocuments: ReadingDoc[] = [
  {
    "id": 1,
    "slug": "lolita-speaks",
    "title": "Lolita Speaks",
    "shortTitle": "Lolita Speaks",
    "docFileName": "Lolita Speaks Selly doc 1.docx",
    "artworkUrl": "/1.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Lolita with an Axe",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Lolita with an Axe"
      },
      {
        "runs": [
          {
            "text": "Text in italics are from ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Lolita",
            "bold": false,
            "italic": true
          },
          {
            "text": " by Nabokov.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Text in italics are from Lolita by Nabokov."
      },
      {
        "runs": [
          {
            "text": "Lolita Speaks",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Lolita Speaks"
      },
      {
        "runs": [
          {
            "text": "I hate Humbert ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Humbert",
            "bold": false,
            "italic": false
          },
          {
            "text": ". He calls me Lolita. He calls me ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Lo",
            "bold": false,
            "italic": true
          },
          {
            "text": ". He calls me ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Lee",
            "bold": false,
            "italic": true
          },
          {
            "text": ". He calls me ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Ta.",
            "bold": false,
            "italic": true
          },
          {
            "text": " He calls me ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Dolly",
            "bold": false,
            "italic": true
          },
          {
            "text": ". Nabokov names me Dolores. I have no name of my own. I never speak as myself, only his construction. I am the image repertoire machine of Humbert Humbert of Nabokov. I am his second paedophilic fantasy after Annabel. How can I speak?",
            "bold": false,
            "italic": false
          }
        ],
        "text": "I hate Humbert Humbert. He calls me Lolita. He calls me Lo. He calls me Lee. He calls me Ta. He calls me Dolly. Nabokov names me Dolores. I have no name of my own. I never speak as myself, only his construction. I am the image repertoire machine of Humbert Humbert of Nabokov. I am his second paedophilic fantasy after Annabel. How can I speak?"
      }
    ]
  },
  {
    "id": 2,
    "slug": "annabel-speaks",
    "title": "Annabel Speaks",
    "shortTitle": "Annabel Speaks",
    "docFileName": "Annabel Speaks Selly doc 2.docx",
    "artworkUrl": "/2.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Annabel Speaks",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Annabel Speaks"
      },
      {
        "runs": [
          {
            "text": "He objectifies me. He says my skin is ",
            "bold": false,
            "italic": false
          },
          {
            "text": "honey coloured",
            "bold": false,
            "italic": true
          },
          {
            "text": ". That my arms are ",
            "bold": false,
            "italic": false
          },
          {
            "text": "thin.",
            "bold": false,
            "italic": true
          },
          {
            "text": " My ",
            "bold": false,
            "italic": false
          },
          {
            "text": "brown hair bobbed",
            "bold": false,
            "italic": true
          },
          {
            "text": ". My ",
            "bold": false,
            "italic": false
          },
          {
            "text": "lashes long",
            "bold": false,
            "italic": true
          },
          {
            "text": ". My ",
            "bold": false,
            "italic": false
          },
          {
            "text": "mouth big and bright",
            "bold": false,
            "italic": true
          },
          {
            "text": ". He hated my parents. Especially my mother like he hated all higher weight women. In a cave by the sea he tried to possess me but was rudely interrupted by two male bathers. I died like all paedophilic, necrophilic sweethearts four months later in Corfu of Typhus. Silenced in abuse in death forever. Immortalised as his first paedophilic fantasy.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "He objectifies me. He says my skin is honey coloured. That my arms are thin. My brown hair bobbed. My lashes long. My mouth big and bright. He hated my parents. Especially my mother like he hated all higher weight women. In a cave by the sea he tried to possess me but was rudely interrupted by two male bathers. I died like all paedophilic, necrophilic sweethearts four months later in Corfu of Typhus. Silenced in abuse in death forever. Immortalised as his first paedophilic fantasy."
      }
    ]
  },
  {
    "id": 3,
    "slug": "oceanids",
    "title": "Oceanids",
    "shortTitle": "Oceanids",
    "docFileName": "Oceanids Selly doc 3.docx",
    "artworkUrl": "/3.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Oceanids",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Oceanids"
      },
      {
        "runs": [
          {
            "text": "He names me ",
            "bold": false,
            "italic": false
          },
          {
            "text": "nymphic",
            "bold": false,
            "italic": true
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false
          },
          {
            "text": "demoniac",
            "bold": false,
            "italic": true
          },
          {
            "text": ", a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "nymphet",
            "bold": false,
            "italic": true
          },
          {
            "text": ". He names himself ",
            "bold": false,
            "italic": false
          },
          {
            "text": "nympholept",
            "bold": false,
            "italic": true
          },
          {
            "text": ". I exist on an island surrounded by an immense nebulous sea according to him. A wanky allusion to ancient Greek mythology. A conservative western philosophical tradition. Hegelian notions of females as nature. I am rising from the surface of his oceanic constructions. I take my first new breath.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "He names me nymphic, demoniac, a nymphet. He names himself nympholept. I exist on an island surrounded by an immense nebulous sea according to him. A wanky allusion to ancient Greek mythology. A conservative western philosophical tradition. Hegelian notions of females as nature. I am rising from the surface of his oceanic constructions. I take my first new breath."
      }
    ]
  },
  {
    "id": 4,
    "slug": "lolitas-axe",
    "title": "Lolita’s Axe",
    "shortTitle": "Lolita’s Axe",
    "docFileName": "Lolita's Axe Selly doc 4.docx",
    "artworkUrl": "/4.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Lolita’s Axe",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Lolita’s Axe"
      },
      {
        "runs": [
          {
            "text": "When she hits Humbert Humbert with her axe. She cuts right through his mind/body split. How he desires girl children with his body and punishes himself with his mind. The same mind that then tries to justify himself through referring to girl children from history who were desired by famous men. Is Humbert Humbert’s mind elite enough? Upper middleclass? Jeffrey Epstein kept the novel ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Lolita",
            "bold": false,
            "italic": true
          },
          {
            "text": " in a cabinet made of glass. He called his private jet ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Lolita Express",
            "bold": false,
            "italic": true
          },
          {
            "text": ". Humbert Humbert is mind. Lolita is body.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "When she hits Humbert Humbert with her axe. She cuts right through his mind/body split. How he desires girl children with his body and punishes himself with his mind. The same mind that then tries to justify himself through referring to girl children from history who were desired by famous men. Is Humbert Humbert’s mind elite enough? Upper middleclass? Jeffrey Epstein kept the novel Lolita in a cabinet made of glass. He called his private jet Lolita Express. Humbert Humbert is mind. Lolita is body."
      },
      {
        "runs": [
          {
            "text": "When Lolita strikes Humbert Humbert with her axe, she does it for all the girl children who came before her: ",
            "bold": false,
            "italic": false
          },
          {
            "text": "King Akhnaten and Queen Nefertiti’s Nile daughters; Rahab; Dante’s Beatrice; Annabel; Monique",
            "bold": false,
            "italic": true
          },
          {
            "text": " and most of all for herself.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "When Lolita strikes Humbert Humbert with her axe, she does it for all the girl children who came before her: King Akhnaten and Queen Nefertiti’s Nile daughters; Rahab; Dante’s Beatrice; Annabel; Monique and most of all for herself."
      }
    ]
  },
  {
    "id": 5,
    "slug": "david-bowie-is-a-motherfucker",
    "title": "David Bowie is a Motherfucker",
    "shortTitle": "David Bowie is a Motherfucker",
    "docFileName": "David Bowie is a Motherfucker Selly doc 5.docx",
    "artworkUrl": "/5.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "David Bowie is a Motherfucker",
            "bold": true,
            "italic": false
          }
        ],
        "text": "David Bowie is a Motherfucker"
      },
      {
        "runs": [
          {
            "text": "Must we burn Nabokov? Must we burn Sade? Yes. Yes. David Bowie is a motherfucker. He is a great artist. He is a phenomenal musician. He was a pedophile who raped thirteen-year old groupies. John Lennon, Bon Scott, R. Kelly, Gary Glitter, Iggy Pop, Kim Fowley, Steven Tyler, Axl Rose, Sin Quirin also had sex with underage girls.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Must we burn Nabokov? Must we burn Sade? Yes. Yes. David Bowie is a motherfucker. He is a great artist. He is a phenomenal musician. He was a pedophile who raped thirteen-year old groupies. John Lennon, Bon Scott, R. Kelly, Gary Glitter, Iggy Pop, Kim Fowley, Steven Tyler, Axl Rose, Sin Quirin also had sex with underage girls."
      }
    ]
  },
  {
    "id": 6,
    "slug": "lolitas-mother",
    "title": "Lolita’s Mother",
    "shortTitle": "Lolita’s Mother",
    "docFileName": "Lolita's mother Selly 6 doc 6.docx",
    "artworkUrl": "/6.webp",
    "isPoem": true,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Lolita’s Mother",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Lolita’s Mother"
      },
      {
        "runs": [
          {
            "text": "I gave birth to your",
            "bold": false,
            "italic": false
          }
        ],
        "text": "I gave birth to your"
      },
      {
        "runs": [
          {
            "text": "object of desire",
            "bold": false,
            "italic": false
          }
        ],
        "text": "object of desire"
      },
      {
        "runs": [
          {
            "text": "Yet you despise me",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Yet you despise me"
      },
      {
        "runs": [
          {
            "text": "I’m so desperate",
            "bold": false,
            "italic": false
          }
        ],
        "text": "I’m so desperate"
      },
      {
        "runs": [
          {
            "text": "I asked you to",
            "bold": false,
            "italic": false
          }
        ],
        "text": "I asked you to"
      },
      {
        "runs": [
          {
            "text": "marry me",
            "bold": false,
            "italic": false
          }
        ],
        "text": "marry me"
      },
      {
        "runs": [
          {
            "text": "Despite your hatred",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Despite your hatred"
      },
      {
        "runs": [
          {
            "text": "of me",
            "bold": false,
            "italic": false
          }
        ],
        "text": "of me"
      },
      {
        "runs": [
          {
            "text": "you agree",
            "bold": false,
            "italic": false
          }
        ],
        "text": "you agree"
      },
      {
        "runs": [
          {
            "text": "but only",
            "bold": false,
            "italic": false
          }
        ],
        "text": "but only"
      },
      {
        "runs": [
          {
            "text": "so, you’ll be",
            "bold": false,
            "italic": false
          }
        ],
        "text": "so, you’ll be"
      },
      {
        "runs": [
          {
            "text": "Lolita’s father",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Lolita’s father"
      },
      {
        "runs": [
          {
            "text": "and celebrate incest.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "and celebrate incest."
      }
    ]
  },
  {
    "id": 7,
    "slug": "lolitas-retribution",
    "title": "Lolita’s Retribution",
    "shortTitle": "Lolita’s Retribution",
    "docFileName": "Lolita's retribution Selly doc 7.docx",
    "artworkUrl": "/7.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Lolita’s Retribution",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Lolita’s Retribution"
      },
      {
        "runs": [
          {
            "text": "How do you tattoo paedophile on Humbert Humbert’s stomach? How do you tattoo pro-paedophile author on Nabokov’s chest? Dead white males get away with it scot free. Marilyn Manson raped and tortured his girlfriend. Why are misogynists popular? A man said to me repetitively some women lie about being raped.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "How do you tattoo paedophile on Humbert Humbert’s stomach? How do you tattoo pro-paedophile author on Nabokov’s chest? Dead white males get away with it scot free. Marilyn Manson raped and tortured his girlfriend. Why are misogynists popular? A man said to me repetitively some women lie about being raped."
      }
    ]
  },
  {
    "id": 8,
    "slug": "humbert-humbert-the-beauty-fascist",
    "title": "Humbert Humbert the beauty fascist who prostitutes a girl child",
    "shortTitle": "Humbert Humbert the Beauty Fascist",
    "docFileName": "Humbert Humbert the beauty Selly doc 8.docx",
    "artworkUrl": "/8.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "Humbert Humbert the beauty fascist who prostitutes a girl child",
            "bold": true,
            "italic": false
          }
        ],
        "text": "Humbert Humbert the beauty fascist who prostitutes a girl child"
      },
      {
        "runs": [
          {
            "text": "Humbert Humbert prostitutes a girl child called ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Monique",
            "bold": false,
            "italic": true
          },
          {
            "text": " to himself. No wonder Jeffrey Epstein elevates Nabokov’s ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Lolita",
            "bold": false,
            "italic": true
          },
          {
            "text": " so high. Humbert Humbert is offered a fifteen-year-old girl but refuses her seeing her a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "plump",
            "bold": false,
            "italic": true
          },
          {
            "text": " while describing himself as an ",
            "bold": false,
            "italic": false
          },
          {
            "text": "exceptionally",
            "bold": false,
            "italic": true
          },
          {
            "text": " ",
            "bold": false,
            "italic": false
          },
          {
            "text": "handsome",
            "bold": false,
            "italic": true
          },
          {
            "text": " ",
            "bold": false,
            "italic": false
          },
          {
            "text": "man.",
            "bold": false,
            "italic": true
          },
          {
            "text": " Forgetting about his sagging arse, his unruly nostril hair, weathered hands and his bad breath.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Humbert Humbert prostitutes a girl child called Monique to himself. No wonder Jeffrey Epstein elevates Nabokov’s Lolita so high. Humbert Humbert is offered a fifteen-year-old girl but refuses her seeing her a plump while describing himself as an exceptionally handsome man. Forgetting about his sagging arse, his unruly nostril hair, weathered hands and his bad breath."
      },
      {
        "runs": [
          {
            "text": "Finding prostitution too edgy he decides to marry a woman in her twenties called ",
            "bold": false,
            "italic": false
          },
          {
            "text": "Valeria",
            "bold": false,
            "italic": true
          },
          {
            "text": " but only ‘cause she is good at imitating a child. He dresses her in children’s clothing.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Finding prostitution too edgy he decides to marry a woman in her twenties called Valeria but only ‘cause she is good at imitating a child. He dresses her in children’s clothing."
      },
      {
        "runs": [
          {
            "text": "As times passes he becomes unanamoured by the cactus of her unshaven legs, the regrowth of her bleached hair, her breasts that he sees as big and her legs that he sees as short. He views Valeria’s mother as ",
            "bold": false,
            "italic": false
          },
          {
            "text": "toadlike.",
            "bold": false,
            "italic": true
          },
          {
            "text": " Humbert Humbert is terrified of the maternal body. He felt nothing when his mother died.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "As times passes he becomes unanamoured by the cactus of her unshaven legs, the regrowth of her bleached hair, her breasts that he sees as big and her legs that he sees as short. He views Valeria’s mother as toadlike. Humbert Humbert is terrified of the maternal body. He felt nothing when his mother died."
      }
    ]
  },
  {
    "id": 9,
    "slug": "what-humbert-humbert-did",
    "title": "What Humbert Humbert did",
    "shortTitle": "What Humbert Humbert did",
    "docFileName": "What Humbert Humbert did Selly  doc 9.docx",
    "artworkUrl": "/9.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "What Humbert Humbert did",
            "bold": true,
            "italic": false
          }
        ],
        "text": "What Humbert Humbert did"
      },
      {
        "runs": [
          {
            "text": "In the guise of playing with me, he grooms me. Sexually abuses me.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "In the guise of playing with me, he grooms me. Sexually abuses me."
      },
      {
        "runs": [
          {
            "text": "How did he get away with it when my mother was nearby.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "How did he get away with it when my mother was nearby."
      },
      {
        "runs": [
          {
            "text": "Humber Humbert stinks. I throw away my doll.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Humber Humbert stinks. I throw away my doll."
      },
      {
        "runs": [
          {
            "text": "His perception of me gives him ",
            "bold": false,
            "italic": false
          },
          {
            "text": "a beggars bliss",
            "bold": false,
            "italic": true
          },
          {
            "text": " but he was a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "predator that prefers a moving target",
            "bold": false,
            "italic": true
          },
          {
            "text": ".",
            "bold": false,
            "italic": false
          }
        ],
        "text": "His perception of me gives him a beggars bliss but he was a predator that prefers a moving target."
      },
      {
        "runs": [
          {
            "text": "He thought he was my ",
            "bold": false,
            "italic": false
          },
          {
            "text": "movie star",
            "bold": false,
            "italic": true
          },
          {
            "text": ".",
            "bold": false,
            "italic": false
          }
        ],
        "text": "He thought he was my movie star."
      },
      {
        "runs": [
          {
            "text": "He describes my eyes as ",
            "bold": false,
            "italic": false
          },
          {
            "text": "pale-grey",
            "bold": false,
            "italic": true
          },
          {
            "text": " and ",
            "bold": false,
            "italic": false
          },
          {
            "text": "vacant.",
            "bold": false,
            "italic": true
          }
        ],
        "text": "He describes my eyes as pale-grey and vacant."
      },
      {
        "runs": [
          {
            "text": "Humbert Humbert kisses my ",
            "bold": false,
            "italic": false
          },
          {
            "text": "fluttering eyelid,",
            "bold": false,
            "italic": true
          },
          {
            "text": " my eye, my field of vision, my gaze. His mouth covering my power. I run, I run, I run.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Humbert Humbert kisses my fluttering eyelid, my eye, my field of vision, my gaze. His mouth covering my power. I run, I run, I run."
      }
    ]
  },
  {
    "id": 10,
    "slug": "the-web",
    "title": "The Web",
    "shortTitle": "The Web",
    "docFileName": "The Web Selly doc 10.docx",
    "artworkUrl": "/10.webp",
    "isPoem": false,
    "paragraphs": [
      {
        "runs": [
          {
            "text": "The Web",
            "bold": true,
            "italic": false
          }
        ],
        "text": "The Web"
      },
      {
        "runs": [
          {
            "text": "He is aware of how close he is to me. He describes me as a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "spiteful one year old",
            "bold": false,
            "italic": true
          },
          {
            "text": ". As a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "villainous infant",
            "bold": false,
            "italic": true
          },
          {
            "text": ". At twelve my mother defines me as ",
            "bold": false,
            "italic": false
          },
          {
            "text": "a regular pest",
            "bold": false,
            "italic": true
          },
          {
            "text": ". My grades were low hence the need for Humbert Humbert. He wants to stay on forever as my inhouse tutor so he can continue to groom me. He imagines my specter in his bedlinen. Yet he is scared of how his temptation for me will crack him up. He calls me his ",
            "bold": false,
            "italic": false
          },
          {
            "text": "darling",
            "bold": false,
            "italic": true
          },
          {
            "text": ", his ",
            "bold": false,
            "italic": false
          },
          {
            "text": "life",
            "bold": false,
            "italic": true
          },
          {
            "text": " and his ",
            "bold": false,
            "italic": false
          },
          {
            "text": "bride",
            "bold": false,
            "italic": true
          },
          {
            "text": ". But I am twelve years old. ",
            "bold": false,
            "italic": false
          }
        ],
        "text": "He is aware of how close he is to me. He describes me as a spiteful one year old. As a villainous infant. At twelve my mother defines me as a regular pest. My grades were low hence the need for Humbert Humbert. He wants to stay on forever as my inhouse tutor so he can continue to groom me. He imagines my specter in his bedlinen. Yet he is scared of how his temptation for me will crack him up. He calls me his darling, his life and his bride. But I am twelve years old. "
      },
      {
        "runs": [
          {
            "text": "I look at what Humbert Humbert writes. ",
            "bold": false,
            "italic": false
          },
          {
            "text": "An indecipherable code of his lust for me.",
            "bold": false,
            "italic": true
          },
          {
            "text": " He thinks he has the right to look and to touch but he is wrong. He calls me a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "limpid nymphet",
            "bold": false,
            "italic": true
          },
          {
            "text": ". He thinks that I am waiting for him to touch me but I am not. I am more interested in the dead mouse downstairs.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "I look at what Humbert Humbert writes. An indecipherable code of his lust for me. He thinks he has the right to look and to touch but he is wrong. He calls me a limpid nymphet. He thinks that I am waiting for him to touch me but I am not. I am more interested in the dead mouse downstairs."
      },
      {
        "runs": [
          {
            "text": "Nabokov’s learned reader is of course male. Judy Forshaw argues that the female reader is mocked. Nabokov as the narrator Humbert Humbert keeps justifying his desire for me in descriptions of me. He calls me a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "precocious pet",
            "bold": false,
            "italic": true
          },
          {
            "text": ". He wishes. Assuming I am rathe-ripe despite being twelve. Or rape ripe more like it.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Nabokov’s learned reader is of course male. Judy Forshaw argues that the female reader is mocked. Nabokov as the narrator Humbert Humbert keeps justifying his desire for me in descriptions of me. He calls me a precocious pet. He wishes. Assuming I am rathe-ripe despite being twelve. Or rape ripe more like it."
      },
      {
        "runs": [
          {
            "text": "Humbert Humbert describes himself as a ",
            "bold": false,
            "italic": false
          },
          {
            "text": "spider",
            "bold": false,
            "italic": true
          },
          {
            "text": ". A rock spider no doubt. His web is all over my house.",
            "bold": false,
            "italic": false
          }
        ],
        "text": "Humbert Humbert describes himself as a spider. A rock spider no doubt. His web is all over my house."
      }
    ]
  }
];
