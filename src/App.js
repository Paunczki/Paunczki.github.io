import React from 'react';
import { Router } from '@reach/router'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Projects from './pages/Projects.jsx'
import Home from './pages/Home.jsx'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import logo from './img/logo512.png';
import './App.css';

function App() {
  const navLinks = [
    {
      text: 'Home',
      path:'/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: 'ion-ios-megaphone'
    },
    {
      text: 'About',
      path:'/about',
      icon: 'ion-ios-body'
    },
    {
      text: 'Projects',
      path:'/projects',
      icon: 'ion-ios-folder-open'
    },
    {
      text: 'Portfolio',
      path:'/portfolio',
      icon: 'ion-ios-briefcase'
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks = {navLinks}
        logo = {logo}
        background="#fff"
				hoverBackground="#ddd"
				linkColor="#777"
      />
      <Router>
        <Contact path="/contact"/>
        <Home path="/"/>
        <Projects path="/projects"/>
        <About path="/about"/>
        <Portfolio path="/portfolio"/>
      </Router>
    </div>
  );
}

export default App;
