import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipies = () => {
    const {id} = useParams()
    const recipes = useLoaderData()
    console.log(recipes);
    return (
        <div>
            {recipes.length}
        </div>
    );
};

export default Recipies;