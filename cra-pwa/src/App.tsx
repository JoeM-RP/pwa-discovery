import { Switch, Route } from 'react-router';
import './App.css';

import { AppHeader } from './components';

function App() {
  return (
    <div className="App">
      {/* about */}
      <Switch>
        <Route path="/about">
          <AppHeader />
          <div className="App-body">
            About
          </div>
        </Route>
      </Switch>

      {/* contact */}
      <Switch>
        <Route path="/contact">
          <AppHeader />
          <div className="App-body">
            Contact
          </div>
        </Route>
      </Switch>

      {/* home */}
      <Switch>
        <Route path="/">
          <AppHeader />
          <div className="App-body">
            Home
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
