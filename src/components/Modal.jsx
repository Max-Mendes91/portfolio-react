import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

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

    const handleSubmit = async (e) => {
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
            setIsSubmitting(true);
            setSubmitStatus(null);

            try {
                // Send email using EmailJS
                const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
                const notificationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Your notification template
                const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID; // Auto-reply template

                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    email: formData.email,
                    message: formData.message,
                    company: 'N/A',
                    project_type: 'Portfolio Contact',
                    timeline: 'Not specified',
                    budget: 'Not specified',
                };

                // Send notification to yourself
                await emailjs.send(
                    serviceId,
                    notificationTemplateId,
                    templateParams
                );

                // Send auto-reply to the person who contacted you (if template exists)
                if (autoReplyTemplateId) {
                    await emailjs.send(
                        serviceId,
                        autoReplyTemplateId,
                        templateParams
                    );
                }

                setSubmitStatus('success');

                // Reset form
                setFormData({ name: '', email: '', message: '' });
                setErrors({ name: '', email: '', message: '' });
                setTouched({ name: false, email: false, message: false });

                // Close modal after 2 seconds
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 2000);

            } catch (error) {
                console.error('Failed to send email:', error);
                setSubmitStatus('error');
            } finally {
                setIsSubmitting(false);
            }
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
                                disabled={isSubmitting}
                                className={`w-full py-2 px-4 bg-gradient-to-r from-primaryLight to-primaryDark text-text font-bold rounded-xl transition duration-300 ${
                                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Success/Error Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-500 text-center font-medium space-y-1"
                                >
                                    <p className="font-semibold">Thank you for reaching out!</p>
                                    <p className="text-sm">I'll be in touch with you soon.</p>
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-center font-medium"
                                >
                                    Failed to send message. Please try again.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;