import PostCard from "@components/PostCard";

const Blog = ({ data }) => {

  return (
    <div className="layout-spacing  ">
      <div className="flex md:justify-evenly justify-around gap-10 flex-wrap  w-full ">
        {data.map(({ attributes, id }) => (
          <PostCard
            topic={attributes?.topic}
            publishedAt={attributes?.publishedAt}
            content={attributes?.content}
            author={attributes?.author?.data?.attributes?.name}
            key={id}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticProps(context) {
  try {
    const res = await fetch(`http://localhost:1337/api/posts?populate=*`);
    const data = await res.json();
    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: {
        data: data.data,
        meta: data.meta,
      },
      revalidate: 10,
    };
  } catch (err) {}
}
