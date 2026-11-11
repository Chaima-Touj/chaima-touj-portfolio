export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Programming & Modeling';
  icon: string;
  color: string;
  accentBg: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  location: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Chaima Touj',
  title: 'Junior Full Stack Web Developer',
  subtitle: 'MERN Stack Developer',
  tagline: 'Dream • Code • Create 💜 ✨',
  description:
    'I build modern, responsive web applications with the MERN Stack.',
  about:
    "I'm a Junior Full Stack Web Developer based in Tunis, Tunisia, with a BTS in Informatique de Gestion from IMSET. During my internship at BeeCoders, I contributed to a MERN platform that is now used by the company. I enjoy building user-focused web applications, designing interfaces and learning new technologies.",
  email: 'chaimaatouj@gmail.com',
  phone: '+216 23 692 950',
  github: 'https://github.com/Chaima-Touj',
  linkedin: 'https://linkedin.com/in/touj-chaima-0936ab366',
  location: 'Tunis, Tunisia',
  status: 'Open to Opportunities',
};

export const LANGUAGES_DATA = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Intermediate' },
  { name: 'Italian', level: 'Basic' },
];

export const SKILLS_DATA: SkillItem[] = [
  { id: 'react', name: 'React.js', category: 'Frontend', icon: 'react', color: '#38bdf8', accentBg: 'rgba(56, 189, 248, 0.15)', description: 'Building component-based user interfaces with React.js.' },
  { id: 'vite', name: 'Vite', category: 'Frontend', icon: 'vite', color: '#bd34fe', accentBg: 'rgba(189, 52, 254, 0.15)', description: 'Modern development and build tooling for web applications.' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', icon: 'javascript', color: '#facc15', accentBg: 'rgba(250, 204, 21, 0.15)', description: 'JavaScript for interactive web application development.' },
  { id: 'html5', name: 'HTML5', category: 'Frontend', icon: 'html5', color: '#f97316', accentBg: 'rgba(249, 115, 22, 0.15)', description: 'Semantic structure and accessible web page markup.' },
  { id: 'css3', name: 'CSS3', category: 'Frontend', icon: 'css3', color: '#3b82f6', accentBg: 'rgba(59, 130, 246, 0.15)', description: 'Styling and responsive layouts for different screen sizes.' },
  { id: 'responsive', name: 'Responsive Web Design', category: 'Frontend', icon: 'responsive', color: '#a78bfa', accentBg: 'rgba(167, 139, 250, 0.15)', description: 'Creating layouts that adapt to desktop, tablet and mobile.' },
  { id: 'uiux', name: 'UI/UX Design', category: 'Frontend', icon: 'uiux', color: '#ec4899', accentBg: 'rgba(236, 72, 153, 0.15)', description: 'Interface design and user experience from wireframe to mockup.' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', icon: 'node', color: '#4ade80', accentBg: 'rgba(74, 222, 128, 0.15)', description: 'Server-side JavaScript development with Node.js.' },
  { id: 'express', name: 'Express.js', category: 'Backend', icon: 'express', color: '#94a3b8', accentBg: 'rgba(148, 163, 184, 0.15)', description: 'Backend routing and REST API development with Express.js.' },
  { id: 'restapi', name: 'REST APIs', category: 'Backend', icon: 'api', color: '#c084fc', accentBg: 'rgba(192, 132, 252, 0.15)', description: 'Creating and integrating RESTful application interfaces.' },
  { id: 'json', name: 'JSON', category: 'Backend', icon: 'json', color: '#fbbf24', accentBg: 'rgba(251, 191, 36, 0.15)', description: 'Working with JSON data in web applications and APIs.' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: 'mongodb', color: '#10b981', accentBg: 'rgba(16, 185, 129, 0.15)', description: 'NoSQL data storage and integration in MERN applications.' },
  { id: 'mongoose', name: 'Mongoose', category: 'Database', icon: 'mongoose', color: '#ef4444', accentBg: 'rgba(239, 68, 68, 0.15)', description: 'MongoDB object modeling with Mongoose.' },
  { id: 'sql', name: 'SQL', category: 'Database', icon: 'sql', color: '#0ea5e9', accentBg: 'rgba(14, 165, 233, 0.15)', description: 'Relational database fundamentals and SQL queries.' },
  { id: 'git', name: 'Git', category: 'Tools', icon: 'git', color: '#f97316', accentBg: 'rgba(249, 115, 22, 0.15)', description: 'Version control for collaborative software development.' },
  { id: 'github', name: 'GitHub', category: 'Tools', icon: 'github', color: '#94a3b8', accentBg: 'rgba(148, 163, 184, 0.15)', description: 'Source code hosting and project collaboration.' },
  { id: 'postman', name: 'Postman', category: 'Tools', icon: 'postman', color: '#fb923c', accentBg: 'rgba(251, 146, 60, 0.15)', description: 'Testing and reviewing API requests.' },
  { id: 'npm', name: 'npm', category: 'Tools', icon: 'npm', color: '#ef4444', accentBg: 'rgba(239, 68, 68, 0.15)', description: 'Managing JavaScript project packages and dependencies.' },
  { id: 'figma', name: 'Figma', category: 'Tools', icon: 'figma', color: '#a855f7', accentBg: 'rgba(168, 85, 247, 0.15)', description: 'Wireframes, UI mockups and interface design.' },
  { id: 'docker', name: 'Docker (Basics)', category: 'Tools', icon: 'docker', color: '#0284c7', accentBg: 'rgba(2, 132, 199, 0.15)', description: 'Foundational familiarity with Docker.' },
  { id: 'prompt-engineering', name: 'Prompt Engineering', category: 'Tools', icon: 'prompt', color: '#c084fc', accentBg: 'rgba(192, 132, 252, 0.15)', description: 'Using prompt engineering techniques during development tasks.' },
  { id: 'ai-tools', name: 'AI Tools', category: 'Tools', icon: 'ai', color: '#818cf8', accentBg: 'rgba(129, 140, 248, 0.15)', description: 'Using AI-assisted tools to support development workflows.' },
  { id: 'java', name: 'Java', category: 'Programming & Modeling', icon: 'java', color: '#f97316', accentBg: 'rgba(249, 115, 22, 0.15)', description: 'Programming fundamentals with Java.' },
  { id: 'c', name: 'C', category: 'Programming & Modeling', icon: 'c', color: '#60a5fa', accentBg: 'rgba(96, 165, 250, 0.15)', description: 'Programming fundamentals with C.' },
  { id: 'cpp', name: 'C++', category: 'Programming & Modeling', icon: 'cpp', color: '#818cf8', accentBg: 'rgba(129, 140, 248, 0.15)', description: 'Programming fundamentals with C++.' },
  { id: 'uml', name: 'UML', category: 'Programming & Modeling', icon: 'uml', color: '#e879f9', accentBg: 'rgba(232, 121, 249, 0.15)', description: 'Modeling and analysis of information systems.' },
];

export const PROJECTS_DATA = [
  {
    id: 'coin-de-beaute-by-yosr',
    title: 'Coin de Beauté by Yosr',
    subtitle: 'Beauty products storefront',
    category: 'E-commerce',
    description: 'A beauty storefront presenting perfumes, skincare products and gift sets. The interface includes product categories, a shopping cart, favorites and an about section.',
    image: '/projects/coin-de-beaute-by-yosr/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/coin-de-beaute-by-yosr/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Beauty product categories and product presentation', 'Shopping cart and favorites interface', 'Responsive storefront layout', 'French-language brand presentation'],
  },
  {
    id: 'see-you-store',
    title: 'See You Store',
    subtitle: 'Shoes and accessories storefront',
    category: 'E-commerce',
    description: 'A fashion storefront for shoes and accessories, designed around a refined visual identity and product collections.',
    image: '/projects/see-you-store/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/see-you-store/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Fashion-oriented homepage and collection presentation', 'Product-focused visual sections', 'Responsive storefront experience'],
  },
  {
    id: 'taw-taw-delivery',
    title: 'Taw Taw Delivery',
    subtitle: 'Restaurants and local shops delivery concept',
    category: 'Services',
    description: 'A delivery platform concept that introduces restaurants and local shops, lets visitors choose a delivery zone, explore stores, place an order and follow the delivery journey.',
    image: '/projects/taw-taw-delivery/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/taw-taw-delivery/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Delivery-zone selection', 'Restaurant and shop discovery', 'Order journey presentation', 'Mobile-first visual direction'],
  },
  {
    id: 'reine-noisette',
    title: 'Reine Noisette',
    subtitle: 'Artisan pastry showcase website',
    category: 'Lifestyle',
    description: 'A showcase website for an artisan pastry brand in Tunis, presenting pastry creations, custom celebration cakes and a photo gallery. The supplied project README describes it as a showcase site with contact handled through Facebook, rather than an online checkout.',
    image: '/projects/reine-noisette/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/reine-noisette/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Artisan pastry and product presentation', 'Custom creations and celebration moments', 'Gallery of pastry work', 'Contact-oriented showcase structure'],
  },
  {
    id: 'aurelia-voyages',
    title: 'Aurelia Voyages',
    subtitle: 'Travel agency website',
    category: 'Services',
    description: 'A travel website presenting destinations, stays, organised tours and tailor-made trips.',
    note: 'The card artwork is a visual cover made from travel imagery embedded in the supplied project. Open the website preview to view the full interface.',
    image: '/projects/aurelia-voyages/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    liveUrl: '/projects/aurelia-voyages/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Destination discovery', 'Stays and organised circuit presentation', 'Tailor-made travel positioning'],
  },
  {
    id: 'soteb',
    title: 'SOTEB',
    subtitle: 'Professional bakery and pastry equipment',
    category: 'Business',
    description: 'A business website for professional bakery and pastry equipment in Tunisia, with content about equipment selection, installation and after-sales support.',
    image: '/projects/soteb/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/soteb/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Professional equipment presentation', 'Equipment categories and product imagery', 'Installation and after-sales service information'],
  },
  {
    id: 'crystal-rent-car',
    title: 'Crystal Rent Car',
    subtitle: 'Car rental website',
    category: 'Services',
    description: 'A car rental website for Tunisia presenting vehicle options and rental services, with or without a driver.',
    image: '/projects/crystal-rent-car/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/crystal-rent-car/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Vehicle selection presentation', 'Rental service information', 'Travel-focused visual identity'],
  },
  {
    id: 'star-box-events',
    title: 'Star Box Events',
    subtitle: 'Events and entertainment showcase',
    category: 'Services',
    description: 'An event website concept for concerts, festivals and private events in Tunis.',
    image: '/projects/star-box-events/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/star-box-events/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Concert and festival presentation', 'Private event positioning', 'Event-focused visual identity'],
  },
  {
    id: 'traiteur-ziryeb',
    title: 'Traiteur Ziryeb',
    subtitle: 'Tunisian catering and events website',
    category: 'Lifestyle',
    description: 'A showcase website for Tunisian catering, presenting traditional dishes, couscous, buffets and reception services.',
    image: '/projects/traiteur-ziryeb/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/traiteur-ziryeb/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Tunisian cuisine presentation', 'Couscous and buffet sections', 'Reception and event catering content'],
  },
  {
    id: 'vitala-fitness',
    title: 'VITALA Fitness',
    subtitle: 'Fitness club website',
    category: 'Services',
    description: 'A fitness club website presenting training programmes, coaches, memberships, a gallery and a member area.',
    image: '/projects/vitala-fitness/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/vitala-fitness/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Fitness programmes and coach presentation', 'Membership information', 'Gallery and member-area concept'],
  },
  {
    id: 'amy-porte',
    title: 'AMY Porte',
    subtitle: 'Doors and home design showcase',
    category: 'Business',
    description: 'A showcase website for AMY Porte in Manouba, presenting door styles and inviting visitors to request a personalised quotation.',
    image: '/projects/amy-porte/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/amy-porte/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Door style and collection presentation', 'Visual product gallery', 'Quotation request call to action'],
  },
  {
    id: 'arts-et-tapis',
    title: 'Arts & Tapis',
    subtitle: 'Rugs and interior decoration',
    category: 'Lifestyle',
    description: 'An interior decoration showcase focused on rugs, textile inspiration and ideas for personalising living spaces.',
    image: '/projects/arts-et-tapis/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/arts-et-tapis/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Contemporary rug presentation', 'Patterns and interior inspiration', 'Decor project contact invitation'],
  },
  {
    id: 'boutique-thameur',
    title: 'Boutique Thameur',
    subtitle: 'Men’s footwear and ready-to-wear',
    category: 'E-commerce',
    description: 'A boutique website for men’s shoes and ready-to-wear fashion, based in Tunis, with a product-led visual presentation.',
    image: '/projects/boutique-thameur/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/boutique-thameur/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Men’s footwear and clothing presentation', 'Fashion collection sections', 'Store contact and availability direction'],
  },
  {
    id: 'maison-nova',
    title: 'Maison Nova',
    subtitle: 'Kitchens and furniture concept website',
    category: 'Lifestyle',
    description: 'A premium visual concept for kitchens and furniture, presenting kitchen, bedroom, living and dining collections.',
    image: '/projects/maison-nova/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    liveUrl: '/projects/maison-nova/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Kitchen and furniture collection presentation', 'Bedroom, living and dining sections', 'Editorial-style visual layout'],
  },
  {
    id: 'pleine-fleurs',
    title: 'Pleine Fleurs — Le Serpent',
    subtitle: 'Upcycled leather bag collection concept',
    category: 'E-commerce',
    description: 'A fashion concept page centred on an upcycled-leather bag collection, with product and collection presentation.',
    image: '/projects/pleine-fleurs/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/pleine-fleurs/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Le Serpent collection hero', 'Bag product presentation', 'Fashion editorial visual direction'],
  },
  {
    id: 'ralph-lauren-tunisie-concept',
    title: 'Ralph Lauren Tunisie — Unofficial Concept',
    subtitle: 'Independent fashion storefront concept',
    category: 'E-commerce',
    description: 'An independent, unofficial storefront design concept exploring fashion, Polo Bear and home collection presentation.',
    note: 'Independent personal design concept. Not affiliated with or endorsed by Ralph Lauren.',
    image: '/projects/ralph-lauren-tunisie-concept/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/ralph-lauren-tunisie-concept/index.html',
    githubUrl: '',
    featured: false,
    highlights: ['Independent fashion storefront concept', 'Men, women and home collection navigation', 'Unofficial personal design concept'],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'beecoders',
    role: 'Full Stack Web Developer Intern',
    company: 'BeeCoders',
    period: 'June 2026 – August 2026',
    type: 'Internship',
    location: 'Tunis, Tunisia',
    description: 'Contributed to the design and development of a custom full-stack web platform using the MERN stack. The platform is currently used by the company.',
    highlights: [
      'Developed front-end interfaces with React.js and back-end features with Node.js and Express.js',
      'Implemented REST APIs and integrated data with MongoDB',
      'Worked on UI/UX from wireframes to final mockups',
      'Used Git and GitHub, and applied AI tools and prompt engineering during parts of development',
      'Participated in application deployment and production release',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Git', 'GitHub'],
  },
  {
    id: 'sncft',
    role: 'IT Department Intern',
    company: 'SNCFT — Société Nationale des Chemins de Fer Tunisiens',
    period: 'July 2025 – September 2025',
    type: 'Internship',
    location: 'Tunis, Tunisia',
    description: 'Completed an internship in the IT department, supporting equipment maintenance and users, and contributing to internal application improvements.',
    highlights: [
      'Installed, configured and maintained IT equipment',
      'Diagnosed and resolved technical issues reported by users',
      'Participated in the development and improvement of internal applications',
      'Used web technologies in IT projects and collaborated with the team',
    ],
    technologies: ['IT Support', 'Troubleshooting', 'Hardware Maintenance', 'Web Technologies'],
  },
  {
    id: 'stb',
    role: 'Intern',
    company: 'Société Tunisienne de Banque (STB)',
    period: 'July 2024 – September 2024',
    type: 'Internship',
    location: 'Tunis, Tunisia',
    description: 'Gained experience in banking and administrative processes, including customer file follow-up and banking security procedures.',
    highlights: [
      'Assisted with processing and tracking customer files',
      'Participated in administrative tasks related to banking operations',
      'Observed banking security and compliance procedures',
    ],
    technologies: ['Administrative Support', 'Customer Records', 'Banking Operations'],
  },
  {
    id: 'medical-assistant',
    role: 'Medical Assistant — Seasonal',
    company: 'Cabinet Dr Najeh Ghrib',
    period: 'June 2022 – August 2023',
    type: 'Seasonal',
    location: 'Tunis, Tunisia',
    description: 'Supported reception and administrative work in a medical practice.',
    highlights: [
      'Welcomed and directed patients',
      'Assisted with administrative tasks during consultations',
      'Managed and updated patient records',
      'Coordinated with laboratories and pharmacies',
    ],
    technologies: ['Patient Reception', 'Administrative Support', 'Record Management'],
  },
  {
    id: 'carrefour',
    role: 'Cashier — Seasonal',
    company: 'Carrefour Market',
    period: 'June 2017 – September 2022',
    type: 'Seasonal',
    location: 'Boumhel, Tunisia',
    description: 'Worked in customer service and checkout operations in a retail environment.',
    highlights: [
      'Welcomed and assisted customers',
      'Processed cash and card payments',
      'Managed receipts and checked checkout transactions',
    ],
    technologies: ['Customer Service', 'Cash Handling', 'Retail Operations'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'react-cert',
    title: 'React.js Certification',
    issuer: 'BeeCoders',
    date: '2026',
    badge: 'React.js',
    description: 'React.js certification completed through BeeCoders.',
  },
  {
    id: 'node-cert',
    title: 'Node.js Certification',
    issuer: 'BeeCoders',
    date: '2026',
    badge: 'Node.js',
    description: 'Node.js certification completed through BeeCoders.',
  },
  {
    id: 'hbf-cert',
    title: 'Hedera Business Foundation (HBF)',
    issuer: 'The Hashgraph Association',
    date: 'July 2026',
    badge: 'Hedera Foundation',
    description: 'Hedera Business Foundation certification issued by The Hashgraph Association.',
  },
  {
    id: 'hcda-cert',
    title: 'Hedera Certified Developer Associate (HCDA)',
    issuer: 'The Hashgraph Association',
    date: 'June 2026',
    badge: 'Developer Associate',
    description: 'Hedera Certified Developer Associate certification issued by The Hashgraph Association.',
  },
  {
    id: 'hcf-cert',
    title: 'Hedera Certified Foundation (HCF)',
    issuer: 'The Hashgraph Association',
    date: 'June 2026',
    badge: 'Hedera Foundation',
    description: 'Hedera Certified Foundation certification issued by The Hashgraph Association.',
  },
  {
    id: 'hackathon',
    title: 'First Prize — 24-Hour Hackathon',
    issuer: 'Hackathon',
    date: '24-hour event',
    badge: '1st Prize',
    description: 'Worked in a team to design and develop two web applications within 24 hours, contributed to the solutions and their presentation, and received first prize.',
  },
];

export const EDUCATION_DATA = {
  degree: 'BTS — Informatique de Gestion',
  institution: 'Institut Maghrébin des Sciences Économiques et de Technologie (IMSET), Tunis',
  period: 'October 2024 – 2026',
  summary:
    'Two-year programme covering JavaScript, Java, C, C++, web development, application design, databases and SQL, information systems analysis, UML, IT project management and ERP.',
  additional:
    'Baccalauréat — Experimental Sciences, Lycée Ibn Rachik, Ezzahra (September 2015 – June 2019).',
};
