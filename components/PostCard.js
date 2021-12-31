import moment from "moment";
import readingTime from "reading-time";
import Link from "next/link";
import Code from "./Code";
import { motion } from "framer-motion";

const PostCard = ({ id, topic, publishedAt, author, content }) => {
  const time = readingTime(content);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, ease: "easeIn" }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-5 sm:mb-0 px-3 py-2 font-main bg-secondary rounded-md shadow-lg border border-secondary text-word w-full break-words max-w-md  space-y-3 "
    >
      <Code
        tagName="h1"
        content={topic}
        className="text-2xl   sm:text-4xl lg:text-3xl capitalize font-black"
        bWord
      />
      <div className="flex items-center text-secondary font-black space-x-5">
        <p className="px-1 rounded-lg   bg-cname tracking-wide inline-block text-sm">
          {moment(publishedAt).format("ddd, MMM Do, YYYY")}
        </p>
        <p className="px-1 rounded-lg  bg-cname tracking-wide inline-block text-sm">
          <h2>{time.text}</h2>
        </p>
      </div>

      <h1 className="text-xl break-words ">
        {content.split(" ", 21).join(" ")}...
      </h1>
      <div className="flex items-center justify-between">
        <h2>Writter :{author}</h2>

        <Link href={`/blog/${id}`}>
          <a className="px-5 py-2 text-lg  border font-black">read more...</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
