import React, { useEffect, useState} from 'react'
import axios from "axios"
import "./UsersPage.css"
import { useNavigate } from 'react-router-dom'

function UsersPage() {
  const [usersData, setUsersData] = useState([])
  const navigate = useNavigate()
  const getUsersData = () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) =>  setUsersData(resp.data))
      .catch((err) => console.log(err) )
  }
  useEffect(() => {
      getUsersData()
  }, [])

  const gotoUserPage = (id) => {
      navigate(`/user/${id}`)
  }

  return (
    <div>
      <h1>Users Details:</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item,index) => <tr key={index} > 
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
            <td><button onClick = {() => gotoUserPage(item.id)} >Know More</button></td>
          </tr> )}
        </tbody>
      </table>
      
    </div>
  )
}

export default UsersPage