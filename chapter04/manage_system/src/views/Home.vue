<script setup>
import MyHeader from '../components/MyHeader.vue'
import MyAside from '../components/MyAside.vue'
</script>

<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <my-header></my-header>
    <!-- 主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏区域 -->
      <my-aside></my-aside>
      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <!-- 路由的视图 -->
        <router-view></router-view>
      </div>
    </div>
    <!-- 尾部区域 -->
    <div class="footer">
      <p>食品入库管理系统 © 2023</p>
    </div>
  </div>
</template>

<style lang="less">
.home-container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .home-main-box {
    flex: 1;
    display: flex;
    overflow: hidden;

    .home-main-body {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
  }

  .footer {
    background-color: #5f9ea0;
    color: white;
    text-align: center;
    padding: 10px 0;
  }
}
</style>