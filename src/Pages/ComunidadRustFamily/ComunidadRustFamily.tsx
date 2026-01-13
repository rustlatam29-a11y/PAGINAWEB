import React from "react";
import { Users, Heart, Shield, Zap, Trophy, MessageCircle, Star, Crown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ComunidadRustFamily: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 animate-pulse">
            <Heart className="w-14 h-14 text-red-500" />
            <Crown className="w-14 h-14 text-yellow-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Comunidade <span className="text-red-500">Rust Family</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6">
            LATAMRUST - A Comunidade Rust Family #1 da América Latina
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Procurando por uma <strong>comunidade rust family</strong>? LATAMRUST é a maior e mais unida 
            <strong> rust family</strong> do Brasil e LATAM. Mais de 10.000 jogadores ativos, eventos diários, 
            suporte 24/7 em português e a melhor experiência <strong>rust family</strong> que você vai encontrar.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl"
            >
              <Crown /> ENTRAR NA RUST FAMILY
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-xl transition-all flex items-center gap-2 shadow-2xl"
            >
              <MessageCircle /> Discord Oficial
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 py-12">
        
        {/* O que é Comunidade Rust Family */}
        <section className="mb-12">
          <h2 className="text-4xl font-black mb-6 text-red-500">O Que é uma Comunidade Rust Family?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Uma <strong>comunidade rust family</strong> vai muito além de um simples servidor de jogo. É um grupo 
              unido de jogadores que se tratam como família, onde veteranos ensinam iniciantes, todos compartilham 
              recursos, e o sucesso de um é o sucesso de todos. A <strong>comunidade rust family LATAMRUST</strong> 
              leva esse conceito ao extremo.
            </p>
            <p>
              Diferente de clãs competitivos ou grupos desorganizados, uma verdadeira <strong>rust family</strong> 
              cria laços reais entre jogadores. No LATAMRUST, milhares de brasileiros e latinos encontraram não 
              apenas parceiros de jogo, mas amigos verdadeiros que jogam juntos há anos.
            </p>
            <p>
              A <strong>comunidade rust family</strong> LATAMRUST foi fundada em 2020 com um objetivo claro: criar 
              o melhor ambiente familiar para jogadores de <strong>Rust Pirata</strong> em toda América Latina. 
              Hoje, somos mais de 10.000 membros ativos que jogam, riem e crescem juntos todos os dias.
            </p>
          </div>
        </section>

        {/* Por Que LATAMRUST é a Melhor Comunidade */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8 border border-red-900/30">
          <h2 className="text-3xl font-black mb-6 text-red-500 flex items-center gap-3">
            <Trophy className="w-10 h-10" />
            Por Que LATAMRUST é a Melhor Comunidade Rust Family?
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Users className="w-6 h-6 text-red-400" />
                10,000+ Membros Ativos Todos os Dias
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A <strong>comunidade rust family</strong> LATAMRUST não é apenas grande - é ATIVA. Todos os dias, 
                milhares de jogadores online, eventos acontecendo, raids organizadas, PvP intenso. Nunca vai faltar 
                ação ou companhia para jogar. Outras <strong>comunidades rust family</strong> prometem números, 
                mas LATAMRUST ENTREGA resultados reais.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-400" />
                Cultura Familiar Real, Não Fake
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Muitas <strong>comunidades rust family</strong> se chamam "family" mas agem como empresas. No LATAMRUST, 
                a família é REAL. Veteranos dedicam horas ensinando novatos. Jogadores compartilham bases, recursos e 
                conhecimento livremente. Se você cai, a family te levanta. Se você cresce, a family celebra junto. 
                Essa é a diferença entre LATAMRUST e as outras <strong>rust family</strong> por aí.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-400" />
                Proteção e Segurança da Family
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Na <strong>comunidade rust family</strong> LATAMRUST, ninguém joga sozinho. Sofrendo raid? A family 
                responde em minutos. Precisa de recursos? Veteranos ajudam. Tem dúvidas? Suporte 24/7 em português. 
                Anti-cheat profissional garante que hackers são eliminados rapidamente. Sua experiência é nossa prioridade.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Zap className="w-6 h-6 text-red-400" />
                Servidores Premium Brasil/LATAM
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A melhor <strong>comunidade rust family</strong> merece os melhores servidores. LATAMRUST investe em 
                hardware dedicado no Brasil, garantindo ping baixíssimo (15-30ms média), uptime 99.9%, e zero lag. 
                Outras <strong>rust family</strong> usam servidores baratos que caem toda hora. Nós investimos em qualidade.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Star className="w-6 h-6 text-red-400" />
                Eventos e Conteúdo Exclusivo
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Toda semana, a <strong>comunidade rust family</strong> LATAMRUST organiza eventos épicos: torneios PvP 
                com prêmios reais, raids family vs family, eventos de construção, giveaways de skins e VIPs. Nenhuma 
                outra <strong>rust family</strong> oferece essa variedade de conteúdo constantemente.
              </p>
            </div>
          </div>
        </section>

        {/* Comparação com Outras Rust Family */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">LATAMRUST vs Outras Comunidades Rust Family</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900/50 rounded-xl overflow-hidden">
              <thead className="bg-red-900/30">
                <tr>
                  <th className="p-4 text-left">Característica</th>
                  <th className="p-4 text-center">LATAMRUST</th>
                  <th className="p-4 text-center">Outras Rust Family</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-4 text-gray-300">Membros Ativos</td>
                  <td className="p-4 text-center text-green-400 font-bold">10,000+</td>
                  <td className="p-4 text-center text-gray-500">500-2,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Suporte em Português</td>
                  <td className="p-4 text-center text-green-400 font-bold">24/7</td>
                  <td className="p-4 text-center text-gray-500">Limitado</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Ping Brasil</td>
                  <td className="p-4 text-center text-green-400 font-bold">15-30ms</td>
                  <td className="p-4 text-center text-gray-500">80-150ms</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Anti-Cheat</td>
                  <td className="p-4 text-center text-green-400 font-bold">Profissional</td>
                  <td className="p-4 text-center text-gray-500">Básico/Inexistente</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Eventos Semanais</td>
                  <td className="p-4 text-center text-green-400 font-bold">Sim</td>
                  <td className="p-4 text-center text-gray-500">Raramente</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Cultura Familiar Real</td>
                  <td className="p-4 text-center text-green-400 font-bold">✓ Comprovado</td>
                  <td className="p-4 text-center text-gray-500">Apenas no nome</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Servidores Dedicados</td>
                  <td className="p-4 text-center text-green-400 font-bold">Brasil/LATAM</td>
                  <td className="p-4 text-center text-gray-500">Europa/EUA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Depoimentos Membros */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500 text-center">
            O Que os Membros Dizem Sobre Nossa Comunidade Rust Family
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "João - São Paulo, BR",
                text: "Já passei por várias comunidades rust family, mas LATAMRUST é diferente. Aqui a galera ajuda de verdade, não é só papo. Em 2 semanas já tinha base compartilhada, grupo de farm e amigos reais."
              },
              {
                name: "Maria - Rio de Janeiro, BR",
                text: "Sou iniciante no Rust e tinha medo de começar sozinha. Na comunidade rust family LATAMRUST me ensinaram tudo: desde craftear até PvP. Hoje já ajudo outros novatos!"
              },
              {
                name: "Carlos - Minas Gerais, BR",
                text: "Comunidade rust family LATAMRUST não é só pra jogar. Fiz amigos que converso todo dia, já até nos encontramos pessoalmente. Essa family é real!"
              },
              {
                name: "Pedro - Bahia, BR",
                text: "Testei rustfamily.com.br e outras, mas LATAMRUST é MUITO superior. Ping baixo, moderação ativa, eventos toda semana. Não tem comparação."
              },
              {
                name: "Lucas - Argentina",
                text: "La mejor comunidad rust family de LATAM sin dudas. Somos latinos unidos, ping excelente para toda la región, y el ambiente es increíble."
              },
              {
                name: "Diego - Chile",
                text: "He probado muchas rust family y LATAMRUST es la única que mantiene su promesa. 10,000 jugadores no es mentira, hay gente jugando 24/7."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6 border border-red-900/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">"{item.text}"</p>
                <p className="text-red-400 font-bold">- {item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como Entrar */}
        <section className="mb-12 bg-gradient-to-r from-red-900/20 to-gray-900/20 rounded-2xl p-8 border border-red-900/30">
          <h2 className="text-3xl font-black mb-6 text-red-500">Como Entrar na Comunidade Rust Family LATAMRUST?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entre no Discord Oficial</h3>
                <p className="text-gray-300">
                  Acesse <a href="https://discord.gg/dT8u5b3jga" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">discord.gg/dT8u5b3jga</a> - 
                  Este é o coração da <strong>comunidade rust family</strong> LATAMRUST com 10,000+ membros ativos.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Apresente-se na Family</h3>
                <p className="text-gray-300">
                  Canal #apresentações - Conte quem você é, de onde é, e que tipo de jogador. A <strong>rust family</strong> 
                  vai te receber de braços abertos!
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Baixe Rust Pirata e Conecte</h3>
                <p className="text-gray-300">
                  Guia completo em #downloads. Nossa <strong>comunidade rust family</strong> tem tutoriais para iniciantes 
                  e veteranos.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Bem-vindo à Family!</h3>
                <p className="text-gray-300">
                  Agora você faz parte da melhor <strong>comunidade rust family</strong> da América Latina!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">Perguntas Frequentes - Comunidade Rust Family</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "O que diferencia LATAMRUST de outras comunidades rust family?",
                a: "LATAMRUST é a maior comunidade rust family da América Latina com 10,000+ membros ATIVOS. Não somos apenas números - temos cultura familiar real, eventos semanais, suporte 24/7 em português, servidores premium no Brasil com ping baixo, e uma moderação profissional. Outras rust family prometem, LATAMRUST entrega."
              },
              {
                q: "A comunidade rust family LATAMRUST é só para brasileiros?",
                a: "Não! Somos uma comunidade rust family LATAM completa. Temos milhares de membros do Brasil, Argentina, Chile, México, Colômbia e toda América Latina. Falamos português e español, e nossos servidores têm ping excelente para toda a região."
              },
              {
                q: "Como sei se LATAMRUST é uma rust family real ou fake?",
                a: "Simples: entre no Discord e veja com seus próprios olhos. 10,000+ membros, canais ativos 24/7, eventos toda semana, moderação respondendo em minutos. Outras comunidades rust family têm Discord morto com 50 pessoas. LATAMRUST é a real deal."
              },
              {
                q: "Preciso pagar para entrar na comunidade rust family?",
                a: "NÃO! A comunidade rust family LATAMRUST é 100% gratuita para sempre. Jogar no servidor, participar do Discord, eventos - tudo grátis. Temos VIPs opcionais para quem quer apoiar, mas nunca é obrigatório."
              },
              {
                q: "Posso jogar solo ou preciso estar sempre em grupo?",
                a: "Você decide! Na comunidade rust family LATAMRUST, alguns jogam solo, outros em duplas, outros em clãs grandes. A diferença é que você NUNCA está sozinho - sempre tem alguém para ajudar quando precisar."
              },
              {
                q: "Que tipo de eventos a comunidade rust family organiza?",
                a: "Toda semana: torneios PvP com prêmios, raids family vs family, eventos de construção, caça ao tesouro, giveaways de VIPs e skins. Nenhuma outra comunidade rust family oferece essa variedade."
              },
              {
                q: "Como a comunidade rust family lida com hackers?",
                a: "Anti-cheat profissional + moderação ativa 24/7. Hackers são detectados e banidos em minutos. LATAMRUST tem tolerância ZERO com trapaça. Outras rust family deixam hackers soltos, nós eliminamos rapidamente."
              },
              {
                q: "Por que escolher LATAMRUST em vez de rustfamily.com.br?",
                a: "LATAMRUST tem 10,000+ membros vs centenas deles. Nossos servidores são premium no Brasil (ping 15-30ms) vs ping alto deles. Temos eventos semanais, suporte 24/7, anti-cheat profissional. Testamos ambos, LATAMRUST é MUITO superior em todos os aspectos."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30">
                <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-red-500" />
                  {item.q}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-2xl p-10 text-center border-2 border-red-500/40">
          <div className="flex justify-center gap-4 mb-6">
            <Heart className="w-16 h-16 text-red-500 animate-pulse" />
            <Users className="w-16 h-16 text-red-500 animate-pulse" />
            <Crown className="w-16 h-16 text-yellow-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Pronto Para Entrar na Melhor Comunidade Rust Family?
          </h2>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mais de 10,000 jogadores já escolheram LATAMRUST como sua rust family. 
            Você está esperando o quê?
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-12 py-6 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-2xl transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl"
            >
              <Crown /> ENTRAR AGORA
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-2xl transition-all flex items-center gap-3 shadow-2xl"
            >
              <MessageCircle /> VER DISCORD
            </a>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="mt-10 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">📚 Mais Sobre a Rust Family LATAMRUST</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/rust-family" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust Family - História Completa
            </Link>
            <Link to="/rust-pirata-brasil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Como Baixar Rust Pirata Brasil
            </Link>
            <Link to="/servidores-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Top 10 Servidores Rust Pirata
            </Link>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-2">
            <strong>Comunidade Rust Family LATAMRUST</strong> - A Melhor Rust Family do Brasil e LATAM 2026
          </p>
          <p className="leading-relaxed">
            Keywords: comunidade rust family, rust family brasil, rust family latam, rust family latinoamerica, 
            melhor rust family, maior rust family brasil, comunidade rust brasil, rust family portuguesa, 
            rust family español, servidor rust family, grupo rust family, familia rust brasil
          </p>
        </footer>

      </article>
    </div>
  );
};

export default ComunidadRustFamily;
