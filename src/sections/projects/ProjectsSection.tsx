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
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['0 1', '0.5 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className={classes.projectCard}
      key={project.title}
      ref={itemRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className={classes.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={classes.projectImage}
        />
        <div className={classes.overlay}>
          <div className={classes.projectLinks}>
            <a
              className='button button--primary button--project'
              href={project.webLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Website <GrLinkUp className={classes.iconUp} />
            </a>
            {project.githubLink && (
              <a
                className='button button--secondary button--project'
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={classes.projectInfo}>
        <p className={classes.techStack}>{project.techStack.join(' • ')}</p>
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
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { ref } = useSectionInView('Projects', 0.2);

  return (
    <section id='projects' ref={ref} className={classes.container}>
      <SectionHeading title='Projects' />
      <div className={classes.projectsGrid}>
        {data.projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
