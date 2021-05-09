import React, { useState, createContext } from 'react';
import english from '../texts/english';
import swedish from '../texts/swedish';
import korean from '../texts/korean';
import countryNames from '../texts/countryNames';

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

  const getCountryName = country => {
    switch (language) {
      case 'english':
        return country;
      case 'swedish':
        return countryNames.swedish[country];
      case 'korean':
        return countryNames.korean[country];
      default:
        return country;
    }
  };

  return (
    <LanguageContext.Provider value={{
      setLanguage,
      getTexts,
      getCountryName,
      language,
    }}>
      { children }
    </LanguageContext.Provider>
  );
};
