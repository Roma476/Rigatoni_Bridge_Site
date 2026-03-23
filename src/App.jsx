import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Objective from './components/Objective';
import Process from './components/Process';
import Testing from './components/Testing';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Objective />
        <Process />
        <Testing />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;