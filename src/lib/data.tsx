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
import portfolioChatImg from '@/assets/portfolio_chat.png';
import llmRagImg from '@/assets/llm_rag.png';

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
  {
    title: 'Obsidian RAG',
    image: llmRagImg,
    techStack: ['Python', 'LLM', 'RAG'],
    features: [
      'Retrieval-Augmented Generation system',
      'Integrates with Obsidian notes',
      'Provides context-aware responses',
    ],
    type: 'Machine Learning',
    webLink: 'https://huggingface.co/spaces/karlghosn/obsidian-rag',
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

export const data = {
  skills,
  navigationItems,
  projects,
  heroLinks,
  contactInfo,
};
