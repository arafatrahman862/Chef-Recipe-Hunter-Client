import React from 'react';

const Service = () => {
    return (
        <div  className='text-black '>
            <p className='text-center text-4xl font-semibold underline my-6'>Our Service</p>
            <div className='flex justify-center items-center my-6 gap-4 '>
            <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body bg-orange-500">
    <h2 className="card-title">HOME DELIVERY</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
    
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body bg-orange-500">
    <h2 className="card-title">WEDDING PARTY</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
    
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl">

  <div className="card-body bg-orange-500">
    <h2 className="card-title">BIRTHDAY PARTY</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default Service;