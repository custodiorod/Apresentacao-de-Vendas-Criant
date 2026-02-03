"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1 - Hero
    (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image
              src="https://criant.net/wp-content/uploads/2024/12/Logocriant22_Laranja-removebg-preview-1.png"
              alt="Criant Logo"
              width={180}
              height={120}
              priority
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FD7E00]/20 border border-[#FD7E00]/30 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-[#FD7E00]">ACELERE AS VENDAS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            A sua assessoria de
            <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent"> marketing e vendas</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Somos uma agência que ajuda empreendedores brasileiros nos EUA a captar clientes e crescer no mercado americano, gerando a demanda necessária para impulsionar seus negócios.
          </p>
        </div>
      </div>
    ),
    // Slide 2 - Estatísticas
    (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Resultados</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Números que comprovam nossa eficiência
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "+60", label: "Clientes Atendidos" },
              { value: "+3", label: "Anos de Experiência" },
              { value: "$1.5M", label: "Tráfego Gerenciado" },
              { value: "5.0", label: "Avaliação Média" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-base text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    // Slide 3 - Método
    (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            O <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Método</span> Criant
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transforme leads em clientes em 5 etapas
          </p>
          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Estruturação Digital", icon: "🏗️" },
              { step: "02", title: "Geração de Demanda", icon: "📈" },
              { step: "03", title: "Engajamento do Lead", icon: "🎯" },
              { step: "04", title: "Conversão em Clientes", icon: "💰" },
              { step: "05", title: "Fidelização e Retenção", icon: "🤝" }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#FD7E00]/20 hover:border-[#FD7E00]/40">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-xs font-bold text-[#FD7E00] mb-2">{item.step}</div>
                <h3 className="text-sm font-bold text-white leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    // Slide 4 - Soluções
    (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossas <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Temos as soluções de crescimento que sua empresa precisa
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Previsibilidade de Vendas",
                description: "Planos estratégicos que garantem resultados claros e fazem seu negócio prosperar com eficiência"
              },
              {
                title: "Economia de Tempo e Dinheiro",
                description: "Enquanto você se dedica ao que é mais importante, cuidamos do marketing e da geração de leads"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FD7E00]/30 hover:border-[#FD7E00]/50">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    // Slide 5 - Diferenciais
    (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Por que a <span className="bg-gradient-to-r from-[#FD7E00] to-[#FF6600] bg-clip-text text-transparent">Criant</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Um time completo pelo preço de um profissional
          </p>
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#FD7E00]/20 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-white mb-6 font-medium">
              Para replicar o que a CRIANT faz, você precisaria de no mínimo:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                "Estrategista Digital",
                "Customer Success",
                "Gestor de Tráfego",
                "Designer",
                "Social Media",
                "Gestor de Projetos",
                "Dev de Sistemas",
                ""
              ].map((role, i) => (
                <div key={i} className="p-3 bg-[#FD7E00]/10 border border-[#FD7E00]/20 rounded-lg">
                  <span className="text-sm text-white font-medium">{role}</span>
                </div>
              ))}
            </div>
            <div className="inline-block bg-gradient-to-r from-[#FD7E00] to-[#FF6600] text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg shadow-[#FD7E00]/30">
              Na Criant: PREÇO DE APENAS 1!
            </div>
          </div>
          <p className="text-gray-400 italic">"Fazemos até dar certo!"</p>
        </div>
      </div>
    ),
    // Slide 6 - Contato
    (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#FD7E00] to-[#FF6600] rounded-3xl p-12 md:p-20 text-white shadow-2xl shadow-[#FD7E00]/30">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Pronto para <span className="text-orange-100">acelerar</span> suas vendas?
            </h2>
            <p className="text-xl text-orange-50 mb-10 max-w-2xl mx-auto">
              Um dos nossos especialistas vai atender você. Dar o próximo passo leva menos de um minuto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-white text-[#FD7E00] rounded-xl font-bold hover:bg-orange-50 transition-all hover:scale-105 shadow-lg">
                Falar com Especialista
              </button>
            </div>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <a href="mailto:contato@criant.net" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-2xl">📧</span>
                <span>contato@criant.net</span>
              </a>
              <a href="tel:+5521999426555" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-2xl">📱</span>
                <span>+55 (21) 99942-6555</span>
              </a>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 text-gray-400">
            <Image
              src="https://criant.net/wp-content/uploads/2024/12/Logocriant22_Laranja-removebg-preview-1.png"
              alt="Criant Logo"
              width={40}
              height={27}
            />
            <span className="text-sm">© 2026 Agência Criant. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    )
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Slide Content */}
      <div className="h-full w-full flex items-center justify-center">
        <div
          key={currentSlide}
          className="absolute inset-0 flex items-center justify-center opacity-0 animate-fadeIn"
        >
          {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-gray-700 transition-all hover:scale-110 z-10"
        aria-label="Slide anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-gray-700 transition-all hover:scale-110 z-10"
        aria-label="Próximo slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-[#FD7E00]"
                : "w-3 bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 text-sm font-medium text-gray-400 bg-gray-800/80 backdrop-blur-sm border border-gray-700 px-4 py-2 rounded-full shadow-sm">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-8 right-6 text-xs text-gray-500 flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700">
        <span>Use as setas</span>
        <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">←</kbd>
        <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">→</kbd>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
