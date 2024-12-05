import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

    </>
  )
}

export default App
