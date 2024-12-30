import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import AboutSection from './sections/about/AboutSection';
import ContactSection from './sections/contact/ContactSection';
import HeroSection from './sections/hero/HeroSection';
import ProjectsSection from './sections/projects/ProjectsSection';
import SkillsSection from './sections/skills/SkillsSection';
import FooterSection from './sections/footer/FooterSection';
import ActiveSectionContextProvider from './context/activeSectionContext';

function App() {
  return (
    <div className='container'>
      <ActiveSectionContextProvider>
        <ToastContainer
          position='top-right'
          theme='colored'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </ActiveSectionContextProvider>
    </div>
  );
}

export default App;
