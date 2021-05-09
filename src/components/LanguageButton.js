import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import ButtonEl from '../styledElements/LanguageButton';

const LanguageButton = ({ buttonLanguage, country }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <ButtonEl
      onClick={() => setLanguage(buttonLanguage)}
      country={country}
      active={language === buttonLanguage}
    />
  );
};

export default LanguageButton;
