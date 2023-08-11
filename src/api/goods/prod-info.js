import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_goods/m/spu/page',
    method: 'get',
    params: pageParam
  })
}

export function getProdInfoPage(spuId) {
  return request({
    url: '/xxw_shop_goods/admin/spu',
    method: 'get',
    params: {
      spuId
    }
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

export function getAttrsByCategoryId(param) {
  return request({
    url: '/xxw_shop_goods/admin/attr/get_attrs_by_category_id',
    method: 'get',
    params: param
  })
}
