import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className="bg-[#161b22] h-[10vh] w-full flex items-center pl-3">
      <AiFillGithub className="text-textColor text-3xl hover:text-textColorHover" />
      <p className="text-textColor  pl-4 font-semibold hover:text-textColorHover">
        Github Search
      </p>
    </div>
  )
}

export default NavBar
