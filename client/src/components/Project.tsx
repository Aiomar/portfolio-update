import { Github, Globe, ArrowUpRight } from "lucide-react";

export type ProjectProps = {
  title: string;
  img: string;
  details: string;
  link: string;
  status: string;
  repo: string;
};

export default function Project({ title, img, details, link, status, repo }: ProjectProps) {
  const isFinished = status === "finished";

  return (
    <div className="group flex flex-col w-full h-full border border-slate-200/60 bg-white/50
     transition-all duration-300 hover:border-sky-500/50 hover:bg-white dark:border-slate-800/60
    dark:bg-slate-900/40 dark:hover:bg-slate-900/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md">
      
      {/* 1. Top: Image with Vite-style Grayscale filter */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60">
        <img 
          src={img} 
          alt={title} 
          className="h-full w-full object-cover  opacity-70 transition-all duration-700 
          group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
        />
        {/* Status Badge Over Image */}
        <div className="absolute top-3 right-3">
           <div className={`flex items-center gap-1.5 px-2 py-1 rounded-md backdrop-blur-md border text-[10px] font-bold uppercase tracking-wider ${
             isFinished 
               ? "bg-emerald-50/80 border-emerald-200/50 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400" 
               : "bg-amber-50/80 border-amber-200/50 text-amber-600 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400"
           }`}>
             <span className={`h-1 w-1 rounded-full ${isFinished ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
             {isFinished ? "Live" : "Dev"}
           </div>
        </div>
      </div>

      {/* 2. Middle: Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
            {title}
          </h3>
          <a href={link} target="_blank" className="text-slate-400 hover:text-sky-500 transition-colors">
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
          {details}
        </p>

        {/* 3. Bottom: Actions */}
        <div className="mt-auto pt-5 flex items-center gap-5">
          <a
            href={repo}
            target="_blank"
            className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <Github size={14} /> Source
          </a>
          <a
            href={link}
            target="_blank"
            className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-sky-500 transition-colors"
          >
            <Globe size={14} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}