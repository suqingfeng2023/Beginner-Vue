<script setup>
// 运⾏ vue3-node-server 项⽬, 进⼊根⽬录: 
// 1. 安装依赖: npm i
// 2. 启动服务: npm run start
// 接⼝地址：http://localhost:4000/api/news
// 请求⽅式：get
// 请求参数：⽆ 

// 导入axios
import axios from "axios";
// 导入ref
import { ref } from "vue";
// 导入onMounted
import { onMounted } from "vue";
// 定义新闻列表数据
const newsList = ref([]);
// 获取新闻列表数据
async function getNewsList() {
  // 发送请求
  const resp = await axios({
    //1. url
    url: "http://localhost:4000/api/news",
    //2. 请求方式
    method: "GET"
  })
  // 保存数据
  newsList.value = resp.data.data;
}

// 在组件挂载时获取数据
onMounted(() => {
  getNewsList();
});
</script>

<template>
  <ul>
    <li class="news" v-for="item in newsList" :key="item.id">
      <div class="left">
        <div class="title">{{ item.title }}</div>
        <div class="info">
          <span>{{ item.source }}</span>
          <span>{{ item.time }}</span>
        </div>
      </div>
      <div class="right">
        <img :src="item.img" alt="img" />
      </div>
    </li>

  </ul>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}

.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}

.news .left .title {
  font-size: 20px;
}

.news .left .info {
  color: #999999;
}

.news .left .info span {
  margin-right: 20px;
}

.news .right {
  width: 160px;
  height: 120px;
}

.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
