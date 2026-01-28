import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Ref } from "react";

type Props = {
  id: string;
  currentVisibleSection: string;
  theme: string;
};

const Bio = forwardRef((props: Props, ref: Ref<HTMLDivElement | null>) => {
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
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 overflow-hidden"
    >
      {/* Dynamic Background Text (Watermark style) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <h2 className="text-[12vw] font-black uppercase text-zinc-100 dark:text-zinc-900/50 whitespace-nowrap">
          Full Stack
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container relative z-10 px-6 mx-auto flex flex-col items-center"
      >
        {/* Main Title with Playfair refinement */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl playfair-display dark:text-white font-medium tracking-tight">
            Web <span className="italic text-sky-600">Developer</span>
          </h1>
        </div>

        <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center gap-12">

          {/* Content Block */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-sky-600"></span>
                <span className="uppercase tracking-[0.2em] text-xs font-bold text-sky-600">Based in Tunisia</span>
              </div>
              
              <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-300 leading-relaxed">
                20-year-old Computer Science Student at <span className="font-semibold text-zinc-900 dark:text-white">ISIGK</span>. 
                I build digital solutions that bridge the gap between design and robust engineering.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full border border-zinc-200
                dark:border-zinc-800 text-sm font-medium dark:text-white">
                  🚀 Currently building with React & NestJS
                </div>
                <div className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm 
                  font-medium dark:text-white">
                  🎓 CS Student
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Bio.displayName = "Bio";
export default Bio;