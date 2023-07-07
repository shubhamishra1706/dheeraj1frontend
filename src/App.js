import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </>
  )
}

export default App