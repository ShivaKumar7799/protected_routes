import React from 'react'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import PageNotFound from './Pages/PageNotFound'
import LoginPage from './Pages/LoginPage'
import UsersPage from './Pages/Users/UsersPage'
import SingleUser from './Pages/Users/SingleUser'
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/" element = {  <HomePage />} />
          <Route path='/about' element = { <AboutPage /> } />
          <Route path='/contact' element = {<ContactPage />} />
          <Route path ="*" element = {<PageNotFound />} />
          <Route path ="/users" element = {<UsersPage />} />
          <Route path ="/user/:id" element = {<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
