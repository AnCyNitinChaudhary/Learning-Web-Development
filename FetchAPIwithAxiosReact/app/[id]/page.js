"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const page = ({params}) => {
    const {id}=params;
    const [users, setUsers] = useState([])
  const getUsers= async ()=>{
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users"+id);
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>{JSON.stringify(users)}</>
  )
}

export default page