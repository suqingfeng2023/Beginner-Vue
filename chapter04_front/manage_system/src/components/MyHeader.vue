<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>

<template>
    <div class="layout-header-container">
        <div class="layout-header-left">
            <img class="layout-header-left-img" src="../assets/logo.png" alt="">
            <h4 class="layout-header-left-title">食品入库表</h4>
        </div>
        <div class="layout-header-right">
            <button type="button" class="btn btn-light" @click="onLogout">退出</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.layout-header-container {
  height: 60px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  background-color: #5f9ea0;
  .layout-header-left{
    display: flex;
    align-items: center;
    color: #fff;
  }
}

.layout-header-left-img {
  height: 50px;
}
.layout-header-right{
  .btn{
   background-color: #5f9ea0;
   color: #fff;
  }
  .btn:hover{
    color: #999;
    opacity: 0.5;
    background-color: #fff;
  }
}
</style>