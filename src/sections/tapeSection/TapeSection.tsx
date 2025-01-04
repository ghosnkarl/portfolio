import starIcon from '@/assets/star.svg';
import styles from './TapeSection.module.css';
import { motion } from 'framer-motion';

const words = [
  'Full-Stack Capable',
  'Lifelong Learner',
  'Reliable Problem Solver',
  'Diligent Developer',
  'Detail-Oriented',
  'User Friendly',
  'Visually Appealing',
  'Seamless Integration',
  'High-Quality Code',
  'Reliable',
];

const TapeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175, duration: 2, ease: 'easeInOut' }}
      className={styles.container}
    >
      <div className={styles.tapeContainer}>
        <div className={styles.tapeContent}>
          <ul className={styles.tapeList}>
            {[...Array(2)].map((_, index) => (
              <li className={styles.tapeItem} key={index}>
                {words.map((word) => (
                  <span key={word} className={styles.tapeItemContainer}>
                    {word} <img src={starIcon} alt='Star Icon' />
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default TapeSection;
