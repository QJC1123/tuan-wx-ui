import request from '@/utils/request'







// 统一告警信息类
export function listAllAlarms(pn,pagesize,query) {
  return request({
    url: '/alarm/getAllAlarms/'+pn+'/'+pagesize,
    method: 'get',
	params:query,
  })
}



// 学校分页查询
export function listEventby(pn,pagesize) {
  return request({
    url: '/alarm/bycondition/'+pn+'/'+pagesize,
    method: 'get',
  })
}

// 学校分页模糊查询
export function listEventbypr(pn,pagesize,query) {
  return request({
    url: '/alarm/bycondition/'+pn+'/'+pagesize,
    method: 'get',
	params:query,
  })
}

// 分页查询
export function listEvent(pn,pagesize) {
  return request({
    url: '/alarm/'+pn+'/'+pagesize,
    method: 'get',
  })
}

// 查询详细
export function getAlarmdetail(id) {
  return request({
    url: '/alarm/' + id,
    method: 'get',
  })
}

// 新增
export function addEvent(data) {
  return request({
    url: '/alarm',
    method: 'post',
    data: data,
  })
}

// 修改
export function updateEvent(id,data) {
  return request({
    url: '/alarm/'+id,
    method: 'put',
    data: data,
  })
}

// 删除
export function delEvent(id) {
  return request({
    url: '/alarm/' + id,
    method: 'delete',
	// baseURL: process.env.VUE_APP_BASE_API2
  })
}
