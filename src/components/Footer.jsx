import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-gray-800 py-12 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                                M
                            </div>
                            <span className="text-xl font-bold text-white">Max Mendes</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Building fast, reliable, and beautiful web experiences.
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
                                                block: 'start'
                                            });
                                        }}
                                        className="text-gray-400 hover:text-violet-400 transition-colors duration-300 cursor-pointer">
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
                            <li className="flex items-center gap-3 text-gray-400">
                                <FiMail className="w-4 h-4 text-violet-400" />
                                <a href="mailto:max@example.com" className="hover:text-violet-400 transition-colors">
                                    maxmendesnoah1991@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FiPhone className="w-4 h-4 text-violet-400" />
                                <a href="tel:+1234567890" className="hover:text-violet-400 transition-colors">
                                    +48 502-742-941
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FiMapPin className="w-4 h-4 text-violet-400" />
                                <span>Czestochowa, Poland</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Follow Me</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-500 text-xs mt-4">
                            Open to freelance opportunities
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Max Mendes. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;