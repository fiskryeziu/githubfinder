import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import UserDetails from './pages/UserDetails'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <NavBar />
        <main className="container mx-auto md:mx-auto mt-36">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:name" element={<UserDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
