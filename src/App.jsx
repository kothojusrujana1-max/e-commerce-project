import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landingpage from './components/Landingpage'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import UserDashboard from './components/user/UserDashboard'
import UserHome from './components/user/UserHome'
import ProtectedRoute from './components/user/ProtectedRoute'
import ProductDetails from './components/user/ProductDetails';

import './App.css'
import Cart from './components/user/Cart'
import Wishlist from "./components/user/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Landingpage />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

       <Route path='/userDashboard' element={
  <ProtectedRoute>
    <UserDashboard />
  </ProtectedRoute>
}>
  <Route index element={<UserHome />} />
  <Route path='productDetails/:id' element={<ProductDetails />} />
  <Route path='cart' element={<Cart />} />
</Route>
<Route
  path="/userDashboard/wishlist"
  element={<Wishlist />}
/>

      </Routes>
    </BrowserRouter>
  )
}

export default App