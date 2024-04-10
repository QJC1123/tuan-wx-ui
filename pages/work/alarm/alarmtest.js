import request from '@/utils/request'




// 告警测试信息
export function listAllTestAlarms(id) {
  return request({
    url: '/alarm/alarmtestgetalarms/'+id,
    method: 'get',
	params:query,
  })
}



// 获取图片地址
export function getrtsppic(cameraid) {
  return request({
	url:'/camera/alarmtestimg/'+ cameraid,
    method: 'get',
  })
}

// 告警测试使用，传入rtspurl，保存为一张图像保存进camera数据
// 新增
export function savecamera(data) {
  return request({
    url: 'camera/alarmtestrtsp',
    method: 'post',
    data: data,
  })
}



