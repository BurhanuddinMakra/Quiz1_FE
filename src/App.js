import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import OrganizerDashboard from './components/OrganizerDashboard';
import AddIngredient from './components/AddIngredient';


function App() {
  return (
    <Router>
      <div className="App">
          
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/organizer-dashboard' element={<OrganizerDashboard/>}></Route>
          <Route exact path='/addIngredient' element={<AddIngredient/>}></Route>
          <Route exact path='/addRecipe' element={<AddRecipe/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
