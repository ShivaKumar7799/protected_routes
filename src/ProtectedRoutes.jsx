import React from 'react'
import { Outlet } from 'react-router-dom'
import AccountPage from './Components/AccountPage/AccountPage'
import Login from './Components/Login/Login'

const useAuth = () => {
  const user = {loggedIn : false}
  return user && user.loggedIn
}

function ProtectedRoutes() {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Login />
}

export default ProtectedRoutes

