import { useEffect, useState, useRef } from "react";
import { ArrowUpCircle } from "lucide-react";
import { toast } from "react-toastify";
// sections
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

export default function App() {
  // theme controlles
  const localTheme = String(localStorage.getItem("theme")) || "light";
  const [theme, setTheme] = useState<string>(localTheme);
  const updateTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Mobile navigation control
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState<boolean>(false);
  const toggleNavBar = () => setIsPhoneNavOpen((prev) => !prev);

  // Create a ref to store your sections’ DOM nodes
  // typed as an array of possible HTMLDivElement or null values
  const sectionsRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1 },
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

  // messages submit with react toast & error handling
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
    } else if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
      });
    }
    setError("");
    setMessage("");
  }, [message, error]);

  return (
    <div 
      className="no-scrollbar relative h-screen max-h-fit w-full overflow-x-hidden"
    >
      <div  
        className="fixed right-0 left-0 z-40 w-full"
      >
        <Header
          theme={theme}
          updateTheme={updateTheme}
          toggleNavBar={toggleNavBar}
          isPhoneNavOpen={isPhoneNavOpen}
          currentVisibleSection={currentVisibleSection}
        />
      </div>
      {isPhoneNavOpen && (
        <Aside
          toggleNavBar={toggleNavBar}
          currentVisibleSection={currentVisibleSection}
        />
      )}
      <Bio
        ref={(el: HTMLDivElement | null) => {
          sectionsRefs.current[0] = el;
        }}
        id="about"
        currentVisibleSection={currentVisibleSection}
        theme={theme}
      />
      <Resume
        ref={(el: HTMLDivElement | null) => {
          sectionsRefs.current[2] = el;
        }}
        id="resume"
        currentVisibleSection={currentVisibleSection}
      />
      <Projects
        ref={(el: HTMLDivElement | null) => {
          sectionsRefs.current[1] = el;
        }}
        id="projects"
        currentVisibleSection={currentVisibleSection}
      />
      <Contact
        ref={(el: HTMLDivElement | null) => {
          sectionsRefs.current[3] = el;
        }}
        id="contact"
        currentVisibleSection={currentVisibleSection}
        setMessage={setMessage}
        setError={setError}
      />
      <Footer />
      {showTopScroll && (
        <div className="fixed right-7 bottom-20 z-50 md:right-10 md:bottom-5">
          <a href="#about">
            <button 
              className="over:bg-sky-300 flex h-12 w-12 items-center justify-center 
              rounded-full bg-sky-400 shadow-md transition-shadow hover:scale-105
              hover:shadow-gray-500 dark:hover:shadow-gray-700">
              <ArrowUpCircle
                size={50}
                className="text-white dark:text-gray-900"
              />
            </button>
          </a>
        </div>
      )}
      {}
    </div>
  );
}
