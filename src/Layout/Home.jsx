import React from 'react';
import Navbar from '../components/Navbar';
import Chefs from '../components/chefs';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Service from '../components/Service';
import Contact from '../components/Contact';

const Home = () => {
    
    return (
        <div>
            <Header></Header>
            <Chefs></Chefs>
            <Outlet></Outlet>
            <Service></Service>
            <Contact></Contact>
           
           
        </div>
    );
};

export default Home;