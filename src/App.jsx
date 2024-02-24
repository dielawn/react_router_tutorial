import { useState } from 'react'
import { Link } from "react-router-dom";
import Profile from './Profile';
import './App.css'

function App() {
  

  return (
    <div>
    <h1>Hello from the main page of the app!</h1>
    <p>Here are some examples of links to other pages</p>
    <nav>
      <ul>
        <li>
          <Link to='profile/olive_oil' >Olive Oil</Link>
        </li>
        <li>
          <Link to='profile/default' >Default</Link>
        </li>
        <li>           
          <Link to="profile/">Error Page</Link>
        </li>
        <li>
          <Link to='/profile/spinach'>Spinach</Link>
        </li>
       

        <li>
        <Link to='/profile/popeye'>Popeye</Link>
        </li>
        <li>
          <Profile />
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default App
