import { TypingAnimation } from "../../../components/ui/typing-animation";
import Shadow from "./Shadow";
import AboutMe from "../AboutMe/AboutMe";

const Section1 = () => {
        return (
                <main className="flex justify-center items-center relative min-h-screen w-full px-4 mt-20">
                        <Shadow />

                        <h1 className="absolute font-semibold rounded-2xl top-0 z-40 font-ubuntu-condensed mt-6 sm:mt-7 md:mt-10 lg:mt-24 text-center   text-7xl sm:text-8xl md:text-9xl lg:text-9xl xl:text-9xl gradient-text px-24 lg:px-0 py-8 mx-24 md:mx-0">
                                <TypingAnimation>  
                                        Soy Yedixon Ramones
                                </TypingAnimation>
                        </h1>
                        <p className="absolute md:flex hidden text-white rounded-2xl top-0 z-5 font-ubuntu  mt-[300px] sm:mt-[280px]  z-40 text-center text-lg sm:text-xl md:text-2xl lg:text-2xl gradient-text ">
                                Desarrollador de Software | Desarrollador Web | Desarrollador Frontend
                        </p>
                        <p className="absolute  flex md:hidden text-white rounded-2xl top-0 z-5 font-ubuntu 
                                    mt-[300px] z-40 text-center text-xl  flex-col">
                                <span className="gradient-text">Desarrollador de Software </span> 
                                <span className="gradient-text">Desarrollador de Aplicaciones </span> 
                        </p>
                        <button className="absolute bg-black/60 py-2 px-6 sm:px-8 md:px-10 text-[#9855FF] 
                                         rounded-full border-[1px] border-gray-400 top-0 z-40 font-ubuntu 
                                         mt-96 sm:mt-96 md:mt-96 z-50 text-center 
                                         text-lg sm:text-xl md:text-2xl 
                                         hover:bg-black/80 transition-colors">
                                Contactame
                        </button>
                        <AboutMe/>
                </main>
        )
}
export default Section1;