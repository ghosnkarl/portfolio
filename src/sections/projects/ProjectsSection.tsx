import SectionHeading from '@/components/sectionHeading/SectionHeading';
import classes from './ProjectsSection.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { data } from '@/lib/data';
import { FaGithub } from 'react-icons/fa6';
import { GrLinkUp } from 'react-icons/gr';
import useSectionInView from '@/lib/hooks';
import { GoCheckCircle } from 'react-icons/go';
import { useRef } from 'react';

const Project = ({ project }: { project: (typeof data.projects)[number] }) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.li
      className={classes.projectItem}
      key={project.title}
      ref={itemRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className={classes.projectInfo}>
        <p className={classes.techStack}>{project.techStack.join(', ')}</p>
        <h3>{project.title}</h3>
        <hr className={classes.divider} />
        <ul className={classes.featuresList}>
          {project.features.map((feature) => (
            <li className={classes.feature} key={feature}>
              <GoCheckCircle className={classes.checkIcon} />
              {feature}
            </li>
          ))}
        </ul>
        <div className={classes.projectLinks}>
          <a
            className='button button--primary button--project'
            href={project.webLink}
            target='_blank'
          >
            Website <GrLinkUp className={classes.iconUp} />
          </a>
          {project.githubLink && (
            <a
              className='button button--secondary button--project'
              href={project.githubLink}
              target='_blank'
            >
              Github
              <FaGithub />
            </a>
          )}
        </div>
      </div>
      <img
        src={project.image}
        alt={project.title}
        className={classes.projectImage}
      />
    </motion.li>
  );
};

const ProjectsSection = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section id='projects' ref={ref} className={classes.container}>
      <SectionHeading title='Projects' />
      <ul className={classes.projectsList}>
        {data.projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
