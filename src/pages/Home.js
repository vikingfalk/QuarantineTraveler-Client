import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonEl from '../styledElements/Button';
import LanguageButton from '../components/LanguageButton';
import { LanguageContext } from '../context/LanguageContext';
import traveller from '../assets/traveller.png';
import world from '../assets/worldwide.png';
import plane from '../assets/airplane.png';
import './Home.css';

const Home = () => {
  const [texts, setTexts] = useState({});
  const { getTexts, language } = useContext(LanguageContext);

  useEffect(() => {
    setTexts(getTexts().home);
  }, [language]);

  return (
    <div className="container container--column-center">
      <h1 className="main-heading">Quarantine Traveler</h1>
      <h2 className="sub-heading">{texts.subHeading}</h2>
      <Link to="/game">
        <ButtonEl main start>{texts.startButton}</ButtonEl>
      </Link>
      <section className="lang-btn-wrapper">
        <LanguageButton buttonLanguage="english" country="uk">English</LanguageButton>
        <LanguageButton buttonLanguage="swedish" country="sweden">Svenska</LanguageButton>
        <LanguageButton buttonLanguage="korean" country="korea">한국어</LanguageButton>
      </section>
      <img className="img-world" src={world} />
      <img className="img-traveller" src={traveller} />
      <img className="img-plane" src={plane} />
  </div>
  );
};

export default Home;
