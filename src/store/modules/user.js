import {
  login,
  getInfo
} from '@/api/user'
import { getUserMenu } from '@/api/menu'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  resetRouter
} from '@/router'
const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 用户登陆
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      }).then(res => {
        const {
          data
        } = res
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息及菜单处理
  getInfo({
    commit,
    state,
    dispatch
  }) {
    return new Promise((resolve, reject) => {
      Promise.all([getInfo(state.token), getUserMenu()]).then(([info, menu]) => {
        commit('SET_USERINFO', info.data.userInfo)
        commit('SET_ROLES', info.data.userInfo.roles)
        resolve(menu.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // token刷新的接口
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      resolve()
    })
  },
  // 退出登陆时操作
  logout({
    commit
  }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resetRouter()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
