import { motion } from "framer-motion";

const BorderLine = ({ direction, className }) => {
    const animations = {
        left: { initial: { opacity: 0, x: -50 }, animate: { x: 0 } },
        right: { initial: { opacity: 0, x: 50 }, animate: { x: 0 } },
        top: { initial: { opacity: 0, y: -50 }, animate: { y: 0 } },
        bottom: { initial: { opacity: 0, y: 50 }, animate: { y: 0 } }
    };

    return (
        <motion.div
            initial={{ ...animations[direction].initial, opacity: 0 }}
            whileInView={{ ...animations[direction].animate, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            className={className}
        />
    );
};

export default BorderLine;
