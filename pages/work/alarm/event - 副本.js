import request from '@/utils/request'

// 查询告警事件列表
export function listEvent(query) {
  return request({
    url: '/alarm/event/list',
    method: 'get',
    params: query,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 查询告警事件详细
export function getEvent(id) {
  return request({
    url: '/alarm/event/' + id,
    method: 'get',
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 新增告警事件
export function addEvent(data) {
  return request({
    url: '/tuan-alarm/event',
    method: 'post',
    data: data,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 修改告警事件
export function updateEvent(data) {
  return request({
    url: '/alarm/event',
    method: 'put',
    data: data,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 删除告警事件
export function delEvent(id) {
  return request({
    url: '/alarm/event/' + id,
    method: 'delete',
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 导出告警事件
export function exportEvent(query) {
  return request({
    url: '/alarm/event/export',
    method: 'get',
    params: query,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}