import React from 'react';
import './App.css';
import CardList from './CardList';
import Header from './Header';
import NavBar from './NavBar';
import FormComponent from './form';
import Footer from './footer';
function App() {
  return (
    <div>
      <NavBar /> 
      <Header />
      <CardList />
      <FormComponent />
      <Footer/>
    </div>
  );
}

export default App;