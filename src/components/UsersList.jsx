import React from 'react'
import { Link } from 'react-router-dom'

const UsersList = ({ users }) => {
  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-3 mt-10">
      {users.items &&
        users.items.map((user) => (
          <Link
            to={`/profile/${user.login}`}
            className="bg-header h-20 rounded-lg text-textColor flex items-center justify-center shadow-md hover:translate-y-[-.2em] hover:duration-200"
            key={user.id}
          >
            <p>{user.login}</p>
          </Link>
        ))}
    </div>
  )
}

export default UsersList
