import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <Router basename="/">
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  </Router>
);

export default App;
