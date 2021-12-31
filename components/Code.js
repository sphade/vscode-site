import { motion } from "framer-motion";

const Code = ({
  tagName,
  wantClass,
  wantedClass,
  className,
  content,
  bWord,
}) => {
  return (
    <motion.code
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={`${className} tracking-widest block font-main`}
    >
      <span className="text-xl text-left font-style lowercase font-black">
        &lt;<span className="text-tag ">{tagName}</span>
        {wantClass && (
          <span>
            {" "}
            <span className="text-class lowercase ">class</span>
            <span className="text-vsb">=</span>
            <span className="text-cname">{`"${wantedClass}"`}</span>{" "}
          </span>
        )}
        &gt;
      </span>
      {bWord && <br />}
      <span className="mx-5 ">{content}</span>
      {bWord && <br />}
      <span className="text-xl font-style lowercase font-black">
        &lt;/
        <span className="text-tag ">{tagName}</span>&gt;
      </span>
    </motion.code>
  );
};

export default Code;
