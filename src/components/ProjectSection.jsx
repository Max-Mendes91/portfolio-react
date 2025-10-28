import { motion } from 'framer-motion';
import { FiCode, FiGithub, FiLayers, FiZap, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
        <section id="projects" className="min-h-screen bg-gradient-to-b from-background to-surface py-24 px-6 lg:px-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-orange-500">
                        Development Highlights
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                        Some of my personal and self-learning projects demonstrating my skills and creativity.
                    </p>
                </motion.div>

                <div className="relative px-10">
                    <Swiper
                        modules={[Pagination, Keyboard, Navigation]}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom'
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: '.swiper-pagination-custom'
                        }}
                        keyboard={{ enabled: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        speed={400}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="pb-12"
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-surface/50 border border-surface rounded-xl p-6 h-full hover:border-orange-500/50 transition-colors duration-300 will-change-[border-color]">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-start gap-4">
                                            <div className="text-orange-500 mt-1">
                                                {project.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                                                <p className="text-white/70 text-sm font-medium">{project.role}</p>
                                            </div>
                                        </div>
                                        <span className="text-white/50 text-sm font-medium whitespace-nowrap">{project.period}</span>
                                    </div>
                                    <p className="text-white/60 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-black/10 border border-gray-500 rounded-full text-white text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 px-4 py-2 border border-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-500/10 transition-colors duration-300"
                                            aria-label={`View live demo of ${project.title}`}
                                        >
                                            View Live
                                        </a>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-pagination-custom !relative flex justify-center mt-8"></div>

                    <style jsx>{`
                        .swiper-pagination-custom :global(.swiper-pagination-bullet) {
                            background: rgba(255, 165, 0, 0.3);
                            width: 10px;
                            height: 10px;
                            opacity: 1;
                        }
                        .swiper-pagination-custom :global(.swiper-pagination-bullet-active) {
                            background: #FF7A00;
                            width: 12px;
                            height: 12px;
                        }
                    `}</style>

                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="swiper-button-prev-custom absolute top-1/2 left-0 z-20 text-white/70 hover:text-orange-500 text-3xl -translate-y-1/2 transition-colors duration-300"
                        aria-label="Previous project"
                    >
                        <FiChevronLeft />
                    </button>
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="swiper-button-next-custom absolute top-1/2 right-0 z-20 text-white/70 hover:text-orange-500 text-3xl -translate-y-1/2 transition-colors duration-300"
                        aria-label="Next project"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}