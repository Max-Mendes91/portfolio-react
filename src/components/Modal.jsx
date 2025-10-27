import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Modal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`fixed inset-0 z-[9998] ${isOpen ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'} flex items-center justify-center overflow-auto p-4`}
                    style={{ cursor: 'none' }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }} a
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200, duration: 0.8 }}
                        className="bg-surface rounded-xl shadow-xl w-full max-w-md p-6 m-4 relative z-[9999]"
                        style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-text">Get In Touch</h1>
                            <button
                                onClick={onClose}
                                className="hover:bg-background rounded-full p-2 transition-colors duration-200"
                            >
                                <FiX className="w-6 h-6 text-textMuted hover:text-primary" />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-textMuted font-medium mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 rounded-lg border border-surface focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-textMuted font-medium mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 rounded-lg border border-surface focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-textMuted font-medium mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-surface focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-gradient-to-r from-primaryLight to-primaryDark text-text font-bold rounded-xl hover:opacity-90 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
