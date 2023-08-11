import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_goods/m/spu/page',
    method: 'get',
    params: pageParam
  })
}

export function get(spuId) {
  return request({
    url: '/xxw_shop_goods/m/spu',
    method: 'get',
    params: {
      spuId
    }
  })
}

export function save(data) {
  return request({
    url: '/xxw_shop_goods/m/spu',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/xxw_shop_goods/m/spu',
    method: 'put',
    data
  })
}

export function deleteById(spuId) {
  return request({
    url: '/xxw_shop_goods/m/spu',
    method: 'delete',
    params: {
      spuId
    }
  })
}
