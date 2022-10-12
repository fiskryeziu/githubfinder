import React from 'react'
import { FaMapMarkerAlt, FaLink } from 'react-icons/fa'

const UserProfile = ({ user }) => {
  const { avatar_url, type, login, location, blog } = user
  return (
    <div className="w-full md:w-1/4 flex flex-col gap-2">
      <img
        src={avatar_url}
        alt="userphoto"
        className="w-40 md:w-60 rounded-full"
      />
      <p className="text-white w-12 text-center rounded-3xl bg-btnPrimary">
        {type}
      </p>
      <p className="text-textColor text-2xl">{login}</p>
      <div className="flex gap-2 items-center">
        <FaMapMarkerAlt className="text-textColorHover" />
        <p className="text-textColorHover">{location}</p>
      </div>
      <div className="flex gap-2 items-center">
        <FaLink className="text-textColorHover" />
        <a
          href={blog?.startsWith('http') ? blog : 'https://' + blog}
          target="_blank"
          rel="noreferrer"
          className="text-textColorHover hover:underline hover:text-blue-600"
        >
          {blog}
        </a>
      </div>
    </div>
  )
}

export default UserProfile
