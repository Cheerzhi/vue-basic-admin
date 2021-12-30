const menu = [{
  menuName: "角色管理",
  name: "role"
}, {
  menuName: "菜单管理",
  name: "menu"
}, {
  menuName: "用户管理",
  name: "user"
}, {
  menuName: "系统管理管理",
  name: "role"
}]

const button = [{
  name: "addUser",
  menuName: "添加菜单"
}]

module.exports = [{
  url: '/menu/getUserMenu',
  type: "post",
  response: config => {
    return {
      code: "200",
      data: {
        menu,
        button
      }
    }
  }
}]
