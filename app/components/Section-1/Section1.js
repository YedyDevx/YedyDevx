import { TypingAnimation } from "../../../components/ui/typing-animation";
import Shadow from "./Shadow";
import AboutMe from "../AboutMe/AboutMe";

const Section1 = () => {
        return (
                <main className="flex justify-center items-center relative min-h-screen w-full px-4">
                        <Shadow />
                        <h1 className="absolute font-semibold rounded-2xl top-0 z-50 font-ubuntu-condensed mt-6 md:mt-28 text-center 
                                     text-6xl sm:text-8xl md:text-8xl lg:text-9xl gradient-text p-8 mx-24 md:mx-0">
                                <TypingAnimation>  
                                        Soy Yedixon Ramones
                                </TypingAnimation>
                        </h1>
                        <p className="absolute text-white rounded-2xl top-0 z-5 font-ubuntu 
                                    mt-[300px] sm:mt-[280px]  z-50 text-center 
                                    text-lg sm:text-xl md:text-2xl lg:text-2xl gradient-text px-16">
                                Desarrollador de Software | Desarrollador Web | Desarrollador Frontend
                        </p>
                        {/* <p className="absolute text-white rounded-2xl top-0 z-5 font-ubuntu 
                                    mt-[300px] sm:mt-[280px]  z-50 text-center 
                                    text-lg sm:text-xl md:text-2xl lg:text-3xl gradient-text px-16">
                                Desarrollador de Software | Desarrollador Web 
                        </p> */}
                        <button className="absolute bg-black/60 py-2 px-6 sm:px-8 md:px-10 text-[#9855FF] 
                                         rounded-full border-[1px] border-gray-400 top-0 z-5 font-ubuntu 
                                         mt-96 sm:mt-80 md:mt-96 z-50 text-center 
                                         text-lg sm:text-xl md:text-2xl 
                                         hover:bg-black/80 transition-colors">
                                Contactame
                        </button>
                        <AboutMe/>
                </main>
        )
}
export default Section1;