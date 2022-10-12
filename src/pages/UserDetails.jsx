import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../api'
import RepoItem from '../components/repolist/RepoItem'
import UserProfile from '../components/userdetails/UserProfile'

const UserDetails = () => {
  const params = useParams()
  const userName = params.name

  const [user, setUser] = useState({})
  const [repos, setRepos] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      const [user, repos] = await Promise.all([
        API.get(`/users/${userName}`),
        API.get(`/users/${userName}/repos`),
      ])
      setUser(user.data)
      setRepos(repos.data)
    }
    fetchUser()
  }, [userName])

  return (
    <div className="flex gap-6 mb-20 flex-col md:flex-row mx-3 md:mx-0">
      {user && (
        <>
          <UserProfile user={user} />
          <div className="w-full md:w-3/4 flex-col space-y-3">
            <div className="flex justify-evenly text-textColor text-center gap-1 border-borderColor border-b pb-2">
              <div className="w-1/3 bg-header rounded-sm flex items-center justify-center hover:border">
                <a href={user.html_url}>Visit Github</a>
              </div>
              <div className="w-1/3 bg-header rounded-sm">
                <p>Public Gists</p>
                {user.public_gists}
              </div>
              <div className="w-1/3 bg-header rounded-sm">
                <p>Public Repos</p>
                {user.public_repos}
              </div>
            </div>
            {repos &&
              repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
          </div>
        </>
      )}
    </div>
  )
}

export default UserDetails
