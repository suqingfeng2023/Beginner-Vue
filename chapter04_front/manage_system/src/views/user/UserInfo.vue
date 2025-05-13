<script setup>
import { ref, onMounted } from 'vue'
import request from '../../utils/request'
import { getUserInfo } from '../../api/user'
import { ElMessage } from 'element-plus'

const userInfo = ref({
    id: null,
    username: '',
    password: ''
})

const loading = ref(false)
const showPassword = ref(false) // 控制密码是否明文显示

// 获取用户信息
const loadUserInfo = async () => {
    try {
        loading.value = true
        const response = await getUserInfo();

        if (response.code === 1) {
            userInfo.value = response.data
        } else {
            ElMessage.error(response.msg || '获取用户信息失败')
        }
    } catch (error) {
        console.error('获取用户信息出错:', error)
        ElMessage.error('获取用户信息失败，请检查网络')
    } finally {
        loading.value = false
    }
}

// 切换密码显示状态
const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}

// 初始化加载
onMounted(() => {
    loadUserInfo()
})
</script>

<template>
    <div class="user-info-container">
        <el-card shadow="hover" v-loading="loading">
            <template #header>
                <div class="card-header">
                    <h3>用户信息</h3>
                    <el-button type="primary" size="small" @click="loadUserInfo">
                        刷新信息
                    </el-button>
                </div>
            </template>

            <el-descriptions :column="1" border>
                <el-descriptions-item label="用户ID">
                    <el-tag>{{ userInfo.id }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="用户名">
                    <el-tag>{{ userInfo.username }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="密码">
                    <div class="password-display">
                        <el-tag type="danger">
                            {{ showPassword ? userInfo.password : '••••••••' }}
                        </el-tag>
                        <el-button size="small" @click="togglePasswordVisibility" style="margin-left: 10px">
                            {{ showPassword ? '隐藏密码' : '显示密码' }}
                        </el-button>
                    </div>
                    <el-text type="warning" style="display: block; margin-top: 8px">
                        (安全提示：请勿在公共场所显示密码)
                    </el-text>
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
    </div>
</template>

<style scoped>
.user-info-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-descriptions {
    margin-top: 20px;
}

.el-tag {
    font-size: 16px;
    padding: 0 10px;
}

.password-display {
    display: flex;
    align-items: center;
}
</style>