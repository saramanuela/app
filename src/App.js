import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import Img from './images/fondo.jpg';
import About from './containers/Aboutme';
function App() {
  return (
    <div>
      <Navbar/>
    <div className="cover-container d-flex  p-3 mx-pauto flex-column bg-home ">
    <About/>
     </div>
     
    </div>
    

  );
}

export default App;
