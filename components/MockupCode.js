import TypeIt from "typeit-react";

const MockupCode = () => {
  return (
    <div className="mockup-code ">
      <TypeIt
        options={{
          startDelay: 4000,
          waitUntilVisible: true,
          cursor: false
            
        }}
        getBeforeInit={(instance) => {
          instance

          return instance;
        }}
      >
        <pre data-prefix="1" className="inline-block">
          <code>npm i frontend-developer</code>
        </pre>
      </TypeIt>
      <TypeIt
        options={{
          startDelay: 7000,
          cursor: false

        }}
      >
        <pre data-prefix="2" className="block">
          <code>installing...</code>
        </pre>
      </TypeIt>
      <TypeIt
        options={{
          startDelay: 9000,
        }}
      >
        <pre data-prefix=">" className="text-success inline-block">
          <code>Done!</code>
        </pre>
      </TypeIt>
    </div>
  );
};

export default MockupCode;
