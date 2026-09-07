import { Clock, Layout, ShoppingCart } from 'lucide-react';

const sistemas = [
  {
    icone: <Clock size={32} />,
    titulo: 'Sistema de Agendamento',
    descricao:
      'Sistema completo para agendamento online com calendário, notificações automáticas e integração com Google Calendar.',
    tecnologias: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Google Calendar API',
      'SendGrid',
    ],
    status: 'Em desenvolvimento',
  },
  {
    icone: <ShoppingCart size={32} />,
    titulo: 'E-commerce',
    descricao:
      'Loja virtual completa com catálogo de produtos, carrinho, checkout e integração com Mercado Pago.',
    tecnologias: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Mercado Pago API',
      'ViaCEP',
    ],
    status: 'Em desenvolvimento',
  },
  {
    icone: <Layout size={32} />,
    titulo: 'Dashboard Administrativo',
    descricao:
      'Painel administrativo com autenticação JWT, gráficos em tempo real, relatórios e proteção de rotas.',
    tecnologias: ['Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'JWT', 'Recharts'],
    status: 'Em desenvolvimento',
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" className="py-24 px-4 relative overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#110f1a] border border-[#6b21a8]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#94a3b8] text-sm">Em construção</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sistemas{' '}
            <span className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] bg-clip-text text-transparent">
              Web
            </span>
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Sistemas completos em desenvolvimento — cada um com integrações
            reais e fluxos de produção.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sistemas.map((sistema) => (
            <div
              key={sistema.titulo}
              className="bg-[#110f1a] border border-[#6b21a8]/20 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity"
            >
              {/* Badge em breve */}
              <div className="absolute top-4 right-4 bg-[#6b21a8]/20 border border-[#6b21a8]/40 text-[#94a3b8] text-xs px-3 py-1 rounded-full">
                {sistema.status}
              </div>

              {/* Ícone */}
              <div className="text-[#6b21a8]">{sistema.icone}</div>

              {/* Título e descrição */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {sistema.titulo}
                </h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">
                  {sistema.descricao}
                </p>
              </div>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {sistema.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#08080f] text-[#94a3b8] text-xs px-3 py-1 rounded-full border border-[#6b21a8]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Barra de progresso decorativa */}
              <div className="w-full bg-[#08080f] rounded-full h-1">
                <div className="bg-gradient-to-r from-[#6b21a8] to-[#3b82f6] h-1 rounded-full w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
