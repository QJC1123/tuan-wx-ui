import request from '@/utils/request'

// 查询隐患排查列表
export function listEvent(query) {
  return request({
    url: '/task/event/list',
    method: 'get',
    params: query
  })
}

// 查询隐患排查详细
export function getEvent(id) {
  return request({
    url: '/task/event/' + id,
    method: 'get'
  })
}

// 新增隐患排查
export function addEvent(data) {
  return request({
    url: '/task/event',
    method: 'post',
    data: data
  })
}

// 修改隐患排查
export function updateEvent(data) {
  return request({
    url: '/tuan-task/event',
    method: 'put',
    data: data
  })
}

// 删除隐患排查
export function delEvent(id) {
  return request({
    url: '/task/event/' + id,
    method: 'delete'
  })
}

// 导出隐患排查
export function exportEvent(query) {
  return request({
    url: '/task/event/export',
    method: 'get',
    params: query
  })
}