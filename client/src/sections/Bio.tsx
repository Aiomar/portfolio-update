import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import type { Ref } from "react";

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
    <motion.section
      id="about"
      ref={ref}
      initial= "hidden"
      variants={motionVariants}
      whileInView={"visible"}
      transition={{ duration: 0.5, delay: 0.25 }} 
      viewport={{once:true, amount: 0.3}}
      className="flex flex-col items-center w-screen md:w-full min-h-screen p-20"
    >
      <h1
        className="text-7xl md:text-9xl playfair-display dark:text-white mt-10"
      >
        Web Developer
      </h1>
      <div
        className="relative flex items-center justify-center h-fit w-fit  md:h-full md:w-full mb-20 mt-32"
      >
        <motion.div
          initial= "hidden"
          variants={motionVariants}
          whileInView={"visible"}
          transition={{ duration: 0.5, delay: 0.3 }} 
          viewport={{once:true, amount: 0.2}}
          className="absolute border-16 z-30 w-72 h-fit md:w-[900px] m-20 mt-0 md:mb-0 rounded-3xl
          dark:shadow-sm shadow-white scale-90 md:scale-100"
        >
         <img 
            src="/bio.png" 
            className="hidden md:block shadow-2xl  md:w-[900px]"
          />
          <img 
            src="/phone.png" 
            className="block md:hidden shadow-2xl  md:w-[900px]"
          />
        </motion.div>
        <div
          className="bg-sky-600 w-96 md:w-full h-96 rounded-4xl z-20 mt-32 md:mt-28"
        >
        </div>
      </div>
      <div
        className="w-full mt-1.5"
      >
        <p
          className="text-gray-600 font-semibold text-sm dark:text-gray-300 w-80 md:w-96 text-wrap"
        >
          20 years old Computer Science Student at ISIGK I’m currently a Full Stack Web Developer
          looking for great work opportunities 
        </p>
      </div>
    </motion.section>
  ) 
});

Bio.displayName = "Bio";
export default Bio;
