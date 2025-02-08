'use client';

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
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
            setNotification({ show: true, type: 'success', message: '¡Mensaje enviado con éxito!' });
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
        <section name="contact" className="relative flex flex-col items-center w-full min-h-[600px] px-4 overflow-hidden mt-5">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent transition-opacity/10 duration-300 z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5a278e_0%,transparent_150%)] opacity-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#5a278e20_1px,transparent_1px),linear-gradient(to_bottom,#5a278e20_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_1000%)] transform rotate-[35deg] scale-[2]" />
            
            <div className="flex flex-col items-center max-w-2xl w-full text-center relative z-40 mt-20">
                <h1 className="font-ubuntu-condensed font-bold gradient-text text-white text-6xl mb-4">Contáctame</h1>
                <p className="text-gray-400 text-lg mb-8">Disponible para nuevos desafíos · ¡Conectemos!</p>
                
                <form ref={formRef} onSubmit={sendEmail} className="flex w-[300px] sm:w-[600px] gap-2 flex-col transition-all duration-300 mb-10">
                    <div className="flex flex-col lg:flex-row gap-2 text-lg">
                        <input type="text" name="name" placeholder="Nombre" required className="flex-1 px-4 py-3 rounded-lg bg-purple-950/40 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors" />
                        <input type="email" name="email" placeholder="Email" required className="flex-1 px-4 py-3 rounded-lg bg-purple-950/40 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors" />
                    </div>
                    <textarea name="message" placeholder="Mensaje" required className="h-[200px] text-lg px-4 py-3 rounded-lg bg-purple-950/40 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors" />
                    <button type="submit" disabled={isSending} className="px-6 py-3 bg-white text-lg text-purple-950 rounded-lg font-medium hover:bg-purple-950 hover:text-white transition-colors disabled:opacity-50">
                        {isSending ? "Enviando..." : "Enviar mensaje"}
                    </button>
                </form>
                
                {notification.show && (
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg flex items-center gap-3 z-50 ${notification.type === 'success' ? 'bg-purple-900/90 text-white' : 'bg-red-900/90 text-white'}`}>
                        <span className="text-2xl">{notification.type === 'success' ? '🔥' : '❌'}</span>
                        <div className="flex flex-col">
                            <p className="font-medium">{notification.type === 'success' ? '¡Éxito!' : 'Error'}</p>
                            <p className="text-sm opacity-90">{notification.message}</p>
                        </div>
                        <button onClick={() => setNotification({ show: false, type: '', message: '' })} className="ml-4 hover:opacity-70 transition-opacity">✕</button>
                    </motion.div>
                )}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-[#0d0718]" />
        </section>
    );
};

export default Contact;
