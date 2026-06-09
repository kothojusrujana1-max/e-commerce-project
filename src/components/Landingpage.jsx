import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
function Landingpage() {
  return (
    <div>

      <Navbar />
      <Outlet />
    </div>
  )
}


export default Landingpage

