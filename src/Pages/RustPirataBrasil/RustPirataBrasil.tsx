import React from "react";
import { Download, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RustPirataBrasil: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Rust Pirata 2275 Brasil - Baixar Grátis 2026
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Servidor LATAMRUST - A maior comunidade de Rust Pirata do Brasil com mais de 10.000 jogadores ativos
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              ENTRAR NO SERVIDOR →
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all"
            >
              Discord Oficial
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">O que é Rust Pirata 2275?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            <strong>Rust Pirata 2275</strong> é a versão gratuita e completamente funcional do jogo Rust, atualizada para a build 2275 de 2025. 
            O LATAMRUST oferece o melhor servidor de <strong>Rust Pirata no Brasil</strong>, com ping baixo, anti-cheat profissional e uma 
            comunidade ativa de mais de 10.000 jogadores brasileiros e latino-americanos.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Diferente de outros servidores piratas, o LATAMRUST é 100% seguro, sem vírus, sem malware, e com suporte em português 
            disponível 24 horas por dia, 7 dias por semana. Você pode <strong>baixar Rust pirata grátis</strong> e começar a jogar 
            imediatamente sem custos ocultos.
          </p>
        </section>

        {/* Como Baixar */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Como Baixar Rust Pirata 2275 Grátis - Tutorial Completo</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entre no Discord Oficial</h3>
                <p className="text-gray-300">
                  Acesse nosso Discord oficial em <a href="https://discord.gg/dT8u5b3jga" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">discord.gg/dT8u5b3jga</a>. 
                  Todos os links de download seguros e verificados estão na seção #downloads.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Baixe o Rust Pirata 2275</h3>
                <p className="text-gray-300 mb-2">
                  Na seção #downloads do Discord, você encontrará o link para baixar o Rust Pirata versão 2275. 
                  O arquivo tem aproximadamente 8-10 GB. Certifique-se de ter espaço suficiente no disco.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mt-2">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-200">
                      <strong>IMPORTANTE:</strong> Sempre baixe apenas dos links oficiais no Discord. 
                      Links externos podem conter vírus ou malware.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Extraia os Arquivos</h3>
                <p className="text-gray-300">
                  Após o download, extraia o arquivo .zip ou .rar para uma pasta de sua escolha. 
                  Recomendamos criar uma pasta "Rust Pirata" no seu disco C: ou D: para fácil acesso.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Configure o Jogo</h3>
                <p className="text-gray-300">
                  Execute o launcher do Rust Pirata. Na primeira vez, o jogo irá configurar alguns arquivos necessários. 
                  Isso pode levar 2-5 minutos. Aguarde até que o processo seja concluído.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conecte ao Servidor LATAMRUST</h3>
                <p className="text-gray-300 mb-2">
                  Abra o jogo e pressione F1 para abrir o console. Digite o comando de conexão disponível no Discord 
                  ou na nossa homepage. O IP do servidor é sempre atualizado no Discord.
                </p>
                <p className="text-gray-300">
                  Exemplo: <code className="bg-black/50 px-2 py-1 rounded text-red-400">client.connect IP:PORT</code>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Pronto! Comece a Jogar</h3>
                <p className="text-gray-300">
                  Você está pronto para jogar Rust Pirata 2275 no servidor LATAMRUST. 
                  Divirta-se com mais de 10.000 jogadores brasileiros e latino-americanos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Requisitos do Sistema para Rust Pirata 2275</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Requisitos Mínimos</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>SO:</strong> Windows 10 64-bit</li>
                <li>• <strong>Processador:</strong> Intel Core i7-3770 / AMD FX-9590</li>
                <li>• <strong>Memória:</strong> 10 GB RAM</li>
                <li>• <strong>Placa de vídeo:</strong> GTX 670 2GB / AMD R9 280</li>
                <li>• <strong>DirectX:</strong> Versão 11</li>
                <li>• <strong>Rede:</strong> Conexão de internet banda larga</li>
                <li>• <strong>Armazenamento:</strong> 20 GB disponível</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Requisitos Recomendados</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>SO:</strong> Windows 10/11 64-bit</li>
                <li>• <strong>Processador:</strong> Intel Core i7-4690K / AMD Ryzen 5 1600</li>
                <li>• <strong>Memória:</strong> 16 GB RAM</li>
                <li>• <strong>Placa de vídeo:</strong> GTX 980 / AMD R9 Fury</li>
                <li>• <strong>DirectX:</strong> Versão 12</li>
                <li>• <strong>Rede:</strong> Conexão de internet banda larga</li>
                <li>• <strong>Armazenamento:</strong> 25 GB SSD</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Por que LATAMRUST */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Por Que Escolher LATAMRUST?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Ping Baixo Brasil", desc: "Servidores localizados no Brasil para melhor latência" },
              { title: "Comunidade Ativa", desc: "Mais de 10.000 jogadores brasileiros e latinos online" },
              { title: "Anti-Cheat Profissional", desc: "Sistema de segurança que bane hackers automaticamente" },
              { title: "Suporte 24/7", desc: "Equipe de moderação em português disponível sempre" },
              { title: "Atualizações Constantes", desc: "Sempre na versão mais recente do Rust Pirata" },
              { title: "100% Grátis", desc: "Sem custos ocultos, sem pay-to-win, totalmente gratuito" },
              { title: "Eventos Semanais", desc: "Raids, torneios e eventos especiais toda semana" },
              { title: "Mods Exclusivos", desc: "Plugins e modificações únicas do servidor" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-lg p-4 flex gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Perguntas Frequentes (FAQ)</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Rust Pirata 2275 é seguro para baixar?",
                a: "Sim, quando baixado dos links oficiais no nosso Discord, o Rust Pirata 2275 é 100% seguro e livre de vírus. Nunca baixe de sites externos ou links não verificados."
              },
              {
                q: "Posso jogar Rust Pirata online com amigos?",
                a: "Sim! O servidor LATAMRUST suporta multiplayer completo. Você pode jogar com amigos, formar clãs, construir bases e participar de raids, exatamente como no Rust original."
              },
              {
                q: "Rust Pirata funciona em Windows 7?",
                a: "Não recomendamos. O Rust Pirata 2275 requer Windows 10 64-bit ou superior para funcionar corretamente. Windows 7 não é mais suportado."
              },
              {
                q: "Posso ser banido por jogar Rust Pirata?",
                a: "Rust Pirata é uma versão separada do Rust original. Você não será banido no Rust oficial por jogar no servidor pirata. No entanto, respeite as regras do servidor LATAMRUST para não ser banido do nosso servidor."
              },
              {
                q: "Qual a diferença entre Rust Pirata e Rust Original?",
                a: "Rust Pirata é idêntico ao Rust original em gameplay e recursos. A principal diferença é que é gratuito e usa servidores comunitários como o LATAMRUST ao invés dos servidores oficiais da Steam."
              },
              {
                q: "Como atualizo o Rust Pirata para a versão 2275?",
                a: "Se você tem uma versão antiga, baixe a versão 2275 mais recente do Discord. Geralmente é melhor fazer uma instalação limpa para evitar problemas de compatibilidade."
              },
              {
                q: "O servidor LATAMRUST tem lag?",
                a: "Não. Nossos servidores são hospedados no Brasil com hardware dedicado de alta performance. A maioria dos jogadores brasileiros tem ping abaixo de 50ms."
              },
              {
                q: "Preciso pagar alguma coisa?",
                a: "Não! O Rust Pirata 2275 e o servidor LATAMRUST são 100% gratuitos para sempre. Não há custos ocultos, pagamentos ou sistemas pay-to-win."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{item.q}</h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Junte-se a mais de 10.000 jogadores brasileiros no melhor servidor de Rust Pirata da LATAM
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              ENTRAR NO SERVIDOR <ArrowRight />
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all flex items-center gap-2"
            >
              <Download /> BAIXAR RUST PIRATA
            </a>
          </div>
        </section>

        {/* Internal Linking SEO - Invisible for users, powerful for Google */}
        <section className="mt-8 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">📚 Guias Relacionados LATAMRUST</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/rust-family" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust Family Brasil - Comunidade Completa
            </Link>
            <Link to="/servidores-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Lista Servidores Rust Pirata 2026
            </Link>
            <Link to="/dayz" className="text-gray-500 hover:text-red-400 transition-colors">
              → DayZ Pirata 1.28 Brasil Grátis
            </Link>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-2">
            <strong>LATAMRUST</strong> - Rust Pirata 2275 Brasil | Servidor Premium LATAM 2026
          </p>
          <p>
            Keywords: rust pirata, rust pirata brasil, baixar rust pirata, rust pirata 2275, rust pirata gratis, 
            rust grátis, rust pirata download, como baixar rust pirata, servidor rust pirata brasil, rust pirata 2026
          </p>
        </footer>

      </article>
    </div>
  );
};

export default RustPirataBrasil;
