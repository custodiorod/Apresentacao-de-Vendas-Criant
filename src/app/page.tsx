"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);

  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: (i * 5) % 100,
      top: ((i * 7) % 100),
      duration: 3 + (i % 4),
      delay: (i % 5) * 0.4,
    })), []);

  useEffect(() => {
    setProgress(((currentSlide + 1) / 8) * 100);
  }, [currentSlide]);

  const slides = [
    {
      id: "hero",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <Image
                src="https://criant.net/wp-content/uploads/2024/12/Logocriant22_Laranja-removebg-preview-1.png"
                alt="Criant Logo"
                width={200}
                height={130}
                priority
                className="drop-shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FD7E00]/20 to-[#FF6600]/20 border border-[#FD7E00]/40 rounded-full mb-8 shadow-lg shadow-[#FD7E00]/20"
            >
              <motion.span 
                animate={{ rotate: [0, 360] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-2xl"
              >🚀</motion.span>
              <span className="text-sm font-semibold text-[#FD7E00] tracking-wide">IA AUTOMATIZADA</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight text-center"
            >
              Acelere Suas Vendas
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="block bg-gradient-to-r from-[#FD7E00] via-[#FF6600] to-[#FD7E00] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                Com a IA da Criant
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-14 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Obtenha resultados reais e mensuráveis com a nossa IA automatizada, desenvolvida para transformar a gestão de vendas e marketing da sua empresa de construção ou imobiliária.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#FD7E00] to-[#FF6600] text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-[#FD7E00]/40 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Falar com Especialista
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "pain-points",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
            >
              Os <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Maiores Desafios</span> do Mercado
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-14 max-w-2xl mx-auto font-light"
            >
              Por que empresas de construção e imobiliárias no Brasil perdem oportunidades diariamente
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
            >
              {[
                {
                  title: "Leads Perdidos",
                  stat: "48%",
                  description: "dos leads são perdidos por falta de resposta rápida",
                  trend: "Mercado de construção civil perde R$ 80 bi/ano",
                  icon: "📉"
                },
                {
                  title: "Follow-ups Lentos",
                  stat: "24h",
                  description: "tempo médio de resposta (ideal: 5 minutos)",
                  trend: "78% compram com quem responde primeiro",
                  icon: "⏰"
                },
                {
                  title: "Agendamento Manual",
                  stat: "35%",
                  description: "dos agendamentos são cancelados por erro humano",
                  trend: "Automação reduz custos em até 40%",
                  icon: "📋"
                },
                {
                  title: "Sem Insights de Dados",
                  stat: "73%",
                  description: "das empresas não usam dados para decidir",
                  trend: "Empresas data-driven crescem 5x mais",
                  icon: "📊"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateX: 5
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + i * 0.15,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="group p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-[#FD7E00]/60 hover:from-[#FD7E00]/20 hover:to-[#FF6600]/10 transition-all duration-500 relative overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-[#FD7E00]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                  <motion.div 
                    className="text-5xl mb-4 relative z-10"
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3 
                    }}
                  >{item.icon}</motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      delay: 0.6 + i * 0.15,
                      stiffness: 300
                    }}
                    className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent mb-3 relative z-10"
                  >{item.stat}</motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed relative z-10">{item.description}</p>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                    className="text-xs text-[#FD7E00] font-medium relative z-10 bg-[#FD7E00]/10 px-3 py-2 rounded-xl inline-block border border-[#FD7E00]/20"
                  >
                    {item.trend}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-gray-400 italic">
                Fonte: IBGE, CBIC, CNAI e relatórios de mercado 2024
              </p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "market-research",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-black text-white mb-4"
            >
              <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">IA no Brasil</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light"
            >
              O mercado está mudando rapidamente - veja os números da pesquisa de mercado
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8 max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-5xl mb-2"
                  >🤖</motion.div>
                  <div className="flex-1 text-left">
                    <div className="text-4xl md:text-5xl font-black text-white mb-3">
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">37%</span> vs <span className="text-gray-400">63%</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Empresas adotando IA no Brasil</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Fonte: <span className="text-blue-400 font-medium">IDC Brasil 2024</span> - 
                      Crescimento de 45% em comparação com 2023
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl mb-2"
                  >📈</motion.div>
                  <div className="flex-1 text-left">
                    <div className="text-4xl md:text-5xl font-black mb-3">
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">+285%</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Conversão de Leads com IA</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Fonte: <span className="text-green-400 font-medium">Gartner Brasil</span> - 
                      Empresas que usam IA convertem 3,85x mais leads em média
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-8 bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-[#FD7E00]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl mb-2"
                  >⚡</motion.div>
                  <div className="flex-1 text-left">
                    <div className="text-4xl md:text-5xl font-black text-white mb-3">
                      <span className="bg-gradient-to-r from-[#FD7E00] to-red-400 bg-clip-text text-transparent">-50%</span> em custos
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Automação com IA</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Fonte: <span className="text-[#FD7E00] font-medium">MCTI Brasil</span> - 
                      Redução média de custos operacionais de 50% com automação inteligente
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="p-8 bg-gradient-to-br from-white/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-black text-white mb-6 flex items-center gap-3 justify-center">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-3xl"
                  >🚀</motion.span>
                  Por que Automação + IA é Essencial Agora?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  {[
                    {
                      title: "Competitividade",
                      desc: "83% das empresas de alto crescimento usam IA"
                    },
                    {
                      title: "Eficiência",
                      desc: "70% mais produtividade em equipe de vendas"
                    },
                    {
                      title: "Escalabilidade",
                      desc: "2x mais capacidade sem contratar"
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                      className="space-y-2"
                    >
                      <h4 className="font-bold text-[#FD7E00] text-base">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <p className="text-xs text-gray-400 italic">
                    Fontes: IDC Brasil, Gartner, MCTI, McKinsey Brasil - Pesquisa de Mercado 2024
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "stats",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black text-white mb-4"
            >
              Nossos <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Resultados</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto font-light"
            >
              Números que comprovam nossa eficiência
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                { value: "+60", label: "Clientes Atendidos" },
                { value: "+3", label: "Anos de Experiência" },
                { value: "$1.5M", label: "Tráfego Gerenciado" },
                { value: "5.0", label: "Avaliação Média" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-[#FD7E00]/50 hover:bg-[#FD7E00]/10 transition-all duration-300"
                >
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "method",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black text-white mb-4"
            >
              O <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Método</span> Criant
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto font-light"
            >
              Transforme leads em clientes em 5 etapas
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto"
            >
              {[
                { step: "01", title: "Estruturação Digital", icon: "🏗️", desc: "Fundamentos sólidos" },
                { step: "02", title: "Geração de Demanda", icon: "📈", desc: "Atração qualificada" },
                { step: "03", title: "Engajamento", icon: "🎯", desc: "Conexão real" },
                { step: "04", title: "Conversão", icon: "💰", desc: "Vendas efetivas" },
                { step: "05", title: "Fidelização", icon: "🤝", desc: "Clientes fiéis" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex-1 min-w-[200px] p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-[#FD7E00]/50 hover:bg-[#FD7E00]/10 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.6 + i * 0.1 }}
                    className="text-4xl mb-3"
                  >{item.icon}</motion.div>
                  <div className="text-xs font-black text-[#FD7E00] mb-2">{item.step}</div>
                  <h3 className="text-sm md:text-base font-bold text-white leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "solutions",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black text-white mb-4"
            >
              Nossas <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Soluções</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto font-light"
            >
              Temos as soluções de crescimento que sua empresa precisa
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  title: "Previsibilidade de Vendas",
                  description: "Planos estratégicos que garantem resultados claros e fazem seu negócio prosperar com eficiência",
                  icon: "📊"
                },
                {
                  title: "Economia de Tempo e Dinheiro",
                  description: "Enquanto você se dedica ao que é mais importante, cuidamos do marketing e da geração de leads",
                  icon: "⏱️"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 hover:border-[#FD7E00]/50 hover:from-[#FD7E00]/20 hover:to-[#FF6600]/10 transition-all duration-300 group"
                >
                  <motion.div 
                    className="text-5xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  >{item.icon}</motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )
    },
    {
      id: "differentiators",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black text-white mb-4"
            >
              Por que a <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Criant</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light"
            >
              Um time completo pelo preço de um profissional
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-white/10 max-w-5xl mx-auto"
            >
              <p className="text-lg text-white mb-8 font-semibold">
                Para replicar o que a CRIANT faz, você precisaria de:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {[
                  "Estrategista Digital",
                  "Customer Success",
                  "Gestor de Tráfego",
                  "Designer",
                  "Social Media",
                  "Gestor de Projetos",
                  "Dev de Sistemas",
                  "Copywriter"
                ].map((role, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    className="p-3 bg-[#FD7E00]/10 border border-[#FD7E00]/30 rounded-xl"
                  >
                    <span className="text-sm text-white font-medium">{role}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-block bg-gradient-to-r from-[#FD7E00] to-[#FF6600] text-white px-8 py-4 rounded-2xl font-black text-xl shadow-xl shadow-[#FD7E00]/30"
              >
                Na Criant: PREÇO DE APENAS 1!
              </motion.div>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 text-gray-400 italic text-lg"
            >&ldquo;Fazemos até dar certo!&rdquo;</motion.p>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-[#FD7E00] via-[#FF6600] to-[#FD7E00] bg-[length:200%_200%] animate-gradient-xy rounded-3xl p-12 md:p-20 text-white shadow-2xl shadow-[#FD7E00]/30"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-black mb-6"
              >
                Pronto para <span className="text-orange-100">acelerar</span><br />suas vendas?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-orange-50 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Um dos nossos especialistas vai atender você. Dar o próximo passo leva menos de um minuto.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              >
                <button className="px-10 py-5 bg-white text-[#FD7E00] rounded-2xl font-black hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-xl">
                  Falar com Especialista
                </button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90"
              >
                <a href="mailto:contato@criant.net" className="flex items-center gap-2 hover:text-white transition-colors text-lg">
                  <span className="text-2xl">📧</span>
                  <span>contato@criant.net</span>
                </a>
                <a href="tel:+5521999426555" className="flex items-center gap-2 hover:text-white transition-colors text-lg">
                  <span className="text-2xl">📱</span>
                  <span>+55 (21) 99942-6555</span>
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-400"
            >
              <Image
                src="https://criant.net/wp-content/uploads/2024/12/Logocriant22_Laranja-removebg-preview-1.png"
                alt="Criant Logo"
                width={50}
                height={34}
              />
              <span className="text-sm">© 2026 Agência Criant. Todos os direitos reservados.</span>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === 7 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? 7 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black relative">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#FD7E00] to-[#FF6600] z-30"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTR2LTJoNHYtMmg0djJoLTJ6bTAgMXYyaC00di0yaDR2LTJoNHYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#FD7E00] rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      
      <div className="h-full w-full flex items-center justify-center relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-[#FD7E00] hover:border-[#FD7E00] transition-all duration-300 hover:scale-110 z-20"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-[#FD7E00] hover:border-[#FD7E00] transition-all duration-300 hover:scale-110 z-20"
        aria-label="Próximo slide"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-[#FD7E00] shadow-lg shadow-[#FD7E00]/50"
                : "w-2.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-6 right-6 md:top-8 md:right-8 text-sm md:text-base font-bold text-white/70 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-lg z-20"
      >
        {currentSlide + 1} <span className="text-white/40">/</span> {slides.length}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-8 right-6 md:right-8 text-xs text-white/40 flex items-center gap-2 bg-white/5 backdrop-blur-xl px-3 py-2 rounded-lg border border-white/10 z-20"
      >
        <span className="hidden sm:inline">Use as setas</span>
        <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">←</kbd>
        <kbd className="px-2 py-1 bg-white/10 rounded text-white/60">→</kbd>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        .animate-gradient-xy {
          animation: gradient-xy 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
