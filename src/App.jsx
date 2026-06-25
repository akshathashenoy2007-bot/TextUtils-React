import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textbox from './components/Textbox'
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

export default function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <Router>

      <Navbar
        mode={mode}
        toggleMode={toggleMode}
      />

      <Routes>
        <Route path="/" element={<Textbox mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>

    </Router>
  )
}