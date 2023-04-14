import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>PageNotFound</h1>
      <a href ="/">Home</a>
      <button onClick={() => navigate("/")} >Go to Home Page</button>
    </div>
  )
}

export default PageNotFound