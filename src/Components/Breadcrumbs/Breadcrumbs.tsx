import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap: { [key: string]: string } = {
    '': 'Inicio - Rust Pirata & DayZ Pirata LATAM',
    'dayz': 'DayZ Pirata 1.28 Gratis - Servidor BR-LATAM',
    'vip': 'Planes VIP - LATAMRUST',
    'vips': 'Planes VIP - LATAMRUST',
    'rp': 'Tienda RP - LATAMRUST',
    'reglas': 'Reglas del Servidor - LATAMRUST',
    'terms': 'Términos de Servicio',
    'privacy': 'Política de Privacidad',
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
  ];

  pathnames.forEach((name, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    const label = breadcrumbMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
    breadcrumbs.push({ label, path });
  });

  // Schema Markup for Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://latamrust.vercel.app${item.path}`
    }))
  };

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Visual Breadcrumbs */}
      <nav className="w-full bg-black/30 backdrop-blur-sm border-b border-gray-800/50 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
            <li className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center text-gray-400 hover:text-red-400 transition-colors duration-200"
                aria-label="Inicio - Rust Pirata y DayZ Pirata"
              >
                <Home className="w-4 h-4" />
              </Link>
            </li>
            
            {breadcrumbs.slice(1).map((item, index) => (
              <li key={item.path} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-600 mx-1" />
                {index === breadcrumbs.length - 2 ? (
                  <span className="text-red-500 font-semibold whitespace-nowrap">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
