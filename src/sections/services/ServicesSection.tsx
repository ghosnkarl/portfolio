import { motion } from 'framer-motion';
import { FaLaptopCode, FaGlobe, FaPaintBrush, FaRobot } from 'react-icons/fa';
import classes from './ServicesSection.module.css';
import useSectionInView from '@/lib/hooks';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServicesSection = () => {
  const { ref } = useSectionInView('Services');

  const services: Service[] = [
    {
      id: 'web-apps',
      title: 'Web Applications',
      description:
        'Crafting responsive, feature-rich web applications with modern frameworks and seamless user experiences.',
      icon: <FaLaptopCode className={classes.serviceIcon} />,
    },
    {
      id: 'websites',
      title: 'Websites',
      description:
        'Building fast, SEO-optimized websites that effectively represent your brand and engage your audience.',
      icon: <FaGlobe className={classes.serviceIcon} />,
    },
    {
      id: 'design',
      title: 'Beautiful Design',
      description:
        'Creating stunning visual experiences with attention to detail, typography, and modern aesthetic principles.',
      icon: <FaPaintBrush className={classes.serviceIcon} />,
    },
    {
      id: 'ml-ai',
      title: 'Machine Learning & AI',
      description:
        'Implementing intelligent solutions that leverage data analysis and machine learning to solve complex problems.',
      icon: <FaRobot className={classes.serviceIcon} />,
    },
  ];

  return (
    <section id='services' className={classes.services} ref={ref}>
      <motion.h2
        className='section__heading'
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h2>

      <div className={classes.servicesContainer}>
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className={classes.serviceCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className={classes.iconContainer}>{service.icon}</div>
            <h3 className={classes.serviceTitle}>{service.title}</h3>
            <p className={classes.serviceDescription}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
