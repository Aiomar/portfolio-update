import { Moon, Sun, X, Menu } from "lucide-react";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  theme: string;
  updateTheme: () => void;
  toggleNavBar: () => void;
  isPhoneNavOpen: boolean;
  currentVisibleSection: string;
};

export default function Header({ 
  theme, 
  updateTheme, 
  toggleNavBar, 
  isPhoneNavOpen, 
  currentVisibleSection 
}: Props) {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 h-18 w-full border-b 
      border-slate-200/60 bg-white/80 backdrop-blur-md transition-colors 
      duration-500 dark:border-slate-800/60 dark:bg-[#0f1115]/80"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        
        {/* 1. LEFT: Clean Branding */}
        <div className="flex items-center gap-3">
          <a href="#about" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
             <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
               OMAR<span className="text-sky-500">.</span>DEV
             </span>
          </a>
        </div>

        {/* 2. RIGHT: Combined Nav & Actions */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <Nav currentVisibleSection={currentVisibleSection} />
          </nav>

          {/* Action Area (Theme + Social/Menu) */}
          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-800 ml-2 pl-4">
            <button
              onClick={updateTheme}
              className="p-2 text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={toggleNavBar}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-400"
            >
              {isPhoneNavOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}