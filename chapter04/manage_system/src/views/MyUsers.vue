<script setup>
const userlist = [
    { id: '1', name: '小明', level: '一级客户' },
    { id: '2', name: '小红', level: '二级客户' },
    { id: '3', name: '小兰', level: '三级客户' },
    { id: '4', name: '小芳', level: '四级客户' }
]
</script>

<template>
    <h4 class="text-center">用户管理</h4>
    <!-- 用户列表 -->
    <table border style="width: 100%">
        <thead>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>等级</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in userlist" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.level }}</td>
                <td>
                    <router-link :to="'/home/users/' + item.id">详情</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
/* 添加你的样式 */
</style>