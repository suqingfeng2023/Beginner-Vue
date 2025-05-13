<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '../../utils/request'
import { ElMessage } from 'element-plus'

const router = useRouter()
const form = ref({
    name: '',
    price: '',
    review: ''
})

const rules = ref({
    name: [
        { required: true, message: '请输入食品名称', trigger: 'blur' },
        { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
    ],
    price: [
        { required: true, message: '请输入价格', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value <= 0) {
                    callback(new Error('价格必须大于0'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ]
})

const loading = ref(false)

const addFood = async () => {
    try {
        loading.value = true
        await request.post('/addFood', {
            name: form.value.name,
            price: Number(form.value.price),
            review: form.value.review
        })

        ElMessage.success('添加成功')
        router.push('/foods') // 添加成功后跳转到列表页
    } catch (error) {
        ElMessage.error('添加失败: ' + (error.response?.data?.msg || error.message))
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="add-food-container">
        <el-card shadow="hover" class="form-card">
            <template #header>
                <h3 class="form-title">添加食品</h3>
            </template>

            <el-form :model="form" :rules="rules" label-width="120px" label-position="top">
                <el-form-item label="食品名称" prop="name">
                    <el-input v-model="form.name" placeholder="请输入食品名称" clearable />
                </el-form-item>

                <el-form-item label="价格" prop="price">
                    <el-input v-model.number="form.price" placeholder="请输入价格" type="number" clearable>
                        <template #append>元</template>
                    </el-input>
                </el-form-item>

                <el-form-item label="好评意见">
                    <el-input v-model="form.review" type="textarea" :rows="4" placeholder="请输入好评意见" maxlength="200"
                        show-word-limit />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="addFood" :loading="loading">
                        提交
                    </el-button>
                    <el-button @click="router.push('/foods')">
                        返回
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style scoped>
.add-food-container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
}

.form-card {
    padding: 20px;
}

.form-title {
    margin: 0;
    color: #333;
    text-align: center;
}

.el-form {
    margin-top: 20px;
}

.el-textarea {
    width: 100%;
}

.el-button+.el-button {
    margin-left: 12px;
}
</style>