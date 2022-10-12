import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { VscRepo } from 'react-icons/vsc'
import moment from 'moment'

const RepoItem = ({ repo }) => {
  const { html_url, name, visibility, language, updated_at } = repo
  return (
    <div className="w-full border-borderColor border-b h-auto py-5">
      <div className="flex items-center gap-2 w-full">
        <VscRepo className="text-[20px] text-textColorHover" />
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-repoColor text-[20px] hover:underline"
        >
          {name}
        </a>
        <p className="text-sm capitalize text-textColorHover border border-textColorHover rounded-xl px-2">
          {visibility}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <FaCircle className="text-btnPrimary text-sm" />
        <p className="text-sm text-textColorHover">{language}</p>
        <p className="text-sm text-gray-500 ml-6">
          Updated {moment(updated_at, 'YYYYMMDD').fromNow()}
        </p>
      </div>
    </div>
  )
}

export default RepoItem
