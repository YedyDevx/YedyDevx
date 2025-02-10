'use client';
import ProfileImage from "./ProfielImage";
import AboutContent from "./AboutContent";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            name="aboutme"  
            className="bg-gradient-to-l from-[#0d0718] via-[#5a278e] to-[#0d0718]  w-[350px] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[1200px]  absolute  bottom-[0px] sm:bottom-[110px] md:bottom-[0px] rounded-2xl  z-40  mx-4 p-3 transition-all duration-300 shadow-[0_-15px_55px_-10px_#5a278e] "
        >
            <div className="w-full h-full flex flex-col justify-center items-center bg-black/80 rounded-xl py-10 ">
                <h2 className="text-3xl md:text-4xl  text-white font-ubuntu-condensed gradient-text font-bold pb-5 lg:pb-0">Sobre Mi </h2>
                <div className="flex flex-col xl:flex-row items-center gap-8 p-6 md:p-10">
                    <ProfileImage />
                    <AboutContent />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;