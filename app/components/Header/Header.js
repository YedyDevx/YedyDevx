'use client';
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import { motion } from "framer-motion";
import { RiMenuFoldLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import HeaderMobile from "./HeaderMobile";
import { BorderBeam } from "../../../components/ui/border-beam";
import { Link as ScrollLink } from "react-scroll";
import CVBotton from "./CVBotton";

const Header = () => {
    const navbarItems = [
        { name: "Inicio", to: "home" },
        { name: "Sobre mi", to: "aboutme" },
        { name: "Proyectos", to: "projects" },
        { name: "Contactame", to: "contact" },
    ];

    const [isOpenMobile, setIsOpenMobile] = useState(false);

    const toggleMenu = () => {
        setIsOpenMobile(!isOpenMobile);
    };
    return (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="w-full mx-auto">


                <div className=" flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 border-b-2 border-zinc-800">
                    <Image src={Logo} alt="Logo" width={40} height={40} />

                    <div className="lg:flex hidden justify-center items-center gap-10 text-gray-50 border-[1px] w-[600px] h-[52px] border-zinc-800 rounded-full relative">

                        {navbarItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                className="relative group"
                            >
                                <ScrollLink
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    spy={true}
                                    activeClass="active"
                                    className="relative px-4 py-2 font-ubuntu text-lg
                     text-gray-300 transition-colors duration-300
                     hover:text-white group-hover:text-white
                     cursor-pointer"
                                >
                                    {/* Texto del enlace */}
                                    <span className="relative z-10">
                                        {item.name}
                                    </span>

                                    {/* Efecto de hover */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 
                         bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600
                         origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Efecto de fondo al hover */}
                                    <div className="absolute inset-0 rounded-lg
                          bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0
                          opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300"
                                    />

                                    {/* Destellos */}
                                    <div className="absolute -inset-1 opacity-0 group-hover:opacity-100">
                                        <div className="absolute h-[2px] w-[2px] 
                              bg-purple-400 rounded-full 
                              top-1/2 -left-2
                              animate-particle-1"
                                        />
                                        <div className="absolute h-[2px] w-[2px] 
                              bg-fuchsia-400 rounded-full 
                              bottom-0 right-1/2
                              animate-particle-2"
                                        />
                                    </div>

                                    {/* Indicador de activo */}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1
                          bg-purple-500 rounded-full opacity-0
                          group-hover:opacity-100 active:opacity-100
                          transition-opacity duration-300"
                                    />
                                </ScrollLink>
                            </motion.div>
                        ))}
                        <BorderBeam />
                    </div>

                    <div className="lg:flex hidden justify-center items-center ">
                        <CVBotton />
                    </div>

                    <button onClick={toggleMenu} className="lg:hidden">
                        <motion.div
                            animate={{ rotate: isOpenMobile ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {isOpenMobile ? (
                                <MdClose className="text-gray-50 hover:text-gray-300 text-3xl transition duration-300 transform hover:scale-150" />
                            ) : (
                                <RiMenuFoldLine className="text-gray-50 hover:text-gray-300 text-3xl transition duration-300 transform hover:scale-150" />
                            )}
                        </motion.div>
                    </button>
                </div>
            </div>
            {isOpenMobile && <HeaderMobile toggleMenu={toggleMenu} />}
        </motion.header>
    );
}


export default Header;
