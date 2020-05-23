import React from 'react';
import profileImage from './img/download.jpg';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import {Route, Link} from 'react-router-dom'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      
      <h1>My React App</h1>
      <h2>Author: John Mikos</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
