import { motion } from 'framer-motion';
import HeroAnimation from './HeroAnimation'; // desktop animation
// import HeroAnimationMobile from './HeroAnimationMobile'; // optional for mobile/tablet

const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen pt-32 bg-gradient-to-b from-surface to-background flex xl:flex-row flex-col-reverse items-center justify-center xl:justify-between lg:px-24 px-6 xl:py-0 relative overflow-hidden"
        >
            {/* Left Section - Text */}
            <div className="z-40 xl:w-1/2 w-full xl:pr-8 flex flex-col justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-text"
                >
                    <span className="text-orange-500">Building</span> Fast <br />
                    Reliable <span className="text-orange-500">Results</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5,
                    }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-textMuted max-w-2xl leading-relaxed"
                >
                    Building Reliable, Fast, and Beautiful Web Experiences <br />
                    Specializing in React, modern JavaScript, and performance optimization.
                    I transform designs into responsive, scalable applications that deliver
                    exceptional user experiences. Ready to bring your vision to life.
                </motion.p>
            </div>

            {/* Right Section - Animation */}
            <HeroAnimation />
        </section>
    );
};

export default HeroSection;
