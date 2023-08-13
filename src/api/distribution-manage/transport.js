import request from '@/utils/request'

export function transportPage() {
  return request({
    url: 'xxw_shop_delivery/b/transport/list',
    method: 'get'
  })
}

export function transportGet(attrId) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'get',
    params: {
      attrId
    }
  })
}

export function transportSave(data) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'post',
    data
  })
}

export function transportUpdate(data) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'put',
    data
  })
}

export function deleteTransportById(attrId) {
  return request({
    url: '/xxw_shop_delivery/b/transport',
    method: 'delete',
    params: {
      attrId
    }
  })
}
