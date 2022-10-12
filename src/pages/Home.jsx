import React, { useState } from 'react'
import SearchUser from '../components/users/SearchUser'
import UsersList from '../components/users/UsersList'

const Home = () => {
  const [users, setUsers] = useState([])
  return (
    <>
      <SearchUser setUsers={setUsers} />
      <UsersList users={users} setUsers={setUsers} />
    </>
  )
}

export default Home
