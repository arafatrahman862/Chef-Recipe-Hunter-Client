import React from 'react';

const Header = () => {
    return (
        <div className='my-12 text-black m-4'>
            <div className='flex justify-center items-center gap-5'>
            <div>
                <img src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1683297129~exp=1683297729~hmac=e327446f252f9df65fe96e675d3596c1b2ae1a1ab05ed754c0c5b88d819fdf7a" alt="" />
            </div>
            <p className='text-5xl '>Welcome to <span className='text-red-600 text-6xl font-semibold'>Delicious Food Resturant</span></p>
            </div>
        </div>
    );
};

export default Header;