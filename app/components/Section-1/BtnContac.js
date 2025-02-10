import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const BtnContact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative group cursor-pointer"
        >
            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-3 
                       py-3 px-8
                       bg-black/30 backdrop-blur-sm
                       text-white/90 font-ubuntu text-xl
                       rounded-lg border border-purple-500/30
                       transition-all duration-300
                       hover:border-purple-500/70
                       hover:text-white
                       hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
                       overflow-hidden z-40"
                >
                    {/* Efecto de gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Efecto de brillo */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 
                          opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />

                    {/* Contenido del botón */}
                    <span className="relative z-10 flex items-center gap-2">
                        <HiOutlineMail className="text-2xl" />
                        Contáctame
                    </span>

                    {/* Partículas decorativas */}
                    <div className="absolute -inset-2 opacity-0 group-hover:opacity-100">
                        <div className="absolute top-0 left-1/4 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-1" />
                        <div className="absolute bottom-0 right-1/4 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-2" />
                        <div className="absolute top-1/2 right-0 w-[2px] h-[2px] bg-purple-500 rounded-full animate-particle-3" />
                    </div>

                    {/* Líneas de borde animadas */}
                    <div className="absolute inset-0">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                    </div>
                </motion.div>
            </ScrollLink>

            {/* Efecto de resplandor detrás del botón */}
            <div className="absolute -inset-4 bg-purple-600/20 rounded-xl blur-2xl 
                    opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
        </motion.div>
    )
}

export default BtnContact;