import { Switch, Route } from 'react-router-dom';
import './App.css';

import { AppHeader } from './components';
import { About, Contact, Document, Home } from './pages';

function App() {
  return (
    <div className="App">
      <AppHeader />

      {/* about */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        {/* contact */}
        <Route path="/contact">
          <Contact />
        </Route>

        {/* document */}
        <Route path="/document">
          <Document />
        </Route>

        {/* home */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
