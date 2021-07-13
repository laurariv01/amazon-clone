import './App.css';
import React from "react";
import Header from './Header';

function App() {
  return (
    //BEM Convention
    <div className="app">


    {/* Header */}

      <Header/>



    {/* Home */}
    <h1>check it out! Laurazon has a logo and search bar! </h1>
    </div>
  );
}

export default App;