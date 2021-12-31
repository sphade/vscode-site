import PortfolioCard from "@components/PortfolioCard";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

const Portfolio = ({ data, meta }) => {
  return (
    <div className="  bg-primary layout-spacing ">
      <Head>
        <title>my Project</title>
        <meta name="description" content="lawal Adebola portfolio website" />
      </Head>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  place-items-center gap-10 py-10">
        {data.map(({ attributes, id }) => (
          <PortfolioCard
            key={id}
            name={attributes.name}
            description={attributes.description}
            link={attributes.link}
            image={attributes.image.data.attributes.url}
            tech={attributes.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

export async function getStaticProps(context) {
  try {
    const res = await fetch(`http://localhost:1337/api/portfolios?populate=*`);
    const data = await res.json();
    return {
      props: {
        data: data.data,
        meta: data.meta,
      },
    };
  } catch (err) {}
}
