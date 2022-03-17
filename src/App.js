import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/research" element={<Research/>} />
            <Route exact path="/projects" element={<Projects/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;