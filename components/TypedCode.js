import TypeIt from "typeit-react";

const TypedCode = () => {
  return (
    <code className="text-word text-2xl  tracking-widest block font-main">
      <TypeIt
        options={{}}
        getBeforeInit={(instance) => {
          instance;

          return instance;
        }}
      >
        <span className="text-xl font-style lowercase font-black">
          &lt;<span className="text-tag">h2</span>
          <span>
            {" "}
            <span className="text-class">class</span>
            <span className="text-vsb">=</span>
            <span className="text-cname">text-white text-lg</span>
          </span>
          &gt;
        </span>
        <br />
        <span className="ml-10  tracking-wide capitalize">
          beginning <strong>5 years ago </strong>i started creating web app at a
          very young age with no direction of where it going to lead me to, just
          the passion. but as i grew older, it became clear that this was more
          than a passion, it was a career choice, having created over strong
        </span>
        <br />
        <span className="text-xl font-style lowercase font-black">
          &lt;/
          <span className="text-tag">h2</span>&gt;
        </span>
      </TypeIt>
    </code>
  );
};

export default TypedCode;
