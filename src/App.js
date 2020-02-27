import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Content from "./Content";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <div className="wrapper">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
