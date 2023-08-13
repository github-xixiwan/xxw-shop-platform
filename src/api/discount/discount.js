import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_discount/b/discount/page',
    method: 'get',
    params: pageParam
  })
}

export function get(discountId) {
  return request({
    url: `/xxw_shop_discount/b/discount/info/${discountId}`,
    method: 'get',
    params: {
    }
  })
}

export function save(data) {
  return request({
    url: '/xxw_shop_discount/b/discount',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/xxw_shop_discount/b/discount',
    method: 'put',
    data
  })
}

export function deleteById(discountId) {
  return request({
    url: `/xxw_shop_discount/b/discount/${discountId}`,
    method: 'delete',
    params: {
    }
  })
}
