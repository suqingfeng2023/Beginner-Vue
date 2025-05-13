<script setup>

</script>

<template>
  <div>
    <h1>音乐播放器</h1>
    <div class="nav">
      <router-link to="/find">发现音乐</router-link>
      <router-link :to="{
        path:'/friend',
        query:{
          id:123
        }
      }">朋友</router-link>
      <router-link to="/my">我的音乐</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>



<style scoped>
  .nav {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
</style>