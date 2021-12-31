import { motion } from "framer-motion";
import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <motion.a
      whileHover={{
        scale: 1.2,
        
      }}
      whileTap={{
        scale: 1,
      }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
      href={href}
      onClick={handleClick}
      className={`${
        router.asPath === href
          ? "text-word border-t-2 border-word md:border-t-0 md:border-l-2"
          : "text-gray-500  "
      } px-3 py-3.5 hover:text-word`}
    >
      {children}
    </motion.a>
  );
}

export default ActiveLink;
