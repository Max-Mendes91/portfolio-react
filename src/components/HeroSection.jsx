import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
            {/* Left Section */}
            <div className='z-40 xl:mb-0 mb-[20%]'>
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
                    className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">
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
                    className='text-xl md-text-1xl lg:text-2xl text-purple-200 max-w-2xl'>
                    Building Reliable, Fast, and Beautiful Web Experiences <br />
                    I’m a front-end web developer committed to writing clean, maintainable code and delivering responsive, high-performance interfaces.
                    Focused on strong UI and intuitive UX, I design with precision and purpose — always aiming for quality, consistency, and scalability. <br />
                    I’m also passionate about open-source collaboration and sharing knowledge to help others grow in the web community.
                </motion.p>
            </div>
        </section>

    )
}

export default HeroSection