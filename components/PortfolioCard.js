import Image from "next/image";
import Buttons from "@components/Buttons";

const PortfolioCard = ({
  name,
  link,
  description,
  image,

  tech,
}) => {
  return (
    <div className=" w-72 overflow-hidden   font-main shadow-xl relative h-96 rounded-md border-secondary bg-secondary  ">
      <Image
        unoptimized
        src={image}
        width={600}
        height={300}
        alt={image}
        objectFit="cover"
      />

      <div className="p-5 text-word space-y-3  ">
        <h1 className="text-lg font-bold ">{name}</h1>
        <h2 className="text-base text-tertiary min-h-16  max-h-20 overflow-hidden">
          {description}
        </h2>
        <div className=" space-x-3 text-secondary">
          {tech?.tech.map((teche, index) => (
            <p
              className="px-1 font-black rounded-lg bg-cname inline-block text-sm"
              key={index}
            >
              {teche}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-lg  border font-black"
          >
            visit site ->{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
