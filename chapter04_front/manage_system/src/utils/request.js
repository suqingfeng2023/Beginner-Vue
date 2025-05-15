import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例对象
const request = axios.create({
    baseURL: '/api',
    timeout: 600000
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        const loginUser = JSON.parse(localStorage.getItem('loginUser'))
        if (loginUser && loginUser.token) {
            config.headers.token = loginUser.token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.code === 1) {
            return res
        } else {
            return Promise.reject(res.msg || '操作失败')  // 不显示，直接 reject
        }
    },
    (error) => {
        return Promise.reject(error.response?.data?.msg || error.message)  // 不显示
    }
)

export default request