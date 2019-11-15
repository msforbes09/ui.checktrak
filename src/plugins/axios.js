import Axios from 'axios'
import store from './../store/store'
import router from './../router'

Axios.defaults.baseURL = process.env.VUE_APP_API + '/api'
Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Axios.defaults.headers.common['Authorization'] =
  'Bearer ' + store.getters['auth/token']

// global success and error handler
Axios.interceptors.response.use(
  function(response) {
    if (response.data.message) {
      store.commit('alert', { message: response.data.message, color: 'blue' })
    }
    store.getters.error.reset()
    return response
  },
  function(error) {
    if (error.response) {
      if (error.response.status === 401) {
        store.dispatch('auth/clearStorage')
      } else if (error.response.status === 400) {
        store.commit('alert', {
          message: error.response.data.message,
          color: 'red'
        })
      } else if (error.response.status === 422) {
        store.state.error.record(error.response.data.errors)
      } else if (error.response.status === 403) {
        store.commit('alert', {
          message: error.response.data.message,
          color: 'red'
        })
      } else if (error.response.status === 404) {
        router.push('/page-not-found')
      } else {
        store.commit('alert', { message: error.message, color: 'red' })
      }
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    return Promise.reject(error)
  }
)
