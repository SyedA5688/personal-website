import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Research from './Components/Research';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component 
{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;