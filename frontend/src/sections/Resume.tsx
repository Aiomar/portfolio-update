import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/Card";
import type { Ref } from "react";
import {forwardRef, useEffect, useState} from "react";
import { motion, useAnimation } from "motion/react";
import Profile from "../components/Profile";

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
      if (currentVisibleSection === "resume") {
        mainControls.start("visible");
      }
    }, [currentVisibleSection, mainControls]);

  // verifiy if the screen is mobile width to show profile on top of resume cards
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className="flex flex-col items-center justify-center
      w-full min-h-screen"
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
          className="flex flex-col items-center text-center mb-12 mt-12"
        >
          <h2 
            className="text-3xl font-bold tracking-tight 
            md:text-4xl dark:text-white"
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
          className="flex flex-col md:flex-row items-center justify-center"
        >
          {isMobile&& <Profile/>}
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
          {!isMobile&& <Profile/>}
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