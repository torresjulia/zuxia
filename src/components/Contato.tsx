import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-24 px-4 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#6b21a8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#94a3b8] text-sm">Vamos conversar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em{' '}
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-lg">
            Tem um projeto em mente? Conta sua ideia e vamos transformar em
            realidade juntos.
          </p>
        </div>

        {/* Cards de contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://wa.me/5519995802332?text=Olá,%20vim%20pelo%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-2xl p-6 text-center hover:border-[#6b21a8]/50 hover:bg-[#6b21a8]/5 transition-all group"
          >
            <MessageCircle
              size={32}
              className="text-[#6b21a8] mx-auto mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-white font-semibold mb-1">WhatsApp</p>
            <p className="text-[#94a3b8] text-sm">(19) 99580-2332</p>
          </a>

          <a
            href="mailto:julia@jtstudio.com.br"
            className="bg-[#110f1a] border border-[#3b82f6]/20 rounded-2xl p-6 text-center hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/5 transition-all group"
          >
            <Mail
              size={32}
              className="text-[#3b82f6] mx-auto mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-white font-semibold mb-1">E-mail</p>
            <p className="text-[#94a3b8] text-sm">julia@jtstudio.com.br</p>
          </a>

          <div className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-2xl p-6 text-center">
            <MapPin size={32} className="text-[#6b21a8] mx-auto mb-4" />
            <p className="text-white font-semibold mb-1">Localização</p>
            <p className="text-[#94a3b8] text-sm">Mogi Mirim, SP</p>
          </div>
        </div>

        {/* CTA principal */}
        <div className="bg-gradient-to-r from-[#6b21a8]/20 to-[#3b82f6]/20 border border-[#6b21a8]/30 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-[#94a3b8] mb-8">
            Respondemos em até 24 horas. Vamos conversar sobre sua ideia!
          </p>

          <a
            href="https://wa.me/5519995802332?text=Olá,%20vim%20pelo%20portfólio%20e%20gostaria%20de%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] text-white px-10 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Solicitar orçamento agora
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#6b21a8]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} zuxia — Todos os direitos reservados
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/torresjulia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/julia-torres-4531bb136/?skipRedirect=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/5519995802332"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-white transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
