'use client';
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import { motion } from "framer-motion";
import { RiMenuFoldLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import HeaderMobile from "./HeaderMobile";
import { BorderBeam } from "../../../components/ui/border-beam";


const Header = () => {
    const navbarItems = [
        { name: "Inicio", href: "#home" },
        { name: "Sobre mi", href: "#sobreMi" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contactame", href: "#contact" },
    ];

    const [isOpenMobile, setIsOpenMobile] = useState(false);

    const toggleMenu = () => {
        setIsOpenMobile(!isOpenMobile);
    };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="w-full mx-auto">
                <div className=" flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 border-b-2 border-zinc-800">
                    <Image src={Logo} alt="Logo" width={40} height={40} />

                    <div className="lg:flex hidden justify-center items-center gap-10 text-gray-50 border-[1px] w-[600px] h-[52px] border-zinc-800 rounded-full relative">
                        {navbarItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="hover:text-purple-600 hover:border-b-2 hover:border-purple-600 font-ubuntu text-lg transition"
                            >
                                {item.name}
                            </a>
                        ))}
                        <BorderBeam />
                    </div>

                    <div className="lg:flex hidden justify-center items-center border-[1px] border-zinc-800 py-1 px-1 rounded-lg">
                        <button className="bg-[#40266b] hover:bg-[#8157c3] text-gray-50 py-1 px-6 rounded-md font-ubuntu shadow-[inset_0px_2px_14px_rgba(255,255,255,0.3)] transition-all duration-400">
                            Hoja CV
                        </button>
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
            {isOpenMobile && <HeaderMobile />}
        </header>
    );
}

export default Header;
