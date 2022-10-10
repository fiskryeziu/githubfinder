import axios from 'axios'
const URL = process.env.REACT_APP_GIT_URL
const TOKEN = process.env.REACT_APP_GIT_TOKEN

export const API = axios.create({
  baseURL: URL,
  headers: { Authorization: `token ${TOKEN}` },
})
