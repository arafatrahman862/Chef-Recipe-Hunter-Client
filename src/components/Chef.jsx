import React from 'react';
import { Link } from 'react-router-dom';

const Chef = (props) => {

    const {chef_name, chef_Picture, years_of_experience, number_of_recipes, likes} = props.chef;
    

    return (
        <div className='mx-4'>
            
            <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={chef_Picture} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>Chef name: {chef_name}</p>
    <p>Experience: {years_of_experience}</p>
    <p>Number of recipes: {number_of_recipes}</p>
    <p>Likes: {likes}</p>
    <div className="card-actions ">
      <Link to="/recipes/:id"><button className="btn btn-primary">View Recipes</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Chef;