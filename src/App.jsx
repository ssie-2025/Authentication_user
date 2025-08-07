import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Navigate to ='/login'/>}/>
   <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </>
  )
}

export default App

