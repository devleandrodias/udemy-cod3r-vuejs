import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = "https://curso-vue-f749f.firebaseio.com/"
axios.defaults.headers.common['Authorization'] = 'lkfjbsdjdsasdafnwepoiurfg3y79wfvuyoqerhbf'
axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-f749f.firebaseio.com/'
    });

    // Intercptor de requisição
    Vue.prototype.$http.interceptors.request.use(config => {
      return config;
    }, error => Promise.reject(error))

    // Inteceptador de resposta
    Vue.prototype.$http.interceptors.response.use(res => {
      const array = []
      for (let chave in res.data) {
        array.push({ id: chave, ...res.data[chave] })
      }
      res.data = array;
      return res;
    }, error => Promise.reject(error))
  }
})