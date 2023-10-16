import React from 'react';
import './App.css';
import CardList from './CardList';
import Header from './Header';
import NavBar from './NavBar';
import FormComponent from './form';
import Footer from './footer';
import { Routes, Route, Outlet } from 'react-router-dom';

function MainContent() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Header />} />
        </Route>
      </Routes>
      <CardList />
      <FormComponent />
      <Footer />
    </div>
  );
}

export default MainContent;
