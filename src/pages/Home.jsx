import React from 'react'
import  {NavLink}  from 'react-router-dom'


const Home = () => {
  return (
    <div>
      Home
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/contact">Contact</NavLink>

      
    </div>
  )
}

export default Home
