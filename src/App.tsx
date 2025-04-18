import { Layout } from "./components/Layout";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceEducationSection } from "./components/ExperienceEducationSection";


export default function Portfolio() {
  // Habilidades
  const skills = {
    frontend: [
      "Vue.js",
      "JavaScript / TypeScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Vue Router / Pinia",
    ],
    design: ["UI Design", "Figma", "Accesibilidad Web"],
    tools: ["Git / GitHub", "Vite / Webpack", "REST APIs", "VS Code", "AI"],
  }

  // Experiencia
const experience = [
  {
    title: "Front-end Developer & UI",
    company: "Intelicorps",
    period: "Enero 2024 - Presente",
    description: "Desarrollo de interfaces con Vue.js, TypeScript y Tailwind CSS. Creación de componentes reutilizables, diseño UI/UX en Figma, integración con APIs REST y control de versiones con Git/GitHub."
  },
  {
    title: "Desarrollador Full-Stack Freelance",
    company: "Profesional Independiente",
    period: "Marzo 2023 - Enero 2024",
    description: "Desarrollo de aplicaciones en C# y servicios web. Edición de sitios con WordPress/Elementor, implementación de SSL, modelado de bases de datos y creación de documentación técnica."
  },
  {
    title: "Analista de Servicio Técnico",
    company: "Centro Médico Federico Ozanam",
    period: "Junio 2022 - Marzo 2023",
    description: "Implementación de red social interna, automatización de informes con Excel, soporte técnico de hardware/redes."
  },
  {
    title: "Pasante de Desarrollo",
    company: "Pharmetique Labs Venezuela",
    period: "Mayo 2021 - Diciembre 2021",
    description: "Programación en C#, manipulación de bases de datos, personalización de Moodle e implementación de herramientas Microsoft (SharePoint, Power Automate)."
  }
];

// Educación
const education = [
  {
    title: "Curso Responsive Web Design",
    institution: "freeCodeCamp",
    year: "2024",
    description: "HTML5, CSS3 avanzado (Flexbox, Grid), principios de accesibilidad y desarrollo responsive con enfoque mobile-first."
  },
  {
    title: "T.S.U en Informática",
    institution: "IUTECP",
    year: "2019 - 2021",
    description: "Fundamentos de programación, algoritmos, estructuras de datos y desarrollo de software con bases de datos relacionales."
  }
];
  return (
    <Layout>
    {/* Hero Section */}
    <section className="pt-36 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('src/assets/img/bg.gif')] opacity-15 bg-cover bg-center"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"  style={{ clipPath: "inset(0 0 0 0)" }}></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl">
          <div className="flex items-center gap-5 mb-10">
            <div className="relative">
              <img
                src="src/assets/img/darlyn.jpeg"
                alt="Profile"
                className="w-20 h-20 rounded-2xl shadow-lg border-2 border-emerald-500/20 object-cover"
              />
              <span className="absolute -bottom-2 -right-2 text-lg">✨</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Darlyn Guevara</h1>
            </div>
          </div>
          <h3 className="text-gray-400 text-lg mb-10 leading-relaxed">
            Mi enfoque es la <span className="font-bold">atención al detalle</span>, creando interfaces que no solo se ven bien, sino
            que también ofrecen una experiencia de usuario excepcional.
          </h3>
        </div>
      </div>
    </section>

    {/* Habilidades Section */}
    <SkillsSection skills={skills} />

    {/* Experiencia y Educación */}
    <ExperienceEducationSection experience={experience} education={education} />
  </Layout>
  )
}
