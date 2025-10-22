import {
  FaAws,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaLocationDot,
  FaNodeJs,
  FaPhone,
  FaPython,
  FaReact,
} from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPytorch,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

export type ProjectType = 'Websites' | 'Machine Learning' | 'Libraries';
import movieReelImg from '@/assets/movieReel.png';
import reactSearchImg from '@/assets/react_api_search.png';
import stevenAstroImg from '@/assets/steven_astro.png';
import { BsSendFill } from 'react-icons/bs';
import {
  MdEmail,
  MdOutlineFileDownload,
  MdOutlineMailOutline,
} from 'react-icons/md';
import footVisionBigImg from '@/assets/foodvision_big.png';
import portfolioChatImg from '@/assets/portfolio_chatbot.png';

const navigationItems = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'About',
    link: '#about',
  },
  { title: 'Services', link: '#services' },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Certifications',
    link: '#certifications',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
] as const;

const skills = [
  {
    title: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    title: 'CSS',
    icon: <FaCss3 />,
  },
  {
    title: 'Javascript',
    icon: <SiJavascript />,
  },
  {
    title: 'React',
    icon: <FaReact />,
  },
  { title: 'TypeScript', icon: <SiTypescript /> },
  {
    title: 'NextJS',
    icon: <RiNextjsFill />,
  },
  {
    title: 'Redux',
    icon: <SiRedux />,
  },
  { title: 'Github', icon: <FaGithub /> },
  {
    title: 'NodeJS',
    icon: <FaNodeJs />,
  },

  {
    title: 'ExpressJS',
    icon: <SiExpress />,
  },
  {
    title: 'AWS',
    icon: <FaAws />,
  },
  { title: 'Mongodb', icon: <SiMongodb /> },
  {
    title: 'Python',
    icon: <FaPython />,
  },
  {
    title: 'Machine Learning',
    icon: <SiPytorch />,
  },
] as const;

const projects = [
  {
    title: 'StevenAstro',
    image: stevenAstroImg,
    techStack: ['TypeScript', 'Framer Motion', 'AWS'],
    features: [
      'Explore astronomy photos',
      'Order beautiful prints',
      'Bring astronomy to your home',
    ],
    type: 'Websites',
    webLink: 'https://www.stevenastrophotography.com/',
    githubLink: null,
  },

  {
    title: 'MovieReel',
    image: movieReelImg,
    techStack: ['TypeScript', 'Tanstack Query', 'Framer Motion'],
    features: [
      'Browse movies and TV shows',
      'View detailed information',
      'User-friendly interface',
    ],
    type: 'Websites',
    webLink: 'http://movie-reel.netlify.app',
    githubLink: 'https://github.com/ghosnkarl/MovieReel',
  },
  {
    title: 'React API Search',
    image: reactSearchImg,
    techStack: ['TypeScript'],
    features: [
      'Easily apply custom styles',
      'Results list dropdown',
      'Loading and error states',
    ],
    type: 'Libraries',
    webLink: 'https://codesandbox.io/p/sandbox/3jz3z2',
    githubLink: 'https://github.com/ghosnkarl/react-api-search',
  },
  {
    title: 'FoodVision Big',
    image: footVisionBigImg,
    techStack: ['Python', 'Machine Learning', 'PyTorch'],
    features: [
      'Image classification with CNN',
      'Food image recognition',
      'Real-time food detection',
    ],
    type: 'Machine Learning',
    webLink: 'https://huggingface.co/spaces/karlghosn/foodvision_big',
    githubLink: null,
  },
  {
    title: 'Portfolio Chatbot',
    image: portfolioChatImg,
    techStack: ['Python', 'Groq', 'LLM'],
    features: [
      'AI-powered chatbot',
      'Answer questions about my portfolio',
      'Built with Groq LLM',
    ],
    type: 'Machine Learning',
    webLink: 'https://huggingface.co/spaces/karlghosn/portfolio_chat',
    githubLink: null,
  },
] as const;

const heroLinks = [
  {
    id: 'contact',
    title: 'Contact me',
    icon: <BsSendFill className='send__icon' />,
    link: '#contact',
    type: 'primary',
  },
  {
    id: 'download',
    title: 'Download CV',
    icon: <MdOutlineFileDownload />,
    link: '/cv.pdf',
    type: 'secondary',
  },
  {
    id: 'linkedIn',
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/karl-ghosn1/',
    type: 'social',
  },
  {
    id: 'github',
    icon: <FaGithub />,
    link: 'https://github.com/ghosnkarl',
    type: 'social',
  },
  {
    id: 'mail',
    icon: <MdOutlineMailOutline />,
    link: 'mailto:karl.ghosn.dev@gmail.com',
    type: 'social',
  },
] as const;

const contactInfo = [
  {
    text: 'karl.ghosn.dev@gmail.com',
    icon: <MdEmail />,
  },
  {
    text: '+961 71 740 793',
    icon: <FaPhone />,
  },
  { text: 'Mansourieh, Lebanon', icon: <FaLocationDot /> },
] as const;

const certifications = [
  {
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    organization: 'Udemy',
    date: 'June 2024',
    url: 'https://www.ude.my/UC-b0a77341-52c2-4f3b-819e-b80f6ec40bcd',
    skills: ['HTML', 'CSS'],
  },
  {
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    organization: 'Udemy',
    date: 'July 2024',
    url: 'https://ude.my/UC-04b6be04-e76a-4588-ba80-a264f10dfd00/',
    skills: ['Javascript'],
  },
  {
    title: 'Python Data Structures & Algorithms + LEETCODE Exercises',
    organization: 'Udemy',
    date: 'July 2024',
    url: 'https://ude.my/UC-17158ad4-cec1-44e9-9264-c21f077501c4/',
    skills: ['Data Structures', 'Algorithms'],
  },
  {
    title: 'React - The Complete Guide 2024 (incl. Next.js, Redux)',
    organization: 'Udemy',
    date: 'August 2024',
    url: 'https://ude.my/UC-e18f757c-3fd9-4b92-a3e9-af1751db4075/',
    skills: ['React', 'Typescript', 'NextJS', 'Redux'],
  },
  {
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    organization: 'Udemy',
    date: 'September 2024',
    url: 'https://ude.my/UC-f5fcad09-092c-43da-a4c0-744f6329dcaa',
    skills: ['NodeJS', 'Express', 'MongoDB'],
  },
  {
    title: 'AWS Lambda & Serverless Architecture Bootcamp (Build 5 Apps)',
    organization: 'Udemy',
    date: 'September 2024',
    url: 'https://ude.my/UC-03c24e29-09a4-4d2e-b33e-9e40428d1487/',
    skills: ['AWS'],
  },
  {
    title: 'AWS & Typescript Masterclass - CDK, Serverless, React',
    organization: 'Udemy',
    date: 'Janurary 2025',
    url: 'https://ude.my/UC-70623ec7-9f3c-47b6-b731-8e31c64d4db4',
    skills: ['AWS', 'Typescript'],
  },
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    organization: 'Udemy',
    date: 'Janurary 2025',
    url: 'https://ude.my/UC-f1ddcd99-d221-4c83-9bf0-48b9e9c1afb5',
    skills: ['Python'],
  },
  {
    title: 'Python for Data Science and Machine Learning Bootcamp',
    organization: 'Udemy',
    date: 'Janurary 2025',
    url: 'https://ude.my/UC-cb9e96ec-9fdf-41f8-af0d-a416051d2e5d',
    skills: ['Machine Learning', 'AI'],
  },
  {
    title: 'Artificial Intelligence A-Z 2025: Build 7 AI + LLM & ChatGPT',
    organization: 'Udemy',
    date: 'February 2025',
    url: 'https://ude.my/UC-cefc730d-64cd-44af-8416-1078c944aa2f',
    skills: ['Machine Learning', 'PyTorch'],
  },
];

const sortedCertifications = certifications.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

export const data = {
  skills,
  navigationItems,
  projects,
  heroLinks,
  contactInfo,
  sortedCertifications,
};
