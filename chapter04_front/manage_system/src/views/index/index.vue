<script setup>
import { useRouter } from 'vue-router'
import { Promotion, User, Food, InfoFilled } from '@element-plus/icons-vue'

const router = useRouter()

// 导航到不同页面
const navigateTo = (path) => {
    router.push(path)
}
</script>

<template>
    <div class="index-container">
        <el-card shadow="hover" class="welcome-card">
            <template #header>
                <div class="card-header">
                    <h2>欢迎使用食品管理系统</h2>
                </div>
            </template>
            <div class="welcome-content">
                <el-text type="info">请选择您要操作的功能模块</el-text>
            </div>
        </el-card>

        <div class="feature-cards">
            <el-card shadow="hover" class="feature-card" @click="navigateTo('/foods')">
                <div class="card-content">
                    <el-icon :size="60" color="#409EFF">
                        <Food />
                    </el-icon>
                    <h3>食品管理</h3>
                    <el-text type="info">查看和管理所有食品信息</el-text>
                </div>
            </el-card>

            <el-card shadow="hover" class="feature-card" @click="navigateTo('/addFood')">
                <div class="card-content">
                    <el-icon :size="60" color="#67C23A">
                        <Promotion />
                    </el-icon>
                    <h3>添加食品</h3>
                    <el-text type="info">向系统中添加新的食品</el-text>
                </div>
            </el-card>

            <el-card shadow="hover" class="feature-card" @click="navigateTo('/user')">
                <div class="card-content">
                    <el-icon :size="60" color="#E6A23C">
                        <User />
                    </el-icon>
                    <h3>用户信息</h3>
                    <el-text type="info">查看和修改您的账户信息</el-text>
                </div>
            </el-card>
        </div>

        <el-card shadow="hover" class="quick-actions">
            <template #header>
                <div class="card-header">
                    <h3>快捷操作</h3>
                </div>
            </template>
            <div class="action-buttons">
                <el-button type="primary" @click="navigateTo('/foods')" :icon="Food">
                    查看食品列表
                </el-button>
                <el-button type="success" @click="navigateTo('/addFood')" :icon="Promotion">
                    添加新食品
                </el-button>
                <el-button type="warning" @click="navigateTo('/user')" :icon="User">
                    查看账户信息
                </el-button>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.index-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.welcome-card {
    margin-bottom: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.welcome-content {
    padding: 10px 0;
}

.feature-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
}

.feature-card {
    cursor: pointer;
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
}

.card-content h3 {
    margin: 15px 0 10px;
}

.quick-actions {
    margin-top: 20px;
}

.action-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .feature-cards {
        grid-template-columns: 1fr;
    }

    .action-buttons {
        flex-direction: column;
        gap: 10px;
    }

    .action-buttons .el-button {
        width: 100%;
    }
}
</style>