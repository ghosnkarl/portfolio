import SectionHeading from '@/components/sectionHeading/SectionHeading';
import classes from './ProjectsSection.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { data } from '@/lib/data';
import { FaGithub } from 'react-icons/fa6';
import { GrLinkUp } from 'react-icons/gr';
import useSectionInView from '@/lib/hooks';
import { GoCheckCircle } from 'react-icons/go';
import { useRef, useState } from 'react';
import { ProjectType } from '@/lib/data';

type FilterType = ProjectType | 'All';

const Project = ({ project }: { project: (typeof data.projects)[number] }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['0 1', '0.5 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.article
      className={classes.projectCard}
      ref={itemRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className={classes.imageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={classes.projectImage}
        />
        <div className={classes.imageGradient} />
      </div>

      <div className={classes.projectContent}>
        <div className={classes.projectHeader}>
          <p className={classes.techStack}>{project.techStack.join(' • ')}</p>
          <h3 className={classes.projectTitle}>{project.title}</h3>
        </div>

        <ul className={classes.featuresList}>
          {project.features.map((feature) => (
            <li className={classes.feature} key={feature}>
              <GoCheckCircle className={classes.checkIcon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={classes.projectLinks}>
          <a
            className='button button--primary button--project'
            href={project.webLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Live <GrLinkUp className={classes.iconUp} />
          </a>
          {project.githubLink && (
            <a
              className='button button--secondary button--project'
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const { ref } = useSectionInView('Projects', 0.2);
  const [activeTab, setActiveTab] = useState<FilterType>('All');

  const filteredProjects =
    activeTab === 'All'
      ? data.projects
      : data.projects.filter((project) => project.type === activeTab);

  const tabItems: FilterType[] = [
    'All',
    'Websites',
    'Machine Learning',
    'Libraries',
  ];

  return (
    <section id='projects' ref={ref} className={classes.container}>
      <SectionHeading title='Projects' />

      <motion.div
        className={classes.tabsContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {tabItems.map((tabName) => (
          <motion.button
            key={tabName}
            className={`${classes.tabItem} ${
              activeTab === tabName ? classes.activeTab : ''
            }`}
            onClick={() => setActiveTab(tabName)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {tabName}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className={classes.projectsGrid}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))
        ) : (
          <motion.div
            className={classes.noProjects}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            No projects found in this category.
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
