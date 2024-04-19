import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3000/recipe/getRecipe', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setRecipes(response.data.data);
        })
        .catch((error) => {
            console.log("Error fetching recipes ", error);
        });
    }, []);

    return (
        <div className="container">
            <h1 className="mt-4 mb-4">User Dashboard</h1>
            <h2 className="mb-3">Recipe List</h2>
            <div className="list-group">
                {recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
