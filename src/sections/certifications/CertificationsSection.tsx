import SectionHeading from '@/components/sectionHeading/SectionHeading';
import useSectionInView from '@/lib/hooks';
import styles from './CertificationsSection.module.css';
import { data } from '@/lib/data';
import { TbExternalLink } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '@/lib/animation';

const CertificationsSection = () => {
  const { ref } = useSectionInView('Certifications', 0.5);
  return (
    <section ref={ref} id='certifications' className={styles.container}>
      <SectionHeading title='Certifications' />
      <ul className={styles.grid}>
        {data.sortedCertifications.map((cert, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            custom={index}
            viewport={{ once: true }}
            key={cert.url}
            className={styles.card}
          >
            <p className={styles.date}>
              {cert.organization}, {cert.date}
            </p>
            <h3 className={styles.title}>{cert.title}</h3>
            <div className={styles.skills}>
              {cert.skills.map((skill) => (
                <span key={skill} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
            <a href={cert.url} target='_blank' className={styles.credential}>
              View Credential <TbExternalLink className={styles.linkIcon} />
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
