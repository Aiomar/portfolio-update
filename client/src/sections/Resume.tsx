import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/Card";
import Profile from "../components/Profile";
import { forwardRef, useEffect, useState } from "react";
import type { Ref } from "react";
import { motion, useAnimation } from "motion/react";

const skillsData = {
  frontend: ["HTML/CSS/js", "TypeScript", "Vite/React", "Tailwind CSS"],
  backend: ["Nest js", "RESTful APIs"],
  database: ["MongoDB", "MySql", "Redis"],
  tools: ["Git", "Docker"],
};

type props = {
  id: string;
  currentVisibleSection: string;
};

const Resume = forwardRef((props: props, ref: Ref<HTMLDivElement | null>) => {
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const mainControls = useAnimation();

  useEffect(() => {
    if (props.currentVisibleSection === "resume") {
      mainControls.start("visible");
    }
  }, [props.currentVisibleSection, mainControls]);

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
      id={props.id}
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-center"
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="mt-12 mb-12 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl dark:text-white">
            Resume & Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[700px] dark:text-white">
            I've worked with a range of technologies in the web development
            world.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center xl:flex-row">
          {isMobile && <Profile />}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>
                  Technologies I use for building user interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>
                  Technologies I use for server-side development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Database</CardTitle>
                <CardDescription>
                  Technologies I use for data storage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.database.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>
                  Development tools and utilities I use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {!isMobile && <Profile />}
        </div>
      </motion.div>
    </section>
  );
});

Resume.displayName = "Resume";
export default Resume;
