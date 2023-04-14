// To create a basic functional component type: "rafce" this will be create structure of a react functional component
import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App