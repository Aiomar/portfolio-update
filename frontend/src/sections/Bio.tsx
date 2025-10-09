import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import Contact from "./Contact";
import type { Ref } from "react";


type props = {
  id: string;
  currentVisibleSection: string;
}

const Bio = forwardRef(({ id, currentVisibleSection }:props, ref:Ref<HTMLDivElement>) => {
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (currentVisibleSection === "about") {
      mainControls.start("visible");
    }
  }, [currentVisibleSection, mainControls]);

  return (
    <section
      id={id}
      ref={ref}
      className="w-full h-screen flex flex-col items-center
      bg-slate-100 dark:bg-gray-900   px-4"
    >
      <motion.div
        ref={ref}
        className="mt-40 w-full max-w-5xl"
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="relative">
          <img
            src="/assets/profile.jpg"
            className="hidden md:w-64 rounded-full md:float-left md:mr-10 md:flex "
            alt="Omar Aidi"
          />
          <div className="md:hidden flex flex-col items-center mb-3">
            <img
              src="/assets/profile.jpg"
              className="rounded-full w-36 sm:w-44 md:w-52  md:float-right md:ml-6 "
              alt="Omar Aidi"
            />
          </div>

          <div className="flex items-center flex-col  md:items-start">
            <p className="text-lg sm:text-xl md:text-lg font-bold tracking-wider dark:text-white text-gray-800">
              Hi There 👋 I m
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Omar Aidi
            </h1>
            <p className="mt-2 text-blue-500 md:text-2xl   sm:text-xl font-semibold text-2xl">
              Full Stack Web Developer
            </p>
          </div>
          <div 
            className="mt-8 text-lg sm:text-base md:text-md text-gray-700
            dark:text-gray-300 leading-relaxed text-wrap w-96 md:ml-72"
          >
            <p>
              19 years old Computer Science Student at ISIGK I’m currently a
              junior Full Stack Web Developer looking for great work
              opportunities and actively working towards becoming a Senior Full
              Stack Web Developer.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5 ">
          <Contact />
        </div>
      </motion.div>
    </section>
  );
});

Bio.displayName = "Bio";
export default Bio;
