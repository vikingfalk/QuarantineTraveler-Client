import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ButtonEl from '../styledElements/Button';
import { LanguageContext } from '../context/LanguageContext';
import traveller from '../assets/traveller.png';
import world from '../assets/worldwide.png';
import plane from '../assets/airplane.png';
import './Home.css';

const Home = () => {
  const [texts, setTexts] = useState({});
  const [language, setLanguage] = useContext(LanguageContext);

  useEffect(() => {
    switch (language) {
      case 'english':
        setTexts({
          subHeading: 'Let\'s go on an adventure!',
          startButton: 'Start',
        });
        break;
      case 'swedish':
        setTexts({
          subHeading: 'Upptäck världen hemifrån!',
          startButton: 'Starta',
        });
        break;
      case 'korean':
        setTexts({
          subHeading: '게임을 한 번 해 보십시오!',
          startButton: '게임 시작',
        });
        break;
      default:
        setTexts({
          subHeading: 'Let\'s go on an adventure!',
          startButton: 'Start',
        });
    }
  }, [language]);
  return (
    <div className="container container--column-center">
      <h1 className="main-heading">Quarantine Traveler</h1>
      <h2 className="sub-heading">{texts.subHeading}</h2>
      <Link to="/game">
        <ButtonEl main start>{texts.startButton}</ButtonEl>
      </Link>
      <button onClick={() => setLanguage('english')}>English</button>
      <button onClick={() => setLanguage('swedish')}>Svenska</button>
      <button onClick={() => setLanguage('korean')}>한국어</button>
      <img className="img-world" src={world} />
      <img className="img-traveller" src={traveller} />
      <img className="img-plane" src={plane} />
  </div>
  );
};

export default Home;
