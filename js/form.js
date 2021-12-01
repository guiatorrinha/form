const axios = require('axios')

const url = "http://localhost:4444"

axios.post(url)
  .then(response => console.log(response))
  .catch(error => console.log(error))