'use client'
import { HiOutlineUser, HiOutlineMail, HiOutlinePaperAirplane } from "react-icons/hi";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Form = () => {
    const formRef = useRef();
    const serviceId = "service_pvug2wv";
    const templateId = "template_9e747ua";
    const publicKey = "t4tPOSTIZ74vnmw4C";

    const [notification, setNotification] = useState({ show: false, type: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            setNotification({ show: true, type: 'success', message: '¡Me pondre en contacto contigo pronto!' });
            formRef.current.reset();
        } catch (error) {
            setNotification({ show: true, type: 'error', message: 'Hubo un error al enviar el mensaje' });
        } finally {
            setIsSending(false);
        }
    };

    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ show: false, type: '', message: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification.show]);

    return (
        <>
            <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-[300px] sm:w-[600px] gap-4 flex-col transition-all duration-300 mb-10"
            >
                <div className="flex flex-col lg:flex-row gap-4 text-lg">
                    {/* Input Nombre */}
                    <motion.div
                        className="flex-1 relative group"
                        whileTap={{ scale: 0.995 }}
                    >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 blur-sm" />
                        <div className="absolute inset-0 rounded-lg bg-purple-950/40 backdrop-blur-sm" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            required
                            className="w-full px-4 py-3 pl-10 rounded-lg 
                          bg-transparent border border-purple-500/20 
                          text-white placeholder-gray-400 
                          focus:outline-none focus:border-purple-500/50 
                          transition-all duration-300 relative z-10"
                        />
                        <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500/50 z-10" />

                        {/* Efecto de brillo en el borde */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Input Email */}
                    <motion.div
                        className="flex-1 relative group"
                        whileTap={{ scale: 0.995 }}
                    >
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 blur-sm" />
                        <div className="absolute inset-0 rounded-lg bg-purple-950/40 backdrop-blur-sm" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 pl-10 rounded-lg 
                          bg-transparent border border-purple-500/20 
                          text-white placeholder-gray-400 
                          focus:outline-none focus:border-purple-500/50 
                          transition-all duration-300 relative z-10"
                        />
                        <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500/50 z-10" />

                        {/* Efecto de brillo en el borde */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Textarea */}
                <motion.div
                    className="relative group"
                    whileTap={{ scale: 0.995 }}
                >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-20 group-focus-within:opacity-20 transition-opacity duration-300 blur-sm" />
                    <div className="absolute inset-0 rounded-lg bg-purple-950/40 backdrop-blur-sm" />
                    <textarea
                        name="message"
                        placeholder="Mensaje"
                        required
                        className="w-full h-[200px] px-4 py-3 rounded-lg 
                      bg-transparent border border-purple-500/20 
                      text-white placeholder-gray-400 text-lg
                      focus:outline-none focus:border-purple-500/50 
                      transition-all duration-300 relative z-10"
                    />

                    {/* Efecto de brillo en el borde */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                    </div>
                </motion.div>

                {/* Botón Submit */}
                <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group overflow-hidden px-6 py-3 rounded-lg 
                   bg-gradient-to-r from-purple-500 to-purple-950 
                   text-white text-lg font-medium
                   transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSending ? (
                            <>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                                Enviando...
                            </>
                        ) : (
                            <>
                                <HiOutlinePaperAirplane className="text-xl transform rotate-90" />
                                Enviar mensaje
                            </>
                        )}
                    </span>
                </motion.button>
            </motion.form>
            <AnimatePresence>
                {notification.show && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-5 right-5 z-50"
                    >
                        <motion.div
                            className={`relative group flex items-center gap-4 p-4 pr-12
                           backdrop-blur-md rounded-lg shadow-2xl
                           border border-purple-500/20
                           ${notification.type === 'success'
                                    ? 'bg-purple-950/60 text-white'
                                    : 'bg-red-950/60 text-white'}`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            {/* Fondo con gradiente */}
                            <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                ${notification.type === 'success'
                                    ? 'bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20'
                                    : 'bg-gradient-to-r from-red-600/20 via-pink-600/20 to-red-600/20'}`}
                            />

                            {/* Icono */}
                            <div className={`relative flex items-center justify-center w-10 h-10 rounded-full
                                ${notification.type === 'success'
                                    ? 'bg-purple-500/20'
                                    : 'bg-red-500/20'}`}
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                                    className="text-2xl"
                                >
                                    {notification.type === 'success' ? '🔥' : '❌'}
                                </motion.span>
                            </div>

                            {/* Contenido */}
                            <div className="relative flex flex-col">
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="font-medium text-lg"
                                >
                                    {notification.type === 'success' ? '¡Mensaje enviado con éxito!' : 'Error'}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-sm opacity-90"
                                >
                                    {notification.message}
                                </motion.p>
                            </div>

                            {/* Botón cerrar */}
                            <motion.button
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setNotification({ show: false, type: '', message: '' })}
                                className={`absolute top-3 right-3 w-6 h-6
                               flex items-center justify-center rounded-full
                               transition-colors duration-300
                               ${notification.type === 'success'
                                        ? 'hover:bg-purple-500/20'
                                        : 'hover:bg-red-500/20'}`}
                            >
                                <span className="text-lg">✕</span>
                            </motion.button>

                            {/* Líneas decorativas */}
                            <div className="absolute inset-0 rounded-lg">
                                <div className={`absolute bottom-0 left-0 w-full h-[1px] 
                                   ${notification.type === 'success'
                                        ? 'bg-gradient-to-r from-purple-500/50 to-transparent'
                                        : 'bg-gradient-to-r from-red-500/50 to-transparent'}`}
                                />
                                <div className={`absolute top-0 right-0 w-[1px] h-full 
                                   ${notification.type === 'success'
                                        ? 'bg-gradient-to-b from-purple-500/50 to-transparent'
                                        : 'bg-gradient-to-b from-red-500/50 to-transparent'}`}
                                />
                            </div>
                        </motion.div>

                        {/* Efecto de resplandor */}
                        <div className={`absolute -inset-2 rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10
                            ${notification.type === 'success'
                                ? 'bg-purple-600'
                                : 'bg-red-600'}`}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )

}

export default Form;