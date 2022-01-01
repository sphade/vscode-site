import { motion } from "framer-motion";

const ProgressBar = ({ skill, percent, color }) => {
  return (
    <div className=" w-full  overflow-hidden">
      <div className="capitalize text-2xl font-main">{skill}</div>
      <div className="bg-tertiary w-full h-1 ">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: percent }}
          transition={{ duration: 2, ease: "linear" }}
          className={`${color}  h-full`}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
