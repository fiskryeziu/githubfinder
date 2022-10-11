import React, { useState } from 'react'
import { API } from '../api'

const SearchUser = ({ setUsers }) => {
  const [input, setInput] = useState('')

  const searchHandler = async (e) => {
    e.preventDefault()
    const { data } = await API.get(`/search/users?q=${input}`)
    setUsers(data)
  }
  return (
    <div className="relative">
      <form
        onSubmit={searchHandler}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          required
          className="text-textColor  p-2 rounded-md w-1/2 bg-header border border-focusText focus:ring-2 focus:outline-none focus:ring-borderInput"
        />
        <button className="bg-btnPrimary px-2 py-2 rounded-md mx-2 text-textColor font-semibold hover:brightness-125">
          Search Users
        </button>
      </form>
    </div>
  )
}

export default SearchUser
