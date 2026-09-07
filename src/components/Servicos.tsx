import { Globe, Settings, TrendingUp } from 'lucide-react';

const servicos = [
  {
    icone: <Globe size={32} />,
    titulo: 'Sites Institucionais',
    descricao:
      'Landing pages e sites completos para pequenas e médias empresas. Design moderno, responsivo e otimizado para o Google.',
    itens: [
      'Landing page',
      'Site institucional (até 5 páginas)',
      'Mobile responsivo',
      'SEO básico',
      'Integração com WhatsApp',
    ],
    preco: 'A partir de R$ 800',
    destaque: false,
  },
  {
    icone: <Settings size={32} />,
    titulo: 'Sistemas Web',
    descricao:
      'Sistemas personalizados para automatizar e organizar processos do seu negócio. Do mais simples ao mais robusto.',
    itens: [
      'Sistema de agendamento',
      'Dashboard administrativo',
      'E-commerce',
      'Integrações com APIs',
      'Banco de dados',
    ],
    preco: 'A partir de R$ 2.500',
    destaque: true,
  },
  {
    icone: <TrendingUp size={32} />,
    titulo: 'Manutenção Mensal',
    descricao:
      'Seu site sempre atualizado, seguro e no ar. Suporte rápido e atualizações de conteúdo sempre que precisar.',
    itens: [
      'Atualização de conteúdo',
      'Suporte via WhatsApp',
      'Monitoramento do site',
      'Backup mensal',
      'Relatório de acessos',
    ],
    preco: 'A partir de R$ 150/mês',
    destaque: false,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 px-4 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#6b21a8]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#94a3b8] text-sm">O que ofereço</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Serviços &{' '}
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              Preços
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Soluções digitais sob medida para o seu negócio, com transparência
            de preços e foco em resultado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.titulo}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all ${
                servico.destaque
                  ? 'bg-gradient-to-b from-[#6b21a8]/20 to-[#3b82f6]/10 border border-[#6b21a8]/50'
                  : 'bg-[#110f1a] border border-[#6b21a8]/20 hover:border-[#6b21a8]/40'
              }`}
            >
              {/* Badge destaque */}
              {servico.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] text-white text-xs px-4 py-1 rounded-full">
                  Mais procurado
                </div>
              )}

              {/* Ícone */}
              <div
                className={`${servico.destaque ? 'text-[#3b82f6]' : 'text-[#6b21a8]'}`}
              >
                {servico.icone}
              </div>

              {/* Título e descrição */}
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {servico.descricao}
                </p>
              </div>

              {/* Itens */}
              <ul className="flex flex-col gap-2 flex-1">
                {servico.itens.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[#94a3b8] text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6b21a8] to-[#3b82f6]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Preço e CTA */}
              <div className="border-t border-[#6b21a8]/20 pt-6">
                <p className="text-white font-bold text-lg mb-4">
                  {servico.preco}
                </p>

                <a
                  href="https://wa.me/5519995802332?text=Olá,%20vim%20pelo%20portfólio%20e%20gostaria%20de%20um%20orçamento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full text-sm font-medium transition-all ${
                    servico.destaque
                      ? 'bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] text-white hover:opacity-90'
                      : 'border border-[#6b21a8]/50 text-white hover:border-[#6b21a8] hover:bg-[#6b21a8]/10'
                  }`}
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
