import { twMerge } from "tailwind-merge";
import { TextButton } from "../components/TextButton";
import { Cards } from "../components/Cards";

const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Revolution of Blockchain API",
    desc: "Effortlessly integrate and manage blockchain data with our cutting-edge API, designrd for seamless connectivity.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Decentralized Data Solutions",
    desc: "Empower your applications with decentralized data solutions, ensuring security and transpirency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/cone.png",
    title: "Next-Gen Smart Contracts",
    desc: "Effortlessly integrate and manage blockchain data with our cutting-edge API, designrd for seamless connectivity.",
    color: "cyan",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Seamless BLockchain Integration",
    desc: "Effortlessly integrate and manage blockchain data with our cutting-edge API, designrd for seamless connectivity.",
    color: "violet",
  },
];

export const FeaturesCardsSection = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the Future of Blockchain with Blockforge
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, desc, color }) => (
              <Cards key={title} className="max-w-xs md:max-w-md ">
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    <img
                      src={image}
                      alt="Pill"
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl mt-12">
                  {title}
                </h3>
                <p className="text-lg text-zinc-400 mt-4">{desc}</p>
              </Cards>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }) => (
              <div
                key={title}
                className="size-2.5 bg-zinc-500 rounded-full"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
