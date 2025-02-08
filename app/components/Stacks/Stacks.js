'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import HTML from "@/public/Icon/html5.svg";
import CSS from "@/public/Icon/css3.svg";
import JS from "@/public/Icon/js.svg";
import Tailwind from "@/public/Icon/tailwindcss.svg";
import Next from "@/public/Icon/next.svg";
import Git from "@/public/Icon/git.svg";
import Figma from "@/public/Icon/figma.svg";
import TypeScript from "@/public/Icon/ts.svg";
import React from "@/public/Icon/react.svg";
import SQL from "@/public/Icon/sql.svg";
import PHP from "@/public/Icon/PHP.svg";
import Bootstrap from "@/public/Icon/Bootstrap.svg";

const technologies = [
    { icon: HTML, name: 'HTML5', color: 'from-orange-500' },
    { icon: CSS, name: 'CSS3', color: 'from-blue-500' },
    { icon: JS, name: 'JavaScript', color: 'from-yellow-500' },
    { icon: React, name: 'React', color: 'from-cyan-500' },
    { icon: Tailwind, name: 'Tailwind', color: 'from-sky-500' },
    { icon: Next, name: 'Next.js', color: 'from-white' },
    { icon: TypeScript, name: 'TypeScript', color: 'from-blue-600' },
    { icon: SQL, name: 'SQL', color: 'from-orange-600' },
    { icon: PHP, name: 'PHP', color: 'from-indigo-600' },
    { icon: Bootstrap, name: 'Bootstrap', color: 'from-purple-600' },
    { icon: Git, name: 'Git', color: 'from-red-500' },
    { icon: Figma, name: 'Figma', color: 'from-purple-500' }
];

const Stacks = () => {
    return (
        <section  className="flex flex-col items-center w-full px-4 pt-10 relative overflow-hidden">
            {/* Fondo con efecto cyberpunk */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

            {/* Título con efecto de brillo */}
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-semibold font-ubuntu-condensed text-6xl my-10 relative"
            >
                <span className="gradient-text relative">
                    Tech Stack
                    <div className="absolute -inset-1 " />
                </span>
            </motion.h2>

            {/* Grid de tecnologías */}
            <div className="flex flex-wrap justify-center gap-6 max-w-[1200px] relative z-10">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-[280px] sm:w-[250px] flex-shrink-0"
                    >
                        <div className="group relative h-28 bg-black/40 backdrop-blur-sm rounded-lg 
                                      border border-purple-500/20
                                      transition-all duration-300 
                                      hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                                      hover:translate-y-[-5px]">
                            {/* Gradiente de fondo */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} to-transparent opacity-0  group-hover:opacity-10 transition-opacity duration-300`} />

                            {/* Contenido */}
                            <div className="relative flex items-center justify-center gap-6 p-4 h-full">
                                <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110 flex justify-center items-center">
                                    <Image
                                        src={tech.icon}
                                        alt={`${tech.name} icon`}
                                        width={64}
                                        height={64}
                                        className="object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                                    />
                                </div>
                                <span className="text-gray-300 font-ubuntu text-xl tracking-wider">
                                    {tech.name}
                                </span>
                            </div>

                            {/* Líneas decorativas */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stacks;