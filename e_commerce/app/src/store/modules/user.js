import axios from '../../axios'
import router from '../../router'

export default {
  state: {
    loggedIn: false
  },
  getters: {
    loggedIn: state => state.loggedIn
  },
  mutations: {
    LOGIN_USER: state => {
      state.loggedIn = true
    },
    LOGOUT_USER: state => {
      state.loggedIn = false
    }
  },
  actions: {
    register: async ({dispatch}, _user) => {
      await axios.post('user/signup', _user)
      const user = {
        email: _user.email,
        password: _user.password
      }
      dispatch('login', user)
    },
    login: ({commit}, {_user}) => {
      axios.post('user/signin', _user)
      .then(res => {
        if(res.status === 200) {
          commit('LOGIN_USER')
          router.push('/')
        }
      })
      .catch((err) => console.log(err))
    },
    logout: ({commit}) => {
      commit('LOGOUT_USER')
    }
  }
}