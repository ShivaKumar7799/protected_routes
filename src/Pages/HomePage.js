import React from 'react'
import { useNavigate } from 'react-router-dom'
function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1> Home Page</h1>
      <span onClick={() => navigate("/login")} >Please click here to login</span>
    </div>
  )
}

export default HomePage