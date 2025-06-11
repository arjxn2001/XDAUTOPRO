import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Opening from './Pages/Opening'
import Home from './Pages/Home'
import MainLayout from './Pages/MainLayout'

const App = () => {
  return (
    <div className="overflow-x-hidden text-white antialiased selection:bg-gray-300 selection:text-black">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(115%_115%_at_50%_10%,#ffffff_0%,#000000_90%)]">
</div>

      </div>
    <Routes>
      <Route path='/' element={<Opening/>} />
      <Route path='/xdautopro' element={<MainLayout/>} />
    </Routes>
    </div>
  )
}

export default App
