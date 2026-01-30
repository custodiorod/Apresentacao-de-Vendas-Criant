export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Criant
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#solucoes" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Soluções</a>
              <a href="#diferenciais" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Diferenciais</a>
              <a href="#contato" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Inovação em Tecnologia</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Transforme seu negócio com
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> soluções inteligentes</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A Criant oferece soluções tecnológicas de ponta para impulsionar o crescimento da sua empresa e superar seus objetivos de negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
              Agendar Apresentação
            </button>
            <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700">
              Conhecer Soluções
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "Clientes Atendidos" },
            { value: "98%", label: "Satisfação" },
            { value: "10+", label: "Anos de Experiência" },
            { value: "24/7", label: "Suporte" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços para atender todas as suas necessidades tecnológicas
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "Desenvolvimento Ágil",
              description: "Projetos de software desenvolvidos com metodologias ágeis para entrega rápida e eficiente"
            },
            {
              icon: "🔒",
              title: "Segurança Avançada",
              description: "Soluções robustas de segurança para proteger seus dados e infraestrutura"
            },
            {
              icon: "☁️",
              title: "Cloud Computing",
              description: "Migração e gestão de infraestrutura em nuvem para máxima escalabilidade"
            },
            {
              icon: "📊",
              title: "Business Intelligence",
              description: "Análise de dados e insights estratégicos para tomadas de decisão"
            },
            {
              icon: "🤖",
              title: "Automação & IA",
              description: "Automação de processos e soluções de inteligência artificial"
            },
            {
              icon: "📱",
              title: "Soluções Mobile",
              description: "Aplicativos nativos e multiplataforma para iOS e Android"
            }
          ].map((solution, i) => (
            <div key={i} className="group p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 dark:border-slate-700">
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{solution.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators Section */}
      <section id="diferenciais" className="bg-white dark:bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Por que escolher a Criant?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Expertise Técnica",
                  description: "Time de profissionais altamente qualificados com certificações nas principais tecnologias do mercado"
                },
                {
                  title: "Metodologia Comprovada",
                  description: "Processos refinados ao longo de anos de experiência garantem a entrega de projetos com sucesso"
                },
                {
                  title: "Foco no Cliente",
                  description: "Atenção personalizada e dedicação total para entender e superar suas expectativas"
                },
                {
                  title: "Inovação Constante",
                  description: "Sempre atualizados com as últimas tendências e tecnologias para oferecer o melhor do mercado"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudá-lo a alcançar seus objetivos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:scale-105">
                Falar com Especialista
              </button>
              <button className="px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all border-2 border-white/30">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">Criant</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2026 Criant. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
