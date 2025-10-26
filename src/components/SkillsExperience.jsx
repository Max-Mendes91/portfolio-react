import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiLayers, FiZap } from 'react-icons/fi';
import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiGit, SiFigma } from 'react-icons/si';

const ExperienceAndSkills = () => {
    const techStack = [
        { name: "React", icon: <SiReact className="w-12 h-12" />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript className="w-12 h-12" />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" />, color: "#3178C6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" />, color: "#06B6D4" },
        { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" />, color: "#FFFFFF" },
        { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12" />, color: "#339933" },
        { name: "Git", icon: <SiGit className="w-12 h-12" />, color: "#F05032" },
        { name: "Figma", icon: <SiFigma className="w-12 h-12" />, color: "#F24E1E" },
    ];

    const projects = [
        {
            title: "Interactive Portfolio",
            role: "Frontend Developer",
            period: "2024",
            description: "Built a modern, animated portfolio with 3D elements, custom cursor interactions, and smooth animations using React and Framer Motion.",
            technologies: ["React", "Framer Motion", "Tailwind CSS", "Spline 3D"],
            icon: <FiCode className="w-6 h-6" />
        },
        {
            title: "Personal Projects",
            role: "Self-Learning Developer",
            period: "2023 - Present",
            description: "Developed multiple web applications focusing on responsive design, performance optimization, and modern UI/UX principles.",
            technologies: ["React", "JavaScript", "CSS3", "Git"],
            icon: <FiGithub className="w-6 h-6" />
        },
        {
            title: "UI Component Library",
            role: "Frontend Developer",
            period: "2024",
            description: "Created reusable React components with various animations and interactions, focusing on accessibility and clean code practices.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            icon: <FiLayers className="w-6 h-6" />
        }
    ];

    return (
        <section id="experience" className="min-h-screen bg-gradient-to-b from-black to-violet-900/20 py-24 px-6 lg:px-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        Experience & Skills
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        My journey in web development and the technologies I've mastered
                    </p>
                </motion.div>

                {/* Projects/Experience Timeline */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3"
                    >
                        <FiZap className="text-violet-400" />
                        Project Experience
                    </motion.h3>

                    <div className="space-y-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300 group"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-violet-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-white mb-1">
                                                {project.title}
                                            </h4>
                                            <p className="text-violet-400 text-sm font-medium">
                                                {project.role}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
                                        {project.period}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3 justify-center">
                        <FiLayers className="text-violet-400" />
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                                whileHover={{ scale: 1.2, y: -8 }}
                                className="cursor-pointer transition-all duration-300"
                                title={tech.name}
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Learning & Growth */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Continuous Learning
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        I'm constantly expanding my skills through online courses, documentation,
                        and hands-on projects. Currently exploring advanced React patterns,
                        TypeScript, and backend technologies to become a well-rounded developer.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceAndSkills;