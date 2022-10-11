import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../api'

const UserDetails = () => {
  const params = useParams()
  const userId = params.id

  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await API.get(`/users/${userId}`)
      setUser(data)
    }
    fetchUser()
  }, [userId])
  console.log(user)
  return <></>
}

export default UserDetails
