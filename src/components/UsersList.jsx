import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = ({ users }) => {
  return (
    <>
      {users.items &&
        users.items.map((user) => (
          <Link
            to={`/profile/${user.login}`}
            className="bg-neutral-600 m-1"
            key={user.id}
          >
            <p>{user.login}</p>
          </Link>
        ))}
    </>
  )
}

export default UsersList
