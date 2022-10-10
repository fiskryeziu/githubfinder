import React, { useState } from 'react'
import { API } from '../api'

const SearchUser = ({ setUsers }) => {
  const [input, setInput] = useState('')

  const searchHandler = async () => {
    const { data } = await API.get(`/search/users?q=${input}`)
    setUsers(data)
  }
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={searchHandler}> Search Users</button>
    </>
  )
}

export default SearchUser
