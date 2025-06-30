import { useState } from 'preact/hooks';
import { type Language, availableLanguages, defaultLanguage } from '../../shared/language.model';

interface Props {
  // No props needed for now as we're not implementing i18n functionality yet
}

export default function LanguageSelector(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(defaultLanguage);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Language change logic will be implemented later with i18n
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-1 text-sm hover:text-indigo-600 transition-colors"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img src={selectedLanguage.flagIcon} alt={`${selectedLanguage.name} flag`} className="w-5 h-4 mr-1" />
        <span>{selectedLanguage.code.toUpperCase()}</span>
        <svg 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedLanguage.code === language.code
                    ? 'bg-gray-100 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
                onClick={() => selectLanguage(language)}
              >
                <img src={language.flagIcon} alt={`${language.name} flag`} className="w-5 h-4 mr-2" />
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
