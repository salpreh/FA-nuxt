import axios from 'axios'
import apiConfig from '@/services/api.config'

function RestaurantApi(config, axios) {
  this.config = config

  async function call(urlPath, method, data) {
    try {
      const response = await axios({
        method,
        url: `${config.API_URL}/${urlPath}`,
        responseType: 'json',
        mode: 'cors',
        data
      })

      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  this.get = function(urlPath) {
    return call(urlPath, 'get')
  }

  this.post = function(urlPath, data) {
    return call(urlPath, 'post', data)
  }

  this.put = function(urlPath, data) {
    return call(urlPath, 'put', data)
  }

  this.postSubscribe = function(email) {
    return this.post(
      'users',
      { email }
    )
  }
}

export default new RestaurantApi(apiConfig, axios)
