import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import './App.css';


const App = () => {
  return (
    <div>
    <Router>
        <Navbar />

        <div className="App">
          <Switch>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='/' component={About} />
          </Switch>
        </div>
    </Router>
    </div>
  );
}


export default App;
