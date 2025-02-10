'use client';
import BtnSocial from "./BtnSocial";
import Form from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section name="contact" className="relative flex flex-col items-center w-full min-h-[600px] px-4 overflow-hidden mt-5">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent transition-opacity/10 duration-300 z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5a278e_0%,transparent_150%)] opacity-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#5a278e20_1px,transparent_1px),linear-gradient(to_bottom,#5a278e20_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_1000%)] transform rotate-[35deg] scale-[2]" />
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ x: 0 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center max-w-2xl w-full text-center relative z-40 mt-20"
            >
                <h1 className="font-ubuntu-condensed font-bold gradient-text text-white text-6xl mb-4">Contáctame</h1>
                <p className="text-gray-400 text-lg mb-8">Disponible para nuevos desafíos · ¡Conectemos!</p>
                <Form />
                <BtnSocial />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-[#0d0718]" />
        </section>
    );
};

export default Contact;
