import { motion } from 'framer-motion';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
    const [loaded, setLoaded] = useState(false); // <--- added

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
                    <span className="text-orange-500">Web</span> Solutions <br />
                    That <span className="text-orange-500">Work</span>
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
            <div
                id="hero"
                className="w-full xl:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex items-center justify-center relative overflow-hidden mb-12 xl:mb-0 bg-background"
            >
                {/* Dark placeholder to avoid white flash */}
                {!loaded && <div className="absolute inset-0 bg-background" />}

                <Spline
                    scene="https://prod.spline.design/N087oLnpQSYsYD6I/scene.splinecode"
                    onLoad={() => setLoaded(true)}
                    className="absolute right-[-10%] sm:right-[-15%] md:right-[-20%] lg:right-[-25%] xl:right-[-28%] top-[-10%] sm:top-[-12%] md:top-[-15%] lg:top-[-10%] xl:top-0 w-full h-full [&_#logo]:!hidden [&_[class*='watermark']]:!hidden"
                />

                {/* Decorative lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(255,122,0,0.5)]"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(255,122,0,0.5)]"></div>
            </div>
        </section>
    );
};

export default HeroSection;
