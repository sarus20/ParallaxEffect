import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Parallax from './components/Parallax';
import Footer from './components/Footer';


function App() {
  return (
       <div>
           <Navbar/>
            <Slider/>
            <Parallax/>
            <Footer/>
       </div>
  );
}

export default App;
