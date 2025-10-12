import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import type { Ref } from "react";
import codedark from '../assets/codedark.svg'
import codelight from '../assets/codelight.svg'

type props = {
  id: string;
  currentVisibleSection: string;
  theme: string;
}

const Bio = forwardRef(({ id, currentVisibleSection, theme }:props, ref:Ref<HTMLDivElement | null>) => {
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
      className="w-full h-screen flex flex-col items-center px-4"
    >
      <motion.div
        ref={ref}
        className="flex flex-col md:flex-row mt-40 w-full max-w-5xl"
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="flex flex-col">
          <div className="flex items-center flex-col  md:items-start md:mt-20">
             <div 
              className="flex flex-row"
              >
                <p 
                  className="text-lg sm:text-xl md:text-lg font-bold
                  tracking-wider dark:text-white text-gray-800"
                >
                  Hello!
                </p>
                <p 
                  className="text-lg pl-2 sm:text-xl md:text-lg font-bold
                  tracking-wider dark:text-blue-400 text-gray-800"
                >
                  I'm
                </p>
              </div>
            <div 
              className="flex flex-row"
            >
              <h1 
                className="mt-1 dark:text-white md:text-3xl sm:text-xl font-bold text-2xl"
              >
                Omar 
              </h1>
              <h1 
                className="mt-1 pl-2 text-blue-400 md:text-3xl  
                sm:text-xl font-bold text-2xl"
                >
                Aidi
              </h1>
            </div>
           
            <p 
              className="mt-2 dark:text-gray-500 md:text-2xl
              sm:text-xl text-2xl"
            >
              Full-Stack Developer & CS Student
            </p>
          </div>
          <div 
            className="mt-2 text-lg sm:text-base md:text-md 
            leading-relaxed text-wrap w-96"
          >
            <p 
              className="text-gray-700 dark:text-gray-300"
            >
              19 years old Computer Science Student at ISIGK I’m currently a
              junior Full Stack Web Developer looking for great work
              opportunities and actively working towards becoming a Senior Full
              Stack Web Developer.
            </p>
          </div>
        </div>
        {
          theme === 'dark'? 
          (  
            <>
              <img
                src={codedark}
                className="hidden md:max-w-[700px] md:float-left md:mr-10 md:flex "
                alt="Omar Aidi"
              />
              <div className="md:hidden flex flex-col items-center mb-3">
                <img
                  src={codedark}
                  className="w-96 sm:w-44 md:w-52  md:float-right md:ml-6 "
                  alt="Omar Aidi"
                />
              </div>
            </>
          )
          :
          ( 
            <>
             <img
                src={codelight}
                className="hidden md:max-w-[700px] md:float-left md:mr-10 md:flex "
                alt="Omar Aidi"
              />
              <div 
                className="md:hidden flex flex-col items-center mb-3"
              >
                <img
                  src={codelight}
                  className="w-96 sm:w-44 md:w-52  md:float-right md:ml-6 "
                  alt="Omar Aidi"
                />
              </div>
            </>
           )
        }

      </motion.div>
    </section>
  );
});

Bio.displayName = "Bio";
export default Bio;
