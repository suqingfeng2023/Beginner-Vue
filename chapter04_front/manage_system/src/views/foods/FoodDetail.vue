<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFoodById, updateFood } from '../../api/food'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const foodDetail = ref({})
const loading = ref(false)
const editDialogVisible = ref(false)
const formRef = ref(null)

// 表单验证规则
const rules = {
    name: [
        { required: true, message: '请输入食品名称', trigger: 'blur' }
    ],
    price: [
        { required: true, message: '请输入价格', trigger: 'blur' },
        { pattern: /^\d+(\.\d{1,2})?$/, message: '请输入正确的价格格式', trigger: 'blur' }
    ]
}

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

// 打开编辑对话框
const handleEdit = () => {
    editDialogVisible.value = true
}

// 提交编辑表单
const submitForm = async () => {
    try {
        await formRef.value.validate()
        loading.value = true
        const result = await updateFood(route.params.id, foodDetail.value)
        if (result.code) {
            ElMessage.success('更新成功')
            editDialogVisible.value = false
            loadFoodDetail() // 重新加载最新数据
        }
    } catch (error) {
        ElMessage.error('更新失败')
    } finally {
        loading.value = false
    }
}

// 重置表单
const resetForm = () => {
    formRef.value?.resetFields()
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
                    <el-button-group>
                        <el-button type="primary" @click="handleEdit">编辑</el-button>
                        <el-button @click="goBack">返回</el-button>
                    </el-button-group>
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

        <!-- 编辑对话框 -->
        <el-dialog v-model="editDialogVisible" title="编辑食品信息" width="50%">
            <el-form ref="formRef" :model="foodDetail" :rules="rules" label-width="100px" label-position="left">
                <el-form-item label="食品名称" prop="name">
                    <el-input v-model="foodDetail.name" placeholder="请输入食品名称" />
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="foodDetail.price" placeholder="请输入价格">
                        <template #prefix>¥</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="客户点评">
                    <el-input v-model="foodDetail.review" type="textarea" :rows="4" placeholder="请输入客户点评" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">保存</el-button>
            </template>
        </el-dialog>
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