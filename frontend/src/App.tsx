import { useEffect, useState, useRef } from "react"
import { ArrowUpCircle } from "lucide-react";
// sections
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
// components
import Header from "./components/Header"
import Footer from "./components/Footer"
import Aside from "./components/Aside";

export default function App() {
  // theme controlles
  const localTheme = String(localStorage.getItem("theme")) || 'light';
  const [theme, setTheme] = useState<string>(localTheme);
  const updateTheme = ()=>{
    setTheme(theme === 'dark'? 'light': 'dark');
  }
  useEffect(()=>{
     localStorage.setItem("theme", theme)
     if (theme === 'dark') {
      document.documentElement.classList.add(theme)
     }
    },
    [theme]
  )

  // Mobile navigation control
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState<boolean>(false);
  const toggleNavBar = () => setIsPhoneNavOpen((prev) => !prev);

  // Create a ref to store your sections’ DOM nodes
  const sectionsRefs = useRef([]);

  // State to track which section is visible
  const [currentVisibleSection, setcurrentVisibleSection] = useState("about");

  // Setup Intersection Observer (using useLayoutEffect ensures refs are populated)
  useEffect(() => {
    const sections = ["about", "projects", "resume", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sections.includes(entry.target.id)) {
            setcurrentVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe each section stored in the refs array
    sectionsRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    const currentSection = sectionsRefs.current;
    return () => {
      currentSection.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const showTopScroll = currentVisibleSection !== "about";

  return (
    <div className="w-full h-screen max-h-fit relative overflow-x-hidden no-scrollbar">
      <div className="fixed right-0 left-0 z-40 w-full">
        <Header 
          theme={theme}
          updateTheme={updateTheme}
          toggleNavBar={toggleNavBar}
          isPhoneNavOpen={isPhoneNavOpen}
          currentVisibleSection={currentVisibleSection} 
        />
      </div>
      {isPhoneNavOpen && 
        <Aside toggleNavBar={toggleNavBar} currentVisibleSection={currentVisibleSection} />
      }
      <Bio
        ref={(el) => {
          sectionsRefs.current[0] = el;
        }}
        id="about"
        currentVisibleSection={currentVisibleSection}
      />
      <Projects
        ref={(el) => {
          sectionsRefs.current[1] = el;
        }}
        id="projects"
        currentVisibleSection={currentVisibleSection}
      />
      <Resume
        ref={(el) => {
          sectionsRefs.current[2] = el;
        }}
        id="resume"
        currentVisibleSection={currentVisibleSection}
      />
      <Contact
        ref={(el) => {
          sectionsRefs.current[3] = el;
        }}
        id="contact"
        currentVisibleSection={currentVisibleSection}
      />
      <Footer />
      {showTopScroll && (
        <div className="z-50 fixed bottom-20 right-7 md:bottom-5 md:right-10">
          <a href="#about">
            <button
              className="flex items-center justify-center rounded-full w-12 h-12 bg-sky-400
            over:bg-sky-300 transition-shadow shadow-md hover:scale-105"
            >
              <ArrowUpCircle size={20} className="text-white dark:text-black" />
            </button>
          </a>
        </div>
      )}
    </div>
  );
}

