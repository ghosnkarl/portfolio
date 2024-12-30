import { data } from '@/lib/data';
import classes from './Header.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import MobileNavigation from '../mobileNavigation/MobileNavigation';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <MdMenu className={classes.mobileHeader} onClick={toggleMobileMenu} />

        <motion.div
          className={classes.headerContent}
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
        />
        <nav className={classes.navigation}>
          <ul className={classes.navigationList}>
            {data.navigationItems.map((item) => (
              <motion.li
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={classes.navigationItem}
                key={item.title}
              >
                <a
                  className={`${classes.navigationItemLink} ${
                    item.title === activeSection && classes.active
                  }`}
                  href={item.link}
                  onClick={() => {
                    setActiveSection(item.title);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {item.title}
                  {item.title === activeSection && (
                    <motion.span
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className={classes.activeSection}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>
      <MobileNavigation open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </div>
  );
};

export default Header;
