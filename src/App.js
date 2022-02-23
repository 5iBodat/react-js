import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
