import { Github, Linkedin } from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans ">
      {/* Header */}
      <header className="fixed top-0 w-full  backdrop-blur-md border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-medium tracking-tight">
              <span className="text-emerald-400 font-semibold">Dari</span>
              <span>_Dev</span>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="#habilidades"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                Habilidades
              </a>
              <a
                href="#experiencia"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                Experiencia
              </a>
              <a
                href="#educacion"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                Educación
              </a>
              <div className="flex gap-4 ml-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main >{children}</main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800/50 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 font-medium">Diseñado y desarrollado por Darlyn</div>
          <div className="text-gray-500">© 2024 Todos los derechos reservados</div>
        </div>
      </footer>
    </div>
  );
}