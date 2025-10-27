import { motion } from 'framer-motion';

const Divider = () => {
    return (
        <div id="divider" className="relative py-12 bg-background overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primaryLight rounded-full shadow-[0_0_20px_rgba(255,149,0,0.8)]"></div>
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 rounded-full blur-[40px]"></div> */}
            {/* Main line */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="relative max-w-4xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primaryLight to-transparent blur-sm"></div>

                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primaryLight rounded-full shadow-[0_0_20px_rgba(255,149,0,0.8)]"></div>
            </motion.div>
        </div>
    );
};

export default Divider;