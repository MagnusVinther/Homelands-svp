import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Houses } from '../../Pages/Houses'
import { Login } from '../../Pages/Login/Login'
import { Home } from '../../Pages/Homepage/Home'
import { Adminpage } from '../../Pages/Login/Adminpage'



export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/boliger" element={<Houses />} />
        <Route path="/login" element={<Login />}>
          <Route path="/login/admin" element={<Adminpage />} />
        </Route>
    </Routes>
  )
}
