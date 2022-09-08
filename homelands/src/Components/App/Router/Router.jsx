import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Houses } from '../../Pages/Houses'
import { Login } from '../../Pages/Login'
import { Home } from '../../Pages/Homepage/Home'



export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/boliger" element={<Houses />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
