import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { motion } from 'framer-motion';
import classes from './AboutSection.module.css';
import useSectionInView from '@/lib/hooks';

const AboutSection = () => {
  const { ref } = useSectionInView('About', 1);
  return (
    <motion.section
      className={classes.container}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id='about'
    >
      <SectionHeading title='About Me' />
      <p className={classes.aboutText}>
        While earning my bachelor's degree in <span>Telecommunications</span>{' '}
        and my master's degree in <span>Cybersecurity</span>, I discovered a
        deep passion for programming. During my studies, I worked full-time as a
        mobile software developer and have since transitioned into{' '}
        <span>full-stack web development</span>, a field I find both challenging
        and incredibly rewarding.
        <br />
        <br />
        <em>When I&apos;m not coding</em>, I enjoy playing and watching all
        kinds of sports, getting lost in books, and exploring nature through
        hiking. I&apos;m a <u>lifelong learner</u> currently diving into{' '}
        <span>theology and philosophy</span>. Music is another passion of
        mine—I&apos;m always looking for opportunities to play the guitar,
        piano, or sing.
      </p>
    </motion.section>
  );
};

export default AboutSection;
