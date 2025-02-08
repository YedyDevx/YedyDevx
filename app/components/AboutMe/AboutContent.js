const AboutContent = () => {
    return (
        <div className="flex flex-col gap-6 md:gap-4 max-w-xl">
            <h2 className="text-xl md:text-xl text-white font-ubuntu-condensed font-light">
                "Todo lo que puedas imaginar, se puede programar"
            </h2>
            <p className="text-gray-300 text-[8px] md:text-lg ">
                Me llamo Yedixon soy un desarrollador de software de 22 años, enfocado en el desarrollo frontend
                creando interfaces interactivas y responsivas haciendo las experiencias
                de los usuarios sean excepcionales. Mi pasión por el desarrollo
                se combina con un compromiso constante por el aprendizaje y la
                innovación. Busco oportunidades desafiantes donde pueda aportar
                soluciones creativas y valor real a los proyectos.
            </p>
            <div className="text-purple-400">
                <p className="font-semibold text-2xl">Yedixon Ramones</p>
                <p className="text-lg">Frontend Developer</p>
            </div>
        </div>
    );
};

export default AboutContent;
