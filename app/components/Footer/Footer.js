'use client'
import Image from "next/image";
import logo from "../../../public/Logo.svg";
import CVButton from "../Header/CVBotton";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import BtnSocial from "../Contact/BtnSocial";

const Footer = () => {
    const scrollLinks = [  
        {to: 'aboutme', text: 'Conoce más sobre mí'},
        {to: 'projects', text: 'Conoce algunos de mis proyectos'},
        {to: 'contact', text: 'Contactame para conocer más'}
    ]
    
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }} className="relative w-full pt-16 pb-5 px-4 overflow-hidden"
        >
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

                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="text-2xl font-ubuntu-condensed gradient-text mb-6">
                            Explora mi portfolio
                        </h2>
                        <nav className="flex flex-col gap-2 text-gray-300 items-center lg:items-start">
                        {scrollLinks.map((item, index) => (
                            <ScrollLink 
                                key={index}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="hover:text-purple-400 transition-colors cursor-pointer"
                            >
                                {item.text}
                            </ScrollLink>
                        ))}
                    </nav>

                    </div>
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
                    <div className="flex flex-col items-center lg:items-start justify-center">
                        <div className="flex flex-col  items-center gap-4"> 
                            <h2 className="text-2xl font-ubuntu-condensed gradient-text">
                                Conectemos
                            </h2>
                                <CVButton />
                                <BtnSocial />
                            </div>
                    </div>
                </div>
                <div className=" mt-3  pt-3 border-t border-purple-900/30 text-center text-gray-400">
                    <p>© 2025 Yedixon Ramones - YedyDevx. </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;