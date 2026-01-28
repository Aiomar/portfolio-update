import Project from "../components/Project";
import { motion } from "framer-motion";

type Props = {
  id: string;
  currentVisibleSection: string;
};

const projectsData = [
  {
    title: "PADZONE E-Commerce",
    description: "Fully responsive platform with product catalog, cart, and payment integration.",
    image: "/padzone.png",
    githubLink: "https://github.com",
    link: "https://omarshop.vercel.app/",
    status: "finished",
  },
  {
    title: "Med Portfolio App",
    description: "A high-performance personal portfolio web application built for speed.",
    image: "/medportfolio.png",
    githubLink: "https://github.com",
    link: "https://medyassine.vercel.app/",
    status: "finished",
  },
  {
    title: "Notini",
    description: "Academic utility tool helping students calculate and track results effectively.",
    image: "/notini.png",
    githubLink: "https://github.com",
    link: "https://notini.vercel.app/",
    status: "finished",
  },
  {
    title: "PinkDragons",
    description: "E-sports team landing page featuring optimized responsive design patterns.",
    image: "/pinkdragons.png",
    githubLink: "https://github.com",
    link: "https://pinkdragons.vercel.app/",
    status: "finished",
  },
  {
    title: "E-commerce Shop",
    description: "Full-stack clothing store built with Laravel and React.",
    image: "/clothesshop.png",
    githubLink: "https://github.com",
    link: "",
    status: "dev",
  },
  {
    title: "Discord Website",
    description: "Promotional landing page for a specialized Discord community.",
    image: "/discordserver.png",
    githubLink: "https://github.com",
    link: "https://discord-server-nu.vercel.app/",
    status: "finished",
  },
  {
    title: "Dosis Website",
    description: "Promotional landing page for a specialized Discord community.",
    image: "/discordserver.png",
    githubLink: "https://github.com",
    link: "https://discord-server-nu.vercel.app/",
    status: "finished",
  },
];

export default function Projects({ id }: Props) {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto" // Slightly wider to accommodate grid
      >
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-sky-500/50" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-sky-500 uppercase">
              03. Selected Work
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>

        {/* Compact Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }} // Faster stagger for smaller cards
              viewport={{ once: true }}
            >
              <Project
                title={project.title}
                details={project.description}
                link={project.link}
                repo={project.githubLink}
                img={project.image}
                status={project.status}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}