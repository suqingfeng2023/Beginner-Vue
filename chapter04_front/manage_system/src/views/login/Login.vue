<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '../../api/login'
import { ElMessage } from 'element-plus'

const router = useRouter()

// 表单数据
const form = ref({
    username: '',
    password: ''
})

// 表单验证规则
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 20, message: '用户名长度在3到20个字符之间', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度在6到20个字符之间', trigger: 'blur' }
    ]
}

// 加载状态
const loading = ref(false)

// 登录方法
const onLogin = async () => {
    try {
        loading.value = true

        // 调用API登录
        const result = await loginApi(form.value)
        
        if (result.code) {
            ElMessage.success('登录成功')
            // 处理用户数据
            localStorage.setItem('loginUser', JSON.stringify(result.data))

            // 跳转到首页
            router.push('/index')
        } else {
            ElMessage.error(result.msg || '登录失败，请重试')
        }
    } catch (error) {
        console.error('登录出错:', error)
        ElMessage.error('登录失败，请检查网络或联系管理员')
    } finally {
        loading.value = false
    }
}

// 处理回车键登录
const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
        onLogin()
    }
}
</script>

<template>
    <div class="login-container">
        <div class="login-box">
            <!-- 头像区域 -->
            <div class="avatar-box">
                <img class="avatar" src="../../assets/logo.png" alt="Logo" />
            </div>

            <!-- 表单区域 -->
            <div class="form-login">
                <h2 class="login-title">系统登录</h2>

                <!-- 用户名输入 -->
                <div class="form-group">
                    <input type="text" class="form-control" id="username" placeholder="请输入用户名" autocomplete="username"
                        v-model.trim="form.username" @keyup="handleKeyUp" />
                    <label for="username">用户名</label>
                </div>

                <!-- 密码输入 -->
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="请输入密码"
                        autocomplete="current-password" v-model.trim="form.password" @keyup="handleKeyUp" />
                    <label for="password">密码</label>
                </div>

                <!-- 登录按钮 -->
                <div class="form-group">
                    <button type="button" class="btn" @click="onLogin" :disabled="loading">
                        <span v-if="loading">登录中...</span>
                        <span v-else>登 录</span>
                    </button>
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
    animation: fadeIn 0.5s ease;
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
    transition: transform 0.3s ease;
}

.avatar:hover {
    transform: scale(1.05);
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
    z-index: 1;
}

.form-control {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: all 0.3s;
    position: relative;
    z-index: 0;
    background-color: transparent;
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
    position: relative;
    overflow: hidden;
}

.btn:hover:not(:disabled) {
    background: linear-gradient(to right, #5a6fd1, #6a4295);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn:active:not(:disabled) {
    transform: translateY(0);
}

.btn:disabled {
    background: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>