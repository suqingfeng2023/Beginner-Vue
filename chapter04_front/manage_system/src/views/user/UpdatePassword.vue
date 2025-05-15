<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { updatePassword } from '../../api/user'

const router = useRouter()

// 表单数据
const passwordForm = ref({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})

// 提交表单
const submitForm = async () => {
    if (!passwordForm.value.oldPassword || !passwordForm.value.newPassword) {
        ElMessage.error('请填写完整信息')
        return
    }

    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
        ElMessage.error('两次输入的新密码不一致')
        return
    }

    try {
        const response = await updatePassword({
            oldPassword: passwordForm.value.oldPassword,
            newPassword: passwordForm.value.newPassword
        })

        // 成功时由组件显示消息
        ElMessage.success(response.msg || '密码修改成功，请重新登录')
        setTimeout(() => router.push('/login'), 1500)

    } catch (error) {
        // 拦截器已返回错误消息，直接显示
        ElMessage.error(error.message || '密码修改失败')
    }
}

// 重置表单
const resetForm = () => {
    passwordForm.value = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    }
}
</script>

<template>
    <div class="update-password-container">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>修改密码</span>
                </div>
            </template>

            <el-form :model="passwordForm" label-width="120px" class="password-form">
                <el-form-item label="原密码">
                    <el-input v-model="passwordForm.oldPassword" type="password" show-password
                        placeholder="请输入原密码"></el-input>
                </el-form-item>

                <el-form-item label="新密码">
                    <el-input v-model="passwordForm.newPassword" type="password" show-password
                        placeholder="请输入新密码"></el-input>
                </el-form-item>

                <el-form-item label="确认新密码">
                    <el-input v-model="passwordForm.confirmPassword" type="password" show-password
                        placeholder="请再次输入新密码"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style scoped>
.update-password-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px;
}

.box-card {
    width: 500px;
}

.card-header {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

.password-form {
    margin-top: 20px;
}
</style>