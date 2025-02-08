

const Contact = () => {
    return (
        <section name="contact" className="relative flex flex-col items-center w-full min-h-[600px] px-4 overflow-hidden mt-5">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent transition-opacity/10 duration-300 z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5a278e_0%,transparent_150%)] opacity-10" />
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#5a278e20_1px,transparent_1px),linear-gradient(to_bottom,#5a278e20_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_1000%)] transform rotate-[35deg] scale-[2]" />

            <div className="flex flex-col items-center max-w-2xl w-full text-center relative z-40 mt-20">
                <h1 className="font-ubuntu-condensed font-bold gradient-text text-white text-6xl mb-4">
                    Contáctame
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                Disponible para nuevos desafíos · ¡Conectemos!
                </p>

                <form className="flex w-[300px] sm:w-[600px] gap-2 flex-col transition-all duration-300 mb-10">
                    <div className="flex flex-col lg:flex-row gap-2 text-lg">
                        <input
                            type="name"
                            placeholder="Nombre"
                            className="flex-1 px-4 py-3 rounded-lg bg-purple-950/40    border border-purple-500/20   text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 px-4 py-3 rounded-lg bg-purple-950/40  border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                    </div>
                    <textarea
                        placeholder="Mensaje"
                        className="h-[200px] text-lg px-4 py-3 rounded-lg bg-purple-950/40  border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                    <button
                        className="px-6 py-3 bg-white text-lg text-purple-950 rounded-lg
                                 font-medium hover:bg-purple-950  hover:text-white transition-colors"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0718] via-transparent to-[#0d0718]" />
        </section>
    );
};

export default Contact;