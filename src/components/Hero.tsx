'use client';

import { ArrowDown, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Fundo com gradiente e brilhos */}
      <div className="absolute inset-0 bg-[#08080f]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6b21a8]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
          <span className="text-[#94a3b8] text-sm">
            Aceitando novos projetos
          </span>
        </div>

        {/* Nome */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Bem-vindo à{' '}
          <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
            zuxia
          </span>
        </h1>

        {/* Cargo */}
        <h2 className="text-xl md:text-2xl text-[#94a3b8] mb-6 font-light">
          Sua agência de desenvolvimento web para{' '}
          <span className="text-white font-medium">
            pequenas e médias empresas
          </span>
        </h2>

        {/* Descrição */}
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos sua ideia em uma experiência digital completa — do
          design ao código. Sites modernos, rápidos e sob medida para o seu
          negócio crescer no digital.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projetos"
            className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Ver Projetos
          </a>

          <a
            href="https://wa.me/5519995802332?text=Olá,%20vim%20pelo%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#6b21a8]/50 text-white px-8 py-4 rounded-full font-medium hover:border-[#6b21a8] hover:bg-[#6b21a8]/10 transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/julia-torres-4531bb136/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://wa.me/5519995802332"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <MessageCircle size={22} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce text-[#94a3b8]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
