import request from "../utils/request";

// 获取用户信息
export const getUserInfo = () => request.get('userInfo');

// 更新密码
export const updatePassword = (data) => request.post('updatePassword', data);