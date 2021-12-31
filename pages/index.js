import Head from "next/head";
import Buttons from "@components/Buttons";
import Code from "@components/Code";
import { motion } from "framer-motion";
import MockupCode from "@components/MockupCode";
import ProgressBar from "@components/ProgressBar";
import moment from 'moment'

export default function Home() {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
      },
    },
  };
  const singleCode = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className=" bg-red-900 text-word min-w-full">
      <Head>
        <title>Lawal Adebola</title>
        <meta name="description" content="lawal Adebola portfolio website" />
      </Head>

      <div className=" flex lg:flex-row flex-col justify-center lg:justify-between layout-spacing items-center">
        <motion.div
          className="space-y-20 md:space-y-5   md:mr-14"
          variants={container}
          animate="show"
          initial="hidden"
        >
          <motion.div variants={singleCode}>
            <Code
              tagName="h1"
              content="hi there, I am lawal"
              className="text-3xl sm:text-6xl lg:text-4xl capitalize "
              bWord
            />
          </motion.div>
          <motion.div variants={singleCode}>
            <Code
              tagName="h2"
              content=" frontend developer based in nigeria"
              className=" text-lg sm:text-4xl lg:text-2xl capitalize "
              wantClass={true}
              wantedClass="font-bold text-xl"
              bWord
            />
          </motion.div>
{
//  <motion.div variants={singleCode}>
//             <MockupCode />
//           </motion.div>
            
}
        </motion.div>

        <div className="flex flex-col gap-7 mt-5 ">
          <Buttons
            title="download resume"
            description="download pdf copy of my resume "
          />
          <Buttons
            title="let have a chat"
            description="chat with the Lawal-Chat-Bot  (Ai version of me)"
          />
        </div>
      </div>
    </div>
  );
}
