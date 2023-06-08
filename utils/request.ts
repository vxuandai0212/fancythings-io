import axios from 'axios'

const service = axios.create({
  timeout: 120000
})

export default service
