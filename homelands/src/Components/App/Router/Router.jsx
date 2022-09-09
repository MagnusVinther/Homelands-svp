import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Houses } from '../../Pages/Houses'
import { Login } from '../../Pages/Login/Login'
import { Home } from '../../Pages/Homepage/Home'
import { Adminpage } from '../../Pages/Login/Adminpage'
import { HouseDetails } from '../../Pages/Homepage/HouseDetails'
// import { HouseList } from '../../Pages/Homepage/HouseList'



export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/boliger">
          <Route index element={<Houses />} />
          <Route path=":house:id" element={<HouseDetails />} />
        </Route>
        <Route path="/login" element={<Login />}>
          <Route path="/login/admin" element={<Adminpage />} />
        </Route>
    </Routes>
  )
}
