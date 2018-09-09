import axios from 'axios'

const API_URL = process.env.API_URL

export const sendMail = (data, options) =>
  axios
    .post(`${API_URL}/mail/send`, data, { ...options })
    .then(response => response)
