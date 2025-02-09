import classes from './HeroSection.module.css';
import { motion } from 'framer-motion';
import programmingImg from '/programming.png';
import { data } from '@/lib/data';
import useSectionInView from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const HeroSection = () => {
  const typingText = "Hello, I'm Karl.";
  const { ref } = useSectionInView('Home', 0.7);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id='home' className={classes.hero} ref={ref}>
      <div className={classes.heroHeading}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <img src={programmingImg} className={classes.emoji} />
        </motion.div>
      </div>

      <motion.div className={classes.name}>
        {typingText.split('').map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.2,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.h1
        className={classes.heroText}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m a <span>software engineer</span> at{' '}
        <a
          href='https://neuralvisionlab.com/'
          className={classes.companyLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          NeuralVisionLab
        </a>
        . I build user-centric websites and apps that bring ideas to life.
      </motion.h1>
      <motion.div
        className={classes.contactContainer}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {data.heroLinks.map((link) => (
          <a
            href={link.link}
            key={link.id}
            className={`button button--${link.type}`}
            download={link.id === 'download'}
            onClick={
              link.id === 'contact'
                ? () => {
                    setActiveSection('Contact');
                    setTimeOfLastClick(Date.now());
                  }
                : undefined
            }
            target={
              link.id === 'github' || link.id === 'linkedIn'
                ? '_blank'
                : '_self'
            }
          >
            {'title' in link && link.title} {link.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
