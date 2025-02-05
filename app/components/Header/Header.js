import Image from "next/image";
import Logo from "../../../public/Logo.svg";

const Header = () => {
        return (
                <header className="flex justify-around items-center gap-20 my-3 border-b border-zinc-800 pb-3 bg-black">
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                        <div className="flex gap-10 text-gray-50 border-[1px] py-2 px-12 border-zinc-800 rounded-full ">
                                <div>Inicio</div>
                                <div>Sobre mi</div>
                                <div>Proyectos</div>
                                <div>Contactame</div>
                        </div>      
                        <div className="flex justify-center items-center border-[1px] border-zinc-800 py-1 px-1 rounded-lg ">                 
                        <button className="bg-[#40266b]  hover:bg-[#8157c3] text-gray-50 py-1 px-6 rounded-md font-ubuntu shadow-[inset_0px_2px_14px_rgba(255,255,255,0.3)] transition-all duration-400">
                                Hoja CV
                        </button>
                        </div>
                </header>
        )
}        


export default Header;

 