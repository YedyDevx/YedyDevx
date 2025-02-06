import { motion } from "framer-motion";
import BorderLine from "./BorderLine";
import Image from "next/image";
import User from "../../../public/user.svg"

const ProfileImage = () => (
        <div className="relative w-32 h-32 md:w-60 md:h-60 flex items-center justify-center mx-10 mb-10 lg:mb-0">
            <BorderLine 
                direction="left" 
                className="absolute top-[-50px] bottom-[-50px] left-[-3px] w-[2px] bg-gradient-to-b from-black via-purple-600 to-black"
            />
            <BorderLine 
                direction="right" 
                className="absolute top-[-50px] bottom-[-50px] right-[-3px] w-[2px] bg-gradient-to-b from-black via-purple-600 to-black"
            />
            <BorderLine 
                direction="top" 
                className="absolute left-[-50px] right-[-50px] top-[-3px] h-[2px] bg-gradient-to-r from-black via-purple-600 to-black"
            />
            <BorderLine 
                direction="bottom" 
                className="absolute left-[-50px] right-[-50px] bottom-[-3px] h-[2px] bg-gradient-to-r from-black via-purple-600 to-black"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full rounded-2xl overflow-hidden bg-purple-900/50"
            >
                <Image 
                    src={User}
                    alt="Profile"
                    width={240}
                    height={260}
                    className="w-full h-full object-cover "
                />
            </motion.div>
        </div>
    );

export default ProfileImage;
