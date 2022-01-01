import { StarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Link from "next/link";

const Buttons = ({ title, description, href }) => {
  return (
    
    <motion.a
      href={href}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 1,
        }}
        initial={{scale:0}}
        animate={{scale:1}}
        className="mt-10 w-auto md:w-96 inline-block relative shadow-lg py-3 pl-10 overflow-hidden bg-secondary border-b-4 border-vsb rounded-lg hover:bg-primary cursor-pointer text-left focus:outline-white font-sans"
      >
        <div className="star absolute left-0 top-0  bg-vsb w-10 h-10 p-1 text-white">
          <StarIcon className="h-5 w-5" />
        </div>
        <div className=" font-semibold text-lg capitalize">{title}</div>
        <div>{description}</div>
      </motion.a>
 
  );
};

export default Buttons;
