import request from '@/utils/request'

// 查询告警通知配置列表
export function listRule(query) {
  return request({
    url: '/alarm/rule/list',
    method: 'get',
    params: query,
		baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 查询告警通知配置详细
export function getRule(id) {
  return request({
    url: '/alarm/rule/' + id,
    method: 'get',
		baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 新增告警通知配置
export function addRule(data) {
  return request({
    url: '/alarm/rule',
    method: 'post',
    data: data,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 修改告警通知配置
export function updateRule(data) {
  return request({
    url: '/alarm/rule',
    method: 'put',
    data: data,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 删除告警通知配置
export function delRule(id) {
  return request({
    url: '/alarm/rule/' + id,
    method: 'delete',
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}

// 导出告警通知配置
export function exportRule(query) {
  return request({
    url: '/alarm/rule/export',
    method: 'get',
    params: query,
	// baseURL: process.env.VUE_APP_BASE_API3
  })
}