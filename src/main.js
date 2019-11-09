import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')

// 全局的axios
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// 1.基本使用
// axios({
// 	//默认情况是get请求
// 	url:'http://123.207.32.32:8000/home/multidata',
// 	method:'get'
// }).then(res => {
// 	window.console.log(res);
// })

// axios({
// 	//默认情况是get请求
// 	url:'http://123.207.32.32:8000/home/data?type=sell&page=1',
// 	method:'get'
// }).then(res => {
// 	window.console.log(res);
// })

//2.并发请求
// axios.all([axios({
// 	url:'/home/multidata'
// }),axios({
// 	url:'/home/data?type=sell&page=1',
// })]).then(axios.spread((res1,res2) => {
// 		//window.console.log(results)
// 		window.console.log(res1)
// 		window.console.log(res2)
// }))

// 3.封装
import {request} from './network/request';

// request({
// 	url:'/home/multidata'
// },res => {
// 	window.console.log(res)
// },err => {
// 	window.console.log(err)
// })


request({
	url:'/home/multidata'
}).then(res =>{
	window.console.log(res)
}).catch(err =>{
	window.console.log(err)
})