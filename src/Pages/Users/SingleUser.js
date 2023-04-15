import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function SingleUser() {
  const [userData, setUserData] = useState();
  const firstNameRef = useRef()
  const {id} = useParams();
  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => setUserData(resp.data))
  } , [])
  const highlightFirstNameInputField = () => {
   
    firstNameRef.current.disabled = false
     firstNameRef.current.focus()
     
  }
  return (
    <>
      {userData ? <div>
      <h1>Name of the Person : {userData.name} </h1>
      <div>
        <p> Website : {userData.website} </p>
      </div>
      <span onClick={highlightFirstNameInputField} >First Name</span>
    <input type="text" ref={firstNameRef} value = {userData.name} onChange={() => setUserData({...userData,"name": firstNameRef.current.value})} />
    <button onClick={() => firstNameRef.current.disabled = true } > Disable First Name </button>
    <button onClick = {() => firstNameRef.current.value = ""} >Reset First Name</button>
    <button onClick={() => console.log(userData)} >Submit First Name</button>
    </div> : <h1>Loading...</h1>}

   
    </>
  )
}

export default SingleUser