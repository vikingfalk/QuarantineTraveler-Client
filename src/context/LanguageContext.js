import React, { useState, createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      { children }
    </LanguageContext.Provider>
  );
};
