import request from '@/utils/request'

export function page(pageParam) {
  return request({
    url: '/xxw_shop_search/c/search/page',
    method: 'get',
    params: pageParam
  })
}

export function get(spuId) {
  return request({
    url: '/xxw_shop_goods/admin/spu',
    method: 'get',
    params: {
      spuId
    }
  })
}

// 删除
export function deleteById(spuId) {
  return request({
    url: '/xxw_shop_goods/admin/spu',
    method: 'delete',
    params: {
      spuId
    }
  })
}

export function updateProdStatus(data) {
  return request({
    url: '/xxw_shop_goods/b/spu/prod_status',
    method: 'put',
    data
  })
}

export function updatePartProdStatus(data) {
  return request({
    url: '/xxw_shop_goods/b/spu/update_spu_data',
    method: 'put',
    data
  })
}

// 下线活动
export function onOrOffTheShelf(data) {
  return request({
    url: '/xxw_shop_goods/admin/goods_offline_handle_event/offline',
    method: 'POST',
    data
  })
}

// 获取下线活动最新详情
export function getOfflineDetailByProdId(prodId) {
  return request({
    url: `/xxw_shop_goods/admin/goods_offline_handle_event/get_offline_handle_event_by_prodId/${prodId}`,
    method: 'GET'
  })
}

// 审核
export function examineProdOnShelfApply(data) {
  return request({
    url: '/xxw_shop_goods/admin/goods_offline_handle_event/spu_audit',
    method: 'POST',
    data
  })
}
