import readingTime from "reading-time";
import moment from "moment";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
const post = ({ data }) => {
  const info = data.attributes;
  const authorName = info.author.data.attributes.name;
  const authorBio = info.author.data.attributes.bio;
  const date = info.publishedAt;
  const content = info.content;
  const time = readingTime(content);
  return (
    <div className="text-word font-main layout-spacing  bg-primary min-h-screen space-y-10">
      <h1 className="mb-2 text-center font-black text-5xl">{info.topic}</h1>
      <div className="mb-2 flex items-center justify-around border-b-2 text-tertiary">
        <p className="">{authorName}</p>
        <p className="">{time.text}</p>
        <p>{moment(date).format("ddd, MMM Do, YYYY")}</p>
      </div>
      <p
      
        className="text-2xl mb-2 break-words  "
      >
        <ReactMarkdown>{info.content}</ReactMarkdown>
      </p>
      <hr />
      <h3 className="text-center text-tag font-bold text-lg py-3 px-5 bg-secondary">
        {authorBio}
      </h3>
      <Link href="/blog">
        <a className="px-4 py-2 inline-block duration-150 shadow-lg border  hover:bg-cname hover:text-secondary transition  rounded-md">
          Click here to go back
        </a>
      </Link>
    </div>
  );
};

export default post;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/api/posts?populate=*`);
  const posts = await res.json();
  const paths = posts.data.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `http://localhost:1337/api/posts/${params.id}?populate=*`
    );
    const data = await res.json();
    if (!data) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
    return {
      props: {
        data: data.data,
        meta: data.meta,
      },
    };
  } catch (err) {}
}
