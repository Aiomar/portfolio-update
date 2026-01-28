import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowUpCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// sections & components
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);
  const toggleNavBar = () => setIsPhoneNavOpen((prev) => !prev);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activeSection, setActiveSection] = useState("about");

useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "10% 0px -50% 0px" }
    );

    const elements = Object.values(sectionRefs.current);
    
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Updated: Background uses a soft radial gradient for depth
    <div className="relative min-h-screen w-full transition-colors duration-700 
      bg-[#fcfcfd] dark:bg-[#0f1115] text-slate-900 dark:text-slate-100 selection:bg-sky-100 dark:selection:bg-sky-900/30">
      
      {/* Soft Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-sky-100/50 blur-[120px] dark:bg-sky-900/10" />
        <div className="absolute top-[40%] -right-[10%] h-[30%] w-[30%] rounded-full bg-indigo-100/40 blur-[100px] dark:bg-indigo-900/10" />
      </div>

      {/* Modern Progress Bar - Thinner and sleek */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 to-indigo-500 origin-left z-[70]"
        style={{ scaleX }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0f1115]/70 border-b border-slate-200/50 dark:border-slate-800/50">
        <Header
          theme={theme}
          updateTheme={toggleTheme}
          toggleNavBar={toggleNavBar}
          isPhoneNavOpen={isPhoneNavOpen}
          currentVisibleSection={activeSection}
        />
      </header>

      <AnimatePresence>
        {isPhoneNavOpen && (
          <Aside toggleNavBar={toggleNavBar} currentVisibleSection={activeSection} />
        )}
      </AnimatePresence>
      <main className="relative z-10 w-full flex flex-col items-center">
          {[
            { id: "about", Component: Bio },
            { id: "resume", Component: Resume },
            { id: "projects", Component: Projects },
            { id: "contact", Component: Contact }
          ].map(({ id, Component }) => (
            <section
              key={id}
              id={id}
              ref={(el) => { sectionRefs.current[id] = el; }}
              className="w-full max-w-7xl px-6 py-20 lg:py-32 min-h-[50vh]"
            >
              <Component 
                id={id} 
                currentVisibleSection={activeSection} 
                theme={theme}
                setMessage={(msg: string) => { toast.success(msg); }}
                setError={(err: string) => { toast.error(err); }}
              />
            </section>
          ))}
    </main>

      <Footer />

      {/* Refined Floating Action Button */}
      <AnimatePresence>
        {activeSection !== "about" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed right-8 bottom-8 z-50"
          >
            <a href="#about" aria-label="Scroll to top">
              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 text-sky-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/50 dark:border-slate-700/50 transition-all hover:-translate-y-1 active:scale-95">
                <ArrowUpCircle className="h-6 w-6" />
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer 
        position="bottom-right" // Modern placement
        theme={theme === "dark" ? "dark" : "light"}
        toastClassName={() => "relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800"}
      />
    </div>
  );
}