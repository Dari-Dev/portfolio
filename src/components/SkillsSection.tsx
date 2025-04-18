import { Code, Palette, Terminal } from "lucide-react";
import { Card } from "./ui/card";

interface SkillsProps {
  skills: {
    frontend: string[];
    design: string[];
    tools: string[];
  };
}

export function SkillsSection({ skills }: SkillsProps) {
  return (
    <section id="habilidades" className="py-14 bg-gradient-to-b from-black/30 to-black/10 relative">
      <div className="absolute -top-40 left-1/2 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Mis <span className="text-emerald-400">Especialidades</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <SkillCard title="Frontend" icon={<Code className="w-6 h-6 text-emerald-400" />} skills={skills.frontend} />
          {/* Diseño */}
          <SkillCard title="Diseño" icon={<Palette className="w-6 h-6 text-emerald-400" />} skills={skills.design} />
          {/* Herramientas */}
          <SkillCard title="Herramientas" icon={<Terminal className="w-6 h-6 text-emerald-400" />} skills={skills.tools} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, skills }: { title: string; icon: JSX.Element; skills: string[] }) {
  return (
    <Card className="bg-black/40 border-gray-800/50 p-8 hover:border-emerald-800 transition-all rounded-2xl group hover:translate-y-[-5px]">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-900/20 rounded-xl group-hover:bg-emerald-900/30 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold tracking-tight text-white/70">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-3 font-medium">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
}