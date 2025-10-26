import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
    return (
        <section className="min-h-screen pt-32 bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-center xl:justify-between lg:px-24 px-6 xl:py-0 relative overflow-hidden">
            {/* Left Section - Text */}
            <div className='z-40 xl:w-1/2 w-full xl:pr-8 flex flex-col justify-center'>
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
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                    Building Fast <br /> Reliable Results
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
                    className='text-base sm:text-lg md:text-xl lg:text-2xl text-purple-200 max-w-2xl leading-relaxed'>
                    Building Reliable, Fast, and Beautiful Web Experiences <br />
                    I'm a front-end web developer committed to writing clean, maintainable code and delivering responsive, high-performance interfaces.
                    Focused on strong UI and intuitive UX, I design with precision and purpose — always aiming for quality, consistency, and scalability. <br />
                    I'm also passionate about open-source collaboration and sharing knowledge to help others grow in the web community.
                </motion.p>
            </div>

            {/* Right Section - Robot */}
            <div className="w-full xl:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex items-center justify-center relative overflow-hidden mb-12 xl:mb-0">
                <div className="w-full h-full [&_#logo]:!hidden [&_[class*='watermark']]:!hidden">
                    <Spline
                        scene="https://prod.spline.design/N087oLnpQSYsYD6I/scene.splinecode"
                        className='absolute right-[-10%] sm:right-[-15%] md:right-[-20%] lg:right-[-25%] xl:right-[-28%] top-[-10%] sm:top-[-12%] md:top-[-15%] lg:top-[-10%] xl:top-0'
                    />
                </div>

                {/* Decorative lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-3/4 bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-violet-400 to-transparent shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
            </div>
        </section>
    )
}

export default HeroSection