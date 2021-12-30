import {
  asyncRoutes
} from '@/router'
const state = {
  routes: [],
  button: ''
}

function hasPermission(menus, route) {
  if (route.meta && route.meta.general) {
    return true
  } else {
    return menus.some(menu => route.name === menu.name)
  }
}

function filterAsyncRoutes(routes, menus) {
  const res = []
  routes.forEach(route => {
    const temp = {
      ...route
    }
    if (hasPermission(menus, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, menus)
      }
      res.push(temp)
    }
  })
  return res
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.routes = routes
  },
  SET_BUTTON: (state, button) => {
    state.button = button
  }
}

const actions = {
  initRoutes({
    commit
  }, {
    menu,
    button
  }) {
    return new Promise((resolve, reject) => {
      const allowedRoutes = filterAsyncRoutes(asyncRoutes, menu)
      commit('SET_ROUTES', allowedRoutes)
      commit('SET_BUTTON', button)
      resolve(allowedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
