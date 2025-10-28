import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NUM_PARTICLES = 30;

const HeroSection = () => {
    const [exploded, setExploded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setExploded(true), 100); // trigger explosion
        return () => clearTimeout(timer);
    }, []);

    const particlesRight = Array.from({ length: NUM_PARTICLES });
    const particlesLeft = Array.from({ length: NUM_PARTICLES });

    const getParticleStyle = () => {
        const solid = Math.random() > 0.5;
        return solid
            ? { opacity: 0.9 }
            : { opacity: 0.7, filter: 'blur(4px)' };
    };

    // Explosion motion from center
    const createExplosionMotion = () => {
        const angle = Math.random() * 2 * Math.PI; 
        const distance = Math.random() * 500 + 250; 
        const xEnd = Math.cos(angle) * distance;
        const yEnd = Math.sin(angle) * distance;

        return exploded
            ? {
                x: [0, xEnd, xEnd * 0.7, xEnd * 0.9, xEnd],
                y: [0, yEnd, yEnd * 0.7, yEnd * 0.9, yEnd],
                opacity: [0.5, 1, 0.8, 0.6, 0.5],
            }
            : {
                x: [0, 0],
                y: [0, 0],
                opacity: [0.5, 1],
            };
    };

    const transition = (duration) => ({
        duration,
        repeat: exploded ? Infinity : 0,
        repeatType: exploded ? 'loop' : undefined,
        ease: 'easeInOut',
    });

    return (
        <section id="home" className="relative flex xl:flex-row flex-col-reverse items-center justify-center min-h-screen bg-gradient-to-b from-surface to-background pt-32 overflow-hidden px-6 lg:px-24">

            {/* Subtle central light */}
            <div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                    width: 300,
                    height: 300,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,165,0,0.3) 0%, rgba(255,165,0,0) 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />

            {/* Right-side Particles */}
            {particlesRight.map((_, i) => {
                const size = Math.random() * 8 + 6;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 0.2;

                return (
                    <motion.div
                        key={`right-${i}`}
                        className="absolute rounded-full bg-orange-500"
                        style={{
                            width: size,
                            height: size,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            ...getParticleStyle(),
                        }}
                        animate={createExplosionMotion()}
                        transition={{ ...transition(duration), delay }}
                    />
                );
            })}

            {/* Left-side Particles */}
            {particlesLeft.map((_, i) => {
                const size = Math.random() * 8 + 6;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 0.2;

                return (
                    <motion.div
                        key={`left-${i}`}
                        className="absolute rounded-full bg-orange-500"
                        style={{
                            width: size,
                            height: size,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            ...getParticleStyle(),
                        }}
                        animate={createExplosionMotion()}
                        transition={{ ...transition(duration), delay }}
                    />
                );
            })}

            {/* Text section */}
            <div className="z-10 xl:w-1/2 w-full xl:pl-32 flex flex-col justify-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-text">
                    <motion.span
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
                        className="inline-block"
                    >
                        <span className="text-orange-500">Web</span> Solutions
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 2.8, duration: 1.5 }}
                        className="inline-block"
                    >
                        That <span className="text-orange-500">Work</span>
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 40, damping: 25, delay: 1.8, duration: 1.5 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-textMuted max-w-2xl leading-relaxed"
                >
                    Web developer creating fast, responsive websites and applications. Specialized in modern JavaScript, clean code, and performance optimization.
                     Whether you need a landing page or a full web application, I deliver quality work that performs.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;
