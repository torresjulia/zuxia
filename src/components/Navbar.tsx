'use client';

import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#08080f]/80 backdrop-blur-md border-b border-[#6b21a8]/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-1">
          <span className="text-[#94a3b8] font-bold text-lg">&lt;</span>
          <span className="bg-gradient-to-r from-[#14b8a6] to-[#a855f7] bg-clip-text text-transparent font-bold tracking-wide">
            zuxia
          </span>
          <span className="text-[#94a3b8] font-bold text-lg">/&gt;</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-[#94a3b8] hover:text-white transition-colors text-sm tracking-wide"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="text-[#94a3b8] hover:text-white transition-colors text-sm tracking-wide"
          >
            Projetos
          </a>
          <a
            href="#sistemas"
            className="text-[#94a3b8] hover:text-white transition-colors text-sm tracking-wide"
          >
            Sistemas
          </a>
          <a
            href="#servicos"
            className="text-[#94a3b8] hover:text-white transition-colors text-sm tracking-wide"
          >
            Serviços
          </a>

          <a
            href="#contato"
            className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contato
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-[#94a3b8]"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden bg-[#110f1a] px-4 pb-6 flex flex-col gap-4 border-t border-[#6b21a8]/20">
          <a
            href="#sobre"
            className="text-[#94a3b8] hover:text-white pt-4"
            onClick={() => setMenuAberto(false)}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="text-[#94a3b8] hover:text-white"
            onClick={() => setMenuAberto(false)}
          >
            Projetos
          </a>
          <a
            href="#sistemas"
            className="text-[#94a3b8] hover:text-white"
            onClick={() => setMenuAberto(false)}
          >
            Sistemas
          </a>
          <a
            href="#servicos"
            className="text-[#94a3b8] hover:text-white"
            onClick={() => setMenuAberto(false)}
          >
            Serviços
          </a>

          <a
            href="#contato"
            className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] text-white px-5 py-2 rounded-full text-sm font-medium text-center"
            onClick={() => setMenuAberto(false)}
          >
            Contato
          </a>
        </div>
      )}
    </header>
  );
}
