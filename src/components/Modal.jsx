import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const Modal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center overflow-auto p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200, duration: 0.8 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 m-4"
                        style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
                    >
                        {/* Header */}
                        <div className='flex justify-between items-center mb-6'>
                            <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>Get In Touch</h1>
                            <button onClick={onClose}>
                                <FiX className="w-6 h-6 text-gray-500 dark:text-gray-300" />
                            </button>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
                                <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message</label>
                                <textarea id="message" placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-700 dark:text-gray-100" />
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-400 text-white font-bold rounded-xl hover:opacity-90 transition duration-300">
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
