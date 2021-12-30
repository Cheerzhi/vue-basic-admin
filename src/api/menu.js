import request from '@/utils/request'

export function getUserMenu() {
  return request({
    url: '/menu/getUserMenu',
    method: 'post',
  })
}