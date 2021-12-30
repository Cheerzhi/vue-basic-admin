const menu = [{
  menuName: "角色管理",
  name: "role",
  menuId: "4",
  parentId: "1"
}, {
  menuName: "菜单管理",
  name: "menu",
  menuId: "3",
  parentId: "1"
}, {
  menuName: "用户管理",
  name: "user",
  menuId: "2",
  parentId: "1"
}, {
  menuName: "系统管理",
  name: "sys",
  menuId: "1",
  parentId: "0"
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
