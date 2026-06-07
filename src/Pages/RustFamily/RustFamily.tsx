import React from "react";
import { Users, Trophy, Heart, Zap, Shield, Globe, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const RustFamily: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-red-500 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-black">
              <span className="text-red-500">RUST FAMILY</span>
            </h1>
            <Users className="w-12 h-12 text-red-500 animate-pulse" />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6">
            A Maior Família de Rust Pirata do Brasil e LATAM - LATAMRUST
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Junte-se à <strong>Rust Family LATAMRUST</strong>, a comunidade mais unida e ativa de 
            <strong> Rust Pirata no Brasil</strong>. Mais de 10.000 membros brasileiros jogando juntos, 
            ajudando uns aos outros e dominando os servidores.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Crown /> ENTRAR NA FAMILY
            </Link>
            <a 
              href="https://discord.com/invite/7Vz4YBamFG"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all flex items-center gap-2"
            >
              <Users /> Discord Family
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* O que é Rust Family */}
        <section className="mb-12">
          <h2 className="text-4xl font-black mb-6 text-red-500">O Que É a Rust Family?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              A <strong>Rust Family</strong> (também conhecida como <strong>Família Rust</strong> ou <strong>Family Rust</strong>) 
              é o termo usado para descrever comunidades unidas de jogadores de Rust que jogam juntos como uma grande família. 
              No <strong>LATAMRUST</strong>, criamos a maior e mais forte Rust Family do Brasil e toda América Latina.
            </p>
            <p>
              Diferente de clãs tradicionais, a <strong>Rust Family Brasil</strong> funciona como uma verdadeira família onde 
              veteranos ensinam iniciantes, todos se ajudam com recursos, bases são compartilhadas e a união é mais importante 
              que ganhar sozinho. Somos mais de 10.000 jogadores brasileiros conectados pelo amor ao <strong>Rust Pirata</strong>.
            </p>
            <p>
              Se você está procurando por <strong>"rust family"</strong>, <strong>"rust family brasil"</strong>, 
              <strong>"familia rust"</strong> ou <strong>"rust family server"</strong>, você encontrou o lugar certo. 
              LATAMRUST é o lar da maior e mais ativa Rust Family em português do mundo.
            </p>
          </div>
        </section>

        {/* Por Que LATAMRUST é a Melhor Rust Family */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-500 flex items-center gap-3">
            <Trophy className="w-8 h-8" />
            Por Que LATAMRUST é a Melhor Rust Family do Brasil?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: <Users className="w-6 h-6 text-red-500" />,
                title: "10,000+ Membros Ativos",
                desc: "A maior comunidade de Rust Pirata do Brasil em um só lugar"
              },
              {
                icon: <Heart className="w-6 h-6 text-red-500" />,
                title: "Cultura de Ajuda Mútua",
                desc: "Veteranos ensinando iniciantes, todos progredindo juntos"
              },
              {
                icon: <Shield className="w-6 h-6 text-red-500" />,
                title: "Proteção Familiar",
                desc: "Ninguém fica sozinho, a family protege todos os membros"
              },
              {
                icon: <Zap className="w-6 h-6 text-red-500" />,
                title: "Eventos Semanais",
                desc: "Raids em grupo, torneios family vs family, eventos especiais"
              },
              {
                icon: <Globe className="w-6 h-6 text-red-500" />,
                title: "Ping Baixo Brasil",
                desc: "Servidores localizados no Brasil para melhor experiência"
              },
              {
                icon: <Crown className="w-6 h-6 text-red-500" />,
                title: "Liderança Ativa",
                desc: "Moderação em português, suporte 24/7, organização profissional"
              }
            ].map((item, i) => (
              <div key={i} className="bg-black/40 rounded-lg p-4 flex gap-3 border border-red-900/30">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Como Entrar na Rust Family */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">Como Entrar na Rust Family LATAMRUST?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Entre no Discord da Family</h3>
                <p className="text-gray-300 mb-2">
                  Acesse nosso Discord oficial em <a href="https://discord.com/invite/7Vz4YBamFG" className="text-green-400 underline" target="_blank" rel="noopener noreferrer">Discord LATAMRUST</a>. 
                  Este é o coração da Rust Family Brasil, onde todos os membros se conectam.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Baixe Rust Pirata 2275</h3>
                <p className="text-gray-300">
                  No Discord, vá até a seção #downloads e baixe o Rust Pirata versão 2275. É 100% grátis e 
                  todos os links são verificados. Tutorial completo de instalação disponível em português.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Apresente-se na Family</h3>
                <p className="text-gray-300">
                  Vá no canal #apresentações e se apresente para a família. Conte sua história com Rust, 
                  de onde você é no Brasil, e que tipo de gameplay você prefere. A family vai te receber de braços abertos!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Encontre Seu Grupo</h3>
                <p className="text-gray-300">
                  Dentro da Rust Family, existem vários grupos (squads) especializados: PvP agressivo, base builders, 
                  farmers, traders, etc. Encontre o estilo que combina com você e conecte-se com membros similares.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Bem-vindo à Family!</h3>
                <p className="text-gray-300">
                  Agora você faz parte da maior Rust Family do Brasil. Jogue, ajude, cresça junto com mais de 10.000 
                  jogadores brasileiros. Família LATAMRUST nunca deixa ninguém para trás!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regras da Rust Family */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-500">Regras e Valores da Rust Family</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-white mb-2">1. Family Primeiro</h3>
              <p className="text-gray-300">
                Membros da family se ajudam sempre. Antes de raidar, pergunte se não é da family. 
                Compartilhe recursos com membros que precisam.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-white mb-2">2. Respeito Entre Todos</h3>
              <p className="text-gray-300">
                Tratamos todos com respeito, desde iniciantes até veteranos. Racismo, machismo, homofobia 
                resultam em ban permanente da family.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-white mb-2">3. Jogo Limpo (No Cheat)</h3>
              <p className="text-gray-300">
                Rust Family LATAMRUST é 100% limpa. Hackers são banidos imediatamente. Jogamos com habilidade, 
                não com trapaça.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-white mb-2">4. Veteranos Ensinam Novatos</h3>
              <p className="text-gray-300">
                Se você é veterano, reserve tempo para ensinar membros novos. A family cresce quando todos crescem juntos.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-white mb-2">5. Português/Español Somente</h3>
              <p className="text-gray-300">
                Nos chats da family, falamos português e español para manter a união LATAM. Inglês apenas em situações específicas.
              </p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500 text-center">
            O Que os Membros Dizem Sobre a Rust Family
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Lucas - São Paulo",
                text: "Entrei na Rust Family achando que ia só jogar Rust. Acabei fazendo amigos reais que converso todo dia. Melhor comunidade!"
              },
              {
                name: "Matheus - Rio de Janeiro",
                text: "Estava perdido no Rust até entrar na family. Agora tenho base compartilhada, grupo de farm e aprendi PvP com os veteranos. Top demais!"
              },
              {
                name: "Gabriel - Minas Gerais",
                text: "A Rust Family LATAMRUST é diferente. Todo mundo se ajuda de verdade. Já doei e recebi recursos várias vezes. União forte!"
              },
              {
                name: "Rafael - Bahia",
                text: "Jogo Rust há anos, mas só na LATAMRUST encontrei uma family de verdade. Eventos toda semana, raids épicos, diversão garantida!"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30">
                <p className="text-gray-300 italic mb-4">"{item.text}"</p>
                <p className="text-red-400 font-bold">- {item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Keywords Section */}
        <section className="mb-12 bg-gray-900/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Rust Family: Todas as Variações</h2>
          <div className="text-gray-400 text-sm leading-relaxed">
            <p className="mb-2">
              <strong className="text-white">Rust Family</strong> também é conhecida como: 
              <strong> família rust</strong>, <strong>family rust</strong>, <strong>rust family brasil</strong>, 
              <strong> rust family server</strong>, <strong>rust family brasileiro</strong>, 
              <strong> familia rust pirata</strong>, <strong>rust family latam</strong>, 
              <strong> servidor rust family</strong>, <strong>rust family community</strong>.
            </p>
            <p>
              Se você procura por qualquer uma dessas variações, LATAMRUST é a maior e melhor 
              <strong> rust family do Brasil</strong> com mais de 10.000 membros ativos em 2026.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">Perguntas Frequentes - Rust Family</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "O que significa Rust Family?",
                a: "Rust Family (Família Rust) é uma comunidade unida de jogadores de Rust que jogam juntos como uma grande família. Diferente de clãs tradicionais, a family valoriza união, ajuda mútua e progressão coletiva ao invés de apenas vitórias individuais."
              },
              {
                q: "Como posso entrar na Rust Family LATAMRUST?",
                a: "Entre no nosso Discord (Discord LATAMRUST), apresente-se, baixe o Rust Pirata 2275 e conecte ao servidor. É 100% grátis e todos são bem-vindos!"
              },
              {
                q: "Preciso ter experiência em Rust para entrar na Family?",
                a: "NÃO! A Rust Family LATAMRUST aceita tanto iniciantes quanto veteranos. Temos veteranos dedicados a ensinar novatos. Todos começaram do zero em algum momento."
              },
              {
                q: "A Rust Family aceita jogadores solo?",
                a: "Sim! Muitos membros começaram jogando solo e encontraram na family um lugar para fazer amigos e jogar em grupo. Você não precisa estar sempre em grupo, mas terá suporte quando quiser."
              },
              {
                q: "Quais são os benefícios de fazer parte da Rust Family?",
                a: "Proteção contra raids (a family protege seus membros), ajuda com recursos, tutoriais e dicas de veteranos, eventos exclusivos, base compartilhada (opcional), e uma comunidade ativa 24/7 em português."
              },
              {
                q: "A Rust Family LATAMRUST é só para brasileiros?",
                a: "Somos focados no Brasil mas aceitamos toda LATAM (Argentina, Chile, México, Colômbia, etc). Falamos português e español. Nosso ping é otimizado para toda América Latina."
              },
              {
                q: "Existe sistema de ranks na Rust Family?",
                a: "Sim, temos ranks baseados em atividade, contribuição e tempo na family. Quanto mais você joga e ajuda, mais você sobe de rank e desbloqueia benefícios como acesso a bases VIP da family."
              },
              {
                q: "Como a Rust Family se protege de traidores?",
                a: "Temos sistema de verificação para novos membros, moderação ativa 24/7, e membros veteranos de confiança em posições-chave. Traições são raras e punidas com ban permanente."
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
          <Crown className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-black mb-4">Junte-se à Maior Rust Family do Brasil</h2>
          <p className="text-xl text-gray-300 mb-6">
            Mais de 10.000 jogadores brasileiros já fazem parte da família. Você está esperando o quê?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              <Heart /> ENTRAR NA FAMILY AGORA
            </Link>
            <a 
              href="https://discord.com/invite/7Vz4YBamFG"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-xl transition-all flex items-center gap-2 shadow-xl"
            >
              <Users /> DISCORD DA FAMILY
            </a>
          </div>
        </section>

        {/* Internal Linking SEO */}
        <section className="mt-8 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">📚 Mais Sobre LATAMRUST</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/rust-pirata-brasil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Como Baixar Rust Pirata 2275 Brasil
            </Link>
            <Link to="/servidores-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Top 10 Servidores Rust Pirata Brasil
            </Link>
            <Link to="/" className="text-gray-500 hover:text-red-400 transition-colors">
              → LATAMRUST Homepage - Entrar Servidor
            </Link>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-2">
            <strong>LATAMRUST Rust Family</strong> - A Maior Família de Rust Pirata do Brasil | Comunidade LATAM 2026
          </p>
          <p>
            Keywords: rust family, família rust, family rust, rust family brasil, rust family server, familia rust pirata, 
            rust family brasileiro, rust family latam, servidor rust family, rust family community, rust family discord, 
            melhor rust family, maior rust family brasil, rust family 2026
          </p>
        </footer>

      </article>
    </div>
  );
};

export default RustFamily;
