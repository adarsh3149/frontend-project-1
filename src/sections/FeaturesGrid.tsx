import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "Experience unparalled security and scalabity",
  "Fully benefit from scalable network",
  "Unlock the potential of decentralized networks",
];

export const FeaturesGridSection = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl  md:text-5xl lg::text-6xl">
                Empowering the future of blockchain.
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                Blockforge provides robust secure infrastructure to support the
                next generation of decentralized applications.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-cold">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <img
                  src="/assets/images/torus-knot.png"
                  alt="#"
                  className="size-96 max-w-none"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="#"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <img src="/assets/images/cone.png" alt="Cone" className="size-96 rotate-12 max-w-none"/>
                <img src="/assets/images/hemisphere.png" alt="Hemisphere" className="absolute top-3/4 -z-10 left-0"/>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Blockforge leads the way
              </h2>
              <div className="flex flex-col gap-4 text-xl lg:text-2xl text-zinc-400 mt-6">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem nisi quaerat eum aut, cupiditate, ipsam ipsa
                  exercitationem officiis fugiat repudiandae magni quis rem
                  dicta distinctio quisquam sint, expedita veniam? Sapiente?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                  beatae a eos quas perspiciatis. Consequatur nesciunt unde
                  molestiae minima? Reiciendis magnam praesentium, commodi
                  blanditiis dicta quibusdam consequuntur ducimus consectetur
                  voluptatum.
                </p>
              </div>
              <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
