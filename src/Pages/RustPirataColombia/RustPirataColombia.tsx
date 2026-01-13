import React from "react";
import { Download, Server, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const RustPirataColombia: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 bg-gradient-to-b from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🇨🇴</div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Rust Pirata Colombia - Descargar Gratis 2026</h1>
          <p className="text-xl text-gray-300 mb-8">Servidor LATAMRUST - Mejor servidor Rust Pirata Colombia con ping bajo, +10,000 jugadores parcero</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105">¡JUGAR AHORA PARCERO!</Link>
            <a href="https://discord.gg/dT8u5b3jga" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-lg transition-all">Discord Colombia</a>
          </div>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">¿Qué es Rust Pirata Colombia?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4"><strong>Rust Pirata Colombia</strong> es la versión gratuita de <strong>rust pirata</strong> para colombianos parcero. LATAMRUST ofrece el <strong>mejor servidor rust pirata colombia</strong> con ping 70-90ms desde Bogotá, Medellín, Cali, Barranquilla, Cartagena. Miles de colombianos jugando <strong>rust pirata gratis</strong> todos los días.</p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">Si buscas <strong>descargar rust pirata colombia</strong> o <strong>servidor rust colombia</strong>, somos la mejor opción parcero. Juega <strong>rust pirata 2275</strong> gratis con colombianos. <strong>Rust pirata</strong> chimba en Colombia.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Cómo Descargar Rust Pirata Colombia</h2>
          <p className="text-gray-300 mb-4">Tutorial para <strong>descargar rust pirata</strong> y jugar en el <strong>servidor rust pirata colombia</strong>:</p>
          <div className="space-y-3 bg-gray-800/30 p-6 rounded-xl">
            <p className="text-gray-300">1. Únete al Discord para <strong>descargar rust pirata colombia gratis</strong></p>
            <p className="text-gray-300">2. Descarga <strong>rust pirata 2275</strong> desde el canal oficial</p>
            <p className="text-gray-300">3. Instala <strong>rust pirata</strong> en tu PC parcero</p>
            <p className="text-gray-300">4. Conecta al <strong>servidor rust pirata</strong> LATAMRUST chimba</p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">FAQ Rust Pirata Colombia</h2>
          <div className="space-y-3">
            <div className="bg-gray-800/50 p-5 rounded-xl">
              <h3 className="font-bold text-yellow-400 mb-2">¿Es gratis Rust Pirata en Colombia?</h3>
              <p className="text-gray-300">Sí parcero, <strong>rust pirata colombia</strong> es 100% gratis. Puedes <strong>descargar rust pirata</strong> sin pagar nada.</p>
            </div>
            <div className="bg-gray-800/50 p-5 rounded-xl">
              <h3 className="font-bold text-yellow-400 mb-2">¿Cuánto ping tengo desde Colombia?</h3>
              <p className="text-gray-300">El ping del <strong>servidor rust pirata colombia</strong> es 70-90ms desde Bogotá, Medellín, Cali. Chimba para jugar <strong>rust pirata</strong>.</p>
            </div>
          </div>
        </section>
        <section className="mb-12 bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Por Qué LATAMRUST es Chimba pa' Colombia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 rounded-xl p-6"><Zap className="w-10 h-10 text-yellow-400 mb-4" /><h3 className="text-xl font-bold mb-3">Ping Bajo Colombia</h3><p className="text-gray-300">70-90ms Bogotá, Medellín, Cali. Optimizado pa' Colombia.</p></div>
            <div className="bg-black/40 rounded-xl p-6"><Users className="w-10 h-10 text-yellow-400 mb-4" /><h3 className="text-xl font-bold mb-3">Comunidad Colombiana</h3><p className="text-gray-300">Miles de colombianos online 24/7. Moderadores paisas.</p></div>
            <div className="bg-black/40 rounded-xl p-6"><Download className="w-10 h-10 text-yellow-400 mb-4" /><h3 className="text-xl font-bold mb-3">Descargar Gratis</h3><p className="text-gray-300">Descarga Rust Pirata 2275 gratis Colombia parcero.</p></div>
            <div className="bg-black/40 rounded-xl p-6"><Server className="w-10 h-10 text-yellow-400 mb-4" /><h3 className="text-xl font-bold mb-3">Servidor Premium</h3><p className="text-gray-300">Hardware dedicado, 99.9% uptime chimba.</p></div>
          </div>
        </section>
        <section className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-center">Ve También:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/rust-pirata-mexico" className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all"><div className="text-2xl mb-2">🇲🇽</div><h4 className="font-bold">Rust México</h4></Link>
            <Link to="/rust-pirata-chile" className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all"><div className="text-2xl mb-2">🇨🇱</div><h4 className="font-bold">Rust Chile</h4></Link>
            <Link to="/rust-family" className="bg-black/40 p-4 rounded-lg hover:bg-black/60 transition-all"><div className="text-2xl mb-2">❤️</div><h4 className="font-bold">Rust Family</h4></Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default RustPirataColombia;
