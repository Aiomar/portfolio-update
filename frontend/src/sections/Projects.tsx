import Project from "../components/Project";
import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import type {Ref} from 'react'

const Projects = forwardRef(({ id, currentVisibleSection }:props, ref:Ref<HTMLDivElement>) => {
const projects = [
  {
    title: "PADZONE E-Commerce Platform",
    description: "A fully responsive e-commerce website with product catalog, shopping cart, and payment integration.",
    tags: ["Vite", "React", "Nest js", "MongoDB",],
    image: "/padzone.png",
    githubLink: "https://github.com",
    link: "https://omarshop.vercel.app/",
    status:""
  },
  {
    title: "Med Portfolio App",
    description: "A fully responsive personel portfolio webapp",
    tags: ["Vite", "React", "Tailwind CSS"],
    image: "/medportfolio.png",
    githubLink: "https://github.com",
    link: "https://medyassine.vercel.app/",
    status:""
  },
  {
    title: "Notini",
    description: "a simple app that helps student calculates their result",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: "/notini.png",
    githubLink: "https://github.com",
    link: "https://notini.vercel.app/",
    status:""
  },
  {
    title: "PinkDragons",
    description: "E-sports team with a responsive design",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: "/pinkdragons.png",
    githubLink: "https://github.com",
    link: "https://pinkdragons.vercel.app/",
    status:""
  },
   {
    title: "E-commerce Shop ",
    description: "an ecommerce website made with laravel for selling clothes",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: "/clothesshop.png",
    githubLink: "https://github.com",
    link: "",
    status:""
  },
];

  //On Scroll animation
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();

  useEffect(() => {
    if (currentVisibleSection === "projects") {
      mainControls.start("visible");
    }
  }, [currentVisibleSection, mainControls]);

  return (
    <section
      id={id}
      ref={ref}
      className="w-full md:min-h-screen md:max-h-fit flex justify-center items-center flex-col
      bg-slate-100 dark:bg-gray-900 "
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex justify-center items-center ml-5 md:mt-5 mt-10">
          <h5 className="mb-10 text-5xl font-semibold text-gray-900 dark:text-white">
            Projects
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              details={project.description}
              link={project.link}
              repo={project.githubLink}
              img={project.image}
              status={project.status}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
});

type props = {
  id: string;
  currentVisibleSection: string;
}
Projects.displayName = "Projects";
export default Projects;
