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
        <section id="about" className="min-h-screen bg-background py-24 px-6 lg:px-24 relative overflow-hidden">
            {/* Background gradient accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primaryLight to-primaryDark bg-clip-text text-transparent">
                        Root Access: Me
                    </h2>
                    <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto">
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
                        <h3 className="text-3xl font-bold text-text mb-6">
                            Front-End Developer & UI Enthusiast
                        </h3>
                        <div className="space-y-4 text-textMuted text-lg leading-relaxed">
                            <p>
                                I’m a self-taught front-end developer from Porto, Portugal, currently based in Poland. Since July 2025, 
                                I’ve been fully focused on front-end development, bringing my enthusiasm for technology and problem-solving into every project. 
                                With a background as an IT Analyst, I decided to pursue a new professional path where I can combine creativity, logic and technical skills.
                            </p>
                            <p>
                                I’m passionate about building clean, responsive websites, exploring how things work under the hood and finding efficient solutions to complex challenges. I continuously develop my expertise in modern front-end tools and frameworks, eager to contribute to impactful projects and grow as a developer.
                            </p>
                            <p>
                                When I'm not coding, you'll find me contributing to open-source projects,
                                learning new technologies and sharing knowledge with the developer community.
                            </p>
                        </div>

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
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.5 + index * 0.1,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                                }}>
                                <div className="text-primary mb-4">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-text mb-2">
                                    {skill.title}
                                </h4>
                                <p className="text-textMuted text-sm">
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