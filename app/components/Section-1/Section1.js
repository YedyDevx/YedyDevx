'use client'
import { TypingAnimation } from "../../../components/ui/typing-animation";
import Shadow from "./Shadow";
import AboutMe from "../AboutMe/AboutMe";
import { Link as ScrollLink } from "react-scroll";

const Section1 = () => {
    return (
        <main name="home" className="flex justify-center items-center relative min-h-screen w-full mt-16">
            <Shadow />
            <div className="absolute top-0 z-40 flex flex-col items-center gap-5 sm:gap-14 md:gap-16 lg:gap-10">
                <h1 className="font-semibold font-ubuntu-condensed text-center text-6xl sm:text-7xl md:text-8xl lg:text-8xl gradient-text mt-20 sm:mt-7 md:mt-20 lg:mt-24 md:p-8">
                    <TypingAnimation>
                        Soy Yedixon Ramones
                    </TypingAnimation>
                </h1>

                <p className=" text-center font-ubuntu text-3xl md:text-4xl lg:text-3xl gradient-text">
                    Desarrollador de Software
                </p>
                <ScrollLink 
                to="contact"
                smooth={true}
                duration={500}
                className="bg-black/60 py-2 px-6 sm:px-8 md:px-10 text-[#9855FF] rounded-full border border-gray-400 font-ubuntu text-lg sm:text-xl md:text-2xl hover:bg-black/80 transition-colors z-40 cursor-pointer">
                    Contactame
                </ScrollLink>
            </div>
            <AboutMe />
        </main>
    )
}

export default Section1;