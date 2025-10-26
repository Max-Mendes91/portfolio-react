import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiLayers, FiZap, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Keyboard, Navigation } from 'swiper/modules';
import { useRef } from 'react';

const projects = [
    {
        title: "Interactive Portfolio",
        role: "Frontend Developer",
        period: "2024",
        description: "Built a modern, animated portfolio with 3D elements, custom cursor interactions, and smooth animations using React and Framer Motion.",
        technologies: ["React", "Framer Motion", "Tailwind CSS"],
        icon: <FiCode className="w-6 h-6" />,
        liveLink: "https://your-live-demo-url.com"
    },
    {
        title: "Personal Projects",
        role: "Self-Learning Developer",
        period: "2023 - Present",
        description: "Developed multiple web applications focusing on responsive design, performance optimization, and modern UI/UX principles.",
        technologies: ["React", "JavaScript", "CSS3", "Git"],
        icon: <FiGithub className="w-6 h-6" />,
        liveLink: "https://your-live-demo-url.com"
    },
    {
        title: "UI Component Library",
        role: "Frontend Developer",
        period: "2024",
        description: "Created reusable React components with various animations and interactions, focusing on accessibility and clean code practices.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        icon: <FiLayers className="w-6 h-6" />,
        liveLink: "https://your-live-demo-url.com"
    },
    {
        title: "To-Do App Experiment",
        role: "Self-Learning Developer",
        period: "2024",
        description: "Built an interactive to-do app with dynamic lists, drag-and-drop, and localStorage persistence to practice state management.",
        technologies: ["React", "JavaScript", "CSS3"],
        icon: <FiZap className="w-6 h-6" />,
        liveLink: "https://your-live-demo-url.com"
    },
    {
        title: "Weather Dashboard",
        role: "Self-Learning Developer",
        period: "2024",
        description: "Created a weather dashboard fetching real-time data from APIs, with animated weather icons and responsive layout.",
        technologies: ["React", "API", "CSS3"],
        icon: <FiZap className="w-6 h-6" />,
        liveLink: "https://your-live-demo-url.com"
    }
];

export default function ProjectSection() {
    const swiperRef = useRef(null);

    return (
        <section id="projects" className="min-h-screen bg-gradient-to-b from-black to-violet-900/20 py-24 px-6 lg:px-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        Development Highlights
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Some of my personal and self-learning projects demonstrating my skills and creativity.
                    </p>
                </motion.div>

                <div className="relative">
                    <Swiper
                        modules={[Pagination, Keyboard, Navigation]}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom'
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        keyboard={{ enabled: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                        className="pb-10"
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="text-violet-400 mt-1">{project.icon}</div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-white mb-1">{project.title}</h4>
                                                <p className="text-violet-400 text-sm font-medium">{project.role}</p>
                                            </div>
                                        </div>
                                        <span className="text-gray-400 text-sm font-medium">{project.period}</span>
                                    </div>
                                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm">{tech}</span>
                                        ))}
                                    </div>
                                    {project.liveLink && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg text-sm font-medium transition-colors"
                                        >
                                            View Live
                                        </a>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom arrows */}
                    <div className="swiper-button-prev-custom absolute top-1/2 left-[-30px] z-20 cursor-pointer text-white text-2xl -translate-y-1/2">
                        <FiChevronLeft />
                    </div>
                    <div className="swiper-button-next-custom absolute top-1/2 right-[-30px] z-20 cursor-pointer text-white text-2xl -translate-y-1/2">
                        <FiChevronRight />
                    </div>
                </div>
            </div>
        </section>
    );
}
