'use client';
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import { RiMenuFoldLine } from "react-icons/ri";

const Header = () => {
        return (
                <header className="flex justify-between lg:justify-around items-center gap-20 py-3 border-b border-zinc-800 pb-3 bg-black/80 backdrop-blur-sm px-5 fixed top-0 w-full z-50">
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                        <div className="lg:flex hidden gap-10 text-gray-50 border-[1px] py-2 px-12 border-zinc-800 rounded-full ">
                                <a href="#section1" >Inicio</a>
                                <a href="#sobreMi" >Sobre mi</a>
                                <a href="#projects" >Proyectos</a>
                                <a href="#contact" >Contactame</a>
                        </div>      
                        <div className="lg:flex hidden justify-center items-center border-[1px] border-zinc-800 py-1 px-1 rounded-lg ">                 
                                <button className="bg-[#40266b]  hover:bg-[#8157c3] text-gray-50 py-1 px-6 rounded-md font-ubuntu shadow-[inset_0px_2px_14px_rgba(255,255,255,0.3)] transition-all duration-400">
                                        Hoja CV
                                </button>
                        </div>
                        <RiMenuFoldLine className="flex lg:hidden text-gray-50 text-2xl"/>
                </header>
        )
}

export default Header;
