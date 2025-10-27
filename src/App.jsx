import { useState } from 'react';
import Header from "./components/header";
import HeroSection from "./components/Hero/HeroSection";
import Divider from './components/Divider';
import AboutSection from './components/AboutSection';
import ExperienceAndSkills from './components/SkillsExperience';
import CustomCursor from "./components/CustomCursor";
import Footer from './components/Footer';
import Modal from './components/Modal';
import ProjectSection from './components/ProjectSection';

export default function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <Header openContactForm={openContactForm} />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ExperienceAndSkills />
      <Divider />
      <ProjectSection />
      <Footer />
      <Modal isOpen={contactFormOpen} onClose={closeContactForm} />
      <CustomCursor />
    </>
  );
}