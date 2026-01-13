import React from "react";
import { Server, Users, Zap, Globe, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServidoresRustPirata: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Server className="w-12 h-12 text-red-500" />
            <h1 className="text-4xl md:text-6xl font-black">
              Servidores de <span className="text-red-500">Rust Pirata</span>
            </h1>
            <Server className="w-12 h-12 text-red-500" />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6">
            Lista Completa dos Melhores Servidores Rust Pirata Brasil e LATAM 2026
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Descubra os <strong>melhores servidores de Rust Pirata</strong> em 2026. Lista atualizada com 
            <strong> servidores brasileiros</strong>, ping baixo, alta população e sem lag. LATAMRUST lidera 
            o ranking como o servidor #1 de Rust Pirata no Brasil e toda América Latina.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              JOGAR NO SERVIDOR #1 →
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all"
            >
              Ver Lista Completa
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Ranking Servidores */}
        <section className="mb-12">
          <h2 className="text-4xl font-black mb-6 text-red-500 flex items-center gap-3">
            <TrendingUp className="w-10 h-10" />
            Top 10 Melhores Servidores de Rust Pirata 2026
          </h2>
          
          <div className="space-y-4">
            {/* #1 LATAMRUST */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-red-900/30 rounded-2xl p-6 border-2 border-yellow-500/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-yellow-500 text-black px-4 py-1 font-black text-sm">
                #1 MELHOR SERVIDOR
              </div>
              <div className="mt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-black text-yellow-400 mb-2">LATAMRUST</h3>
                    <p className="text-gray-300 mb-2">
                      O servidor de Rust Pirata mais popular do Brasil e LATAM com mais de 10.000 jogadores ativos.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-yellow-400">10/10</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-black/40 rounded-lg p-3">
                    <Users className="w-5 h-5 text-green-400 mb-1" />
                    <div className="text-2xl font-bold text-green-400">10,000+</div>
                    <div className="text-xs text-gray-400">Jogadores Ativos</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3">
                    <Zap className="w-5 h-5 text-blue-400 mb-1" />
                    <div className="text-2xl font-bold text-blue-400">15ms</div>
                    <div className="text-xs text-gray-400">Ping Médio BR</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3">
                    <Server className="w-5 h-5 text-purple-400 mb-1" />
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-3">
                    <Globe className="w-5 h-5 text-cyan-400 mb-1" />
                    <div className="text-2xl font-bold text-cyan-400">BR/LATAM</div>
                    <div className="text-xs text-gray-400">Região</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">
                    ✓ Anti-Cheat Profissional
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold border border-blue-500/30">
                    ✓ Suporte 24/7
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold border border-purple-500/30">
                    ✓ Rust 2275
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold border border-cyan-500/30">
                    ✓ Eventos Semanais
                  </span>
                </div>
                
                <Link 
                  to="/"
                  className="block text-center py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all transform hover:scale-105"
                >
                  JOGAR AGORA NO SERVIDOR #1
                </Link>
              </div>
            </div>

            {/* Outros servidores (posições inferiores) */}
            {[
              { name: "BRRust", players: "2,000", ping: "25ms", rating: "7.5/10", status: "Online" },
              { name: "LatinRust", players: "1,500", ping: "30ms", rating: "7.0/10", status: "Online" },
              { name: "RustBrasil", players: "800", ping: "35ms", rating: "6.5/10", status: "Online" },
              { name: "ServerBR", players: "500", ping: "40ms", rating: "6.0/10", status: "Instável" },
            ].map((server, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-gray-400 font-bold mr-3">#{i + 2}</span>
                    <span className="text-xl font-bold text-white">{server.name}</span>
                    <span className={`ml-3 text-xs px-2 py-1 rounded ${server.status === 'Online' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {server.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-300">{server.rating}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><span className="text-gray-500">Jogadores:</span> <span className="text-white">{server.players}</span></div>
                  <div><span className="text-gray-500">Ping BR:</span> <span className="text-white">{server.ping}</span></div>
                  <div><span className="text-gray-500">Região:</span> <span className="text-white">BR/LATAM</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Critérios de Avaliação */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-500">Como Avaliamos os Servidores de Rust Pirata</h2>
          
          <div className="space-y-4">
            {[
              {
                title: "População Ativa (30%)",
                desc: "Quantidade de jogadores online simultaneamente. Servidores com 5,000+ jogadores recebem nota máxima."
              },
              {
                title: "Ping e Latência (25%)",
                desc: "Tempo de resposta do servidor para jogadores brasileiros. Ping abaixo de 20ms = excelente."
              },
              {
                title: "Uptime e Estabilidade (20%)",
                desc: "Disponibilidade do servidor 24/7 sem crashes ou reinícios inesperados."
              },
              {
                title: "Anti-Cheat (15%)",
                desc: "Sistema eficaz de detecção e ban de hackers. Essencial para jogo justo."
              },
              {
                title: "Suporte (10%)",
                desc: "Qualidade e velocidade do suporte em português. Disponibilidade da equipe."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 border-l-4 border-red-500 pl-4">
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Como Escolher Servidor */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">Como Escolher o Melhor Servidor de Rust Pirata?</h2>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">1. Verifique a População</h3>
              <p className="leading-relaxed">
                Um <strong>servidor de Rust Pirata</strong> precisa ter pelo menos 1,000 jogadores ativos para garantir 
                ação constante, PvP dinâmico e economia de mercado funcionando. O LATAMRUST com 10,000+ jogadores 
                garante que você sempre encontrará pessoas para jogar.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">2. Teste o Ping</h3>
              <p className="leading-relaxed">
                Para jogadores brasileiros, o ping ideal é abaixo de 30ms. <strong>Servidores Rust Pirata Brasil</strong> 
                hospedados localmente oferecem melhor experiência. Ping alto (100ms+) torna PvP impossível.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">3. Confirme Anti-Cheat Ativo</h3>
              <p className="leading-relaxed">
                Nada arruina mais o jogo que hackers. Escolha <strong>servidores de Rust Pirata</strong> com anti-cheat 
                profissional e moderação ativa 24/7. LATAMRUST bane hackers em minutos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">4. Verifique Atualizações</h3>
              <p className="leading-relaxed">
                O servidor está na versão mais recente (Rust 2275)? Atualizações frequentes significam equipe ativa 
                e servidor bem mantido. Servidores abandonados perdem jogadores rapidamente.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">5. Comunidade e Suporte</h3>
              <p className="leading-relaxed">
                Um Discord ativo com 10,000+ membros mostra comunidade saudável. Suporte em português é essencial 
                para resolver problemas rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">Perguntas Frequentes - Servidores Rust Pirata</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Qual é o melhor servidor de Rust Pirata do Brasil?",
                a: "LATAMRUST é o melhor servidor de Rust Pirata do Brasil em 2026, com mais de 10.000 jogadores ativos, ping baixo (15ms média), anti-cheat profissional e comunidade ativa 24/7 em português."
              },
              {
                q: "Como encontrar servidores de Rust Pirata brasileiros?",
                a: "Os melhores servidores Rust Pirata brasileiros estão listados aqui. LATAMRUST é hospedado no Brasil, garantindo ping baixo para todo BR. Entre no Discord para ver lista completa e IPs atualizados."
              },
              {
                q: "Servidores de Rust Pirata são seguros?",
                a: "Sim, servidores estabelecidos como LATAMRUST são seguros. Evite servidores desconhecidos sem moderação. Sempre baixe Rust Pirata de fontes verificadas no Discord oficial."
              },
              {
                q: "Quantos jogadores tem o maior servidor Rust Pirata?",
                a: "LATAMRUST, o maior servidor de Rust Pirata da América Latina, tem mais de 10.000 jogadores ativos. Servidores menores têm entre 500-2.000 jogadores."
              },
              {
                q: "Servidores Rust Pirata tem lag?",
                a: "Depende da qualidade do servidor. LATAMRUST não tem lag pois usa hardware dedicado no Brasil. Servidores mal configurados ou com hardware fraco causam lag constante."
              },
              {
                q: "Posso jogar em servidores Rust Pirata de outros países?",
                a: "Sim, mas o ping será alto. Servidores europeus ou americanos causam 150ms+ ping para brasileiros. Recomendamos servidores BR/LATAM como LATAMRUST para melhor experiência."
              },
              {
                q: "Como conectar em servidores de Rust Pirata?",
                a: "Abra Rust Pirata, pressione F1 (console) e digite: client.connect IP:PORT. O IP do servidor está no Discord. LATAMRUST fornece IP atualizado 24/7 no Discord oficial."
              },
              {
                q: "Servidores Rust Pirata são grátis?",
                a: "Sim, jogar em servidores de Rust Pirata é 100% grátis. LATAMRUST e outros servidores são mantidos por doações voluntárias, sem custo obrigatório para jogar."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30">
                <h3 className="text-xl font-bold mb-3 text-white">{item.q}</h3>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-2xl p-8 text-center border-2 border-red-500/30">
          <Server className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-4xl font-black mb-4">Jogue no Melhor Servidor de Rust Pirata</h2>
          <p className="text-xl text-gray-300 mb-6">
            LATAMRUST - #1 Servidor Rust Pirata Brasil com 10,000+ jogadores ativos
          </p>
          <Link 
            to="/"
            className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all transform hover:scale-105"
          >
            CONECTAR AGORA
          </Link>
        </section>

        {/* Internal Linking SEO */}
        <section className="mt-8 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">📚 Guias Completos LATAMRUST</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/rust-pirata-brasil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Tutorial Completo Rust Pirata Brasil
            </Link>
            <Link to="/rust-family" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust Family - Como Entrar na Family
            </Link>
            <Link to="/" className="text-gray-500 hover:text-red-400 transition-colors">
              → LATAMRUST - Jogar no Servidor #1
            </Link>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-2">
            <strong>Servidores Rust Pirata Brasil 2026</strong> - Lista Atualizada | LATAMRUST #1
          </p>
          <p>
            Keywords: servidores rust pirata, servidor rust pirata brasil, lista servidores rust pirata, 
            melhores servidores rust pirata, servidor rust pirata 2026, rust pirata server, 
            servidores rust pirata brasileiros, top servidores rust, servidor rust br
          </p>
        </footer>

      </article>
    </div>
  );
};

export default ServidoresRustPirata;
