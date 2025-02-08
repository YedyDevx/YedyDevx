import Image from "next/image";
import logo from "../../../public/Logo.svg";
import CVButton from "../Header/CVBotton";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="relative w-full pt-16 pb-5 px-4 overflow-hidden">
            {/* Gradiente de fondo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/90" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 font-ubuntu">
                    <div className="flex flex-col items-center ">
                        <Image 
                            src={logo} 
                            alt="logo"
                            className="w-24 h-24 mb-4 hover:scale-110 transition-transform duration-300"
                        />
                    </div>

                    {/* Exploración */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl font-ubuntu-condensed gradient-text mb-6">
                            Explora mi portfolio
                        </h2>
                        <nav className="flex flex-col gap-2 text-gray-300 items-center lg:items-start">
                            <a href="#sobremi" className="hover:text-purple-400 transition-colors">
                                Conoce más sobre mí
                            </a>
                            <a href="#projects" className="hover:text-purple-400 transition-colors">
                                Conoce algunos de mis proyectos
                            </a>
                            <a href="#contacto" className="hover:text-purple-400 transition-colors">
                                Contactame para conocer más
                            </a>
                        </nav>
                    </div>

                    {/* Ubicación */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl font-ubuntu-condensed gradient-text mb-6">
                            Ubicación
                        </h2>
                        <div className="flex flex-col items-center lg:items-start gap-2 text-gray-300">
                            <div className="flex items-center gap-3">
                                <IoLocationSharp className="text-purple-400 text-xl" />
                                <p>Colombia, Antioquia - Apartado</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-purple-400 text-xl" />
                                <p>+57 301 731 7519</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <HiMail className="text-purple-400 text-xl" />
                                <p>yedixonjrf@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex flex-col items-center lg:items-start ">
                        <h2 className="text-2xl font-ubuntu-condensed gradient-text mb-6">
                            Conectemos
                        </h2>
                        <CVButton />
                        <div className="flex gap-4 mt-3">
                            <a 
                                href="https://www.linkedin.com/in/yedixon-ramones-5297b1277/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 bg-purple-900/30 rounded-full hover:bg-purple-600/50 transition-colors"
                            >
                                <FaLinkedinIn className="text-white text-xl" />
                            </a>
                            <a 
                                href="https://github.com/YedyDevx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 bg-purple-900/30 rounded-full hover:bg-purple-600/50 transition-colors"
                            >
                                <FaGithub className="text-white text-xl" />
                            </a>
                            <a 
                                href="TU_LINK_INSTAGRAM" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 bg-purple-900/30 rounded-full hover:bg-purple-600/50 transition-colors"
                            >
                                <FaInstagram className="text-white text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-5 pt-8 border-t border-purple-900/30 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Yedixon Ramones - YedyDevx. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;