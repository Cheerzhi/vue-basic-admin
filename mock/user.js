const Mock = require('mockjs')
const token = Mock.Random.string(15,32)
const userInfo = {
  roles: ['admin'],
  introduction: 'I am a super administrator',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  name: 'Super Admin'
}

module.exports = [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      return {
        code: "200",
        data: { token, userInfo }
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      return {
        code: "200",
        data: { userInfo }
      }
    }
  },

  // user logout
  {
    url: '/user/resetToken',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data:{ token }
      }
    }
  }
]
