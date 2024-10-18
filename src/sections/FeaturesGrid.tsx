import { useRef } from "react";
import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";

const listItems = [
  "Experience unparalled security and scalabity",
  "Fully benefit from scalable network",
  "Unlock the potential of decentralized networks",
];

export const FeaturesGridSection = () => {
  const torusRef = useRef(null);
  const firstHemisphereRef = useRef(null);
  const secondHemisphereRef = useRef(null);
  const coneRef = useRef(null);

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const torusTranslateY = useTransform(
    torusScrollYProgress,
    [0, 1],
    [100, -100]
  );
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [30, -30]);

  const { scrollYProgress: firstHemisphereYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const firstHemisphereTranslateY = useTransform(
    firstHemisphereYProgress,
    [0, 1],
    [50, -50]
  );
  const firstHemisphereRotate = useTransform(
    firstHemisphereYProgress,
    [0, 1],
    [-20, -50]
  );

  const { scrollYProgress: coneYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });
  const coneTranslateY = useTransform(coneYProgress, [0, 1], [100, -100]);
  const coneRotate = useTransform(coneYProgress, [0, 1], [12, 45]);

  const { scrollYProgress: secondHemisphereProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });
  const secondHemisphereTranslateY = useTransform(
    secondHemisphereProgress,
    [0, 1],
    [50, -50]
  );
  const secondHemisphereRotate = useTransform(
    secondHemisphereProgress,
    [0, 1],
    [-20, 10]
  );

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
                <motion.img
                  src="/assets/images/torus-knot.png"
                  alt="#"
                  className="size-96 max-w-none"
                  ref={torusRef}
                  style={{
                    translateY: torusTranslateY,
                    rotate: torusRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="#"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                    translateY: firstHemisphereTranslateY,
                    rotate: firstHemisphereRotate,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <motion.img
                  src="/assets/images/cone.png"
                  alt="Cone"
                  className="size-96 rotate-12 max-w-none"
                  ref={coneRef}
                  style={{
                    translateY: coneTranslateY,
                    rotate: coneRotate,
                  }}
                />
                <motion.img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere"
                  className="absolute top-3/4 -z-10 left-0"
                  ref={secondHemisphereRef}
                  style={{
                    translateY: secondHemisphereTranslateY,
                    rotate: secondHemisphereRotate,
                  }}
                />
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
