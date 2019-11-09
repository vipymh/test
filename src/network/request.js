import axios from 'axios'

// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		// 1.创建实例
// 		const instance = axios.create({
// 			baseURL: 'http://123.207.32.32:8000',
// 			timeout: 5000
// 		})
// 		//发送网络请求
// 		instance(config)
// 			.then(res => {
// 				resolve(res)
// 			})
// 			.catch(err => {
// 				reject(err)
// 			})
// 	})
// }


export function request(config) {
	// 1.创建实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	// 2.拦截器
	instance.interceptors.request.use(config => {
		window.console.log(config)
		return config
	}, err => {
		window.console.log(err)
		return err
	});//请求拦截
	
	
	instance.interceptors.response;//响应拦截
	
	// 3.发送网络请求
return instance(config)
}
