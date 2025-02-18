'use client'
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const BtnSocial = () => {
    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/yedixon-ramones-5297b1277/',
            icon: <FaLinkedinIn />,
            color: 'hover:bg-[#0077b5]'
        },
        {
            href: 'https://github.com/YedyDevx',
            icon: <FaGithub />,
            color: 'hover:bg-[#333]'
        },
        {
            href: 'https://www.instagram.com/yedy_____/?hl=es',
            icon: <FaInstagram />,
            color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]'
        }
    ];

    return (
        <div className="flex gap-5 pb-5">
            {socialLinks.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative group cursor-pointer"
                >
                    <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative z-40 flex items-center justify-center w-14 h-14 
                                  text-2xl text-white/80 
                                  bg-black/30 backdrop-blur-sm
                                  rounded-full border border-purple-500/30
                                  transition-all duration-300  
                                  ${item.color}
                                  group-hover:border-purple-500
                                  group-hover:text-white
                                  group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]`}
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Efecto de brillo */}
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Efecto de anillo */}
                        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-transparent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                        
                        {/* Icono */}
                        <span className="relative z-10">
                            {item.icon}
                        </span>
                    </motion.a>

                    {/* Efecto de partículas (opcional) */}
                    <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-1/2 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-1" />
                        <div className="absolute bottom-0 right-1/2 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-2" />
                        <div className="absolute top-1/2 right-0 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-3" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default BtnSocial;