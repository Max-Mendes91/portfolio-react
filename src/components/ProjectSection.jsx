import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Keyboard } from 'swiper/modules';
import { FiZap, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const ProjectSection = ({ projects }) => {
    const swiperRef = useRef(null);

    return (
        <div className="mb-20 relative">
            <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 mb-6"
            >
                <FiZap className="text-violet-400" />
                Project Experience
            </motion.h3>

            {/* Left Arrow */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-20 p-3 bg-gray-800/70 hover:bg-violet-600 rounded-full"
                aria-label="Previous project"
            >
                <FiArrowLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 right-0 -translate-y-1/2 z-20 p-3 bg-gray-800/70 hover:bg-violet-600 rounded-full"
                aria-label="Next project"
            >
                <FiArrowRight className="w-6 h-6 text-white" />
            </button>

            <Swiper
                modules={[Pagination, Keyboard]}
                pagination={{ clickable: true, dynamicBullets: true }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} tabIndex={0}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="text-violet-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-1">{project.title}</h4>
                                        <p className="text-violet-400 text-sm font-medium">{project.role}</p>
                                    </div>
                                </div>
                                <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
                                    {project.period}
                                </span>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectSection;
