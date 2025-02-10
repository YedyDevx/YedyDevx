"use client";
import { useState, useEffect, useRef } from "react";
import { motion, } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [
    {
        title: "BDMissel",
        description: "E-commerce de ropa personalizada con diseño moderno y experiencia optimizada, opera principalmente a través de redes sociales como Instagram y TikTok. El objetivo principal de este proyecto es proporcionar una plataforma más profesional para mostrar sus productos y facilitar la interacción con sus clientes, aumentando así su alcance y profesionalismo.",
        videoSrc: "/videos/bdmissel.mkv",
        tech: ["TypeScript", "React.js", "Vite", "TailwindCSS", "Vercel"],
        link: "https://bdmissel.vercel.app/",
        github: "https://github.com/YedyDevx/BDMissel"
    },
    {
        title: "Fx Killers Traders",
        description: "Página web diseñada para ofrecer mentorías en trading, creada para el trader profesional Iván Vargas. Permite a los usuarios conocer su experiencia, suscribirse a planes exclusivos y recibir formación en el mercado financiero. Incluye un sistema de suscripción y una newsletter automatizada con KIT para mantener a los clientes informados.",
        videoSrc: "/videos/fxkillers.mkv",
        tech: ["TypeScript", "React.js", "CSS", "TailwindCSS", "Vite", "Hostinger"],
        link: "https://fxkillers.mx/",
        github: "https://github.com/fxkiller-wed/fxkiller"
    },
    {
        title: "ChepiCrochet",
        description: "Tienda virtual de productos artesanales hechos a crochet, como amigurumis, llaveros y flores. Incluye un sistema de carrito de compras, permitiendo a los usuarios agregar productos y gestionar sus pedidos antes de completar la compra vía WhatsApp.",
        videoSrc: "/videos/amigurumi.mkv",
        tech: ["JavaScript", "React.js", "Redux", "TailwindCSS", "Next.js", "Vercel"],
        link: "https://amigurimi-pages.vercel.app/",
        github: "https://github.com/yourusername/amigurumi"
    },
    {
        title: "Traders Tracker",
        description: "Traders Tracker es una landing page diseñada para el lanzamiento de la aplicación móvil Traders Tracker, creada por el trader profesional Iván Vargas  Esta aplicación está enfocada en ayudar a los traders a rastrear hábitos financieros, mejorar su rendimiento y optimizar su estrategia en los mercados. ",
        videoSrc: "/videos/traders-tracker.mkv",
        tech: ["JavaScript", "React.js", "Vite", "TailwindCSS", "Vercel"],
        link: "https://traders-tracker-landing.vercel.app/",
        github: "https://github.com/YedyDevx/TradersTracker-Landing"
    },
    {
        title: "Valorant Stats",
        description: "Valorant Stats es una aplicación web que consume la API oficial de Valorant para ofrecer un seguimiento detallado en tiempo real de los agentes, mapas y armamento del popular videojuego desarrollado por Riot Games, desarrollada con JavaScript, React.js, CSS con interfaces interactivas y responsivas con estilos modernos, unicos y robustos como lo es el diseño de la pagina oficial de Valorant.",
        videoSrc: "/videos/valorant.mkv",
        tech: ["JavaScript", "React.js", "CSS"],
        link: "https://yedydevx.github.io/APi-Valorant",
        github: "https://github.com/YedyDevx/APi-Valorant"
    }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    const currentProject = projects[currentIndex];

    return (
        <motion.section
            name="projects"
            className="flex justify-center flex-col items-center relative "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <h2
                className="font-ubuntu-condensed text-white text-6xl gradient-text font-bold my-12 py-3">
                Proyectos
            </h2>
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-l from-[#0d0718] via-[#5a278e] to-[#0d0718] w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[1200px] rounded-2xl z-30 mx-4 p-3 transition-all duration-300 shadow-[0_-15px_55px_-10px_#5a278e]"
            >
                <div className="w-full h-full flex bg-black/80 rounded-xl p-3 relative">
                    <div className="w-full flex flex-col lg:justify-center lg:items-center xl:flex-row gap-2 overflow-hidden">
                        <div className="w-full xl:w-[40%] rounded-xl p-6 text-white">
                            <h3 className="text-3xl font-bold mb-4 gradient-text">
                                {currentProject.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-6 text-justify font-ubuntu">
                                {currentProject.description}
                            </p>
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold mb-2">Tecnologías:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {currentProject.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 font-ubuntu text-base bg-purple-900/50  rounded-sm border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-6">
                                {/* Botón Ver Proyecto */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative group z-50"
                                >
                                    <motion.a
                                        href={currentProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative flex items-center gap-2 
                                    bg-black/30 backdrop-blur-sm
                                    text-white/90 font-ubuntu
                                        py-2 px-4 lg:px-8  r rounded-lg
                                        border border-purple-500/30
                                        transition-all duration-300
                                        hover:border-purple-500/70
                                        hover:text-white
                                        hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                                        overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 
                                        opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                                        <span className="relative z-10 flex items-center gap-2">
                                            Proyecto
                                            <IoIosArrowForward className="text-lg" />
                                        </span>
                                        <div className="absolute -inset-2 opacity-0 group-hover:opacity-100">
                                            <div className="absolute top-0 left-1/4 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-1" />
                                            <div className="absolute bottom-0 right-1/4 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-2" />
                                        </div>
                                        <div className="absolute inset-0">
                                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                                        </div>
                                    </motion.a>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative group z-50"
                                >
                                    <motion.a
                                        href={currentProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative flex items-center gap-2 
                                        bg-black/30 backdrop-blur-sm
                                        text-white/90 font-ubuntu
                                        py-2 px-4 lg:px-8  rounded-lg
                                        border border-purple-500/30
                                        transition-all duration-300
                                        hover:border-purple-500/70
                                        hover:text-white
                                        hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                                        overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20   opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600  opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                                        <span className="relative z-10 flex items-center gap-2">
                                            GitHub
                                            <IoIosArrowForward className="text-lg" />
                                        </span>
                                        <div className="absolute -inset-2 opacity-0 group-hover:opacity-100">
                                            <div className="absolute top-0 left-1/4 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-1" />
                                            <div className="absolute bottom-0 right-1/4 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-2" />
                                        </div>
                                        <div className="absolute inset-0">
                                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                                        </div>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[95%] relative overflow-hidden
                            h-[200px]  // Móvil pequeño
                            sm:h-[280px]  // Tablets pequeñas
                            md:h-[320px]  // Tablets
                            lg:h-[380px]  // Desktop pequeño
                            xl:h-[430px]  // Desktop grande
                            rounded-xl bg-gradient-to-tr from-black via-[#0f0916] to-[#170e25] 
                            border-[1px] border-gray-800"
                        >
                            <video
                                ref={videoRef}
                                src={currentProject.videoSrc}
                                className="w-full h-full object-contain md:object-cover rounded-xl"
                                muted
                                loop
                                playsInline
                                onError={(e) => {
                                    console.log("Error loading video");
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <div
                className="flex justify-center gap-8 mt-8">
                <motion.button
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                >
                    <div className="relative p-3 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-500/20 transition-all duration-300">
                        <IoIosArrowBack className="w-7 h-7 text-white/90 group-hover:text-white transition-transform duration-300 group-hover:-translate-x-0.5" />
                    </div>
                </motion.button>
                <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                >
                    <div className="relative p-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-500/20 transition-all duration-300">
                        <IoIosArrowForward className="w-7 h-7 text-white/90 transition-transform duration-300" />
                    </div>
                </motion.button>
            </div>
        </motion.section>
    );
};


export default Projects;