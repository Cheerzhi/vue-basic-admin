const state = {
  routes: [],
  button: ""
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_BUTTON: (state, button) => {
    state.button = button
  }
}

const actions = {
  initRoutes({
    commit
  }, menuData) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}
