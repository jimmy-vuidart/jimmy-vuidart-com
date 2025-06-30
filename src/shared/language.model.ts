export interface Language {
  code: string;
  name: string;
  flag: string;
  flagIcon: string;
}

export const availableLanguages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    flagIcon: '/flags/us.svg'
  },
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    flagIcon: '/flags/fr.svg'
  },
];

export const defaultLanguage: Language = availableLanguages[0];
