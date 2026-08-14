import heroImg from '../../assets/images/offa_heritage_hero_1786472919225.jpg';
import historicStreetImg from '../../assets/images/offa_street_historic_1786472935833.jpg';

export interface Landmark {
  id: string;
  name: string;
  type: string;
  description: string;
  yearBuilt?: string;
  image?: string;
}

export interface OralHistory {
  quote: string;
  speaker: string;
  role: string;
  yearRecorded: string;
}

export interface StreetData {
  slug: string;
  name: string;
  tagline: string;
  category: 'Royal & Commercial Axis' | 'Traditional Residential Compound' | 'Historic Market Thoroughfare' | 'Educational & Inter-Town Gateway' | 'Cultural Memory & Sacred Landmark';
  neighborhood: string;
  era: string;
  overview: string;
  history: string;
  image: string;
  gallery: string[];
  landmarks: Landmark[];
  preservationStatus: 'High Priority' | 'Under Conservation Review' | 'Structural Upgrade Planned' | 'Moderate Preservation' | 'UNESCO Candidate Assessment';
  coordinates: {
    lat: number;
    lng: number;
    formatted: string;
  };
  keyFacts: {
    label: string;
    value: string;
  }[];
  oralHistories: OralHistory[];
  preservationNeeds: string[];
}

export const HERO_IMAGE = heroImg;
export const HISTORIC_STREET_IMAGE = historicStreetImg;

export const STREETS_DATA: StreetData[] = [
  {
    slug: 'olofa-way',
    name: 'Olofa Way',
    tagline: 'The royal heartbeat and historic central avenue connecting the Olofa Palace.',
    category: 'Royal & Commercial Axis',
    neighborhood: 'Central Palace District',
    era: 'Early 19th Century',
    overview: 'The principal arterial corridor connecting the Olofa Palace with the central market and historic city gates. Lined with century-old colonial and traditional Yoruba courtyard compounds.',
    history: 'Named after the reigning title of the King of Offa (the Olofa of Offa), this historic avenue served as the ceremonial procession route for royal festivals including the famous Ijakadi Festival. It has been the heart of Offa\'s civic and commercial life for centuries, witnessing the town\'s transformation through colonial rule, post-independence growth, and modern cultural preservation.',
    image: heroImg,
    gallery: [
      heroImg,
      historicStreetImg,
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=1200&q=80'
    ],
    landmarks: [
      {
        id: 'olofa-palace-gate',
        name: 'Olofa Palace Royal Gate',
        type: 'Monument / Architecture',
        description: 'The iconic arched entry gate leading to the palace of the Olofa, adorned with traditional Yoruba carved pillars.',
        yearBuilt: '1912 (Restored 1985)'
      },
      {
        id: 'central-mosque-monument',
        name: 'Offa Central Mosque Square',
        type: 'Religious & Civic Landmark',
        description: 'A striking focal point along Olofa Way, serving as both a place of worship and a historic community assembly space.',
        yearBuilt: '1936'
      },
      {
        id: 'postal-exchange-building',
        name: 'Historic Postal Exchange',
        type: 'Colonial Architecture',
        description: 'One of Offa\'s earliest public communication hubs, featuring classic red-brick colonial facade work.',
        yearBuilt: '1948'
      }
    ],
    preservationStatus: 'High Priority',
    coordinates: {
      lat: 8.1492,
      lng: 4.7206,
      formatted: '8.1492° N, 4.7206° E'
    },
    keyFacts: [
      { label: 'Total Corridor Length', value: '2.4 km' },
      { label: 'Heritage Structures', value: '18 Recognized Sites' },
      { label: 'Primary Era', value: '1820s – Present' },
      { label: 'Protection Level', value: 'Municipal Heritage Zone A' }
    ],
    oralHistories: [
      {
        quote: 'My grandfather used to tell us how the entire town assembled along Olofa Way to celebrate royal victories and receive royal blessings during Ijakadi.',
        speaker: 'Pa Ezekiel Adediran',
        role: 'Community Historian (Age 89)',
        yearRecorded: '2023'
      },
      {
        quote: 'When the railway arrived in Offa, Olofa Way became the main thoroughfare for traders coming from across Nigeria.',
        speaker: 'Chief Mrs. Folake Oloyede',
        role: 'Elder Market Women Union',
        yearRecorded: '2024'
      }
    ],
    preservationNeeds: [
      'Digital 3D laser mapping of historic carved wooden lintels',
      'Installation of QR code heritage plaques for visitors',
      'Sidewalk restoration to protect mud-brick wall foundations from monsoon runoff'
    ]
  },
  {
    slug: 'popo-street',
    name: 'Popo Street & Compound',
    tagline: 'Ancient warrior compounds, traditional Aso-Oke looms, and centuries-old mud masonry.',
    category: 'Traditional Residential Compound',
    neighborhood: 'Popo Ward',
    era: 'Mid 18th Century',
    overview: 'One of the oldest residential quarters in Offa, famous for its sprawling Agbo Ile (family compounds), traditional weaving looms, and hand-carved entry doorways.',
    history: 'Popo Ward was settled by early warrior lineages and master craftsmen who defended Offa during historical 19th-century conflicts. The architectural footprint features defensive courtyard arrangements, shared central wells, and specialized dye pits that supplied woven garments to royal courts.',
    image: historicStreetImg,
    gallery: [
      historicStreetImg,
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      heroImg
    ],
    landmarks: [
      {
        id: 'ile-popo-compound',
        name: 'Ile Popo Ancestral House',
        type: 'Family Courtyard Compound',
        description: 'A preserved 12-courtyard complex housing four generations of Offa elders and craft weavers.',
        yearBuilt: 'c. 1780'
      },
      {
        id: 'popo-weaving-center',
        name: 'Popo Traditional Aso-Oke Sheds',
        type: 'Intangible Cultural Heritage',
        description: 'Active open-air loom stations where master women weavers produce authentic Offa Aso-Oke textiles.',
        yearBuilt: 'Continuous usage'
      },
      {
        id: 'popo-community-well',
        name: 'Historic Popo Deep Well',
        type: 'Civic Utility Heritage',
        description: 'A hand-dug stone-lined well that sustained the ward during the historical siege period.',
        yearBuilt: '1890'
      }
    ],
    preservationStatus: 'Under Conservation Review',
    coordinates: {
      lat: 8.1465,
      lng: 4.7180,
      formatted: '8.1465° N, 4.7180° E'
    },
    keyFacts: [
      { label: 'Ancestral Compounds', value: '12 Active Agbo-Ile' },
      { label: 'Craft Guild', value: 'Offa Master Weavers' },
      { label: 'Dominant Material', value: 'Earthen Mud & Timber Roofing' },
      { label: 'Protection Level', value: 'Heritage Priority List' }
    ],
    oralHistories: [
      {
        quote: 'In Popo Street, every house is connected. We don\'t lock doors between compounds because our ancestors built these walls as a single protective family.',
        speaker: 'Mama Alhaja Sadiat Popo',
        role: 'Master Weaver & Matriarch (Age 82)',
        yearRecorded: '2022'
      }
    ],
    preservationNeeds: [
      'Reinforcement of traditional thatch and corrugated iron roof trusses',
      'Establishment of Popo Weaving Museum & Guild Center',
      'Documentation of family lineage genealogies on physical stone plaques'
    ]
  },
  {
    slug: 'owode-market-road',
    name: 'Owode Market Road',
    tagline: 'The vibrant commerce engine famous for sweet potatoes, indigo dyes, and trade legacy.',
    category: 'Historic Market Thoroughfare',
    neighborhood: 'Owode Quarter',
    era: 'Late 19th Century',
    overview: 'The economic lifeline of Offa heritage. For over 130 years, trade in sweet potatoes, woven fabrics, pottery, and agricultural produce has pulsed through this historic corridor.',
    history: 'Established during the rapid growth of inter-regional trade in Kwara State, Owode Market Road became nationwide famous as West Africa\'s premier hub for sweet potato wholesale and indigo dye works. Merchants from Lagos, Kano, and Ilorin gathered weekly to trade.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      heroImg,
      historicStreetImg
    ],
    landmarks: [
      {
        id: 'owode-clock-tower',
        name: 'Owode Clock Tower Site',
        type: 'Civic Monument',
        description: 'A historic meeting pillar where market announcements and town news were traditionally proclaimed.',
        yearBuilt: '1952'
      },
      {
        id: 'indigo-dyeing-vats',
        name: 'Historic Indigo Dye Pits',
        type: 'Industrial Archaeology',
        description: 'Traditional earthen vats used for natural indigo dyeing of hand-spun yarn.',
        yearBuilt: 'c. 1895'
      }
    ],
    preservationStatus: 'Structural Upgrade Planned',
    coordinates: {
      lat: 8.1510,
      lng: 4.7225,
      formatted: '8.1510° N, 4.7225° E'
    },
    keyFacts: [
      { label: 'Active Traders', value: '350+ Heritage Stalls' },
      { label: 'Specialty Product', value: 'Offa Anamambra Sweet Potato & Aso-Oke' },
      { label: 'Market Rhythm', value: '5-Day Traditional Cycle' },
      { label: 'Protection Level', value: 'Commercial Preservation District' }
    ],
    oralHistories: [
      {
        quote: 'If you want to understand Offa\'s resilience, visit Owode at dawn on market day. The songs of the traders have not changed in a hundred years.',
        speaker: 'Alhaji Saka Omo-Owo',
        role: 'Market Union President',
        yearRecorded: '2024'
      }
    ],
    preservationNeeds: [
      'Pedestrian-safe paving with drainage channels to stop erosion during rain',
      'Architectural standardization of market stalls matching historic motifs',
      'Fire prevention system for historic wooden market arcades'
    ]
  },
  {
    slug: 'ojoku-road',
    name: 'Ojoku Road',
    tagline: 'Pioneer schools, historic shade avenues, and the legacy of community self-help education.',
    category: 'Educational & Inter-Town Gateway',
    neighborhood: 'Southern Ridge',
    era: 'Early 20th Century',
    overview: 'Connecting Offa to neighboring historic settlements, Ojoku Road is home to early community-built schools, pioneer healthcare centers, and historic churches.',
    history: 'Built through community self-help contributions in the early 1900s, Ojoku Road symbolizes Offa\'s legendary reputation: "Offa, the land of education and self-help." It hosted early educational institutions that trained leaders across Nigeria.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      heroImg,
      historicStreetImg
    ],
    landmarks: [
      {
        id: 'offa-grammar-school-gate',
        name: 'Offa Grammar School Memorial Gate',
        type: 'Educational Monument',
        description: 'The entrance gate to West Africa\'s first community-funded grammar school (founded 1943).',
        yearBuilt: '1943'
      },
      {
        id: 'st-marks-cathedral-arch',
        name: 'St. Mark\'s Historic Belfry',
        type: 'Ecclesiastical Heritage',
        description: 'An early 20th century stone bell tower overlooking Ojoku Road.',
        yearBuilt: '1928'
      }
    ],
    preservationStatus: 'Moderate Preservation',
    coordinates: {
      lat: 8.1420,
      lng: 4.7150,
      formatted: '8.1420° N, 4.7150° E'
    },
    keyFacts: [
      { label: 'Pioneer Institutions', value: '4 Heritage Schools' },
      { label: 'Self-Help Heritage', value: 'Funded entirely by Offa Descendants' },
      { label: 'Avenue Trees', value: 'Century-Old Mahogany Canopy' },
      { label: 'Protection Level', value: 'Civic Preservation Zone' }
    ],
    oralHistories: [
      {
        quote: 'Every family in Offa contributed money, yams, or physical labor to pave Ojoku Road and build Offa Grammar School. That spirit defined us.',
        speaker: 'Dr. Timothy Adebayo',
        role: 'Alumnus & Retired Principal',
        yearRecorded: '2023'
      }
    ],
    preservationNeeds: [
      'Tree canopy conservation for century-old mahogany trees',
      'Restoration of historic 1940s school block facades',
      'Speed-calming measures to protect student pedestrians and historic monuments'
    ]
  },
  {
    slug: 'moremi-street',
    name: 'Moremi Street & Ile-Monu',
    tagline: 'Sacred precinct honoring Queen Moremi Ajasoro and ancestral lineage archives.',
    category: 'Cultural Memory & Sacred Landmark',
    neighborhood: 'Ile-Monu Heritage Sector',
    era: 'Ancient / Oral Tradition Era',
    overview: 'Dedicated to the memory of Queen Moremi Ajasoro, the legendary heroine of Yoruba history who hailed from Offa. Features shrines, oral tradition archives, and ancient shade trees.',
    history: 'Moremi Street marks the ancestral precinct of Moremi Ajasoro\'s lineage in Offa. It remains a site of profound cultural pride, pilgrimage, and historical research for scholars worldwide.',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=1200&q=80',
      heroImg,
      historicStreetImg
    ],
    landmarks: [
      {
        id: 'moremi-pavilion-shrine',
        name: 'Moremi Ajasoro Cultural Pavilion',
        type: 'Cultural & Sacred Site',
        description: 'A quiet shrine and memorial hall celebrating the bravery of Queen Moremi.',
        yearBuilt: 'Ancient (Modern Structure 1992)'
      },
      {
        id: 'ile-monu-baobab',
        name: 'Ile-Monu Ancestral Baobab',
        type: 'Natural Heritage Monument',
        description: 'A massive 400+ year old Baobab tree where traditional elders gathered for story council.',
        yearBuilt: 'Estimated 1600s'
      }
    ],
    preservationStatus: 'UNESCO Candidate Assessment',
    coordinates: {
      lat: 8.1480,
      lng: 4.7250,
      formatted: '8.1480° N, 4.7250° E'
    },
    keyFacts: [
      { label: 'Cultural Status', value: 'National Cultural Heritage Monument' },
      { label: 'Annual Event', value: 'Moremi Heritage Memorial Lecture' },
      { label: 'Archival Focus', value: 'Oral History & Yoruba Feminist History' },
      { label: 'Protection Level', value: 'Highest State Preservation Designation' }
    ],
    oralHistories: [
      {
        quote: 'Moremi\'s courage lives in every woman born in Offa. When you walk down Moremi Street, you are walking on sacred, fearless ground.',
        speaker: 'Princess Abidemi Olofa',
        role: 'Cultural Custodian & Researcher',
        yearRecorded: '2024'
      }
    ],
    preservationNeeds: [
      'Construction of a digital interactive visitor hall',
      'Protection perimeter for the 400-year-old Baobab tree',
      'Bilingual (Yoruba & English) audio guide infrastructure'
    ]
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  location: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'salako-lukman-olamilekan',
    name: 'Salako Lukman Olamilekan',
    role: 'Founder and Director Yoruba Wikipedia Fan Club Offa',
    bio: 'Digital Knowledge & Cultural Preservation Consultant, Wikimedia-trained, Building Indigenous Knowledge Systems & Youth Research Capacity (Africa → Global).',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQFT3TlFw7C3tw/profile-framedphoto-shrink_400_400/B4DZt6P9RsH4Ac-/0/1767282562449?e=1787148000&v=beta&t=rRnHU5uxVnsFOY3-NuRHjMDU97Nx0BUjeNo5WXGAZT8',
    email: 'salakoolamilekanlukman@gmail.com',
    location: 'Offa, Kwara State'
  },
  {
    id: 'celio-soares-de-souza',
    name: 'Celio Soares de Souza',
    role: 'Researcher in Adaptive Scientific Intelligence (ASI)',
    bio: 'I develop computational methodologies for scientific reasoning and decision-making under environmental uncertainty.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQG6ntvirXrCvA/profile-displayphoto-scale_400_400/B4EZkkeiYhIMAg-/0/1757253609965?e=1788393600&v=beta&t=rO9LCPq4_4v__3X9NyrHjTNgMdi234LqVnfmxAfAlto',
    email: 'celio.s.souza@unesp.br',
    location: 'Sorocaba, São Paulo, Brazil'
  },
  /*{
    id: 'arc-ibrahim-balogun',
    name: 'Arc. Ibrahim Balogun',
    role: 'Lead Conservation Architect',
    bio: 'Specialist in West African traditional earthen architecture and modern structural stabilization of heritage brickwork.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    email: 'i.balogun@offaheritage.org',
    location: 'Offa, Kwara State'
  },
  {
    id: 'ms-amara-echeruo',
    name: 'Ms. Amara Echeruo',
    role: 'Digital Archival Specialist & Developer',
    bio: 'Full-stack software engineer and spatial mapper passionate about preserving African indigenous knowledge systems through web tech.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    email: 'amara@offaheritage.org',
    location: 'Remote / Abuja'
  }*/
];

export interface ProjectData {
  id: string;
  title: string;
  category: 'Digital Archiving' | 'Physical Restoration' | 'Community Education' | 'UNESCO Candidate';
  status: 'In Progress' | 'Planned' | 'Completed';
  completion: number; // percentage 0-100
  summary: string;
  details: string;
  budgetGoal: string;
  funded: string;
  lead: string;
  image: string;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'olofa-palace-digital-twin',
    title: 'Olofa Palace Digital Twin & 3D Mapping',
    category: 'Digital Archiving',
    status: 'In Progress',
    completion: 65,
    summary: 'High-density LiDAR scanning and photogrammetry of the historical Olofa Palace grounds and ceremonial courtyards.',
    details: 'This project creates a permanent, high-precision 3D digital model of the Olofa Palace, capturing intricate carved wooden pillars, royal motifs, and interior court spaces before weather erosion occurs.',
    budgetGoal: '₦12,500,000',
    funded: '₦8,120,000',
    lead: 'Arc. Ibrahim Balogun',
    image: heroImg
  },
  {
    id: 'popo-weaving-guild-preservation',
    title: 'Popo Street Aso-Oke Weaving Guild Center',
    category: 'Physical Restoration',
    status: 'In Progress',
    completion: 40,
    summary: 'Restoring historic open-air weaving sheds on Popo Street and providing youth apprenticeships in natural dyeing.',
    details: 'Combining physical timber shed restoration with an interactive apprenticeship school to ensure Offa\'s ancient Aso-Oke weaving techniques are passed on to the next generation.',
    budgetGoal: '₦8,000,000',
    funded: '₦3,500,000',
    lead: 'Mrs. Kehinde Adesoye',
    image: historicStreetImg
  },
  {
    id: 'street-qr-plaques',
    title: 'Historic Street QR Signage Installation',
    category: 'Community Education',
    status: 'In Progress',
    completion: 85,
    summary: 'Mounting weather-proof brass QR plaques along the 5 historic streets to give visitors instant smartphone access to history.',
    details: 'Visitors can scan QR code brass markers along Olofa Way, Popo Street, and Moremi Street to hear oral stories in Yoruba and English directly on their mobile devices.',
    budgetGoal: '₦3,200,000',
    funded: '₦2,800,000',
    lead: 'Ms. Amara Echeruo',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'moremi-unesco-dossier',
    title: 'Moremi Heritage Site UNESCO Nomination Dossier',
    category: 'UNESCO Candidate',
    status: 'Planned',
    completion: 15,
    summary: 'Compiling academic research, legal documentation, and community consent files for national heritage status.',
    details: 'Working alongside the Kwara State Ministry of Culture and UNESCO research fellows to officially document Moremi Street and Ile-Monu as a protected cultural monument.',
    budgetGoal: '₦15,000,000',
    funded: '₦2,000,000',
    lead: 'Dr. Folorunsho Olofa',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=1200&q=80'
  }
];
