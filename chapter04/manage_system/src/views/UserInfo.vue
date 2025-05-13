<script setup>
const userInfo = {
    username: localStorage.getItem('username') || '503',
    password: '****' // 实际应用中不应该显示密码
}
</script>

<template>
    <div class="user-info-container">
        <h3>用户信息</h3>
        <div class="info-box">
            <div class="info-item">
                <span class="label">用户名:</span>
                <span class="value">{{ userInfo.username }}</span>
            </div>
            <div class="info-item">
                <span class="label">密码:</span>
                <span class="value">{{ userInfo.password }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-info-container {
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
}

.info-box {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.info-item {
    margin-bottom: 15px;
    display: flex;
}

.label {
    font-weight: bold;
    width: 100px;
}

.value {
    flex: 1;
}
</style>