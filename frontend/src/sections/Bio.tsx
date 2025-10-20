import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import type { Ref } from "react";
import codedark from "../assets/codedark.svg";
import codelight from "../assets/codelight.svg";

type props = {
  id: string;
  currentVisibleSection: string;
  theme: string;
};

const Bio = forwardRef((props: props, ref: Ref<HTMLDivElement | null>) => {
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (props.currentVisibleSection === "about") {
      mainControls.start("visible");
    }
  }, [props.currentVisibleSection, mainControls]);

  return (
    <section
      id={props.id}
      ref={ref}
      className="flex h-screen w-full flex-col items-center justify-center px-4"
    >
      <motion.div
        ref={ref}
        className="mt-40 flex w-full flex-col items-center justify-center lg:flex-row"
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="flex flex-col">
          <div className="flex flex-col items-center md:mt-20 md:items-start">
            <div className="flex flex-row">
              <p className="text-lg font-bold tracking-wider text-gray-800 sm:text-xl md:text-lg dark:text-white">
                Hello!
              </p>
              <p className="pl-2 text-lg font-bold tracking-wider text-gray-800 sm:text-xl md:text-lg dark:text-blue-400">
                I'm
              </p>
            </div>
            <div className="flex flex-row">
              <h1 className="mt-1 text-2xl font-bold sm:text-xl md:text-3xl dark:text-white">
                Omar
              </h1>
              <h1 className="mt-1 pl-2 text-2xl font-bold text-blue-400 sm:text-xl md:text-3xl">
                Aidi
              </h1>
            </div>

            <p className="mt-2 text-2xl sm:text-xl md:text-2xl dark:text-gray-500">
              Full-Stack Developer & CS Student
            </p>
          </div>
          <div className="md:text-md mt-2 w-96 text-lg leading-relaxed text-wrap sm:text-base">
            <p className="text-gray-700 dark:text-gray-300">
              19 years old Computer Science Student at ISIGK I’m currently a
              junior Full Stack Web Developer looking for great work
              opportunities and actively working towards becoming a Senior Full
              Stack Web Developer.
            </p>
          </div>
        </div>
        {props.theme === "dark" ? (
          <>
            <img
              src={codedark}
              className="md:float-left md:mr-10 md:flex min-w-[300px] md:max-w-[700px]"
              alt="Omar Aidi"
            />
          </>
        ) : (
          <>
            <img
              src={codelight}
              className="md:float-left md:mr-10 md:flex min-w-[300px] md:max-w-[700px]"
              alt="Omar Aidi"
            />
          </>
        )}
      </motion.div>
    </section>
  );
});

Bio.displayName = "Bio";
export default Bio;
