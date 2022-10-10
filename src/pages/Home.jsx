import React, { useState } from 'react'
import SearchUser from '../components/SearchUser'
import UsersList from '../components/UsersList'

const Home = () => {
  const [users, setUsers] = useState([])
  return (
    <>
      <SearchUser setUsers={setUsers} />
      <UsersList users={users} />
    </>
  )
}

export default Home
