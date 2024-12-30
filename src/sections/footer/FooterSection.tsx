const FooterSection = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Karl Ghosn. All rights reserved.</p>
      <p>
        This website was developed using React, Typescript and Framer Motion.
      </p>
    </footer>
  );
};

export default FooterSection;
