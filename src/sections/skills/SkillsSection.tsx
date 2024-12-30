import SectionHeading from '@/components/sectionHeading/SectionHeading';
import classes from './SkillsSection.module.css';
import { motion } from 'framer-motion';
import { data } from '@/lib/data';
import { fadeInAnimationVariants } from '@/lib/animation';
import useSectionInView from '@/lib/hooks';

const SkillsSection = () => {
  const { ref } = useSectionInView('Skills', 0.7);
  return (
    <section id='skills' className={classes.container} ref={ref}>
      <SectionHeading title='Skills' />
      <ul className={classes.skillList}>
        {data.skills.map((skill, index) => (
          <motion.li
            className={classes.skillItem}
            key={skill.title}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            custom={index}
            viewport={{ once: true }}
          >
            <div className={classes.svgWrapper}>{skill.icon}</div>
            <p>{skill.title}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
