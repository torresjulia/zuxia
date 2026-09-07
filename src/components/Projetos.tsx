'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projetos = [
  {
    titulo: 'Sorriso Pleno',
    categoria: 'Odontologia & Estética Facial',
    descricao:
      'Landing page premium para clínica odontológica com foco em harmonização facial. Design sofisticado com paleta escura e detalhes dourados.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://sorriso-pleno.vercel.app',
    github: 'https://github.com/torresjulia/sorriso-pleno',
    imagem: '/images/sorriso-pleno.png',
    cor: 'from-[#1a1a2e] to-[#2a1a4e]',
    destaque: '#C9A84C',
  },
  {
    titulo: 'Mesa & Afeto',
    categoria: 'Buffet & Eventos',
    descricao:
      'Landing page calorosa e sofisticada para empresa de buffet e eventos. Paleta em terracota, bege e off-white transmitindo aconchego e gastronomia artesanal.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://mesa-e-afeto.vercel.app',
    github: 'https://github.com/torresjulia/mesa-e-afeto',
    imagem: '/images/mesa-e-afeto.png',
    cor: 'from-[#2a1a0e] to-[#3a2a1e]',
    destaque: '#c8956c',
  },
  {
    titulo: 'Versa Motors',
    categoria: 'Revenda de Veículos',
    descricao:
      'Landing page moderna e confiante para revenda de carros seminovos. Design com paleta escura e vermelha transmitindo solidez e dinamismo.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://versa-motors.vercel.app',
    github: 'https://github.com/torresjulia/versa-motors',
    imagem: '/images/versa-motors.png',
    cor: 'from-[#1a0a0a] to-[#2a1010]',
    destaque: '#ef4444',
  },
  {
    titulo: 'Belle Noiva Studio',
    categoria: 'Salão de Beleza & Noivas',
    descricao:
      'Landing page elegante para estúdio especializado em beleza para noivas. Design delicado com paleta rosada e dourada transmitindo sofisticação e romantismo.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://belle-noiva-studio.vercel.app',
    github: 'https://github.com/torresjulia/belle-noiva-studio',
    imagem: '/images/belle-noiva-studio.png',
    cor: 'from-[#2a1020] to-[#3a1a2e]',
    destaque: '#f9a8d4',
  },
  {
    titulo: 'Agata Vicente Beauty',
    categoria: 'Estética & Beleza',
    descricao:
      'Landing page sofisticada para estúdio especializado em sobrancelhas, cílios e maquiagem. Design dark glam com paleta em preto, rosé e dourado, transmitindo maturidade e autoridade no nicho de beleza.',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://agatavicentebeauty.com.br',
    github: null,
    imagem: '/images/agatabeauty-capa.png',
    cor: 'from-[#0a0a0a] to-[#2a1a1a]',
    destaque: '#d4a0a0',
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 px-4 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#94a3b8] text-sm">Nosso trabalho</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos{' '}
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              Desenvolvidos
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Sites institucionais e landing pages para negócios locais — cada
            projeto com identidade visual única.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.titulo}
              onClick={() =>
                window.open(projeto.link, '_blank', 'noopener,noreferrer')
              }
              role="link"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === 'Enter' &&
                window.open(projeto.link, '_blank', 'noopener,noreferrer')
              }
              className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-2xl overflow-hidden hover:border-[#6b21a8]/50 transition-all group cursor-pointer"
            >
              {/* Preview colorido */}
              <div
                className={`h-40 bg-gradient-to-br ${projeto.cor} flex items-end justify-start relative overflow-hidden`}
              >
                <Image
                  src={projeto.imagem}
                  alt={`Preview do projeto ${projeto.titulo}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
                {/* Gradiente sobre a imagem para o título ficar legível */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span
                  className="relative z-10 text-lg font-bold px-4 pb-3 drop-shadow-lg"
                  style={{ color: projeto.destaque }}
                >
                  {projeto.titulo}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: projeto.destaque }}
                >
                  {projeto.categoria}
                </span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">
                  {projeto.titulo}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  {projeto.descricao}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#08080f] text-[#94a3b8] text-xs px-3 py-1 rounded-full border border-[#6b21a8]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-sm text-white group-hover:text-[#3b82f6] transition-colors">
                    <ExternalLink size={16} />
                    Ver site
                  </span>

                  {projeto.github && (
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
