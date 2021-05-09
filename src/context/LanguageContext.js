import React, { useState, createContext } from 'react';
import english from '../texts/english';
import swedish from '../texts/swedish';
import korean from '../texts/korean';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');

  const getTexts = () => {
    switch (language) {
      case 'english':
        return english;
      case 'swedish':
        return swedish;
      case 'korean':
        return korean;
      default:
        return english;
    }
  };

  return (
    <LanguageContext.Provider value={{
      setLanguage,
      getTexts,
      language,
    }}>
      { children }
    </LanguageContext.Provider>
  );
};
