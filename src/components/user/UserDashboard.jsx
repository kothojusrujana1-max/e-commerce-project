import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserNav from './UserNav'
function UserDashboard() {
  

  return (
    <div>
   <UserNav/>

  

      <Outlet />
    </div>
  )
}

export default UserDashboard