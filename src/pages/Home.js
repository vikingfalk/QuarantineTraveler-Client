import { Link } from 'react-router-dom';
import ButtonEl from '../styledElements/Button';
import traveller from '../assets/traveller.png';
import world from '../assets/worldwide.png';
import plane from '../assets/airplane.png';
import './Home.css';

const Home = () => (
  <div className="container container--column-center">
    <h1 className="main-heading">Quarantine Traveler</h1>
    <h2 className="sub-heading">게임을 한 번 해 보십시오!</h2>
    <Link to="/game">
      <ButtonEl main start>게임 시작</ButtonEl>
    </Link>
    <img className="img-world" src={world} />
    <img className="img-traveller" src={traveller} />
    <img className="img-plane" src={plane} />
  </div>
);

export default Home;
