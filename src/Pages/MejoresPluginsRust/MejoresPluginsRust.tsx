import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Star, Zap, Package } from "lucide-react";

const MejoresPluginsRust: React.FC = () => {
  const plugins = [
    { name: "Kits", category: "Gameplay", desc: "Da kits de inicio, VIP y personalizados a los jugadores. Esencial para todo servidor.", download: "umod.org" },
    { name: "Economics", category: "Economia", desc: "Sistema de dinero completo. Los jugadores ganan, gastan y comercian entre si.", download: "umod.org" },
    { name: "Backpacks", category: "Gameplay", desc: "Mochilas extra para que los jugadores lleven mas items sin tener que volver a base.", download: "umod.org" },
    { name: "BetterChat", category: "Social", desc: "Chat mejorado con rangos, colores, tags personalizados y soporte para Discord.", download: "umod.org" },
    { name: "Vanish", category: "Admin", desc: "Modo invisible para administradores. Perfecto para observar sin ser visto.", download: "umod.org" },
    { name: "NoEscape", category: "Anti-Raid", desc: "Impide que jugadores escapen rapido durante un raid. Balancea el PvP.", download: "umod.org" },
    { name: "ServerRewards", category: "Economia", desc: "Recompensas automaticas por tiempo jugado, kills y logros.", download: "umod.org" },
    { name: "RustAdmin AntiCheat", category: "Seguridad", desc: "Anti-cheat profesional que detecta y banea hackers automaticamente.", download: "umod.org" },
    { name: "GatherManager", category: "Economia", desc: "Controla la cantidad de recursos que recolectan los jugadores.", download: "umod.org" },
    { name: "ImageLibrary", category: "Utilidad", desc: "Biblioteca de imagenes para tiendas, menus y anuncios en el servidor.", download: "umod.org" },
    { name: "NTeleportation", category: "Gameplay", desc: "Sistema de teletransporte con /tpa, home, spawn y warps.", download: "umod.org" },
    { name: "Clans", category: "Social", desc: "Sistema de clanes completo con warps compartidos y chat de clan.", download: "umod.org" },
    { name: "FurnaceSplitter", category: "Utilidad", desc: "Divide automaticamente los recursos en hornos de forma equitativa.", download: "umod.org" },
    { name: "QuickSort", category: "Utilidad", desc: "Ordena rapidamente el inventario con un solo clic.", download: "umod.org" },
    { name: "RemoverTool", category: "Admin", desc: "Herramienta para remover estructuras de otros jugadores facilmente.", download: "umod.org" },
    { name: "ZoneManager", category: "Admin", desc: "Crea zonas protegidas donde no se puede PvP, raidear o construir.", download: "umod.org" },
    { name: "AutoDoors", category: "Gameplay", desc: "Puertas automaticas que se abren y cierran solas.", download: "umod.org" },
    { name: "CopyPaste", category: "Admin", desc: "Copia y pega estructuras de bases completas.", download: "umod.org" },
    { name: "EventManager", category: "Eventos", desc: "Organiza eventos automaticos con premios para la comunidad.", download: "umod.org" },
    { name: "InfoPanel", category: "Social", desc: "Panel de informacion con stats, ranking y informacion del servidor.", download: "umod.org" },
    { name: "SkinShop", category: "Tienda", desc: "Tienda de skins donde los jugadores pueden comprar y vender con dinero del servidor.", download: "umod.org" },
    { name: "Koxide", category: "Gameplay", desc: "Sistema de kits mejorado con cooldowns y permisos por rango.", download: "umod.org" },
    { name: "LustyMap", category: "Utilidad", desc: "Mapa interactivo en tiempo real que muestra jugadores y bases.", download: "umod.org" },
    { name: "MarkerManager", category: "Utilidad", desc: "Permite a los jugadores colocar marcadores en el mapa.", download: "umod.org" },
    { name: "PlayerScanner", category: "Admin", desc: "Escanea jugadores cercanos y muestra su ubicacion a los admins.", download: "umod.org" },
    { name: "RaidAlarm", category: "Seguridad", desc: "Sistema de alarma que notifica cuando tu base esta siendo raideada.", download: "umod.org" },
    { name: "SignArtist", category: "Utilidad", desc: "Permite subir imagenes personalizadas a carteles del juego.", download: "umod.org" },
    { name: "StackSizeController", category: "Gameplay", desc: "Controla la cantidad maxima de items que se pueden apilar.", download: "umod.org" },
    { name: "Teleport", category: "Gameplay", desc: "Sistema de teletransporte basico con /tp y /tpr.", download: "umod.org" },
    { name: "Trade", category: "Economia", desc: "Sistema de comercio seguro entre jugadores sin trampas.", download: "umod.org" },
    { name: "UBackup", category: "Seguridad", desc: "Sistema de backup automatico del servidor cada 6 horas.", download: "umod.org" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Mejores Plugins Rust Pirata 2026 - Top 30+ Plugins Gratis | LATAMRUST</title>
        <meta name="description" content="Los mejores plugins gratis para Rust Pirata 2275 y 2388. Kits, economia, anti-cheat, tiendas, VIP, mochilas y mas. Lista completa actualizada 2026 con +30 plugins." />
        <meta name="keywords" content="mejores plugins rust pirata, plugins rust 2275, plugins rust 2388, oxide plugins rust, umod plugins, plugins gratis rust, tienda plugins rust, economia rust, kits rust, anti-cheat rust, mochilas rust, plugins server rust" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latamrust.online/mejores-plugins-rust-pirata" />
        <meta property="og:title" content="Mejores Plugins Rust Pirata 2026 - Top 30+ Plugins Gratis" />
        <meta property="og:description" content="Los mejores plugins gratis para servidores Rust Pirata. Kits, economia, tiendas, anti-cheat y mas." />
        <meta property="og:image" content="https://latamrust.online/LATAMLOGO.webp" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mejores Plugins Rust Pirata 2026" />
        <meta name="twitter:description" content="Top 30+ plugins gratis para servidores Rust Pirata 2275 y 2388." />
        <meta name="twitter:image" content="https://latamrust.online/LATAMLOGO.webp" />
        <link rel="canonical" href="https://latamrust.online/mejores-plugins-rust-pirata" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Mejores Plugins para Rust Pirata 2026",
            "description": "Lista de los mejores plugins gratuitos para servidores Rust Pirata 2275 y 2388",
            "numberOfItems": plugins.length,
            "itemListElement": plugins.slice(0, 10).map((plugin, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": plugin.name,
                "applicationCategory": "Game",
                "operatingSystem": "Windows",
                "description": plugin.desc
              }
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {"@type": "Question", "name": "Donde descargo plugins Rust pirata?", "acceptedAnswer": {"@type": "Answer", "text": "Los plugins se descargan gratis en umod.org. Algunos premium estan en codefling.com. Tambien tenemos packs listos para instalar."}},
              {"@type": "Question", "name": "Cuales son los plugins esenciales para un servidor Rust?", "acceptedAnswer": {"@type": "Answer", "text": "Los esenciales son: Kits (inicio), Economics (dinero), Backpacks (mochilas), BetterChat (chat), Vanish (admin), NoEscape (anti-raid) y RustAdmin AntiCheat (seguridad)."}},
              {"@type": "Question", "name": "Cuantos plugins puedo instalar en mi servidor Rust?", "acceptedAnswer": {"@type": "Answer", "text": "Depende de tu VPS. Con 8GB RAM: 30-50 plugins. Con 16GB: 50-80 plugins. Con 32GB: 80-120 plugins. Mas de eso puede causar lag."}},
              {"@type": "Question", "name": "Los plugins son gratis?", "acceptedAnswer": {"@type": "Answer", "text": "La mayoria son 100% gratis en umod.org. Algunos premium de alta calidad estan en codefling.com desde $5-15 USD."}},
              {"@type": "Question", "name": "Como instalo plugins en Rust pirata?", "acceptedAnswer": {"@type": "Answer", "text": "Copia el archivo .cs a la carpeta /oxide/plugins/ de tu servidor y reinicia. Se cargan automaticamente."}},
              {"@type": "Question", "name": "Los plugins funcionan en Rust 2275 y 2388?", "acceptedAnswer": {"@type": "Answer", "text": "Si, la mayoria de plugins funcionan en ambas versiones. Algunos pueden requerir actualizacion menor para la version mas reciente."}}
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://latamrust.online/"},
              {"@type": "ListItem", "position": 2, "name": "Mejores Plugins Rust Pirata", "item": "https://latamrust.online/mejores-plugins-rust-pirata"}
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
            <Package className="w-4 h-4 text-purple-500" />
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">+30 Plugins Disponibles</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Mejores <span className="text-red-500">Plugins</span> Rust Pirata
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Los mejores plugins gratis para servidores Rust Pirata 2275 y 2388. 
            <strong className="text-white"> Kits, economia, tiendas, anti-cheat y mas.</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              INSTALAR PLUGINS AHORA
            </a>
            <Link to="/como-crear-servidor-rust-pirata" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
              Crear mi Servidor
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 py-12">

        {/* Introduccion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Por Que Necesitas Plugins en tu Servidor Rust</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Los <strong>plugins de Rust pirata</strong> son la columna vertebral de cualquier servidor exitoso. Sin plugins, tu servidor seria 
            un juego basico sin personalizacion. Con los plugins correctos, podes crear una experiencia unica con economia, tiendas, 
            eventos, anti-cheat y mucho mas.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            En <strong>LATAMRUST</strong> tenemos acceso a mas de 30,000 plugins compatibles con Rust 2275 y 2388. Los plugins se instalan 
            facilmente usando <strong>Oxide</strong> o <strong>uMod</strong>, los sistemas de plugins mas populares para servidores Rust pirata.
          </p>
        </section>

        {/* Categorias */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Top 30+ Plugins Organizados por Categoria</h2>
          
          {["Gameplay", "Economia", "Social", "Admin", "Seguridad", "Tienda", "Eventos", "Utilidad", "Anti-Raid"].map((category) => {
            const categoryPlugins = plugins.filter(p => p.category === category);
            if (categoryPlugins.length === 0) return null;
            return (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-red-500" />
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {categoryPlugins.map((plugin, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-red-500/20 transition-all">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">{plugin.name}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{plugin.desc}</p>
                      </div>
                      <span className="text-gray-600 text-xs flex-shrink-0">Gratis</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Como instalar */}
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Como Instalar Plugins en Rust Pirata</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Instala Oxide o uMod</h3>
                <p className="text-gray-300">Descarga e instala Oxide (para Rust 2275) o uMod (para Rust 2388) en tu servidor. Es el framework que carga los plugins.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Descarga el Plugin</h3>
                <p className="text-gray-300">Ve a <strong className="text-white">umod.org</strong> y busca el plugin que necesitas. Haz clic en Download y guarda el archivo .cs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Copia el Archivo</h3>
                <p className="text-gray-300">Copia el archivo .cs a la carpeta <code className="bg-black/50 px-2 py-1 rounded text-red-400">/oxide/plugins/</code> de tu servidor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Reinicia y Listo</h3>
                <p className="text-gray-300">Reinicia tu servidor. El plugin se cargara automaticamente y estara listo para usar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Plugins recomendados por tipo de servidor */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Plugins Recomendados por Tipo de Servidor</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-red-900/30">
              <h3 className="text-xl font-bold text-red-400 mb-4">Servidor Survival</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Kits (inicio basico)</li>
                <li>• Backpacks (mochilas)</li>
                <li>• GatherManager (recursos)</li>
                <li>• FurnaceSplitter (hornos)</li>
                <li>• NoEscape (anti-raid)</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-blue-900/30">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Servidor Economy</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Economics (dinero)</li>
                <li>• ServerRewards (recompensas)</li>
                <li>• SkinShop (tienda)</li>
                <li>• Trade (comercio)</li>
                <li>• InfoPanel (stats)</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-900/30">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Servidor Admin</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• RustAdmin AntiCheat</li>
                <li>• ZoneManager (zonas)</li>
                <li>• Vanish (invisible)</li>
                <li>• CopyPaste (copiar bases)</li>
                <li>• RemoverTool (remover)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Preguntas Frecuentes sobre Plugins Rust</h2>
          <div className="space-y-4">
            {[
              { q: "Donde descargo plugins Rust pirata?", a: "Los plugins se descargan gratis en umod.org. Algunos premium estan en codefling.com. Tambien tenemos packs listos para instalar." },
              { q: "Cuales son los plugins esenciales?", a: "Los esenciales son: Kits (inicio), Economics (dinero), Backpacks (mochilas), BetterChat (chat), Vanish (admin) y RustAdmin AntiCheat (seguridad)." },
              { q: "Cuantos plugins puedo instalar?", a: "Depende de tu VPS. Con 8GB RAM: 30-50 plugins. Con 16GB: 50-80. Con 32GB: 80-120. Mas de eso puede causar lag." },
              { q: "Los plugins son gratis?", a: "La mayoria son 100% gratis en umod.org. Algunos premium de alta calidad estan en codefling.com desde $5-15 USD." },
              { q: "Como instalo plugins?", a: "Copia el archivo .cs a /oxide/plugins/ de tu servidor y reinicia. Se cargan automaticamente." },
              { q: "Funcionan en Rust 2275 y 2388?", a: "Si, la mayoria funcionan en ambas versiones. Algunos pueden requerir actualizacion menor." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30">
                <h3 className="text-lg font-bold text-red-400 mb-3">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-900/30 to-gray-900/30 rounded-2xl p-8 text-center border-2 border-red-500/30">
          <Package className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-4xl font-black mb-4">Instala los Mejores Plugins en tu Servidor</h2>
          <p className="text-xl text-gray-300 mb-6">
            +30,000 plugins disponibles. Kits, economia, tiendas, anti-cheat y mas.
          </p>
          <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-xl transition-all transform hover:scale-105">
            INSTALAR PLUGINS AHORA
          </a>
        </section>

        {/* Enlaces internos */}
        <section className="mt-8 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
          <h3 className="text-lg font-bold text-gray-400 mb-4">Guias Relacionados</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <Link to="/como-crear-servidor-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Como Crear Servidor Rust Pirata
            </Link>
            <Link to="/descargar-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Descargar Rust Pirata Gratis
            </Link>
            <Link to="/rust-2275-oldrecoil" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust 2275 OldRecoil
            </Link>
            <Link to="/rust-2388-actualizado" className="text-gray-500 hover:text-red-400 transition-colors">
              → Rust 2388 Actualizado
            </Link>
            <Link to="/servidores-rust-pirata" className="text-gray-500 hover:text-red-400 transition-colors">
              → Ranking Servidores Rust
            </Link>
            <Link to="/configurar-servidor-rust" className="text-gray-500 hover:text-red-400 transition-colors">
              → Configurar Servidor Rust
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default MejoresPluginsRust;
