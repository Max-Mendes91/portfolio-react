import { useState, lazy, Suspense } from 'react';
import Header from "./components/header";
import CustomCursor from "./components/CustomCursor";

// Lazy load heavy components
const HeroSection = lazy(() => import('./components/Hero/HeroSection'));
const Divider = lazy(() => import('./components/Divider'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ExperienceAndSkills = lazy(() => import('./components/SkillsExperience'));
const ProjectSection = lazy(() => import('./components/ProjectSection'));
const Footer = lazy(() => import('./components/Footer'));
const Modal = lazy(() => import('./components/Modal'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <>
      <Header openContactForm={openContactForm} />
      <CustomCursor />

      <Suspense fallback={<LoadingFallback />}>
        <main>
          <HeroSection />
          <Divider />
          <AboutSection />
          <Divider />
          <ExperienceAndSkills />
          <Divider />
          <ProjectSection />
          <Footer />
          <Modal isOpen={contactFormOpen} onClose={closeContactForm} />
        </main>
      </Suspense>
    </>
  );
}