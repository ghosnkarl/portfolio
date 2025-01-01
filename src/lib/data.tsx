import {
  FaAws,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaLocationDot,
  FaNodeJs,
  FaPhone,
  FaReact,
} from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiAndroidstudio,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiXcode,
} from 'react-icons/si';
import movieReelImg from '@/assets/movieReel.png';
import reactSearchImg from '@/assets/react_api_search.png';
import { BsSendFill } from 'react-icons/bs';
import {
  MdEmail,
  MdOutlineFileDownload,
  MdOutlineMailOutline,
} from 'react-icons/md';

const navigationItems = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'About',
    link: '#about',
  },
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
    title: 'Android',
    icon: <SiAndroidstudio />,
  },
  {
    title: 'iOS',
    icon: <SiXcode />,
  },
] as const;

const projects = [
  {
    title: 'React API Search',
    image: reactSearchImg,
    techStack: ['TypeScript'],
    description:
      'A customizable and responsive search bar component for React applications.',
    webLink: 'https://codesandbox.io/p/sandbox/3jz3z2',
    githubLink: 'https://github.com/ghosnkarl/react-api-search',
  },
  {
    title: 'MovieReel',
    image: movieReelImg,
    techStack: ['TypeScript', 'Tanstack Query', 'Framer Motion'],
    description:
      'MovieReel allows users to explore movies, TV shows, and related content with ease, providing a rich and engaging experience for movie enthusiasts.',
    webLink: 'http://movie-reel.netlify.app',
    githubLink: 'https://github.com/ghosnkarl/MovieReel',
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
