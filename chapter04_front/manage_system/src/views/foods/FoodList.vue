<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAllFood } from '../../api/food'
import { ElMessage, ElMessageBox } from 'element-plus'
import { deleteFoodById } from '../../api/food'


const router = useRouter()
const foodList = ref([])
const loading = ref(false)

// 获取食品列表
const loadFoods = async () => {
    try {
        loading.value = true
        const result = await getAllFood()
        if (result.code) {
            foodList.value = result.data
        }
    } catch (error) {
        ElMessage.error('获取食品列表失败')
    } finally {
        loading.value = false
    }
}

const indexMethod = (index) => {
    return index + 1
}

// 查看食品详情(点评)
const showReview = (id) => {
    router.push(`/foods/${id}`)
}

// 删除食品
const deleteFood = (id) => {
    ElMessageBox.confirm('确定要删除该食品吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        try {
            const result = await deleteFoodById(id)
            ElMessage.success('删除成功')
            loadFoods() // 重新加载列表
        } catch (error) {
            ElMessage.error('删除失败')
        }
    }).catch(() => {
        ElMessage.info('已取消删除')
    })
}

// 初始化加载
onMounted(() => {
    loadFoods()
})
</script>

<template>
    <el-card shadow="hover">
        <template #header>
            <h3>食品入库表</h3>
            <el-button type="primary" @click="router.push('/addFood')" icon="Plus">
                添加食品
            </el-button>
        </template>

        <el-table :data="foodList" v-loading="loading" stripe style="width: 100%" :fit="true">
            <el-table-column prop="id" label="ID" width="120" align="center" type="index" :index="indexMethod" />
            <el-table-column prop="name" label="食品名称" width="250" align="center" />
            <el-table-column prop="price" label="价格" width="180" align="center">
                <template #default="{ row }">
                    ¥{{ row.price.toFixed(2) }}
                </template>
            </el-table-column>
            <el-table-column label="操作" width="300" align="center">
                <template #default="{ row }">
                    <el-button type="primary" size="small" @click="showReview(row.id)" icon="Edit">
                        客户点评
                    </el-button>
                    <el-button type="danger" size="small" @click="deleteFood(row.id)" icon="Delete">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<style scoped>
.food-list-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.el-table {
    margin-top: 15px;
}

.el-button+.el-button {
    margin-left: 10px;
}
</style>