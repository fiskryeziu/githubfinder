import React from 'react'
import UserListItem from './UserListItem'

const UsersList = ({ users, setUsers }) => {
  const clearHandler = (e) => {
    setUsers([])
  }

  return (
    <div className="relative">
      {users.items && users.items.length > 0 && (
        <p
          tabIndex={3}
          onClick={clearHandler}
          className="absolute -top-14 right-6 md:right-2 text-textColorHover px-2 rounded-lg hover:border"
        >
          Clear
        </p>
      )}
      <div className="grid gap-4 grid-cols-1 mx-6 sm:mx-0  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-20">
        {users.items &&
          users.items.map((user) => <UserListItem key={user.id} user={user} />)}
      </div>
    </div>
  )
}

export default UsersList
