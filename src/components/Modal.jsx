import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';

            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email';
                return '';

            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';

            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message)
        };

        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });

        // Check if form is valid
        const isValid = !newErrors.name && !newErrors.email && !newErrors.message;

        if (isValid) {
            console.log('Form submitted:', formData);
            // Here you'll add email sending logic later

            // Reset form
            setFormData({ name: '', email: '', message: '' });
            setErrors({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            onClose();
        }
    };

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
                    style={{ cursor: 'default' }} // Changed from 'none' to 'default'
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200, duration: 0.8 }}
                        className="bg-surface rounded-xl shadow-xl w-full max-w-md p-6 m-4 relative z-[9999]"
                        style={{ maxHeight: 'calc(100vh - 2rem)', overflowY: 'auto' }}
                        onClick={(e) => e.stopPropagation()} // Add this line
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
                        <form className="space-y-4" onSubmit={handleSubmit}>
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
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Name"
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.name && touched.name
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-surface focus:ring-primary'
                                        } focus:outline-none focus:ring-2 bg-background text-text`}
                                />
                                {errors.name && touched.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
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
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Email"
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.email && touched.email
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-surface focus:ring-primary'
                                        } focus:outline-none focus:ring-2 bg-background text-text`}
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Message"
                                    rows={4}
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.message && touched.message
                                            ? 'border-red-500 focus:ring-red-500'
                                            : 'border-surface focus:ring-primary'
                                        } focus:outline-none focus:ring-2 bg-background text-text resize-none`}
                                />
                                {errors.message && touched.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
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