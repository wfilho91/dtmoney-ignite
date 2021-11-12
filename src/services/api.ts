import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://wfilho91-dtmoney.netlify.app/' ?? 'http://localhost:3000/api'
})
