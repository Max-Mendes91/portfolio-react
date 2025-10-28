import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';


const Header = ({ openContactForm }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDesktop, setIsDesktop] = useState(true);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isDesktop) {
            setIsVisible(true);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const divider = document.getElementById('divider');

            if (!divider) return;

            const dividerPosition = divider.offsetTop;
            const scrollThreshold = 100;

            if (currentScrollY < scrollThreshold || currentScrollY >= dividerPosition - 200) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isDesktop]);

    const navItems = ['Home', 'About', 'Experience', 'Projects'];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            animate={{
                y: isDesktop && !isVisible ? -100 : 0,
                opacity: isDesktop && !isVisible ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`${isDesktop ? 'fixed' : 'absolute'
                } top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm transition-all duration-300`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 75, delay: 0.3, duration: 1.2 }}
                    className="flex items-center"
                >
                    <div className="transition-transform duration-300">
                        <img
                            src="/logo.webp"
                            alt="Max Mendes Portfolio Logo"
                            className="w-12 h-12 lg:w-16 lg:h-16 object-contain rounded-full"
                            width="64"
                            height="64"
                            loading="eager"
                            decoding="async"
                        />
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="lg:flex hidden space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
                            className="relative text-text hover:text-primary font-medium transition-colors duration-300 group cursor-pointer"
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.toLowerCase());
                            }}
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* Social + Hire Me Desktop */}
                <div className="md:flex hidden items-center space-x-4">
                    {[
                        { Icon: FiGithub, url: "https://github.com/Max-Mendes91", label: "Visit my GitHub profile" },
                        { Icon: FiTwitter, url: "https://x.com/maxmendes91", label: "Follow me on X (Twitter)" },
                        { Icon: FiLinkedin, url: "https://www.linkedin.com/in/max-mendes-776ab5212/", label: "Connect with me on LinkedIn" },
                    ].map(({ Icon, url, label }, i) => (
                        <motion.a
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="text-textMuted hover:text-primary transition-colors duration-300"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5" />
                        </motion.a>
                    ))}

                    <motion.div className="relative inline-block">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 blur-xl animate-spin-slow"></div>
                        <motion.button
                            onClick={openContactForm}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6, duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
                            className="relative ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-primaryLight to-primaryDark text-text font-bold hover:bg-primary transition-all duration-500"
                            aria-label="Open contact form"
                        >
                            Hire Me
                        </motion.button>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-textMuted">
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden overflow-hidden bg-surface shadow-lg px-4 py-5 space-y-5"
            >
                <nav className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleMenu();
                                setTimeout(() => scrollToSection(item.toLowerCase()), 300);
                            }}
                            className="text-textMuted hover:text-primary font-medium py-2 cursor-pointer transition-colors duration-300"
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex space-x-5">
                    {[
                        { Icon: FiGithub, url: "https://github.com/Max-Mendes91" },
                        { Icon: FiTwitter, url: "https://x.com/maxmendes91" },
                        { Icon: FiLinkedin, url: "https://www.linkedin.com/in/max-mendes-776ab5212/" },
                    ].map(({ Icon, url }, i) => (
                        <a
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textMuted hover:text-primary transition-colors duration-300"
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>

                {/* MOBILE HIRE ME BUTTON */}
                <button
                    onClick={() => {
                        toggleMenu(); // close mobile menu
                        openContactForm(); // open modal
                    }}
                    className="mt-4 block w-full px-4 py-2 rounded-lg bg-primary hover:bg-primaryLight text-text font-bold transition-all duration-300"
                >
                    Contact Me
                </button>
            </motion.div>
        </motion.header>
    );
};

export default Header;
