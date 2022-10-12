import React from 'react'
import { Link } from 'react-router-dom'

const UserListItem = ({ user }) => {
  return (
    <Link
      to={`/profile/${user.login}`}
      className="bg-header h-20 rounded-lg text-textColor flex items-center pl-2 shadow-md hover:translate-y-[-.2em] hover:duration-200"
    >
      <div className="flex items-center gap-3">
        <img src={user.avatar_url} alt="img" className="w-12 rounded-full" />
        <p>{user.login}</p>
      </div>
    </Link>
  )
}

export default UserListItem
