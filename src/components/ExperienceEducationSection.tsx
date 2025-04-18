import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

interface ExperienceEducationProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education: {
    title: string;
    institution: string;
    year: string;
    description: string;
  }[];
}

export function ExperienceEducationSection({ experience, education }: ExperienceEducationProps) {
  return (
    <section className="py-14 relative">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Experiencia y <span className="text-emerald-400">Formación</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiencia */}
          <ExperienceSection experience={experience} />
          {/* Educación */}
          <EducationSection education={education} />
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ experience }: { experience: ExperienceEducationProps["experience"] }) {
  return (
    <div id="experiencia">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-emerald-900/20 rounded-xl">
          <Briefcase className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Experiencia</h3>
      </div>
      <div className="space-y-8">
        {experience.map((item, index) => (
          <Card
            key={index}
            className="bg-black/40 border-gray-800/50 p-6 rounded-xl relative overflow-hidden group hover:border-emerald-800 transition-all"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/70 group-hover:bg-emerald-400 transition-colors"></div>
            <h4 className="text-xl font-bold mb-2 pl-4 text-white/70">{item.title}</h4>
            <div className="flex items-center gap-2 mb-4 pl-4">
              <span className="text-emerald-400 font-medium">{item.company}</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-400">{item.period}</span>
            </div>
            <p className="text-gray-300 pl-4 leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function EducationSection({ education }: { education: ExperienceEducationProps["education"] }) {
  return (
    <div id="educacion">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-emerald-900/20 rounded-xl">
          <GraduationCap className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Educación</h3>
      </div>
      <div className="space-y-8">
        {education.map((item, index) => (
          <Card
            key={index}
            className="bg-black/40 border-gray-800/50 p-6 rounded-xl relative overflow-hidden group hover:border-emerald-800 transition-all"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/70 group-hover:bg-emerald-400 transition-colors"></div>
            <h4 className="text-xl font-bold mb-2 pl-4 text-white/70">{item.title}</h4>
            <div className="flex items-center gap-2 mb-4 pl-4">
              <span className="text-emerald-400 font-medium">{item.institution}</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-400">{item.year}</span>
            </div>
            <p className="text-gray-300 pl-4 leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}