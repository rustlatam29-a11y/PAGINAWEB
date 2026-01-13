import React from "react";
import { Server, Shield, Users, Globe, Wifi, HardDrive, Activity, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServidorRustFamily: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Server className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Servidor <span className="text-red-500">Rust Family</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-6">
            LATAMRUST - O Servidor Rust Family #1 da América Latina
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Procurando o melhor <strong>servidor rust family</strong>? LATAMRUST oferece o servidor mais poderoso, 
            estável e otimizado para <strong>rust family</strong> em toda LATAM. Ping 15-30ms no Brasil, uptime 99.9%, 
            10,000+ jogadores ativos e infraestrutura premium dedicada.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all transform hover:scale-105"
            >
              CONECTAR NO SERVIDOR →
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-xl transition-all"
            >
              Ver IP do Servidor
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Especificações Técnicas */}
        <section className="mb-12">
          <h2 className="text-4xl font-black mb-6 text-red-500">Especificações do Servidor Rust Family LATAMRUST</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-red-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold">Hardware Premium</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• CPU: AMD Ryzen 9 5950X (16 cores)</li>
                <li>• RAM: 128GB DDR4 ECC</li>
                <li>• Storage: 2TB NVMe SSD Raid 10</li>
                <li>• Rede: 10Gbps dedicado</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-red-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Localização</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Datacenter: São Paulo, Brasil</li>
                <li>• Ping BR: 15-30ms</li>
                <li>• Ping AR/CL: 40-60ms</li>
                <li>• Proteção DDoS: CloudFlare</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-red-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-8 h-8 text-green-500" />
                <h3 className="text-2xl font-bold">Performance</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Uptime: 99.9% garantido</li>
                <li>• Tick Rate: 30 ticks/segundo</li>
                <li>• Zero lag mesmo com 500+ players</li>
                <li>• Reinícios programados (sem surpresas)</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-red-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold">Segurança</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Anti-cheat profissional EAC-like</li>
                <li>• Moderação 24/7 ativa</li>
                <li>• Sistema de logs completo</li>
                <li>• Backups automáticos a cada 1h</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Por Que Nosso Servidor é o Melhor */}
        <section className="mb-12 bg-gradient-to-r from-red-900/20 to-gray-900/20 rounded-2xl p-8 border border-red-900/30">
          <h2 className="text-3xl font-black mb-6 text-red-500 flex items-center gap-3">
            <Award className="w-10 h-10" />
            Por Que o Servidor Rust Family LATAMRUST é o Melhor?
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Wifi className="w-6 h-6 text-cyan-400" />
                Ping Mais Baixo do Brasil
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Nosso <strong>servidor rust family</strong> está hospedado em datacenter premium em São Paulo, Brasil. 
                Resultado? Jogadores brasileiros conseguem ping de 15-30ms consistente - o mais baixo de qualquer 
                <strong> servidor rust family</strong> na América Latina.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outros <strong>servidores rust family</strong> usam hosting barato na Europa ou EUA, resultando em 
                ping 100-200ms. No LATAMRUST, você sente a diferença no PvP imediatamente.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <HardDrive className="w-6 h-6 text-yellow-400" />
                Hardware Dedicado Premium
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Investimos pesado em infraestrutura. Nosso <strong>servidor rust family</strong> roda em Ryzen 9 5950X 
                com 128GB RAM e SSDs NVMe em Raid 10. Enquanto outros <strong>servidores rust family</strong> compartilham 
                recursos com 10+ servidores, LATAMRUST tem hardware dedicado exclusivo.
              </p>
              <p className="text-gray-300 leading-relaxed">
                O que isso significa? Zero lag, mesmo com 500 jogadores online. Builds instantâneos. Raids sem freeze. 
                PvP suave e responsivo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Activity className="w-6 h-6 text-green-400" />
                Uptime 99.9% - Sempre Online
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Nosso <strong>servidor rust family</strong> tem uptime garantido de 99.9%. Isso significa apenas 43 minutos 
                de downtime por MÊS - e geralmente é ZERO. Temos sistemas redundantes, backups automáticos e equipe técnica 
                24/7 pronta para qualquer emergência.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outros <strong>servidores rust family</strong> caem toda semana, perdem progresso de jogadores, ficam offline 
                horas. LATAMRUST? Está sempre disponível quando você quer jogar.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-red-400" />
                Anti-Cheat Profissional
              </h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Hackers arruinam qualquer <strong>servidor rust family</strong>. Por isso investimos em anti-cheat de nível 
                profissional, similar ao EAC (EasyAntiCheat). Detectamos e banimos hackers em MINUTOS, não dias ou semanas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Combinamos tecnologia automatizada com moderação humana 24/7. Se um hacker aparece, recebemos alerta imediato, 
                verificamos e eliminamos. Nosso <strong>servidor rust family</strong> é um dos mais limpos da LATAM.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-400" />
                Capacidade para 10,000+ Jogadores
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nosso <strong>servidor rust family</strong> suporta até 500 jogadores simultâneos por instância, com múltiplas 
                instâncias disponíveis. Total: capacidade para mais de 10,000 jogadores ativos em nossa infraestrutura.
                Nunca fila de espera, nunca slots cheios.
              </p>
            </div>
          </div>
        </section>

        {/* Comparação com Outros Servidores */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">
            Servidor Rust Family LATAMRUST vs Outros Servidores
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900/50 rounded-xl overflow-hidden">
              <thead className="bg-red-900/30">
                <tr>
                  <th className="p-4 text-left">Especificação</th>
                  <th className="p-4 text-center">LATAMRUST</th>
                  <th className="p-4 text-center">rustfamily.com.br</th>
                  <th className="p-4 text-center">Outros Servidores</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="p-4 text-gray-300">Localização</td>
                  <td className="p-4 text-center text-green-400 font-bold">Brasil (SP)</td>
                  <td className="p-4 text-center text-yellow-500">Brasil (?)</td>
                  <td className="p-4 text-center text-gray-500">Europa/EUA</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Ping Médio BR</td>
                  <td className="p-4 text-center text-green-400 font-bold">15-30ms</td>
                  <td className="p-4 text-center text-yellow-500">50-80ms</td>
                  <td className="p-4 text-center text-gray-500">100-200ms</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Hardware</td>
                  <td className="p-4 text-center text-green-400 font-bold">Dedicado Premium</td>
                  <td className="p-4 text-center text-yellow-500">Compartilhado</td>
                  <td className="p-4 text-center text-gray-500">VPS Barato</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Uptime</td>
                  <td className="p-4 text-center text-green-400 font-bold">99.9%</td>
                  <td className="p-4 text-center text-yellow-500">95%</td>
                  <td className="p-4 text-center text-gray-500">80-90%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Anti-Cheat</td>
                  <td className="p-4 text-center text-green-400 font-bold">Profissional EAC-like</td>
                  <td className="p-4 text-center text-yellow-500">Básico</td>
                  <td className="p-4 text-center text-gray-500">Inexistente</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Moderação</td>
                  <td className="p-4 text-center text-green-400 font-bold">24/7 Ativa</td>
                  <td className="p-4 text-center text-yellow-500">Limitada</td>
                  <td className="p-4 text-center text-gray-500">Ausente</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Slots Disponíveis</td>
                  <td className="p-4 text-center text-green-400 font-bold">500+ por instância</td>
                  <td className="p-4 text-center text-yellow-500">200-300</td>
                  <td className="p-4 text-center text-gray-500">100-150</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-300">Backup</td>
                  <td className="p-4 text-center text-green-400 font-bold">A cada 1h</td>
                  <td className="p-4 text-center text-yellow-500">Diário</td>
                  <td className="p-4 text-center text-gray-500">Semanal/Nunca</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Como Conectar */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-black mb-6 text-red-500">Como Conectar no Servidor Rust Family?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Baixe Rust Pirata 2275</h3>
                <p className="text-gray-300">
                  Acesse nosso Discord (<a href="https://discord.gg/dT8u5b3jga" className="text-red-400 underline" target="_blank" rel="noopener noreferrer">discord.gg/dT8u5b3jga</a>) 
                  e baixe o Rust Pirata atualizado no canal #downloads.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pegue o IP do Servidor</h3>
                <p className="text-gray-300 mb-2">
                  No Discord, canal #ips-servidores, você encontra o IP atualizado do nosso <strong>servidor rust family</strong>.
                </p>
                <div className="bg-black/50 rounded-lg p-3 font-mono text-sm text-cyan-400">
                  Exemplo: client.connect IP:PORT
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conecte via Console</h3>
                <p className="text-gray-300 mb-2">
                  Abra Rust Pirata, pressione <strong>F1</strong> para abrir o console e cole o comando de conexão.
                </p>
                <p className="text-gray-300">
                  Em 5-10 segundos você estará dentro do melhor <strong>servidor rust family</strong> da LATAM!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regras do Servidor */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">Regras do Servidor Rust Family LATAMRUST</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "❌ Zero Tolerância com Hack/Cheat",
                desc: "Qualquer tipo de trapaça resulta em ban permanente imediato do servidor e da comunidade."
              },
              {
                title: "🤝 Respeito Entre Jogadores",
                desc: "Racismo, machismo, homofobia = ban permanente. Servidor rust family é para todos."
              },
              {
                title: "🏡 Raid com Bom Senso",
                desc: "Raids são permitidas, mas foundation wipe desnecessário é contra as regras da family."
              },
              {
                title: "🗣️ Português/Español Prioritário",
                desc: "Chat em PT-BR/ES prioritário para manter união LATAM. Inglês permitido quando necessário."
              },
              {
                title: "🚫 Sem Griefing Excessivo",
                desc: "Jogar agressivo é OK, mas griefing que arruina experiência de novatos é punível."
              },
              {
                title: "👥 Family First",
                desc: "Membros da rust family se ajudam. Antes de raidar, confirme se não é da family."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 rounded-lg p-4 border border-red-900/20">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-red-500">FAQ - Servidor Rust Family</h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Qual o IP do servidor rust family LATAMRUST?",
                a: "O IP é atualizado regularmente e está disponível no nosso Discord oficial (discord.gg/dT8u5b3jga) no canal #ips-servidores. Fazemos isso para evitar ataques DDoS e garantir estabilidade do servidor."
              },
              {
                q: "O servidor rust family tem lag?",
                a: "NÃO. Nosso servidor roda em hardware premium dedicado (Ryzen 9 5950X, 128GB RAM, SSDs NVMe) no Brasil. Mesmo com 500 jogadores simultâneos, o servidor mantém performance impecável. Outros servidores rust family usam VPS barato que laga com 50 players."
              },
              {
                q: "Qual a taxa de wipe do servidor?",
                a: "Wipes semanais ou quinzenais dependendo da instância. Informações detalhadas no Discord. Sempre avisamos com 48h de antecedência e fazemos wipes em horários convenientes para LATAM."
              },
              {
                q: "O servidor rust family aceita clãs grandes?",
                a: "Sim! Não temos limite de tamanho de clã. Desde solos até zergues de 20+ pessoas, todos são bem-vindos. Temos diferentes instâncias para diferentes estilos de jogo."
              },
              {
                q: "Tem moderação ativa no servidor?",
                a: "SIM, 24/7. Nossa equipe de moderação monitora o servidor constantemente. Reports são respondidos em minutos, não horas. Hackers são banidos imediatamente."
              },
              {
                q: "Posso jogar no servidor rust family de graça?",
                a: "SIM, 100% grátis. O servidor é mantido por doações voluntárias da comunidade. VIPs opcionais dão alguns benefícios cosméticos, mas nada pay-to-win."
              },
              {
                q: "O servidor tem plugins/mods?",
                a: "Sim, plugins equilibrados que melhoram a experiência: teleports, kits iniciais, sistema de ranks, economia. Nada que desequilibre o jogo ou dê vantagens injustas."
              },
              {
                q: "Por que escolher LATAMRUST em vez de rustfamily.com.br?",
                a: "Simples: ping mais baixo (15-30ms vs 50-80ms), hardware superior (dedicado vs compartilhado), comunidade 5x maior (10,000+ vs 2,000), uptime melhor (99.9% vs 95%), e moderação profissional ativa 24/7. Testamos ambos, LATAMRUST é objetivamente superior."
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
          <Server className="w-20 h-20 text-red-500 mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Conecte no Melhor Servidor Rust Family Agora
          </h2>
          
          <p className="text-2xl text-gray-300 mb-8">
            Ping 15-30ms Brasil • Uptime 99.9% • Hardware Premium • Anti-Cheat Profissional
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/"
              className="px-12 py-6 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-2xl transition-all transform hover:scale-105"
            >
              JOGAR AGORA
            </Link>
            <a 
              href="https://discord.gg/dT8u5b3jga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-2xl transition-all"
            >
              VER IP SERVIDOR
            </a>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="mt-10 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">📚 Mais Sobre Rust Family</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/rust-family" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust Family - História e Benefícios
            </Link>
            <Link to="/comunidade-rust-family" className="text-gray-500 hover:text-red-400 transition-colors">
              → Comunidade Rust Family LATAMRUST
            </Link>
            <Link to="/rust-pirata-brasil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Tutorial Baixar Rust Pirata
            </Link>
          </div>
        </section>

        {/* Footer SEO */}
        <footer className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-2">
            <strong>Servidor Rust Family LATAMRUST</strong> - O Melhor Servidor Rust Family do Brasil e LATAM 2026
          </p>
          <p className="leading-relaxed">
            Keywords: servidor rust family, rust family server, servidor rust family brasil, servidor rust family latam, 
            melhor servidor rust family, rust family server brazil, ip servidor rust family, servidor rust pirata family, 
            rust family brasileiro servidor, servidor familia rust
          </p>
        </footer>

      </article>
    </div>
  );
};

export default ServidorRustFamily;
