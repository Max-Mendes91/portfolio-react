import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-black border-t border-gray-900 py-12 px-6 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="text-xl font-bold text-white">Max Mendes</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Building fast, reliable, and clean web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Experience'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(item.toLowerCase())?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }}
                                        className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                                        aria-label={`Navigate to ${item} section`}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-300">
                                <FiMail className="w-4 h-4 text-orange-500" />
                                <a
                                    href="mailto:maxmendesnoah1991@gmail.com"
                                    className="hover:text-orange-500 transition-colors"
                                    aria-label="Send email to maxmendesnoah1991@gmail.com"
                                >
                                    maxmendesnoah1991@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <FiPhone className="w-4 h-4 text-orange-500" />
                                <a
                                    href="tel:+48502742941"
                                    className="hover:text-orange-500 transition-colors"
                                    aria-label="Call +48 502-742-941"
                                >
                                    +48 502-742-941
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <FiMapPin className="w-4 h-4 text-orange-500" />
                                <span>Czestochowa, Poland</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Max-Mendes91"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                                aria-label="Visit my GitHub profile"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://x.com/maxmendes91"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                                aria-label="Follow me on X (Twitter)"
                            >
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/max-mendes-776ab5212/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all duration-300"
                                aria-label="Connect with me on LinkedIn"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-primaryLight text-xs mt-4">
                            Open to freelance opportunities
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Max Mendes. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-orange-500 transition-colors"
                            aria-label="View privacy policy"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-orange-500 transition-colors"
                            aria-label="View terms of service"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
