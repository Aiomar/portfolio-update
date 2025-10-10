import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import type { Ref } from "react";
import {forwardRef, useEffect} from "react";
import { motion, useAnimation } from "motion/react";
import profile from '../assets/profile.jpg'
import { Download } from "lucide-react";

const skillsData = {
  frontend: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS", "Material UI"],
  backend: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
  database: ["MongoDB", "PostgreSQL", "Firebase", "Redis"],
  tools: ["Git", "Docker", "AWS", "Figma", "Adobe XD", "Webpack", "Vite"]
};

const Resume = forwardRef (
  ({id, currentVisibleSection}: props, ref: Ref<HTMLDivElement | null>) => 
{
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
      className="flex flex-col items-center justify-center w-full h-screen"
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }} 
        className="container px-4 md:px-6 mx-auto"
      >
        <div 
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 
            className="text-3xl font-bold tracking-tight md:text-4xl dark:text-white"
          >
             Resume & Skills 
          </h2>
          <p 
            className="mt-4 text-muted-foreground max-w-[700px] dark:text-white"
          >
            I've worked with a range of technologies in the web development world.
          </p>
        </div>
        <div
          className="flex flex-row items-center justify-center"
        >
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2  gap-5"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  Frontend
                </CardTitle>
                <CardDescription>
                  Technologies I use for building user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>Technologies I use for server-side development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Database</CardTitle>
                <CardDescription>Technologies I use for data storage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.database.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>Development tools and utilities I use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div 
            className="flex flex-col items-center bg-white dark:bg-gray-800 border 
            border-gray-200 rounded-xl shadow-sm hover:shadow-md p-4 h-96
            transition-shadow dark:shadow-blue-200 duration-300 w-96 ml-20"
          >
            <img
              src={profile}
              className="hidden md:w-50 rounded-full md:float-left  md:flex "
              alt="Omar Aidi"
            />
            <div 
              className="md:hidden flex flex-col items-center mb-3"
            >
              <img
                src={profile}
                className="rounded-full w-36 sm:w-44 md:w-52
                md:float-right md:ml-6"
                alt="Omar Aidi"
              />
          </div>
            <p className="mt-2 dark:text-gray-300 font-semibold text-xl">
              Omar Aidi
            </p>            
             <p className="mt-2 text-gray-600 dark:text-gray-400 font-semibold text-md">
              Full-Stack Developer & CS Student
            </p>
            <button
              className="flex flex-row mt-5 bg-blue-400 
              hover:dark:bg-blue-500 p-2 rounded-xl"
            >
              <Download className="mr-2"/>
              Download Resume
            </button>
        </div>
        </div>
        
      </motion.div>
    </section>
  );
});


type props = {
  id: string;
  currentVisibleSection: string;
}

Resume.displayName = 'Resume';
export default Resume;