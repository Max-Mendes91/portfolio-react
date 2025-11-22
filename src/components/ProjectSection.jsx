import { motion } from "framer-motion";
import {
  FiCode,
  FiGithub,
  FiLayers,
  FiZap,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";
import {
  SiReact,
  SiFramer,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiGit,
  SiTypescript,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Keyboard, Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

// Tech icon mapping with their brand colors
const techIcons = {
  React: { icon: <SiReact className="w-5 h-5" />, color: "#61DAFB" },
  "Framer Motion": { icon: <SiFramer className="w-5 h-5" />, color: "#0055FF" },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="w-5 h-5" />,
    color: "#06B6D4",
  },
  JavaScript: { icon: <SiJavascript className="w-5 h-5" />, color: "#F7DF1E" },
  CSS3: { icon: <SiCss3 className="w-5 h-5" />, color: "#1572B6" },
  Git: { icon: <SiGit className="w-5 h-5" />, color: "#F05032" },
  TypeScript: { icon: <SiTypescript className="w-5 h-5" />, color: "#3178C6" },
  API: { icon: <FiCode className="w-5 h-5" />, color: "#FF7A00" },
};

const projects = [
  {
    title: "Interactive Portfolio",
    role: "Frontend Developer",
    period: "2025",
    description:
      "Built a modern, animated portfolio with custom cursor interactions, particle effects, and smooth animations using React and Framer Motion.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    icon: <FiCode className="w-6 h-6" />,
    githubLink: "https://github.com/Max-Mendes91/portfolio-react.git",
    liveLink: "https://portfolio-react-omega-bice.vercel.app/",
  },
  {
    title: "FlowMate",
    role: "Self-Learning Developer",
    period: "2025",
    description:
      "Developed multiple web applications focusing on responsive design, performance optimization, and modern UI/UX principles.",
    technologies: ["React", "CSS3", "Git", "TypeScript", "Tailwind CSS"],
    icon: <FiGithub className="w-6 h-6" />,
    githubLink: "https://github.com/Max-Mendes91/flowmate-landing.git",
    liveLink: "https://www.flowmate.click/",
  },
  {
    title: "La Crème Restaurant",
    role: "Frontend Developer",
    period: "2025",
    description:
      "This project focuses on providing an efficient Elegant French restaurant landing page with integrated reservation system",
    technologies: ["JavaScript", "Tailwind CSS", "React"],
    icon: <FiLayers className="w-6 h-6" />,
    githubLink: "https://github.com/Max-Mendes91/la-creme-restaurant.git",
    liveLink: "https://la-creme-restaurant.vercel.app/",
  },
  {
    title: "Polished & Posh - Luxury Nail Salon Website",
    role: "Self-Learning Developer",
    period: "2025",
    description:
      "A modern, production-ready website template for nail salons and beauty businesses.",
    technologies: ["HTML5", "Typescript", "React", "API"],
    icon: <FiZap className="w-6 h-6" />,
    githubLink: "https://github.com/Max-Mendes91/nail-salon.git",
    liveLink: "https://nail-salon-omega.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    role: "Self-Learning Developer",
    period: "2025",
    description:
      "A modern, responsive weather application.Get real-time weather data, hourly forecasts, and 7-day predictions for any location worldwide. ",
    technologies: ["JavaScript", "API", "Tailwind CSS"],
    icon: <FiZap className="w-6 h-6" />,
    githubLink: "https://github.com/Max-Mendes91/weather-app.git",
    liveLink: "https://max-mendes91.github.io/weather-app/",
  },
];

export default function ProjectSection() {
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-background to-surface py-24 px-6 lg:px-24 relative overflow-hidden"
    >
      {/* Blue metallic glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-golden/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-golden via-goldenLight to-golden bg-clip-text text-transparent">
            Development Highlights
          </h2>
          <p className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto">
            Some of my personal and self-learning projects demonstrating my
            skills and creativity.
          </p>
        </motion.div>

        <div className="pb-12 !overflow-visible relative">
          <Swiper
            modules={[Pagination, Keyboard, Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-custom",
            }}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 overflow-visible"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} className="py-4 h-auto">
                <motion.div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="relative bg-gradient-to-br from-surface/80 to-surface/40 border border-primary/30 rounded-xl p-6 h-full flex flex-col hover:border-primary hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300 will-change-transform cursor-pointer backdrop-blur-sm overflow-hidden group"
                >
                  {/* Metallic shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                  {/* Golden corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-golden/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="text-golden group-hover:text-goldenLight transition-colors duration-300 mt-1 group-hover:scale-110 transform transition-transform">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text mb-1 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-text/70 text-sm font-medium">
                          {project.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-golden/70 text-sm font-medium whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-textMuted mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Icons Row */}
                  <div className="flex flex-wrap gap-3 mb-4 mt-auto">
                    {project.technologies.map((tech) => {
                      const techData = techIcons[tech];
                      return techData ? (
                        <div
                          key={tech}
                          className="transition-transform hover:scale-110"
                          style={{ color: techData.color }}
                          title={tech}
                        >
                          {techData.icon}
                        </div>
                      ) : null;
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4 relative z-10">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 border-2 border-primary/50 text-primary rounded-lg hover:border-primary hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all duration-300 hover:scale-110"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-2 bg-gradient-to-r from-golden to-goldenDark text-background rounded-lg hover:from-goldenLight hover:to-golden hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all duration-300 hover:scale-110 font-semibold"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-custom !relative flex justify-center mt-8"></div>

          <style jsx>{`
            .swiper-pagination-custom :global(.swiper-pagination-bullet) {
              background: rgba(14, 165, 233, 0.3);
              width: 10px;
              height: 10px;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .swiper-pagination-custom
              :global(.swiper-pagination-bullet-active) {
              background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
              width: 12px;
              height: 12px;
              box-shadow: 0 0 10px rgba(14, 165, 233, 0.6);
            }
          `}</style>

          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev-custom absolute top-1/2 left-0 z-20 text-primary/70 hover:text-golden hover:scale-125 text-3xl -translate-y-1/2 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            aria-label="Previous project"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next-custom absolute top-1/2 right-0 z-20 text-primary/70 hover:text-golden hover:scale-125 text-3xl -translate-y-1/2 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            aria-label="Next project"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
