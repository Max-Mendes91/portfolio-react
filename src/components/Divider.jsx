import { motion } from 'framer-motion';

const Divider = () => {
    return (
        <div className="relative py-12 bg-black overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-32 bg-violet-600/20 blur-[100px]"></div>
            </div>

            {/* Main line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="relative max-w-4xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent blur-sm"></div>

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-violet-400 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)]"></div>
            </motion.div>
        </div>
    );
};

export default Divider;