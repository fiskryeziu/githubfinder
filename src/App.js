import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
