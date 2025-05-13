<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const onLogin = () => {
    if (username.value === '503' && password.value === '4503') {
        localStorage.setItem('token', 'Bearer xxx')
        localStorage.setItem('username', username.value)
        router.push('/home')
    } else {
        alert('用户名或密码输入错误')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }
}
</script>

<template>
    <div class="login-container">
        <div class="login-box">
            <!-- 头像区域 -->
            <div class="avatar-box">
                <img class="avatar" src="../assets/logo.png" alt="Logo" />
            </div>
            <!-- 表单区域 -->
            <div class="form-login">
                <h2 class="login-title">系统登录</h2>
                <!-- 登录名称 -->
                <div class="form-group">
                    <input type="text" class="form-control" id="username" placeholder="请输入用户名" autocomplete="off"
                        v-model.trim="username" />
                    <label for="username">用户名</label>
                </div>
                <!-- 登录密码 -->
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="请输入密码"
                        v-model.trim="password" @keyup.enter="onLogin" />
                    <label for="password">密码</label>
                </div>
                <!-- 登录按钮 -->
                <div class="form-group">
                    <button type="button" class="btn" @click="onLogin">登 录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
}

.login-box {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 40px 30px;
}

.avatar-box {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f8f9fa;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.login-title {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
    font-weight: 600;
}

.form-group {
    position: relative;
    margin-bottom: 25px;
}

.form-group label {
    position: absolute;
    top: -10px;
    left: 10px;
    background: white;
    padding: 0 5px;
    font-size: 14px;
    color: #666;
    transition: all 0.3s;
}

.form-control {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.3s;
}

.form-control:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    outline: none;
}

.btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #667eea, #764ba2);
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn:hover {
    background: linear-gradient(to right, #5a6fd1, #6a4295);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn:active {
    transform: translateY(0);
}
</style>