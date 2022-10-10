import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import {Routes, Route} from 'react-router-dom';
import Home from './components/contact';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';

function App() {
  return (
    <div>
      <main>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
