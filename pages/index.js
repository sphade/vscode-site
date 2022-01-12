import Head from "next/head";
import Buttons from "@components/Buttons";
import Code from "@components/Code";
import { motion } from "framer-motion";


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
     scale:0
    
    },
    show: {
      opacity: 1,
     scale:1
      
    },
  };
  return (
    <div className="  text-word min-w-full">
      <Head>
        <title>Lawal Adebola</title>
        <meta name="description" content="lawal Adebola portfolio website" />
      </Head>

      <div className="relative flex lg:flex-row flex-col justify-center lg:justify-between layout-spacing items-center">
        <motion.div
          className="space-y-20 md:space-y-5   md:mr-14"
          variants={container}
          animate="show"
          initial="hidden"
          layout
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

        </motion.div>

        <div className="flex flex-col gap-7 mt-5 ">
          <Buttons
            title="download resume"
            description="download pdf copy of my resume "
            href='AdebolaCv.pdf'
          />
          <Buttons
            title="say hi"
              description="send a mail to me, i usually respond within the next 24hrs"
              href='mailto:sphade012@gmail.com'
          />
          </div>
        
      </div>
    </div>
  );
}
