import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Game from './pages/Game';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <Router basename="/">
    <LanguageProvider>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </LanguageProvider>
  </Router>
);

export default App;
