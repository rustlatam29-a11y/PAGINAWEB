import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
    { code: 'pt' as const, name: 'Português', flag: '🇧🇷' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="language-selector">
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Globe className="w-5 h-5" />
        <span className="language-code">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      <style>{`
        .language-selector {
          position: relative;
          z-index: 1000;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .language-button:hover {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(220, 38, 38, 0.6);
          transform: translateY(-2px);
        }

        .language-code {
          font-size: 1.25rem;
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 8px;
          padding: 0.5rem;
          min-width: 160px;
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: dropdownAppear 0.2s ease-out;
        }

        @keyframes dropdownAppear {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.75rem;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .language-option:hover {
          background: rgba(220, 38, 38, 0.1);
          color: white;
        }

        .language-option.active {
          background: rgba(220, 38, 38, 0.2);
          color: white;
          border: 1px solid rgba(220, 38, 38, 0.5);
        }

        .language-option .flag {
          font-size: 1.25rem;
        }

        .language-option .name {
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .language-dropdown {
            right: auto;
            left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
