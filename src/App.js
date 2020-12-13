import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />

        <div className="App">
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
        </div>
    </Router>
  );
}


export default App;
