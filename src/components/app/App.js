import React from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Note from '../note/Note';



function App() {
  return (
    <div className="App">
      <Header/>
      <Note/>
      <Footer/>
    </div>
  );
}

export default App;
