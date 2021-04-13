import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Board from '../components/Board';
import ButtonEl from '../styledElements/Button';
import './Game.css';

const Game = () => {
  const [tries, setTries] = useState(0);
  const [finished, setFinished] = useState(false);
  const [matched, setMatched] = useState(false);
  const [failed, setFailed] = useState(false);
  const history = useHistory();

  const incrementTries = () => {
    setTries(tries + 1);
  };

  const onMatched = bool => {
    if (bool) {
      setMatched(true);
      setTimeout(() => setMatched(false), 1000);
      return;
    }
    setFailed(true);
    setTimeout(() => setFailed(false), 1000);
  };

  if (finished) {
    return (
      <div className="container container--column-center">
        <h1>잘 하셨습니다! {tries} 차례 시도하고 게임 성공하셨습니다!</h1>
        <section className="buttons-wrapper">
          <Link to="/">
            <ButtonEl>홈 페이지</ButtonEl>
          </Link>
          <ButtonEl onClick={() => history.go(0)} again>게임 또 하기</ButtonEl>
        </section>
      </div>
    );
  }

  return (
    <div className="container container--column-center">
      <Link to="/">
        <span className="btn-home">
          <span className="material-icons btn-home__icon">exit_to_app</span>
          <span className="btn-home__text">돌아가기</span>
        </span>
      </Link>
      <h1 className="counter">{tries} 차례 시도</h1>
      {matched && <p className="matched">잘 하셨어요!</p>}
      {failed && <p className="failed">다시 한 번 해 보세요!</p>}
      <Board incrementTries={incrementTries} setFinished={setFinished} onMatched={onMatched} />
    </div>
  );
};

export default Game;
