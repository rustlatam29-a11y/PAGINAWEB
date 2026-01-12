import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Server, Users, Shield, MessageSquare, Copy, CheckCircle } from "lucide-react";

const DayZ: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const serverIP = "TU_IP:TU_PUERTO"; // Reemplazar con IP real

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl mb-6 shadow-lg">
            <Server className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            SERVIDOR <span className="text-red-600">DAYZ</span>
          </h1>
          <p className="text-xl text-gray-400">LATAM • 24/7 • Supervivencia Extrema</p>
        </div>

        {/* Server Info Card */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-950/80 backdrop-blur-lg rounded-2xl p-8 border border-red-900/20 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Server className="w-6 h-6 text-red-600 mr-3" />
            Información del Servidor
          </h2>

          {/* IP Address */}
          <div className="mb-6">
            <label className="text-sm text-gray-400 mb-2 block">Dirección del Servidor</label>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-black/50 rounded-lg px-4 py-3 border border-red-900/30">
                <code className="text-red-400 font-mono text-lg">{serverIP}</code>
              </div>
              <button
                onClick={handleCopy}
                className="px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span className="hidden sm:inline">Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-black/30 rounded-lg p-4 text-center border border-red-900/20">
              <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50</div>
              <div className="text-sm text-gray-400">Slots</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center border border-red-900/20">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Online</div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 text-center border border-red-900/20">
              <Server className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">LATAM</div>
              <div className="text-sm text-gray-400">Región</div>
            </div>
          </div>
        </div>

        {/* How to Join */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-950/80 backdrop-blur-lg rounded-2xl p-8 border border-red-900/20 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">Cómo Unirse</h2>
          <ol className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">1</span>
              <div>
                <strong className="text-white">Descarga DayZ oficial</strong>
                <p className="text-sm text-gray-400 mt-1">Disponible en <a href="https://store.steampowered.com/app/221100/DayZ/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">Steam</a></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">2</span>
              <div>
                <strong className="text-white">Abre DayZ y ve a "Servidores"</strong>
                <p className="text-sm text-gray-400 mt-1">En el menú principal selecciona la opción de servidores comunitarios</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">3</span>
              <div>
                <strong className="text-white">Busca nuestro servidor</strong>
                <p className="text-sm text-gray-400 mt-1">Usa el filtro de búsqueda o ingresa la IP directamente</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">4</span>
              <div>
                <strong className="text-white">¡Conecta y juega!</strong>
                <p className="text-sm text-gray-400 mt-1">Lee las reglas antes de comenzar para evitar sanciones</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Rules */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-950/80 backdrop-blur-lg rounded-2xl p-8 border border-red-900/20 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-6 h-6 text-red-600 mr-3" />
            Reglas Básicas
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Respeta a otros jugadores - No insultos ni comportamiento tóxico</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>Prohibido usar hacks, cheats o exploits</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>No hacer teamkill intencional con compañeros de equipo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>No spam en el chat global</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 mt-1">•</span>
              <span>El PVP está permitido - Sobrevive como puedas</span>
            </li>
          </ul>
        </div>

        {/* Discord CTA */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 text-center shadow-xl">
          <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Únete a Nuestra Comunidad</h3>
          <p className="text-gray-300 mb-6">
            Conéctate con otros jugadores, reporta bugs y mantente al día con actualizaciones
          </p>
          <a
            href="https://discord.gg/M9ud76fnYu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageSquare className="w-6 h-6" />
            <span>Unirse al Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DayZ;
