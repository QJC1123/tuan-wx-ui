import { getToken } from '@/utils/auth'

// 登录页面
const loginPage = "/pages/login"
  
// 页面白名单
// const whiteList = [
  
// ]
 
// 页面白名单
const whiteList = [
	'/pages/login',
	 '/pages/common/webview/index',
	 '/pages/index',
	 '/pages/work/index',
	 '/pages/work/riskreport',
	 '/pages/work/alarm/index',
	 '/pages/work/alarm/detail',
	 '/pages/work/alarm/record',
	 '/pages/work/visit/index',
	 '/pages/work/visit/detail',
	 '/pages/work/visit/report',
	 '/pages/work/device/index',
	 '/pages/work/device/detail',
	 '/pages/work/device/report',
	 '/pages/work/dorm/index',
	 '/pages/work/duty/index',
	 '/pages/mine/index',
	 '/pages/mine/avatar/index',
	 '/pages/mine/info/index',
	 '/pages/mine/info/edit',
	 '/pages/mine/pwd/edit',
	 '/pages/mine/setting/index',
	 '/pages/mine/setting/index',
	 '/pages/mine/help/index',
	 '/pages/mine/about/index',
	 '/pages/common/webview/index',
	 '/pages/common/textview/index',
	 
	 
	 
	 
	 
	 
	 
  // 'pages/login',
  //  'pages/common/webview/index',
  //  'pages/index',
  //  'pages/work/index',
  //  'pages/work/riskreport',
  //  'pages/work/alarm/index',
  //  'pages/work/alarm/detail',
  //  'pages/work/alarm/record',
  //  'pages/work/visit/index',
  //  'pages/work/visit/detail',
  //  'pages/work/visit/report',
  //  'pages/work/device/index',
  //  'pages/work/device/detail',
  //  'pages/work/device/report',
  //  'pages/mine/index',
  //  'pages/mine/avatar/index',
  //  'pages/mine/info/index',
  //  'pages/mine/info/edit',
  //  'pages/mine/pwd/edit',
  //  'pages/mine/setting/index',
  //  'pages/mine/setting/index',
  //  'pages/mine/help/index',
  //  'pages/mine/about/index',
  //  'pages/common/webview/index',
  //  'pages/common/textview/index',

]






// 检查地址白名单
function checkWhite(url) {
  const path = url.split('?')[0]
  return whiteList.indexOf(path) !== -1
  
  
  
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
list.forEach(item => {
  uni.addInterceptor(item, {
    invoke(to) {
		
		
		
      if (getToken()) {
        if (to.url === loginPage) {
          uni.reLaunch({ url: "/" })
        }
        return true
      } else {
        if (checkWhite(to.url)) {
          return true
        }
        uni.reLaunch({ url: loginPage })
        return false
      }
    },
    fail(err) {
      console.log(err)
    }
  })
})
