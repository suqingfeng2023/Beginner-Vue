<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFoodById } from '../../api/food'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const foodDetail = ref({})
const loading = ref(false)

// 获取食品详情
const loadFoodDetail = async () => {
    try {
        loading.value = true
        const result = await getFoodById(route.params.id)
        if (result.code) {
            foodDetail.value = result.data
        }
    } catch (error) {
        ElMessage.error('获取食品详情失败')
    } finally {
        loading.value = false
    }
}

// 返回食品列表
const goBack = () => {
    router.push('/foods')
}

// 初始化加载
onMounted(() => {
    loadFoodDetail()
})
</script>

<template>
    <div class="food-detail-container">
        <el-card shadow="hover">
            <template #header>
                <div class="card-header">
                    <h3>食品点评详情</h3>
                    <el-button @click="goBack">返回</el-button>
                </div>
            </template>

            <div v-loading="loading" class="detail-content">
                <el-descriptions :column="1" border>
                    <el-descriptions-item label="食品名称">{{ foodDetail.name }}</el-descriptions-item>
                    <el-descriptions-item label="价格">¥{{ foodDetail.price }}</el-descriptions-item>
                    <el-descriptions-item label="客户点评">
                        <div class="review-content">
                            {{ foodDetail.review || '暂无点评' }}
                        </div>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.food-detail-container {
    padding: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.detail-content {
    padding: 20px;
}

.review-content {
    white-space: pre-line;
    line-height: 1.6;
}
</style>