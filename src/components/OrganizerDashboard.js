import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OrganizerDashboard = () => {
    return (
      <div className="home-container">
        <h1>admin dashboard</h1>
        
        <div className="link-container">
          <Link to="/addIngredient">addIngredient</Link>
          <Link to="/addRecipe">addRecipe</Link>
        </div>
      </div>
    );
  };

export default OrganizerDashboard;