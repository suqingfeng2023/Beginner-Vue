
import request from "../utils/request";


// 获取食物列表
export const getAllFood = () => {
    return request.get("foods");
}

// 新增食物
export const addFood = (data) => {
    return request.post("addFood", data);
}

// 根据ID获取食物
export const getFoodById = (id) => {
  return request.get(`/foods/${id}`)
}

// 删除食物
export const deleteFoodById = (id) => {
  return request.delete(`/foods/${id}`)
}