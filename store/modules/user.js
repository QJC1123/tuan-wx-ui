import config from '@/config'
import storage from '@/utils/storage'
import constant from '@/utils/constant'
import { login, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const baseUrl = config.baseUrl

const user = {
  state: {
    token: getToken(),
    name: storage.get(constant.name),
    avatar: storage.get(constant.avatar),
    roles: storage.get(constant.roles),
    permissions: storage.get(constant.permissions)
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
      storage.set(constant.name, name)
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
      storage.set(constant.avatar, avatar)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      storage.set(constant.roles, roles)
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
      storage.set(constant.permissions, permissions)
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      // const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password, code).then(res => {
          setToken(res.data.token)
          commit('SET_TOKEN', res.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
	

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          const user = res.data.user
		  const avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
         // const avatar = (user == null || user.avatar == "" || user.avatar == null) ? require("@/static/images/profile.jpg") : baseUrl + user.avatar
          //const username = (user == null || user.userName == "" || user.userName == null) ? "" : user.userName
          
		  if(res.data.roleId == 1){
		  	let roles = ["admin"]
		  	commit('SET_ROLES', roles)
			// commit('SET_PERMISSIONS', res.permissions)
		  }else{
		  	commit('SET_ROLES', ['ROLE_DEFAULT'])
		  }
		  commit('SET_NAME', user.userName)
		  commit('SET_AVATAR', avatar)
		  resolve(res)
		  
        }).catch(error => {
          reject(error)
        })
      })
    },
	
	
	
	// 获取用户信息
	//     GetInfo({ commit, state }) {
	//       return new Promise((resolve, reject) => {
	//         getInfo(state.token).then(res => {
	// 			const user = res.data.user
	// 			const avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
	// 			if(res.data.roleId == 1){
	// 				let roles = ["admin"]
	// 				commit('SET_ROLES', roles)
	// 			}else{
	// 				commit('SET_ROLES', ['ROLE_DEFAULT'])
	// 			}
	// 			commit('SET_NAME', user.userName)
	// 			commit('SET_AVATAR', avatar)
	// 			resolve(res)
	//         }).catch(error => {
	//           reject(error)
	//         })
	//       })
	//     },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
		ommit('SET_TOKEN', '')
		commit('SET_ROLES', [])
		commit('SET_PERMISSIONS', [])
		removeToken()
		storage.clean()
		resolve()
		  
		  
        // logout(state.token).then(() => {
        //   commit('SET_TOKEN', '')
        //   commit('SET_ROLES', [])
        //   commit('SET_PERMISSIONS', [])
        //   removeToken()
        //   storage.clean()
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    }
  }
}

export default user



// import { login, getInfo } from '@/api/login'
// import { getToken, setToken, removeToken } from '@/utils/auth'

// const user = {
//   state: {
//     token: getToken(),
//     name: '',
//     avatar: '',
//     roles: [],
//     permissions: []
//   },

//   mutations: {
//     SET_TOKEN: (state, token) => {
//       state.token = token
//     },
//     SET_NAME: (state, name) => {
//       state.name = name
//     },
//     SET_AVATAR: (state, avatar) => {
//       state.avatar = avatar
//     },
//     SET_ROLES: (state, roles) => {
//       state.roles = roles
//     },
//     SET_PERMISSIONS: (state, permissions) => {
//       state.permissions = permissions
//     }
//   },

//   actions: {
//     // 登录
//     Login({ commit }, userInfo) {
//       const username = userInfo.username.trim()
//       const password = userInfo.password
//       const code = userInfo.code
//       return new Promise((resolve, reject) => {
//         login(username, password, code).then(res => {
//           setToken(res.data.token)
//           commit('SET_TOKEN', res.data.token)
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 获取用户信息
//     GetInfo({ commit, state }) {
//       return new Promise((resolve, reject) => {
//         getInfo(state.token).then(res => {
// 			const user = res.data.user
// 			const avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
// 			if(res.data.roleId == 1){
// 				let roles = ["admin"]
// 				commit('SET_ROLES', roles)
// 			}else{
// 				commit('SET_ROLES', ['ROLE_DEFAULT'])
// 			}
// 			commit('SET_NAME', user.userName)
// 			commit('SET_AVATAR', avatar)
// 			resolve(res)
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },
    
//     // 退出系统
//     LogOut({ commit, state }) {
//       return new Promise((resolve, reject) => {
// 		commit('SET_TOKEN', '')
// 		commit('SET_ROLES', [])
// 		commit('SET_PERMISSIONS', [])
// 		removeToken()
// 		resolve()
		  
		  
		  
		  
//         logout(state.token).then(() => {
//           commit('SET_TOKEN', '')
//           commit('SET_ROLES', [])
//           commit('SET_PERMISSIONS', [])
//           removeToken()
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },

//     // 前端 登出
//     FedLogOut({ commit }) {
//       return new Promise(resolve => {
//         commit('SET_TOKEN', '')
//         removeToken()
//         resolve()
//       })
//     }
//   }
// }

// export default user
