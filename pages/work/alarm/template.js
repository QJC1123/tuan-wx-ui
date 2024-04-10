import request from '@/utils/request'

// 查询告警通知模板列表
export function listTemplate(query) {
  return request({
    url: '/alarm/template/list',
    method: 'get',
    params: query
  })
}

// 查询告警通知模板详细
export function getTemplate(id) {
  return request({
    url: '/alarm/template/' + id,
    method: 'get'
  })
}

// 新增告警通知模板
export function addTemplate(data) {
  return request({
    url: '/alarm/template',
    method: 'post',
    data: data
  })
}

// 修改告警通知模板
export function updateTemplate(data) {
  return request({
    url: '/alarm/template',
    method: 'put',
    data: data
  })
}

// 删除告警通知模板
export function delTemplate(id) {
  return request({
    url: '/alarm/template/' + id,
    method: 'delete'
  })
}

// 导出告警通知模板
export function exportTemplate(query) {
  return request({
    url: '/alarm/template/export',
    method: 'get',
    params: query
  })
}