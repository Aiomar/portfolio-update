import { motion } from "framer-motion";

type Props = {
  currentVisibleSection: string;
};

const navLinks = [
  { name: "About", href: "#about", id: "about" },
  { name: "Resume", href: "#resume", id: "resume" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Nav({ currentVisibleSection }: Props) {
  return (
    <nav className="w-full">
      <ul className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
        {navLinks.map((link) => {
          const isActive = currentVisibleSection === link.id;

          return (
            <li key={link.id} className="relative flex items-center">
              <a
                href={link.href}
                className={`relative z-10 block py-2 text-base lg:text-[13px] font-medium transition-colors duration-200
                  ${isActive 
                    ? "text-sky-500 dark:text-sky-400" 
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
              >
                {link.name}

                {/* Mobile Side Indicator */}
                <div className={`absolute left-[-16px] top-1/2 -translate-y-1/2 h-5 w-1 rounded-full
                 bg-sky-500 transition-opacity lg:hidden
                  ${isActive ? "opacity-100" : "opacity-0"}`} 
                />

                {/* Desktop Underline Indicator (Vite Style) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-[-px] left-0 right-0 hidden h-[2px] bg-sky-500 lg:block"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}