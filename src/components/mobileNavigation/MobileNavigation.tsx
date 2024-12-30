import { data } from '@/lib/data';
import classes from './MobileNavigation.module.css';
import { MdClose } from 'react-icons/md';

const MobileNavigation = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className={`${classes.container} ${open ? classes.open : ''}`}>
      <MdClose onClick={closeMenu} className={classes.closeIcon} />
      <ul className={classes.list}>
        {data.navigationItems.map((item) => (
          <li key={item.link}>
            <a href={item.link} onClick={closeMenu}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MobileNavigation;
