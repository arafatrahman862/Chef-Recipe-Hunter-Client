import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chefs from './components/chefs';
import Home from './Layout/Home';

const App = () => {
  return (
    <div className='bg-slate-50'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
      
      <Footer></Footer>
    </div>
  );
};

export default App;