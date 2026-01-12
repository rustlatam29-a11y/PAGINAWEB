import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              Términos de Servicio
            </h1>
            <p className="text-gray-400">Última actualización: Enero 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar los servicios de LATAM RUST, aceptas estar sujeto a estos términos de servicio. 
              Si no estás de acuerdo con alguno de estos términos, no utilices nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Uso del Servicio</h2>
            <p>
              LATAM RUST proporciona servidores de juego para Rust. Te comprometes a utilizar nuestros servicios 
              de manera responsable y de acuerdo con las reglas establecidas del servidor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Conducta del Usuario</h2>
            <p className="mb-3">Los usuarios deben:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respetar a otros jugadores y al personal del servidor</li>
              <li>No utilizar hacks, cheats o software de terceros no autorizado</li>
              <li>No explotar bugs o glitches del juego</li>
              <li>No realizar spam o comportamiento disruptivo</li>
              <li>Cumplir con todas las reglas del servidor publicadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Sanciones</h2>
            <p>
              El incumplimiento de estos términos puede resultar en advertencias, suspensión temporal o 
              baneo permanente del servidor, a discreción de la administración de LATAM RUST.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Modificaciones</h2>
            <p>
              LATAM RUST se reserva el derecho de modificar estos términos en cualquier momento. 
              Los cambios serán efectivos inmediatamente después de su publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contacto</h2>
            <p>
              Para preguntas sobre estos términos, por favor contacta con el equipo de administración 
              a través de nuestro servidor de Discord.
            </p>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 bg-red-950/20 border border-red-900/30 rounded-xl">
          <p className="text-sm text-gray-400 text-center">
            Al continuar utilizando LATAM RUST, confirmas que has leído, entendido y aceptado estos términos de servicio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
