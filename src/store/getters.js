const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permissionRoutes: state => state.menu.routes
  // activeFirst: state => state.menu.activeFirst
}
export default getters
