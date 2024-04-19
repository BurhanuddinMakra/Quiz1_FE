import React, { useState } from 'react';
import axios from 'axios';

function AddRecipe() {
    const [data, setData] = useState({
        name: '',
        description: '',
        ingredients: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'ingredients') {
            const ingredients = value.split(',').map((id) => id.trim());
            setData((prev) => ({ ...prev, [name]: ingredients }));
        } else {
            setData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post('http://localhost:3000/recipe/addRecipe', data, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
            
            if (res.status === 200) {
                alert('Recipe added successfully');
            } else {
                alert('Error adding recipe');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    placeholder="Recipe Description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Ingredient IDs (comma-separated)"
                    name="ingredients"
                    value={data.ingredients}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;