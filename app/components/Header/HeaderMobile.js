import { motion } from 'framer-motion';
import CVButton from './CVBotton';
import { Link as ScrollLink } from 'react-scroll';
import BtnSocial from '../Contact/BtnSocial';

const HeaderMobile = ({toggleMenu}) => {
    const navbarMobile = [
        { name: "Inicio", to: "home" },
        { name: "Sobre mi", to: "aboutme" },
        { name: "Proyectos", to: "projects" },
        { name: "Contactame", to: "contact" },
    ];
    return (
        <motion.nav
            className="fixed top-[65px] right-0 w-72 h-[calc(100vh-65px)] lg:hidden flex flex-col items-center justify-between gap-4 p-5 bg-gradient-to-tr from-black via-[#0f0916] to-[#170e25] shadow-lg shadow-black z-40 overflow-y-auto"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            
            <div className="flex flex-col items-center gap-4">
            <h2 className="font-ubuntu text-3xl gradient-text mb-5 ">Menu</h2>
                {navbarMobile.map((item) => (
                    <ScrollLink
                        key={item.name}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        spy={true}
                        onClick={toggleMenu}
                        className="text-gray-50 font-ubuntu hover:text-purple-600 hover:border-b-2 hover:border-purple-600 text-xl transition duration-300 transform cursor-pointer"
                    >
                        {item.name}
                    </ScrollLink>
                ))}
            </div>
            <div className='flex flex-col items-center gap-4 '>
                <CVButton />
                <BtnSocial />
            </div>
        </motion.nav>
    );
};

export default HeaderMobile;