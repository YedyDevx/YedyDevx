import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import CVButton from './CVBotton';
const HeaderMobile = () => {
    const navbarMobile = [
        { name: "Inicio", href: "#home" },
        { name: "Sobre mi", href: "#sobreMi" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contactame", href: "#contact" },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/yedixon-ramones-5297b1277/',
            icon: <FaLinkedin className='text-4xl' />,
            delay: 0.6
        },
        {
            name: 'GitHub',
            href: 'https://github.com/YedyDevx',
            icon: <FaGithub className='text-4xl' />,
            delay: 0.7
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/yedy_____/?hl=es',
            icon: <FaInstagram className='text-4xl' />,
            delay: 0.8
        }
    ];
    return (
        <motion.nav
            className="fixed top-[65px] right-0 w-72 h-[calc(100vh-65px)] lg:hidden flex flex-col items-center gap-4 p-5 bg-gradient-to-tr from-black via-[#0f0916] to-[#170e25] shadow-lg shadow-black z-40 overflow-y-auto"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            <h2 className="font-ubuntu text-3xl gradient-text">Menu</h2>
            <div className="flex flex-col items-center gap-4">
                {navbarMobile.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-50 font-ubuntu hover:text-purple-600 hover:border-b-2 hover:border-purple-600 text-xl transition duration-300 transform"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <CVButton />
            <div className="flex gap-10 justify-center items-center mt-3">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        className="text-gray-50 hover:text-purple-600 transition duration-300"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};

export default HeaderMobile;