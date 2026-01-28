import logo from "../assets/logo.svg";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Updated: Uses a softer bg and a more subtle border color
    <footer className="relative w-full bg-[#fcfcfd] dark:bg-[#0f1115] border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-700">
      
      {/* Decorative top blur for a soft transition from the main content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="mx-auto w-full max-w-screen-xl px-8 py-16 md:py-24">
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
          
          {/* Brand Column */}
          <div className="space-y-8 max-w-sm">
            <a href="#about" className="flex items-center gap-3 group w-fit">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/50 dark:border-slate-700/50 group-hover:scale-105 transition-transform duration-300">
                <img src={logo} className="h-8 w-auto" alt="Logo" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                OMAR<span className="text-sky-500">.</span>
              </span>
            </a>
            
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Building digital experiences that balance aesthetics with functional engineering. Based in Tunisia.
            </p>

            {/* Social Icons - More interactive & styled */}
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Mail, href: "#" }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Navigation
              </h4>
              <ul className="space-y-4 text-[15px] font-medium text-slate-600 dark:text-slate-400">
                {['About', 'Projects', 'Resume', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-sky-500/50 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Status
              </h4>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/20 text-[13px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for projects
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium text-slate-400 dark:text-slate-500">
            © {currentYear} Omar Aidi. Crafted with <span className="text-rose-400/70">❤</span> in Tunisia.
          </p>
          
          <div className="flex items-center gap-8 text-[12px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              Kairouan, TN
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}