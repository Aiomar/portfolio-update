import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="w-4 h-4" />,
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    skills: ["NestJS", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    category: "DevOps",
    icon: <Wrench className="w-4 h-4" />,
    skills: ["Docker", "Git", "CI/CD", "Linux"],
  },
  {
    category: "Database",
    icon: <Database className="w-4 h-4" />,
    skills: ["MongoDB", "Redis", "MySQL", "PostgreSQL"],
  },
];

type Props = {
  id: string;
  currentVisibleSection: string;
};

export default function Resume({ id }: Props) {
  return (
    <div className="w-full py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Simple Text Header */}
        <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-sky-500">Stack</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Core technologies I use to build and deploy applications.
          </p>
        </div>

        {/* Minimal List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skillsData.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Category Title */}
              <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                <span className="text-sky-500">{item.icon}</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">{item.category}</h3>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {item.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 group cursor-default">
                    {/* Small dot indicator */}
                    <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-sky-500 transition-colors" />
                    <span className="text-[13px] font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}