import Nav from "./Nav";
import { motion } from "framer-motion";

type Props = {
  toggleNavBar: () => void;
  currentVisibleSection: string;
};

export default function Aside({ toggleNavBar, currentVisibleSection }: Props) {
  return (
    <motion.aside
      // Initial state for the backdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={toggleNavBar}
      className="fixed inset-0 z-[60] bg-slate-900/20 backdrop-blur-sm lg:hidden"
    >
      {/* The Sidebar Panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        className="h-full w-[280px] bg-white/95 dark:bg-[#0f1115]/95 backdrop-blur-xl 
                   border-r border-slate-200/50 dark:border-slate-800/50 shadow-2xl"
      >
        <div className="flex flex-col h-full p-8">
          {/* Top Branding Section in Sidebar */}
          <div className="mb-12 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-white text-xs">
              O.
            </div>
            <span className="font-bold tracking-tight text-slate-900 dark:text-white">
              Navigation
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex-1">
            <Nav 
              currentVisibleSection={currentVisibleSection} 
              // You might want to pass toggleNavBar to Nav links 
              // so it closes automatically when a link is clicked
            />
          </div>

          {/* Bottom Decoration/Info */}
          <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800/50">
             <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
               Based in Tunisia
             </p>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
}