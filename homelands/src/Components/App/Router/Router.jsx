import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../Pages/Home'
import { Houses } from '../../Pages/Houses'
import { Login } from '../../Pages/Login'



export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="/boliger" element={<Houses />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
