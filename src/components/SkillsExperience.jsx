import { motion } from 'framer-motion';
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiNextdotjs,
    SiNodedotjs,
    SiGit,
    SiFigma
} from 'react-icons/si';

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

export default function ExperienceAndSkills() {
    const duplicatedStack = [...techStack, ...techStack];

    return (
        <section id="experience" className="min-h-screen bg-gradient-to-b from-background to-surface py-24 px-6 lg:px-24 relative overflow-hidden">
            {/* Background accents */}
            <motion.div
                className="absolute top-1/4 right-[-10%] w-[700px] h-[500px] bg-orange-400/40 rounded-full blur-[180px]"
                animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-1/4 left-[-10%] w-[650px] h-[450px] bg-orange-400/40 rounded-full blur-[180px]"
                animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primaryLight to-primaryDark bg-clip-text text-transparent">
                        Experience & Skills
                    </h2>
                    <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto">
                        My journey in web development and the technologies I've mastered.
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center overflow-hidden py-8"
                >
                    <motion.div
                        className="flex gap-8 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            }
                        }}
                    >
                        {duplicatedStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-center w-24 h-24 cursor-pointer"
                                whileHover={{ scale: 1.2, y: -8 }}
                                title={tech.name}
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Learning & Growth */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center relative rounded-xl p-8 overflow-hidden"
                >
                    {/* Center glow only */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-2/3 h-32 bg-white/10 blur-[100px]"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                        Continuous Learning
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed relative z-10">
                        I'm constantly expanding my skills through online courses, documentation,
                        and hands-on projects. Currently exploring advanced React patterns,
                        TypeScript, and backend technologies to become a well-rounded developer.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}