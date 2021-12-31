import Code from "@components/Code";
import ProgressBar from "@components/ProgressBar";
import Stats from "@components/Stats";
import  Head  from "next/head";

const about = () => {
  return (
    <div className="text-word w-screen space-x-5 flex flex-col md:flex-row justify-between layout-spacing ">
      <Head>
        <title>About me</title>
        <meta name="description" content="lawal Adebola portfolio website" />
      </Head>
      <div className=" flex-1 space-y-5">
        <Code
          tagName="h1"
          bWord
          content="about Moi"
          wantClass
          wantedClass="text-4xl text-gray-300"
          className="text-4xl sm:text-6xl lg:text-4xl "
        />

        <Code
          tagName="h2"
          content=" An exceptional technical individual and excellent team player with a passion to design and implement highly responsive and seo driven user interfaces with great experience using the React framework. i am currently seeking a position in a growth oriented company to utilize my expertise in implementing user interaction following client-approved mock-Ups, such as wire-frames, visual design comprehensive layout, and prototypes.bringing a key eye for details, strong ability to implement mock-ups and understanding of  great user experience design. with knowledge of backend also, am able to easily understand and connect the client side to the available server"
          className=" text-lg md:text-2xl capitalize tracking-wide text-justify"
          wantClass={true}
          wantedClass="font-bold text-xl"
          bWord
        />
      </div>
      <div className=" flex-1 space-y-10 w-full self-center">
        <ProgressBar skill="react.js" percent="90%" color="bg-tag" />
        <ProgressBar skill="Next.js" percent="95%" color="bg-cname" />
        <ProgressBar skill="Node" percent="70%" color="bg-class" />
        <ProgressBar skill="Express" percent="60%" color="bg-green-700" />
        <Stats />
      </div>
    </div>
  );
};
export default about;
