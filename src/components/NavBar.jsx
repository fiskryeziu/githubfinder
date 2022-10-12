import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-[#161b22] h-[10vh] w-full flex items-center pl-3">
      <Link to="/">
        <AiFillGithub className="text-textColor text-3xl hover:text-textColorHover" />
      </Link>
      <Link
        to="/"
        className="text-textColor  pl-4 font-semibold hover:text-textColorHover"
      >
        Github Search
      </Link>
    </div>
  )
}

export default NavBar
