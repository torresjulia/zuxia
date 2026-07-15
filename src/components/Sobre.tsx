import { Code2, Laptop, Rocket } from 'lucide-react';

const tecnologias = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Git',
  'Figma',
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 px-4 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#6b21a8]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#94a3b8] text-sm">Quem somos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre a{' '}
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              Zuxia
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-6">
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Levamos tecnologia de qualidade para pequenas e médias empresas
              que querem crescer no digital sem complicação.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Criamos sites e sistemas modernos, rápidos e funcionais — sempre
              com atenção aos detalhes e ao impacto real que uma presença
              digital bem feita gera no negócio do cliente.
            </p>

            {/* Cards de destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-xl p-4 text-center">
                <Code2 size={24} className="text-[#6b21a8] mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Full Stack</p>
                <p className="text-[#94a3b8] text-xs mt-1">Front e back-end</p>
              </div>
              <div className="bg-[#110f1a] border border-[#3b82f6]/20 rounded-xl p-4 text-center">
                <Laptop size={24} className="text-[#3b82f6] mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Responsivo</p>
                <p className="text-[#94a3b8] text-xs mt-1">Mobile first</p>
              </div>
              <div className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-xl p-4 text-center">
                <Rocket size={24} className="text-[#6b21a8] mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Performance</p>
                <p className="text-[#94a3b8] text-xs mt-1">
                  Rápido e otimizado
                </p>
              </div>
            </div>
          </div>

          {/* Tecnologias */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">
              Tecnologias que utilizamos
            </h3>
            <div className="flex flex-wrap gap-3">
              {tecnologias.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#110f1a] border border-[#6b21a8]/30 text-[#94a3b8] px-4 py-2 rounded-full text-sm hover:border-[#6b21a8] hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Números */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
                  3+
                </p>
                <p className="text-[#94a3b8] text-xs mt-1">
                  Projetos entregues
                </p>
              </div>
              <div className="bg-[#110f1a] border border-[#3b82f6]/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
                  100%
                </p>
                <p className="text-[#94a3b8] text-xs mt-1">Satisfação</p>
              </div>
              <div className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
                  24h
                </p>
                <p className="text-[#94a3b8] text-xs mt-1">Suporte rápido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
