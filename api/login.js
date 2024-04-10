import request from '@/utils/request'

// 登录方法
export function login(username, password, code) {
  const data = {
    username,
    password,
    code
  }
  return request({
    url: '/system/login',
    method: 'post',
	// headers: {
	//   isToken: false
	// },
    data: data,
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/getInfo',
    method: 'get',
  })
}

// 退出方法
// export function logout() {
//   return request({
//     url: '/logout',
//     method: 'post',
//   })
// }

// // 获取验证码
// export function getCodeImg() {
//   return request({
//     url: '/system/getVerifiCodeImage',
//     method: 'get',
//   })
// }