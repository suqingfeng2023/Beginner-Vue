<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const onLogin = () => {
    if (username.value === 'admin' && password.value === '123456') {
        router.push('/home')
        return localStorage.setItem('token', 'Bearer xxx')
    } else {
        alert('用户名或密码输入错误')
        localStorage.removeItem('token')
    }
}
</script>


<template>
    <div class="login-container">
        <div class="login-box">
            <!-- 头像区域 -->
            <div class="avatar-box">
                <img class="avatar"
                height="100px"
                width="100px"
                src="../assets/logo.png" />
            </div>
            <!-- 表单区域 -->
            <div class="form-login">
                <!-- 登录名称 -->
                <div class="form-group">
                    <label for="username">登录名称: </label>
                    <input type="text" class="form-control" id="username" placeholder="请输入登录名称" autocomplete="off"
                        v-model.trim="username" />
                </div>
                <!-- 登录密码 -->
                <div class="form-group">
                    <label for="password">登录密码: </label>
                    <input type="password" class="form-control" id="password" placeholder="请输入登录密码"
                        v-model.trim="password" />
                </div>
                <!-- 登录按钮 -->
                <div class="form-group">
                    <button type="button" class="btn" @click="onLogin">登录</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* 添加你的样式 */
</style>