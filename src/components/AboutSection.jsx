import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiUsers } from 'react-icons/fi';

const AboutSection = () => {
    const skills = [
        {
            icon: <FiCode className="w-8 h-8" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices and modern standards."
        },
        {
            icon: <FiLayers className="w-8 h-8" />,
            title: "Responsive Design",
            description: "Creating beautiful interfaces that work seamlessly across all devices and screen sizes."
        },
        {
            icon: <FiZap className="w-8 h-8" />,
            title: "Performance",
            description: "Optimizing applications for speed and efficiency to deliver the best user experience."
        },
        {
            icon: <FiUsers className="w-8 h-8" />,
            title: "Collaboration",
            description: "Working with teams and contributing to open-source projects in the web community."
        }
    ];

    return (
        <section id="about" className="min-h-screen bg-black py-24 px-6 lg:px-24 relative overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Passionate about creating exceptional web experiences
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Front-End Developer & UI Enthusiast
                        </h3>
                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I'm a dedicated front-end developer with a passion for crafting beautiful,
                                performant web applications. My focus is on writing clean, maintainable code
                                that brings designs to life.
                            </p>
                            <p>
                                With expertise in modern JavaScript frameworks and a keen eye for design,
                                I bridge the gap between aesthetics and functionality. Every project is an
                                opportunity to create something meaningful and user-centric.
                            </p>
                            <p>
                                When I'm not coding, you'll find me contributing to open-source projects,
                                learning new technologies, and sharing knowledge with the developer community.
                            </p>
                        </div>

                        {/* Stats
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-violet-400">3+</div>
                                <div className="text-sm text-gray-400 mt-1">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-violet-400">50+</div>
                                <div className="text-sm text-gray-400 mt-1">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-violet-400">100%</div>
                                <div className="text-sm text-gray-400 mt-1">Client Satisfaction</div>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* Right - Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300">
                                <div className="text-violet-400 mb-4">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                
            </div>
        </section>
    );
};

export default AboutSection;