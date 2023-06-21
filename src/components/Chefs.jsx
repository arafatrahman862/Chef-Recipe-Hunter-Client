import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {

const [chefs, setChefs] = useState([])

useEffect(()=>{
    fetch('https://assingment-server-arafatrahman862.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
    .catch(error =>console.error(error))
},[])

    return (
        
        <div className='flex my-12 mx-8'>
           
            
           
            {
chefs.map(chef => <Chef
key={chef.id}
chef ={chef}
>


</Chef>

    
)
            }
           
        </div>
    );
};

export default Chefs;