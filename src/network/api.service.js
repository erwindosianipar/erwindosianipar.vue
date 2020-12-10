import axios from 'axios'

export default {
  getProjectList() {
    return axios.get('https://api.github.com/users/erwindosianipar/starred')
  },
  getCovid19Data() {
    return axios.get('https://covid19.mathdro.id/api/countries/indonesia')
  },
  sendMessage(name, email, message) {
    var body = new FormData()
    body.append('name', name)
    body.append('email', email)
    body.append('message', message)
    return axios({
      method: 'POST',
      url: 'https://formspree.io/maypjpvv',
      data: body
    })
  }
}
