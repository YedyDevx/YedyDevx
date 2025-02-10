'use client'
import { TypingAnimation } from "../../../components/ui/typing-animation";
import Shadow from "./Shadow";
import AboutMe from "../AboutMe/AboutMe";
import { motion } from "framer-motion";
import BtnContact from "./BtnContac";

const Section1 = () => {
    return (
        <main name="home" className="flex justify-center items-center relative min-h-screen w-full mt-32">
            <Shadow />
            <div className="absolute top-0 z-40 flex flex-col items-center gap-8 sm:gap-14 md:gap-16 lg:gap-10">
                <h1 className="font-semibold font-ubuntu-condensed text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text mt-20 sm:mt-7 md:mt-20 lg:mt-24 md:p-8">
                    <TypingAnimation>
                        Soy Yedixon Ramones
                    </TypingAnimation>
                </h1>
                <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className=" text-center font-ubuntu text-3xl md:text-4xl lg:text-3xl gradient-text mx-5 md:mx-0"
                >
                   Apasionado por el desarrollo de software y el frontend.
                </motion.p>
                <BtnContact />
            </div>
            <AboutMe />
        </main>
    )
}

export default Section1;