import { useState } from 'react';
import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Divider from './components/Divider';
import AboutSection from './components/AboutSection';
import CustomCursor from "./components/CustomCursor";
import Footer from './components/Footer';
import Modal from './components/Modal';

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
      <CustomCursor />
      <Footer />
      <Modal isOpen={contactFormOpen} onClose={closeContactForm} />
    </>
  );
}
