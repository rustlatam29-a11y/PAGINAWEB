import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";

const Privacy: React.FC = () => {
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
            <Lock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              Política de Privacidad
            </h1>
            <p className="text-gray-400">Última actualización: Enero 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
            <p className="mb-3">
              LATAM RUST recopila información limitada necesaria para proporcionar nuestros servicios:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Nombre de usuario y Steam ID para identificación en el servidor</li>
              <li>Dirección IP para gestión de conexiones y seguridad</li>
              <li>Estadísticas de juego y actividad en el servidor</li>
              <li>Mensajes de chat y comunicaciones dentro del juego</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Proporcionar y mantener los servicios del servidor</li>
              <li>Mejorar la experiencia de juego</li>
              <li>Detectar y prevenir actividades fraudulentas o prohibidas</li>
              <li>Aplicar las reglas del servidor</li>
              <li>Comunicarnos contigo sobre actualizaciones o cambios del servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Protección de Datos</h2>
            <p>
              Tomamos medidas razonables para proteger tu información personal contra acceso no autorizado, 
              alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet 
              es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Compartir Información</h2>
            <p>
              No vendemos, intercambiamos ni transferimos tu información personal a terceros. 
              La información puede ser compartida solo cuando sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies y Tecnologías Similares</h2>
            <p>
              Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. 
              Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar 
              la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Retención de Datos</h2>
            <p>
              Retenemos tu información personal solo durante el tiempo necesario para cumplir con 
              los propósitos descritos en esta política o según lo requiera la ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Tus Derechos</h2>
            <p>
              Tienes derecho a acceder, corregir o eliminar tu información personal. 
              Para ejercer estos derechos, contacta con nuestro equipo de administración.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cambios a esta Política</h2>
            <p>
              LATAM RUST se reserva el derecho de actualizar esta política de privacidad en cualquier momento. 
              Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad, contacta con nosotros a través 
              de nuestro servidor de Discord o mediante los canales oficiales de comunicación.
            </p>
          </section>
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 bg-red-950/20 border border-red-900/30 rounded-xl">
          <p className="text-sm text-gray-400 text-center">
            Al utilizar LATAM RUST, aceptas esta política de privacidad y el tratamiento de tu información según lo descrito.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
