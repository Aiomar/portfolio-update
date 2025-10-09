import Icon from "./Icon";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
// assets import
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import gmail from '../assets/gmail.svg'
import github from '../assets/github.svg'
import discord from '../assets/discord.svg'
import fiverr from '../assets/fiverr.svg'

export default function Social() {
  //on scorll animation
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView, mainControlls]);

  return (
    <motion.div
      ref={ref}
      variants={motionVariants}
      initial="hidden"
      animate={mainControlls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div 
        className="grid grid-cols-3 md:grid-cols-4 md:ml-96"
      >
        <Icon
          img={gmail}
          link="mailto:aidi360omar@gmail.com"
        />
        <Icon
          img={facebook}
          link="https://www.facebook.com/omar.aidi.12139"
        />
        <Icon
          img={instagram}
          link="https://www.instagram.com/omar.ai.di/"
        />

        <Icon
          img={github}
          link="https://github.com/Aiomar"
        />
        <Icon
          img={discord}
          link="https://discord.gg/dzWm6DCztZ"
        />
        <Icon
          img={fiverr}
          link="https://www.fiverr.com/omaraydi/buying?source=avatar_menu_profile"
        />
      </div>
    </motion.div>
  );
}
