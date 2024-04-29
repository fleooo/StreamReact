import React from 'react'
import Menu from './Menu'
import { BrowserRouter,Route, Routes, } from 'react-router-dom'
import Fav from './Fav'
import App2 from './App2'
import App3 from './App3'
import App1 from './App1'



const Base = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/fav' element={<Fav/>}/>
        <Route path='/movie/1' element={<App1/>}/>
        <Route path='/movie/2' element={<App2/>}/>
        <Route path='/movie/3' element={<App3/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Base