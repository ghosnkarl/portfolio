import SectionHeading from '@/components/sectionHeading/SectionHeading';
import classes from './ProjectsSection.module.css';
import { motion } from 'framer-motion';
import { data } from '@/lib/data';
import { FaGithub } from 'react-icons/fa6';
import { GrLinkUp } from 'react-icons/gr';
import { fadeInAnimationVariants } from '@/lib/animation';
import useSectionInView from '@/lib/hooks';

const ProjectsSection = () => {
  const { ref } = useSectionInView('Projects', 0.7);
  return (
    <section id='projects' ref={ref}>
      <SectionHeading title='Projects' />
      <div className={classes.projectsGrid}>
        {data.projects.map((project, index) => (
          <motion.div
            className={classes.projectItem}
            key={project.title}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            custom={index}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className={classes.projectImage}
            />

            <div className={classes.projectInfo}>
              <p className={classes.techStack}>
                {project.techStack.join(', ')}
              </p>
              <h3>{project.title}</h3>
              <p className={classes.projectDescription}>
                {project.description}
              </p>

              <div className={classes.projectLinks}>
                <a
                  className='button button--primary button--project'
                  href={project.webLink}
                  target='_blank'
                >
                  Website <GrLinkUp className={classes.iconUp} />
                </a>
                <a
                  className='button button--secondary button--project'
                  href={project.githubLink}
                  target='_blank'
                >
                  Github
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
