import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>React-Router-Dom V6</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/qwertyuiop">Unknown Route</Link>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  )
}

export default App
